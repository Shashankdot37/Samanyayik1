

import React, { useState, useRef, useEffect } from 'react';
import { Calculator as CalculatorIcon, AlertCircle, ChevronRight, RefreshCw, Sparkles, MessageSquare, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { AppointmentCTA } from '../components/Shared/AppointmentCTA';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { TRANSLATIONS } from '../constants';

// --- Types ---

interface FeeTier {
  id: string;
  label: string;
  rate: number;
  isFlat: boolean;
  amountInTier: number;
  feeCalculated: number;
}

interface CalculationResult {
  totalFee: number;
  tiers: FeeTier[];
}

// --- Number to Words Logic ---

const numberToWords = (num: number): string => {
  if (num === 0) return "Zero";

  const a = ['','One ','Two ','Three ','Four ','Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
  const b = ['', '', 'Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];

  const getLT20 = (n: number) => a[n];
  const get20Plus = (n: number) => b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : '');

  const numToWordsRecursive = (n: number): string => {
    if (n < 20) return getLT20(n);
    if (n < 100) return get20Plus(n);
    if (n < 1000) return getLT20(Math.floor(n / 100)) + "Hundred " + (n % 100 !== 0 ? "and " + numToWordsRecursive(n % 100) : "");
    if (n < 100000) return numToWordsRecursive(Math.floor(n / 1000)) + "Thousand " + (n % 1000 !== 0 ? numToWordsRecursive(n % 1000) : "");
    if (n < 10000000) return numToWordsRecursive(Math.floor(n / 100000)) + "Lakh " + (n % 100000 !== 0 ? numToWordsRecursive(n % 100000) : "");
    return numToWordsRecursive(Math.floor(n / 10000000)) + "Crore " + (n % 10000000 !== 0 ? numToWordsRecursive(n % 10000000) : "");
  };
  
  const integerPart = Math.floor(num);
  const decimalPart = Math.round((num - integerPart) * 100);
  
  let result = numToWordsRecursive(integerPart).trim();
  
  if (decimalPart > 0) {
    result += ` and ${numToWordsRecursive(decimalPart).trim()} Paisa`;
  }
  
  return result + " Only";
};

// --- Logic ---

const calculateFee = (amount: number): CalculationResult => {
  let remaining = amount;
  const tiers: FeeTier[] = [];
  let totalFee = 0;

  // Tier 1: Up to 25,000 (Flat 500)
  if (amount > 0) {
    const limit = 25000;
    const currentAmount = Math.min(remaining, limit);
    const fee = 500;
    
    tiers.push({
      id: 'tier-1',
      label: 'Up to 25,000',
      rate: 0,
      isFlat: true,
      amountInTier: currentAmount,
      feeCalculated: fee
    });
    
    totalFee += fee;
    remaining = Math.max(0, remaining - limit);
  }

  // Tier 2: 25,001 to 50,000 @ 5%
  if (remaining > 0) {
    const limit = 25000;
    const currentAmount = Math.min(remaining, limit);
    const fee = currentAmount * 0.05;

    tiers.push({
      id: 'tier-2',
      label: '25,001 to 50,000',
      rate: 5,
      isFlat: false,
      amountInTier: currentAmount,
      feeCalculated: fee
    });

    totalFee += fee;
    remaining = Math.max(0, remaining - limit);
  }

  // Tier 3: 50,001 to 1,00,000 @ 3.5%
  if (remaining > 0) {
    const limit = 50000;
    const currentAmount = Math.min(remaining, limit);
    const fee = currentAmount * 0.035;

    tiers.push({
      id: 'tier-3',
      label: '50,001 to 1,00,000',
      rate: 3.5,
      isFlat: false,
      amountInTier: currentAmount,
      feeCalculated: fee
    });

    totalFee += fee;
    remaining = Math.max(0, remaining - limit);
  }

  // Tier 4: 1,00,001 to 5,00,000 @ 2%
  if (remaining > 0) {
    const limit = 400000;
    const currentAmount = Math.min(remaining, limit);
    const fee = currentAmount * 0.02;

    tiers.push({
      id: 'tier-4',
      label: '1,00,001 to 5,00,000',
      rate: 2,
      isFlat: false,
      amountInTier: currentAmount,
      feeCalculated: fee
    });

    totalFee += fee;
    remaining = Math.max(0, remaining - limit);
  }

  // Tier 5: 5,00,001 to 25,00,000 @ 1.5%
  if (remaining > 0) {
    const limit = 2000000;
    const currentAmount = Math.min(remaining, limit);
    const fee = currentAmount * 0.015;

    tiers.push({
      id: 'tier-5',
      label: '5,00,001 to 25,00,000',
      rate: 1.5,
      isFlat: false,
      amountInTier: currentAmount,
      feeCalculated: fee
    });

    totalFee += fee;
    remaining = Math.max(0, remaining - limit);
  }

  // Tier 6: Above 25,00,000 @ 1%
  if (remaining > 0) {
    const fee = remaining * 0.01;

    tiers.push({
      id: 'tier-6',
      label: 'Above 25,00,000',
      rate: 1,
      isFlat: false,
      amountInTier: remaining,
      feeCalculated: fee
    });

    totalFee += fee;
  }

  return { totalFee, tiers };
};

// --- Helper Functions ---

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-NP', {
    style: 'currency',
    currency: 'NPR',
    minimumFractionDigits: 2
  }).format(val).replace('NPR', 'NRs. ');
};

