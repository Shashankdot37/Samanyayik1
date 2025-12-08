


import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, FileText } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { Modal } from '../components/Shared/Modal';
import { DISCLAIMER_TEXT, TRANSLATIONS } from '../constants';
import { useAccessibility } from '../contexts/AccessibilityContext';

const ContactPage: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Voice Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // clear error when user types
    if (errors[e.target.name as keyof typeof formData]) {
      setErrors({ ...errors, [e.target.name as keyof typeof formData]: '' });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, agreeToTerms: e.target.checked });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name.match(/^[a-zA-Z\s]+$/)) newErrors.name = "Name must contain only alphabets";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone must be 10 digits numeric";
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
    
    // Message OR Voice Validation
    if (!formData.message.trim() && !audioBlob) {
        newErrors.message = "Please enter a message or record a voice message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Could not access microphone. Please ensure permissions are granted.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
      setMediaRecorder(null);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check validation first
    const isValid = validateForm();
    if (!isValid) return;

    // Redundant check if button is disabled, but good for safety
    if (!formData.agreeToTerms) {
      alert("Please accept the Disclaimer & Terms of Use to proceed.");
      return;
    }
    
    // Simulate submission (including audioBlob if present)
    console.log("Submitting form:", formData, "Audio:", audioBlob);

    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-black mb-6">{t.contactUs}</h1>
          <p className="text-xl text-black font-sans font-normal max-w-2xl mx-auto">
            {language === 'np' 
              ? "परामर्श, गुनासो, वा सोधपुछको लागि हाम्रो विशेषज्ञ कानूनी टोलीसँग सम्पर्कमा रहनुहोस्।" 
              : "Get in touch with our expert legal team for consultations, grievances, or inquiries."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-black mb-6 border-b-2 border-secondary inline-block pb-2">
                {t.contactInfo}
              </h2>
              <p className="text-black mb-6 font-sans">
                {language === 'np' 
                  ? "कुनै पनि अधिकार प्रयोग गर्न वा उजुरी दर्ता गर्न, कृपया निम्नमा सम्पर्क गर्नुहोस्:" 
                  : "To exercise any rights or file a complaint, please contact the following:"}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-50 p-4 rounded-full mr-4 text-secondary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg font-serif">{t.mailingAddress}</h3>
                    <p className="text-black font-sans font-normal">Samanyayik Legal Service and Research Center Pvt. Ltd.</p>
                    <p className="text-black font-sans font-normal">Anamnagar, Kathmandu-29, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 p-4 rounded-full mr-4 text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg font-serif">{t.emailLabel}</h3>
                    <a href="mailto:law.samanyayik@gmail.com" className="text-black font-sans font-normal hover:text-secondary hover:underline">
                      law.samanyayik@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 p-4 rounded-full mr-4 text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg font-serif">{t.phoneLabel}</h3>
                    <a href="tel:+9779861292120" className="text-black font-sans font-normal hover:text-secondary hover:underline block">
                      +977-9861292120
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer Teaser */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-secondary" />
                <h3 className="font-bold text-black font-serif text-lg">{t.disclaimerTerms}</h3>
              </div>
              <p className="text-sm text-black mb-6 font-sans leading-relaxed">
                 {language === 'np' 
                  ? "कृपया यस वेबसाइटमा उपलब्ध सामग्री, कानूनी सल्लाह, र वकिल-ग्राहक सम्बन्ध सम्बन्धी हाम्रो पूरा अस्वीकरण र प्रयोगका सर्तहरू पढ्नुहोस्।" 
                  : "Please read our full Disclaimer and Terms of Use regarding the content on this website, legal advice, and attorney-client relationships."}
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsDisclaimerOpen(true)}
                className="w-full text-sm py-3 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                {t.readFullDisclaimer}
              </Button>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-serif font-bold text-black mb-4">{t.sendMessage}</h2>
              <p className="text-sm text-red-600 font-bold mb-8">Field marked with * is required</p>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 text-secondary w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-black mb-4">{t.messageSent}</h3>
                  <p className="text-black font-sans text-lg">{t.thankYouMessage}</p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setFormData({...formData, message: '', subject: ''}); setAudioBlob(null); }}
                    className="mt-8 text-secondary font-sans font-bold hover:underline"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-sans font-bold text-black mb-3">{t.fullName} *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded border-2 bg-white shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-black font-sans ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder={language === 'np' ? "पुरा नाम" : "John Doe"}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-sans font-bold text-black mb-3">{t.phoneNumber} *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded border-2 bg-white shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-black font-sans ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="+977 98..."
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="email" className="block text-sm font-sans font-bold text-black mb-3">{t.emailAddress}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded border-2 bg-white shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-black font-sans ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="example@gmail.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-sans font-bold text-black mb-3">{t.subject}</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border-2 border-gray-300 bg-white shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-black font-sans"
                        placeholder={language === 'np' ? "कानूनी सोधपुछ" : "Legal Inquiry"}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-sans font-bold text-black mb-3">{t.message} / Voice Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded border-2 bg-white shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-black resize-none font-sans ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder={language === 'np' ? "हामी तपाईंलाई कसरी मद्दत गर्न सक्छौं?" : "How can we help you?"}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Voice Message */}
                  <div className="flex items-center gap-4 p-4 rounded border border-gray-200 bg-gray-50">
                     <div className="flex-grow">
                        <p className="text-sm font-bold mb-1 text-black">Voice Message</p>
                        <p className="text-xs text-gray-500">If you can't type the message, you can submit voice message</p>
                     </div>
                     <button
                       type="button"
                       onClick={toggleRecording}
                       className={`p-3 rounded-full transition-all flex items-center justify-center ${isRecording ? 'bg-red-500 animate-pulse text-white' : 'bg-secondary text-white'}`}
                       aria-label={isRecording ? "Stop recording" : "Start recording"}
                     >
                        {isRecording ? <div className="w-4 h-4 bg-white rounded-sm" /> : <div className="w-4 h-4 bg-white rounded-full" />}
                     </button>
                     {isRecording && <span className="text-red-500 font-bold text-sm animate-pulse">Recording...</span>}
                     {audioBlob && !isRecording && (
                        <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                           <CheckCircle className="w-4 h-4" /> Recorded
                           <button type="button" onClick={() => setAudioBlob(null)} className="text-red-500 text-xs underline ml-2">Clear</button>
                        </div>
                     )}
                  </div>

                  <div className="flex items-start gap-3 p-6 bg-gray-50 rounded border border-gray-200">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreeToTerms}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary"
                    />
                    <label htmlFor="terms" className="text-sm text-black font-sans leading-relaxed">
                      {t.agreeTerms}
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={!formData.agreeToTerms}
                    className={`w-full py-4 text-lg flex justify-center items-center gap-2 font-sans font-bold ${!formData.agreeToTerms ? 'opacity-50 cursor-not-allowed bg-gray-400' : ''}`}
                  >
                    {t.sendBtn} <Send className="w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Modal */}
      <Modal 
        isOpen={isDisclaimerOpen} 
        onClose={() => setIsDisclaimerOpen(false)} 
        title={t.disclaimerTerms}
        maxWidth="max-w-5xl"
      >
        <div className="text-black font-sans text-sm md:text-base space-y-6">
          <div className="border-b pb-6 mb-6">
            <p><strong>Organization:</strong> Samanyayik Legal Service and Research Center Pvt. Ltd.</p>
            <p><strong>Date of Effect:</strong> 29 November 2025</p>
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: DISCLAIMER_TEXT }} />
          
          <div className="border-t pt-6 mt-8 bg-gray-50 p-6 rounded">
            <h4 className="font-bold uppercase mb-3 text-sm font-sans">Contact Information regarding Disclaimer</h4>
            <p className="text-sm font-sans">Email: law.samanyayik@gmail.com</p>
            <p className="text-sm font-sans">Phone: +977 9861292120</p>
            <p className="text-sm font-sans">Address: Anamnagar, Kathmandu-29, Nepal</p>
          </div>

          <div className="pt-6 flex justify-end">
            <Button onClick={() => setIsDisclaimerOpen(false)}>{t.iUnderstand}</Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default ContactPage;