import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, Volume2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../UI/Button';

interface CaptchaProps {
  onVerify: (isValid: boolean) => void;
  highContrast?: boolean;
}

export const Captcha: React.FC<CaptchaProps> = ({ onVerify, highContrast = false }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate random string
  const generateCaptchaParams = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Leaving out confusing chars like I, 1, O, 0
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
  };

  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = highContrast ? '#000' : '#f3f4f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add noise (lines)
    for (let i = 0; i < 7; i++) {
        ctx.strokeStyle = highContrast ? '#ffff00' : `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.5)`;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineWidth = 2; // Increase line width for better visibility in high contrast
        ctx.stroke();
    }

    // Add noise (dots)
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = highContrast ? '#fff' : `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 2, 0, 2 * Math.PI); // Increase dot size
      ctx.fill();
    }


    // Text
    ctx.font = '30px Arial';
    ctx.textBaseline = 'middle';
    const charWidth = canvas.width / 6;

    for (let i = 0; i < text.length; i++) {
        const x = 20 + i * 30;
        const y = 30 + (Math.random() - 0.5) * 10;
        const angle = (Math.random() - 0.5) * 0.4;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = highContrast ? '#ffff00' : '#166534'; // Secondary green or high contrast yellow
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
    }
  };

  const refreshCaptcha = () => {
    const newText = generateCaptchaParams();
    setCaptchaText(newText);
    setInputText('');
    setIsVerified(false);
    onVerify(false);
    setError(false);
    setTimeout(() => drawCaptcha(newText), 0); // Ensure canvas is ready
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const playAudio = () => {
    if (!captchaText) return;
    // Split text into characters for clearer reading
    const utterance = new SpeechSynthesisUtterance(captchaText.split('').join(' '));
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const handleVerify = () => {
    if (inputText.toUpperCase() === captchaText) {
      setIsVerified(true);
      setError(false);
      onVerify(true);
    } else {
      setError(true);
      setIsVerified(false);
      onVerify(false);
      // Optional: Refresh on fail? Maybe better UX to let them try again first.
      // refreshCaptcha(); 
    }
  };

  return (
    <div className={`p-6 rounded border-2 ${highContrast ? 'border-yellow-400 bg-black' : 'border-gray-200 bg-white'}`}>
      <h3 className={`font-bold mb-4 ${highContrast ? 'text-yellow-400' : 'text-black'}`}>Human Verification</h3>
      
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Captcha Display */}
        <div className="space-y-2">
            <canvas 
                ref={canvasRef} 
                width={220} 
                height={60} 
                className="rounded border border-gray-300"
                aria-label="Captcha Image"
            />
            <div className="flex gap-2">
                <Button 
                    type="button" 
                    variant="outline" 
                    onClick={refreshCaptcha} 
                    className="p-2" 
                    aria-label="Refresh Captcha"
                >
                    <RefreshCw className="w-4 h-4" />
                </Button>
                <Button 
                    type="button" 
                    variant="outline" 
                    onClick={playAudio} 
                    className="p-2" 
                    aria-label="Play Audio Captcha"
                >
                    <Volume2 className="w-4 h-4" />
                </Button>
            </div>
        </div>

        {/* Input & Verify */}
        <div className="flex-grow space-y-4 w-full">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter characters"
                    maxLength={6}
                    disabled={isVerified}
                    className={`flex-grow p-3 rounded border-2 uppercase font-bold tracking-widest outline-none
                        ${error ? 'border-red-500' : (highContrast ? 'border-yellow-400 bg-gray-900 text-white' : 'border-gray-300 focus:border-secondary')}
                    `}
                />
                {!isVerified && (
                  <Button 
                    type="button" 
                    onClick={handleVerify}
                    className="whitespace-nowrap bg-secondary text-white hover:bg-green-800"
                  >
                    Verify
                  </Button>
                )}
            </div>
            
            {error && (
                <p className="text-red-500 text-sm font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> Incorrect characters. Please try again.
                </p>
            )}

            {isVerified && (
                <p className="text-green-600 font-bold flex items-center gap-2 animate-pulse">
                    <CheckCircle className="w-5 h-5" /> Verified Successfully!
                </p>
            )}
        </div>
      </div>
    </div>
  );
};