// --- Gemini API Logic ---

const callGeminiAPI = async (prompt: string): Promise<string> => {
  const systemPrompt = `You are a helpful legal assistant for Nepal's court fee system. 
  Answer questions based on the National Civil Procedure Code (Muluki Dewani Karyabidhi Samhita, 2074). 
  Keep answers concise, professional, and easy to understand. 
  If the question is not about court fees or legal procedures in Nepal, politely decline.
  The current court fee structure is:
  - Up to 25,000: Rs. 500 flat
  - 25,001-50,000: 5% of amount > 25k
  - 50,001-1,00,000: 3.5% of amount > 50k
  - 1,00,001-5,00,000: 2% of amount > 1L
  - 5,00,001-25,00,000: 1.5% of amount > 5L
  - Above 25,00,000: 1% of amount > 25L`;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            systemInstruction: systemPrompt,
        }
    });

    return response.text || "Sorry, I couldn't understand that.";
  } catch (error) {
    console.error(error);
    return "Error connecting to AI service. Please try again later.";
  }
};

// --- Main Component ---

const Calculator: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  
  const [amountStr, setAmountStr] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // AI State
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    const cleanStr = amountStr.replace(/,/g, '');
    const amount = parseFloat(cleanStr);

    if (isNaN(amount) || amount <= 0) {
      setError(language === 'np' ? "कृपया मान्य रकम प्रविष्ट गर्नुहोस्।" : "Please enter a valid claim amount.");
      return;
    }

    const calcResult = calculateFee(amount);
    setResult(calcResult);
  };

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    setIsLoadingAI(true);
    setAiResponse(null);
    
    const response = await callGeminiAPI(aiPrompt);
    
    setAiResponse(response);
    setIsLoadingAI(false);
  };

  const resetForm = () => {
    setAmountStr('');
    setResult(null);
    setError(null);
  };

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  return (
    <main className="min-h-[250vh] bg-white text-black font-sans flex flex-col relative">
      {/* Header */}
      <div className="bg-white py-16 md:py-24 border-b border-gray-200 flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">{t.calcTitle}</h1>
            <p className="text-xl text-black font-sans font-normal max-w-2xl mx-auto">
              {t.calcSubtitle}
            </p>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="flex-grow flex flex-col items-center justify-start p-4 md:p-12 gap-8 w-full z-0">
        <div className="w-full max-w-lg space-y-12 mb-64">
        
          {/* Calculator Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
            <div className="bg-secondary p-8 text-white text-center">
              <h1 className="text-2xl font-serif font-bold flex justify-center items-center gap-3">
                <CalculatorIcon className="w-6 h-6" />
                {t.calcTitle}
              </h1>
              <p className="text-green-100 text-sm mt-2 font-sans font-bold opacity-90">Nepal | National Civil Procedure Code</p>
            </div>

            <div className="p-8 space-y-8">
              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <label htmlFor="claimAmount" className="block text-sm font-sans font-bold text-black mb-3">
                    {t.claimAmount}
                  </label>
                  <div className="relative">
                    <input
                      id="claimAmount"
                      type="number"
                      step="0.01"
                      value={amountStr}
                      onChange={(e) => setAmountStr(e.target.value)}
                      placeholder={language === 'np' ? "रकम प्रविष्ट गर्नुहोस्..." : "Enter amount..."}
                      className="w-full px-4 py-3 text-lg bg-white border-2 border-gray-300 rounded-lg focus:border-secondary focus:ring-0 transition-all outline-none text-black shadow-sm font-sans"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 p-4 rounded-lg text-sm font-sans font-bold">
                    <AlertCircle className="w-5 h-5" />
                    {error}
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-secondary hover:bg-green-800 active:scale-[0.98] text-white font-sans font-bold py-4 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {t.calculateBtn}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {result && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 bg-gray-100 hover:bg-gray-200 text-black border border-gray-300 rounded-lg transition-colors"
                      aria-label="Reset"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </form>

              {result && (
                <div ref={resultRef} className="space-y-8 animate-fade-in-up">
                  <div className="border-t border-gray-100 pt-8">
                    <div className="bg-green-50 border-2 border-green-100 rounded-xl p-6 text-center">
                      <span className="text-secondary text-sm font-sans font-bold uppercase tracking-wide">{t.totalFeePayable}</span>
                      <div className="text-4xl font-serif font-bold text-black mt-2 mb-3">
                        {formatCurrency(result.totalFee)}
                      </div>
                      <div className="text-sm text-secondary font-sans font-bold border-t border-green-200 pt-3 mt-3">
                        {/* Note: numberToWords is kept in English as a utility, but could be extended */}
                        {numberToWords(result.totalFee)}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-black text-sm font-sans font-bold uppercase tracking-wider mb-4 px-1">
                      {t.calculationDetails}
                    </h3>
                    
                    <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-black border-b border-gray-200">
                          <tr>
                            <th className="px-4 py-4 text-left font-sans font-bold w-1/2">{t.slabRange}</th>
                            <th className="px-4 py-4 text-center font-sans font-bold">{t.rate}</th>
                            <th className="px-4 py-4 text-right font-sans font-bold">{t.fee}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {result.tiers.map((tier) => (
                            <tr key={tier.id}>
                              <td className="px-4 py-4 text-black font-sans font-normal text-xs sm:text-sm">
                                {tier.label}
                              </td>
                              <td className="px-4 py-4 text-center">
                                {tier.isFlat ? (
                                  <span className="bg-gray-100 text-black border border-gray-300 px-2 py-1 rounded text-xs font-sans font-bold">Fixed</span>
                                ) : (
                                  <span className="bg-green-50 text-secondary border border-green-100 px-2 py-1 rounded text-xs font-sans font-bold">{tier.rate}%</span>
                                )}
                              </td>
                              <td className="px-4 py-4 text-right text-black font-sans font-bold">
                                {formatCurrency(tier.feeCalculated)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        {/* Total Footer Row */}
                        <tfoot className="bg-gray-100 font-bold border-t-2 border-gray-200 text-black">
                          <tr>
                            <td colSpan={2} className="px-4 py-4 text-right font-sans">{t.total}</td>
                            <td className="px-4 py-4 text-right text-base text-secondary font-sans">
                              {formatCurrency(result.totalFee)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* AI Assistant Card - Compact Version */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
            <div className="bg-black p-4 text-white flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-secondary" />
              <h2 className="font-serif font-bold text-lg">{t.aiAssistant}</h2>
            </div>
            
            <div className="p-6 bg-white">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 min-h-[80px] mb-4 shadow-inner">
                {aiResponse ? (
                  <div className="prose prose-sm text-black font-sans font-normal text-sm">
                    <p>{aiResponse}</p>
                  </div>
                ) : (
                  <div className="text-gray-400 text-xs font-sans font-bold flex flex-col items-center justify-center h-full gap-2 py-2">
                    <MessageSquare className="w-6 h-6 opacity-20" />
                    <p>{language === 'np' ? "नेपालको अदालत शुल्क बारे मलाई केहि सोध्नुहोस्..." : "Ask me anything about Nepal's court fees..."}</p>
                  </div>
                )}
              </div>

              <form onSubmit={handleAskAI} className="relative">
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder={t.askAiPlaceholder}
                  className="w-full pl-4 pr-12 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-secondary focus:ring-0 outline-none text-sm font-sans font-normal text-black shadow-sm"
                  disabled={isLoadingAI}
                />
                <button
                  type="submit"
                  disabled={isLoadingAI || !aiPrompt.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-secondary text-white rounded hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoadingAI ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>
        
        </div>
      </div>
      
      {/* Spacer */}
      <div className="h-96"></div>

      {/* Appointment CTA Section - Pushed to bottom */}
      <div className="w-full relative z-10">
        <AppointmentCTA />
      </div>
    </main>
  );
};

export default Calculator;