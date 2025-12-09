import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, CheckCircle, Mic, MapPin, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { Captcha } from '../components/Shared/Captcha';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { TRANSLATIONS } from '../constants';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

// --- Types ---
type Step = 1 | 2 | 3;
interface BookingForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  issue: string;
  isHuman: boolean;
  coordinates?: [number, number];
  consultationType: 'online' | 'offline';
}

const LocationMarker: React.FC<{ setPosition: (pos: [number, number]) => void }> = ({ setPosition }) => {
  const [position, setPos] = useState<[number, number] | null>(null);
  const map = useMapEvents({
    click(e) {
      setPos([e.latlng.lat, e.latlng.lng]);
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
};

const BookingPage: React.FC = () => {
  const { language, highContrast } = useAccessibility();
  const t = TRANSLATIONS[language];
  
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [form, setForm] = useState<BookingForm>({
    name: '',
    phone: '',
    email: '',
    address: '',
    issue: '',
    isHuman: false,
    consultationType: 'offline' // Default
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [hasVoiceMessage, setHasVoiceMessage] = useState(false);

  // Calendar Logic
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Time Logic: 10am to 5pm, skip 1pm-2pm
  const timeSlots = [
    "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleDateSelect = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    if (date < new Date(today.setHours(0,0,0,0))) return;
    if (date.getDay() === 6) return; // Prevent Saturday selection
    setSelectedDate(date);
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedDate) setCurrentStep(2);
    else if (currentStep === 2 && selectedTime) setCurrentStep(3);
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!form.name.match(/^[a-zA-Z\s]+$/)) newErrors.name = "Name must contain only alphabets";
    if (!form.phone.match(/^\d{10}$/)) newErrors.phone = "Phone must be 10 digits numeric";
    if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
    
    // Custom Logic: Issue OR Voice
    if (!form.issue.trim() && !hasVoiceMessage) {
        newErrors.issue = "Either description or voice message is required";
    }

    if (!isCaptchaVerified) newErrors.isHuman = "Please complete the human verification";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [mimeType, setMimeType] = useState<string>('audio/webm');

  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      mediaRecorder?.stop();
      setIsRecording(false);
    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Detect supported mime type
        let selectedMimeType = 'audio/webm';
        if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
            selectedMimeType = 'audio/webm;codecs=opus';
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
            selectedMimeType = 'audio/mp4'; // Safari
        }
        
        setMimeType(selectedMimeType);
        const recorder = new MediaRecorder(stream, { mimeType: selectedMimeType });
        const chunks: Blob[] = [];

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) chunks.push(e.data);
        };

        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: selectedMimeType });
          console.log("Recording stopped. Blob size:", blob.size, "Type:", selectedMimeType);
          setAudioBlob(blob);
          setHasVoiceMessage(true);
          // Stop all tracks to release microphone
          stream.getTracks().forEach(track => track.stop());
        };

        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
        setAudioChunks([]);
        setAudioBlob(null); // Reset previous recording
      } catch (err) {
        console.error("Error accessing microphone:", err);
        alert("Could not access microphone. Please check permissions.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && selectedDate && selectedTime) {
      try {
        let voiceMessageId = null;

        // Step 1: Upload Voice Message (if exists)
        if (audioBlob) {
            const uploadData = new FormData();
            // Using .wav extension to bypass strict validation if needed
            // Strapi /api/upload expects 'files' key
            uploadData.append('files', audioBlob, 'voice_message.wav'); 

            const uploadResponse = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:1337'}/api/upload`, {
                method: 'POST',
                body: uploadData,
            });

            if (!uploadResponse.ok) {
                const uploadError = await uploadResponse.json();
                console.error("Upload Error:", uploadError);
                throw new Error(`Voice message upload failed: ${uploadError.error?.message || uploadResponse.statusText}`);
            }

            const uploadResult = await uploadResponse.json();
            // Strapi returns an array of files for the upload endpoint
            if (Array.isArray(uploadResult) && uploadResult.length > 0) {
                voiceMessageId = uploadResult[0].id;
            } else {
                 // Fallback if structure is different
                 voiceMessageId = uploadResult.id; 
            }
        }

        // Step 2: Create Appointment (JSON)
        const requestData: any = {
          date: selectedDate, 
          time: selectedTime, 
          name: form.name,
          phone: form.phone,
          consultationType: form.consultationType,
          email: form.email || null, 
          address: form.address,
          coordinates: form.coordinates ? { lat: form.coordinates[0], lng: form.coordinates[1] } : null,
          issue: form.issue ? [{ type: 'paragraph', children: [{ type: 'text', text: form.issue }] }] : null,
        };

        // Attach the media relationship
        if (voiceMessageId) {
            requestData.voiceMessage = voiceMessageId;
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:1337'}/api/appointments`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: requestData }),
        });

        if (!response.ok) {
           const errorData = await response.json();
           console.error("Server Error Details:", errorData);
           throw new Error(`Failed to submit booking: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
        }
        
        setIsSuccess(true);
      } catch (error) {
        console.error("Submission Error:", error);
        alert(`Failed to submit booking. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  };

  // High Contrast Colors - using !important to override global styles if necessary
  const activeStepClass = highContrast 
    ? "!bg-yellow-400 !text-black !border-2 !border-yellow-400" 
    : "bg-secondary text-white border-secondary";
  
  const inactiveStepClass = highContrast
    ? "!bg-black !text-yellow-400 !border-2 !border-yellow-400"
    : "bg-white text-gray-500 border-gray-300";

  // Common input classes
  const getInputClass = (hasError: boolean) => {
    if (highContrast) {
      return `w-full p-3 rounded border-2 outline-none ${hasError ? '!border-red-500' : '!bg-gray-900 !border-yellow-400 !text-white'}`;
    }
    return `w-full p-3 rounded border-2 outline-none text-gray-700 ${hasError ? 'border-red-500' : 'border-gray-300 focus:border-secondary'}`;
  };

  return (
    <main className={`min-h-screen py-16 px-4 ${highContrast ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-serif font-bold text-center mb-4 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>
          {t.bookTitle}
        </h1>
        <p className={`text-center text-lg mb-12 ${highContrast ? 'text-white' : 'text-gray-600'}`}>
          {t.bookSubtitle}
        </p>

        {/* Steps Indicator */}
        <div className="flex justify-between items-center mb-12 relative max-w-2xl mx-auto">
          {/* Progress Line */}
          <div className={`absolute top-1/2 left-0 w-full h-1 -z-10 transform -translate-y-1/2 ${highContrast ? '!bg-yellow-400' : 'bg-gray-300'}`}></div>
          
          {[1, 2, 3].map((step) => (
            <div key={step} className={`flex flex-col items-center px-2 ${highContrast ? '!bg-black' : 'bg-gray-50'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${currentStep >= step ? activeStepClass : inactiveStepClass}`}>
                {step}
              </div>
              <span className={`text-sm font-bold ${highContrast ? 'text-yellow-400' : 'text-gray-700'}`}>
                {step === 1 ? t.stepDate : step === 2 ? t.stepTime : t.stepDetails}
              </span>
            </div>
          ))}
        </div>

        {isSuccess ? (
           <div className={`text-center p-12 rounded-xl border-2 ${highContrast ? 'bg-black border-yellow-400 text-yellow-400' : 'bg-white border-green-100'}`}>
              <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-500" />
              <h2 className="text-3xl font-serif font-bold mb-4">{t.bookingSuccess}</h2>
              <p className="text-lg">{t.thankYouMessage}</p>
           </div>
        ) : (
          <div className={`rounded-2xl shadow-xl border-2 overflow-hidden ${highContrast ? 'bg-black border-yellow-400' : 'bg-white border-gray-100'}`}>
            
            {/* Step 1: Calendar */}
            {currentStep === 1 && (
              <div className="p-8 md:p-12">
                <h2 className={`text-2xl font-serif font-bold mb-8 flex items-center gap-3 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>
                  <Calendar className="w-6 h-6" /> {t.selectDate}
                </h2>
                
                <div className="grid grid-cols-7 gap-2 md:gap-4 mb-8">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                    <div key={d} className={`text-center font-bold py-2 ${highContrast ? 'text-white' : 'text-gray-500'}`}>{d}</div>
                  ))}
                  {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const date = new Date(currentYear, currentMonth, day);
                    const isPast = date < new Date(new Date().setHours(0,0,0,0));
                    const isSaturday = date.getDay() === 6;
                    const isSelected = selectedDate?.getDate() === day;

                    return (
                      <button
                        key={day}
                        disabled={isPast || isSaturday}
                        onClick={() => handleDateSelect(day)}
                        className={`
                          aspect-square rounded-lg flex items-center justify-center font-bold text-lg transition-all
                          ${isPast || isSaturday ? 'opacity-20 cursor-not-allowed' : 'hover:scale-105'}
                          ${isSelected 
                            ? (highContrast ? '!bg-yellow-400 !text-black' : 'bg-secondary text-white') 
                            : (highContrast ? '!bg-gray-800 !text-yellow-400 !border !border-yellow-400' : 'bg-gray-50 text-black hover:bg-green-50')}
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                
                <div className="flex justify-end">
                   <Button onClick={handleNext} disabled={!selectedDate} className="px-8">
                      {t.nextStep} <ChevronRight className="ml-2 w-4 h-4" />
                   </Button>
                </div>
              </div>
            )}

            {/* Step 2: Time Slots */}
            {currentStep === 2 && (
              <div className="p-8 md:p-12">
                <h2 className={`text-2xl font-serif font-bold mb-2 flex items-center gap-3 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>
                  <Clock className="w-6 h-6" /> {t.selectTime}
                </h2>
                <p className={`mb-8 font-sans ${highContrast ? 'text-white' : 'text-gray-500'}`}>
                  For {selectedDate?.toLocaleDateString()}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        py-4 px-6 rounded-lg font-bold text-lg border-2 transition-all
                        ${selectedTime === time
                          ? (highContrast ? '!bg-yellow-400 !text-black !border-yellow-400' : 'bg-secondary text-white border-secondary')
                          : (highContrast ? '!bg-black !text-yellow-400 !border-yellow-400 hover:bg-gray-900' : 'bg-white text-black border-gray-200 hover:border-secondary hover:text-secondary')}
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                
                {/* Custom Time Option */}
                <div className="mb-8">
                  <p className={`mb-2 font-bold ${highContrast ? 'text-white' : 'text-gray-700'}`}>Or select custom time:</p>
                  <input 
                    type="time" 
                    className={`p-3 rounded border-2 text-lg ${highContrast ? 'bg-gray-900 border-yellow-400 text-white' : 'border-gray-300 focus:border-secondary'}`}
                    onChange={(e) => {
                       const val = e.target.value;
                       if (val) {
                           // Convert 24h to 12h format for consistency or just store as is
                           let [hours, minutes] = val.split(':');
                           const h = parseInt(hours, 10);
                           const ampm = h >= 12 ? 'PM' : 'AM';
                           const h12 = h % 12 || 12;
                           const formatted = `${h12}:${minutes} ${ampm}`;
                           setSelectedTime(formatted);
                       }
                    }}
                  />
                  {selectedTime && !timeSlots.includes(selectedTime) && (
                      <p className={`mt-2 font-bold ${highContrast ? 'text-yellow-400' : 'text-secondary'}`}>Selected: {selectedTime}</p>
                  )}
                </div>

                <div className="flex justify-between">
                   <Button variant="secondary" onClick={() => setCurrentStep(1)} className="px-8">
                      <ChevronLeft className="mr-2 w-4 h-4" /> {t.prevStep}
                   </Button>
                   <Button onClick={handleNext} disabled={!selectedTime} className="px-8">
                      {t.nextStep} <ChevronRight className="ml-2 w-4 h-4" />
                   </Button>
                </div>
              </div>
            )}

            {/* Step 3: Form */}
            {currentStep === 3 && (
               <div className="p-8 md:p-12">
                 <h2 className={`text-2xl font-serif font-bold mb-8 flex items-center gap-3 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>
                  <User className="w-6 h-6" /> {t.personalDetails}
                </h2>
                
                <p className={`text-sm mb-6 font-bold ${highContrast ? 'text-red-400' : 'text-red-600'}`}>{t.requiredFields}</p>

                {/* Consultation Type Selection */}
                <div className="mb-8 p-6 rounded-lg border-2 border-gray-200 bg-gray-50">
                    <h3 className={`text-lg font-bold mb-4 ${highContrast ? 'text-black' : 'text-gray-900'}`}>Select Consultation Type:</h3>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between p-4 bg-white rounded border border-gray-200 cursor-pointer hover:border-secondary transition-colors">
                            <div className="flex items-center gap-3">
                                <input 
                                    type="radio" 
                                    name="consultationType" 
                                    value="online"
                                    checked={form.consultationType === 'online'}
                                    onChange={() => setForm({...form, consultationType: 'online'})}
                                    className="w-5 h-5 text-secondary focus:ring-secondary"
                                />
                                <span className="font-bold text-gray-800">Online Virtual Consultation</span>
                            </div>
                            <span className="font-bold text-secondary">Rs. 2000</span>
                        </label>

                        <label className="flex items-center justify-between p-4 bg-white rounded border border-gray-200 cursor-pointer hover:border-secondary transition-colors">
                            <div className="flex items-center gap-3">
                                <input 
                                    type="radio" 
                                    name="consultationType" 
                                    value="offline"
                                    checked={form.consultationType === 'offline'}
                                    onChange={() => setForm({...form, consultationType: 'offline'})}
                                    className="w-5 h-5 text-secondary focus:ring-secondary"
                                />
                                <span className="font-bold text-gray-800">Offline Office Consultation</span>
                            </div>
                            <span className="font-bold text-secondary">Rs. 3500</span>
                        </label>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-bold mb-2 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>{t.fullName} *</label>
                        <input 
                          type="text" 
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          className={getInputClass(!!errors.name)}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className={`block text-sm font-bold mb-2 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>{t.phoneNumber} *</label>
                        <input 
                          type="text" 
                          value={form.phone}
                          onChange={e => setForm({...form, phone: e.target.value})}
                          placeholder="9876543210"
                          className={getInputClass(!!errors.phone)}
                        />
                         {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                   </div>

                   <div>
                      <label className={`block text-sm font-bold mb-2 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>{t.emailLabel}</label>
                      <input 
                        type="email" 
                        placeholder="abc@example.com"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        className={getInputClass(!!errors.email)}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                   </div>

                   {/* Address Selection */}
                   <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className={`block text-sm font-bold ${highContrast ? 'text-yellow-400' : 'text-black'}`}>{t.addressLabel}</label>
                        <button 
                          type="button" 
                          onClick={() => setShowMap(!showMap)}
                          className={`text-sm font-bold underline ${highContrast ? 'text-yellow-400' : 'text-secondary'}`}
                        >
                          {showMap ? "Switch to Text Input" : t.mapSelect}
                        </button>
                      </div>
                      
                      {showMap ? (
                        <div className="h-64 w-full rounded-lg overflow-hidden border-2 border-gray-300 mb-2 relative z-0">
                           <MapContainer center={[27.7172, 85.3240]} zoom={13} style={{ height: '100%', width: '100%' }}>
                              <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              />
                              <LocationMarker setPosition={(pos) => setForm({...form, coordinates: pos, address: `Lat: ${pos[0].toFixed(4)}, Lng: ${pos[1].toFixed(4)}`})} />
                           </MapContainer>
                           <p className="text-xs text-gray-500 mt-1 text-center">Click on the map to set location</p>
                        </div>
                      ) : null}
                      
                      <input 
                        type="text" 
                        value={form.address}
                        onChange={e => setForm({...form, address: e.target.value})}
                        placeholder={showMap ? "Coordinates will appear here..." : "Enter full address"}
                        className={getInputClass(false)}
                      />
                   </div>

                   {/* Issue & Voice */}
                   <div>
                      <label className={`block text-sm font-bold mb-2 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>
                          {t.yourIssue} / {t.voiceMessage} <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        value={form.issue}
                        onChange={e => setForm({...form, issue: e.target.value})}
                        rows={4}
                        className={`${getInputClass(!!errors.issue)} mb-2`}
                        placeholder="Enter your issue here..."
                      ></textarea>
                      
                      <div className={`flex items-center gap-4 p-4 rounded border ${highContrast ? 'bg-gray-900 border-yellow-400' : 'bg-gray-50 border-gray-200'}`}>
                         <div className="flex-grow">
                            <p className={`text-sm font-bold mb-1 ${highContrast ? 'text-white' : 'text-black'}`}>{t.voiceMessage}</p>
                            <p className={`text-xs ${highContrast ? 'text-gray-300' : 'text-gray-500'}`}>
                                {hasVoiceMessage ? "Voice message recorded!" : t.voiceMessageHint}
                            </p>
                         </div>
                         <button
                           type="button"
                           onClick={toggleRecording}
                           className={`p-3 rounded-full transition-all ${isRecording ? 'bg-red-500 animate-pulse text-white' : (hasVoiceMessage ? 'bg-green-600 text-white' : 'bg-secondary text-white')}`}
                         >
                           {hasVoiceMessage && !isRecording ? <CheckCircle className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                         </button>
                         {isRecording && <span className="text-red-500 font-bold text-sm animate-pulse">{t.recording}</span>}
                      </div>
                      {errors.issue && <p className="text-red-500 text-xs mt-1 font-bold">{errors.issue}</p>}
                   </div>

                   {/* Verification */}
                   <div className="space-y-2">
                      <Captcha highContrast={highContrast} onVerify={setIsCaptchaVerified} />
                      {errors.isHuman && <p className="text-red-500 text-xs font-bold">{errors.isHuman}</p>}
                   </div>

                   <div className="flex justify-between pt-6">
                      <Button variant="secondary" onClick={() => setCurrentStep(2)} type="button" className="px-8">
                          <ChevronLeft className="mr-2 w-4 h-4" /> {t.prevStep}
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={!isCaptchaVerified}
                        className={`px-8 ${!isCaptchaVerified ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'bg-secondary hover:bg-green-800'} text-white`}
                      >
                          {t.submitBooking}
                      </Button>
                   </div>
                </form>
               </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default BookingPage;