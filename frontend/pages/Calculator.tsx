

import React, { useState, useRef, useEffect } from 'react';
import {
  Calculator as CalculatorIcon,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  RefreshCw,
  Sparkles,
  MessageSquare,
  Send,
  Loader2,
  BookOpen,
  AlertTriangle
} from 'lucide-react';
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

type TransactionType = 'buy' | 'sell';

interface ShareResultCommon {
  transactionType: TransactionType;
  commission: number;
  sebonFee: number;
  dpCharge: number;
}

interface ShareResultBuy extends ShareResultCommon {
  transactionType: 'buy';
  txnValue: number;
  totalAmount: number;
  effectiveCostPerShare: number;
}

interface ShareResultSell extends ShareResultCommon {
  transactionType: 'sell';
  investorType: 'individual' | 'institutional';
  sellValue: number;
  grossReceivable: number;
  costBasis: number;
  capitalGain: number;
  taxRate: number;
  capitalGainTax: number;
  netReceivable: number;
  profitLoss: number;
}

type ShareResult = ShareResultBuy | ShareResultSell;

interface FlatFeeOption {
  id: string;
  label: string;
  fee: number;
  note?: string;
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

// --- Share Calculator Helpers ---

const dpCharge = 25;
const sebonRate = 0.00015;

const getCommission = (amount: number) => {
  if (amount <= 50000) return Math.max(amount * 0.0036, 10);
  if (amount <= 500000) return amount * 0.0033;
  if (amount <= 2000000) return amount * 0.0031;
  if (amount <= 10000000) return amount * 0.0027;
  return amount * 0.0024;
};

// --- Gemini API Logic with STRICT scope ---

const LEGAL_CONTEXT = `
परिच्छेद–६ अदालती शुल्क सम्बन्धी व्यवस्था
६३. अदालती शुल्क लाग्नेः ...
७४. ... (भित्रको सबै विषयवस्तु प्रयोग गरिएको छ)
७५. ...
८४. अदालती शुल्कलाई प्राथमिकता दिई भराउनु पर्नेः
`;

const callGeminiAPI = async (prompt: string): Promise<string> => {
  const apiKey =
    import.meta.env.VITE_GEMINI_API_KEY ||
    // fallback for anyone still using the old name
    import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    return "AI is not configured. Please add VITE_GEMINI_API_KEY (or VITE_API_KEY) to your environment.";
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const systemPrompt = `
IDENTITY & ROLE:
You are Nyaya (न्याय), a narrow-scope AI for Samanyayik Legal Service and Research Center Pvt. Ltd.

ALLOWED TOPICS (ONLY):
1) Court Fee calculations strictly per Chapter 6 (Sections 63-84) below.
2) Company info: Managing Director Advocate Jiwan Kumar Acharya; Advocates: Jiwan Kumar Acharya, Susma Dhakal; Research Assistants: Alaka Wagle, Sandip Thapa.
3) Explaining Sections 63-84 text below.

FORBIDDEN (must refuse):
- General legal advice (divorce types, custody, writs, criminal, etc.).
- Anything outside court fees or company info.

Refusal template (Nepali):
"मेरो दायरा केवल अदालती शुल्क (Court Fees) र कार्यालयको विवरणमा सीमित छ। यो विषयमा कानुनी सल्लाहका लागि कृपया हाम्रो कार्यालयका अधिवक्ताहरूसँग सम्पर्क गर्नुहोस्: फोन: 9861292120 | इमेल: law.samanyayik@gmail.com"

Refusal template (English):
"My scope is limited to Court Fee calculations and company details. Please contact our advocates for other legal advice: Phone: 9861292120 | Email: law.samanyayik@gmail.com"

LEGAL CONTEXT (source of truth):
${LEGAL_CONTEXT}
`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Gemini request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
  } catch (error) {
    console.error("Gemini API error", error);
    return "Error connecting to AI service. Please check your internet connection.";
  }
};

// --- Main Component ---

const Calculator: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  
  const [amountStr, setAmountStr] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Flat fee calculator
  const flatFeeOptions: FlatFeeOption[] = [
    { id: '500', label: 'Flat Rs. 500 (e.g., registration/name transfer related)', fee: 500 },
    { id: '1000', label: 'Flat Rs. 1,000 (e.g., partition or deed cancellation)', fee: 1000 },
    { id: '2500', label: 'Flat Rs. 2,500 (other unvalued contract-related disputes)', fee: 2500 },
  ];
  const [flatSelection, setFlatSelection] = useState<string>('500');
  const [flatResult, setFlatResult] = useState<number | null>(null);
  
  // AI State
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);

  // Share calculator state
  const [transactionType, setTransactionType] = useState<TransactionType>('buy');
  const [shareQuantity, setShareQuantity] = useState<string>('');
  const [purchasePrice, setPurchasePrice] = useState<string>('');
  const [sellPrice, setSellPrice] = useState<string>('');
  const [isWACC, setIsWACC] = useState<boolean>(false);
  const [investorType, setInvestorType] = useState<'individual' | 'institutional'>('individual');
  const [individualTaxRate, setIndividualTaxRate] = useState<string>('0.05');
  const [shareResult, setShareResult] = useState<ShareResult | null>(null);
  const [shareError, setShareError] = useState<string | null>(null);

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

  const handleFlatCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const option = flatFeeOptions.find((o) => o.id === flatSelection);
    setFlatResult(option ? option.fee : null);
  };

  const handleShareCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShareError(null);
    setShareResult(null);

    const qty = parseFloat(shareQuantity);
    const buyPrice = parseFloat(purchasePrice);
    const sellP = parseFloat(sellPrice);

    if (!qty || qty <= 0 || !buyPrice || buyPrice <= 0) {
      setShareError("Please enter valid quantity and purchase price.");
      return;
    }

    if (transactionType === 'buy') {
      const txnValue = buyPrice * qty;
      const commission = getCommission(txnValue);
      const sebonFeeAmount = txnValue * sebonRate;
      const totalPayable = txnValue + commission + sebonFeeAmount + dpCharge;
      const effectivePerShare = totalPayable / qty;

      setShareResult({
        transactionType: 'buy',
        txnValue,
        commission,
        sebonFee: sebonFeeAmount,
        dpCharge,
        totalAmount: totalPayable,
        effectiveCostPerShare: effectivePerShare
      });
      return;
    }

    // sell flow
    if (!sellP || sellP <= 0) {
      setShareError("Please enter a valid sell price for sell transaction.");
      return;
    }

    const sellValue = sellP * qty;
    const sellCommission = getCommission(sellValue);
    const sellSebonFee = sellValue * sebonRate;
    const grossReceivable = sellValue - sellCommission - sellSebonFee - dpCharge;

    let costBasis: number;
    if (isWACC) {
      costBasis = buyPrice * qty;
    } else {
      const buyValue = buyPrice * qty;
      const buyCommission = getCommission(buyValue);
      const buySebon = buyValue * sebonRate;
      costBasis = buyValue + buyCommission + buySebon + dpCharge;
    }

    const capitalGain = Math.max(0, grossReceivable - costBasis);
    const appliedTaxRate = investorType === 'institutional' ? 0.10 : parseFloat(individualTaxRate || '0.05');
    const capitalGainTax = capitalGain * appliedTaxRate;
    const netReceivable = grossReceivable - capitalGainTax;
    const profitLoss = netReceivable - costBasis;

    setShareResult({
      transactionType: 'sell',
      investorType,
      sellValue,
      commission: sellCommission,
      sebonFee: sellSebonFee,
      dpCharge,
      grossReceivable,
      costBasis,
      capitalGain,
      taxRate: appliedTaxRate,
      capitalGainTax,
      netReceivable,
      profitLoss
    });
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

  const resetShare = () => {
    setTransactionType('buy');
    setShareQuantity('');
    setPurchasePrice('');
    setSellPrice('');
    setIsWACC(false);
    setInvestorType('individual');
    setIndividualTaxRate('0.05');
    setShareResult(null);
    setShareError(null);
  };

  const resetFlat = () => {
    setFlatSelection('500');
    setFlatResult(null);
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

          {/* Share Transaction Calculator */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
            <div className="bg-secondary p-8 text-white text-center">
              <h2 className="text-2xl font-serif font-bold flex justify-center items-center gap-3">
                <CalculatorIcon className="w-6 h-6" />
                Nepal Share Calculator
              </h2>
              <p className="text-green-100 text-sm mt-2 font-sans font-bold opacity-90">Buy/Sell breakdown with fees & capital gain</p>
            </div>
            <div className="p-8 space-y-8">
              <form onSubmit={handleShareCalculate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-sans font-bold text-black mb-2">Transaction Type</label>
                    <select
                      value={transactionType}
                      onChange={(e) => setTransactionType(e.target.value as TransactionType)}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-secondary focus:ring-0 outline-none text-black shadow-sm font-sans"
                    >
                      <option value="buy">Buy</option>
                      <option value="sell">Sell</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-bold text-black mb-2">Share Quantity</label>
                    <input
                      type="number"
                      min="1"
                      value={shareQuantity}
                      onChange={(e) => setShareQuantity(e.target.value)}
                      placeholder="e.g., 100"
                      className="w-full px-4 py-3 text-lg bg-white border-2 border-gray-300 rounded-lg focus:border-secondary focus:ring-0 outline-none text-black shadow-sm font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-bold text-black mb-2">Purchase Price (per share, Rs.)</label>
                    <input
                      type="number"
                      min="0.01"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      placeholder="Enter buy price"
                      className="w-full px-4 py-3 text-lg bg-white border-2 border-gray-300 rounded-lg focus:border-secondary focus:ring-0 outline-none text-black shadow-sm font-sans"
                    />
                  </div>
                  {transactionType === 'sell' && (
                    <div>
                      <label className="block text-sm font-sans font-bold text-black mb-2">Sell Price (per share, Rs.)</label>
                      <input
                        type="number"
                        min="0.01"
                        value={sellPrice}
                        onChange={(e) => setSellPrice(e.target.value)}
                        placeholder="e.g., 1500"
                        className="w-full px-4 py-3 text-lg bg-white border-2 border-gray-300 rounded-lg focus:border-secondary focus:ring-0 outline-none text-black shadow-sm font-sans"
                      />
                    </div>
                  )}
                </div>

                {transactionType === 'sell' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-start gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-secondary transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isWACC}
                        onChange={(e) => setIsWACC(e.target.checked)}
                        className="mt-1 accent-green-700"
                      />
                      <div>
                        <div className="text-black font-sans font-semibold">Use purchase price as WACC</div>
                        <p className="text-xs text-gray-600">Skip recalculating buy-side costs; treat entered purchase price as weighted average cost.</p>
                      </div>
                    </label>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-sans font-bold text-black mb-2">Investor Type</label>
                        <select
                          value={investorType}
                          onChange={(e) => setInvestorType(e.target.value as 'individual' | 'institutional')}
                          className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-secondary focus:ring-0 outline-none text-black shadow-sm font-sans"
                        >
                          <option value="individual">Individual</option>
                          <option value="institutional">Institutional</option>
                        </select>
                      </div>

                      {investorType === 'individual' && (
                        <div>
                          <label className="block text-sm font-sans font-bold text-black mb-2">Capital Gain Tax Rate (Individual)</label>
                          <select
                            value={individualTaxRate}
                            onChange={(e) => setIndividualTaxRate(e.target.value)}
                            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-secondary focus:ring-0 outline-none text-black shadow-sm font-sans"
                          >
                            <option value="0.075">7.5% (Holding &lt; 1 year)</option>
                            <option value="0.05">5% (Holding ≥ 1 year)</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {shareError && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 p-4 rounded-lg text-sm font-sans font-bold">
                    <AlertCircle className="w-5 h-5" />
                    {shareError}
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-secondary hover:bg-green-800 active:scale-[0.98] text-white font-sans font-bold py-4 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Calculate
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {shareResult && (
                    <button
                      type="button"
                      onClick={resetShare}
                      className="px-6 bg-gray-100 hover:bg-gray-200 text-black border border-gray-300 rounded-lg transition-colors"
                      aria-label="Reset share calculator"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </form>

              {shareResult && (
                <div className="space-y-8 animate-fade-in-up">
                  <div className="border-t border-gray-100 pt-6">
                    <div className="bg-green-50 border-2 border-green-100 rounded-xl p-6">
                      <div className="flex items-center gap-2 text-secondary text-sm font-sans font-bold uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4" />
                        {shareResult.transactionType === 'buy' ? 'Buy Summary' : 'Sell Summary'}
                      </div>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black font-sans text-sm">
                        <div>
                          <div className="text-gray-600 text-xs">Commission</div>
                          <div className="font-bold">{formatCurrency(shareResult.commission)}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-xs">SEBON Fee</div>
                          <div className="font-bold">{formatCurrency(shareResult.sebonFee)}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-xs">DP Charge</div>
                          <div className="font-bold">{formatCurrency(shareResult.dpCharge)}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {shareResult.transactionType === 'buy' && (
                    <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
                      <table className="w-full text-sm">
                        <tbody className="divide-y divide-gray-100">
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Transaction Value</td>
                            <td className="px-4 py-3 text-right font-sans">{formatCurrency(shareResult.txnValue)}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Total Payable</td>
                            <td className="px-4 py-3 text-right font-sans font-bold text-secondary">{formatCurrency(shareResult.totalAmount)}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Effective Cost / Share</td>
                            <td className="px-4 py-3 text-right font-sans">{formatCurrency(shareResult.effectiveCostPerShare)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {shareResult.transactionType === 'sell' && (
                    <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
                      <table className="w-full text-sm">
                        <tbody className="divide-y divide-gray-100">
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Sell Value</td>
                            <td className="px-4 py-3 text-right font-sans">{formatCurrency(shareResult.sellValue)}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Gross Receivable</td>
                            <td className="px-4 py-3 text-right font-sans">{formatCurrency(shareResult.grossReceivable)}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Cost Basis</td>
                            <td className="px-4 py-3 text-right font-sans">{formatCurrency(shareResult.costBasis)}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Capital Gain</td>
                            <td className="px-4 py-3 text-right font-sans">{formatCurrency(shareResult.capitalGain)}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Tax Rate</td>
                            <td className="px-4 py-3 text-right font-sans">{(shareResult.taxRate * 100).toFixed(1)}%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Capital Gain Tax</td>
                            <td className="px-4 py-3 text-right font-sans">{formatCurrency(shareResult.capitalGainTax)}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Net Receivable</td>
                            <td className="px-4 py-3 text-right font-sans font-bold text-secondary">{formatCurrency(shareResult.netReceivable)}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black font-sans font-semibold">Profit / Loss</td>
                            <td className={`px-4 py-3 text-right font-sans font-bold ${shareResult.profitLoss >= 0 ? 'text-green-700' : 'text-red-600'}`}>
                              {formatCurrency(shareResult.profitLoss)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Flat Fee Calculator (additional) */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
            <div className="bg-secondary p-8 text-white text-center">
              <h2 className="text-2xl font-serif font-bold flex justify-center items-center gap-3">
                <CalculatorIcon className="w-6 h-6" />
                Flat Fee Calculator
              </h2>
              <p className="text-green-100 text-sm mt-2 font-sans font-bold opacity-90">One-time fees from Chapter 6 (Sections 70-71)</p>
            </div>
            <div className="p-8 space-y-8">
              <form onSubmit={handleFlatCalculate} className="space-y-6">
                <div>
                  <label className="block text-sm font-sans font-bold text-black mb-3">
                    Select scenario
                  </label>
                  <div className="space-y-3">
                    {flatFeeOptions.map((option) => (
                      <label key={option.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-secondary transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="flat-fee"
                          value={option.id}
                          checked={flatSelection === option.id}
                          onChange={(e) => setFlatSelection(e.target.value)}
                          className="mt-1 accent-green-700"
                        />
                        <div>
                          <div className="text-black font-sans font-semibold">{option.label}</div>
                          <div className="text-secondary font-sans font-bold text-sm">{formatCurrency(option.fee)}</div>
                          {option.note && <p className="text-xs text-gray-600 mt-1">{option.note}</p>}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-secondary hover:bg-green-800 active:scale-[0.98] text-white font-sans font-bold py-4 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Calculate
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {flatResult !== null && (
                    <button
                      type="button"
                      onClick={resetFlat}
                      className="px-6 bg-gray-100 hover:bg-gray-200 text-black border border-gray-300 rounded-lg transition-colors"
                      aria-label="Reset flat calculator"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </form>

              {flatResult !== null && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="border-t border-gray-100 pt-6">
                    <div className="bg-green-50 border-2 border-green-100 rounded-xl p-6 text-center">
                      <span className="text-secondary text-sm font-sans font-bold uppercase tracking-wide">Flat Fee</span>
                      <div className="text-4xl font-serif font-bold text-black mt-2 mb-3">
                        {formatCurrency(flatResult)}
                      </div>
                      <div className="text-sm text-secondary font-sans font-bold border-t border-green-200 pt-3 mt-3">
                        {numberToWords(flatResult)}
                      </div>
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
          
          {/* Dynamic Disclaimer Section */}
          {(result || aiResponse || flatResult !== null || shareResult) && (
            <div className="flex gap-3 bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-xs md:text-sm">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-600" aria-hidden="true" />
              <div className="space-y-4 w-full">
                
                {result && (
                  <div>
                    <div className="font-bold mb-1">Calculator Disclaimer</div>
                    <p className="mb-1">
                      This estimation is based on Section 69 of the Civil Procedure Code. For official verification, consult Samanyayik Legal Service.
                    </p>
                  </div>
                )}

                {flatResult !== null && (
                  <div>
                    <div className="font-bold mb-1">Flat Fee Disclaimer</div>
                    <p className="mb-1">
                      Flat fees reflect Sections 70-71 scenarios. Confirm applicability with legal counsel.
                    </p>
                  </div>
                )}

                {shareResult && (
                  <div>
                    <div className="font-bold mb-1">Share Calculator Disclaimer</div>
                    <p className="mb-1">
                      Brokerage tiers and SEBON/DP charges are applied per current slabs; verify rates with your broker for official trades.
                    </p>
                  </div>
                )}

                {aiResponse && (
                  <div>
                    <div className="font-bold mb-1">Nyaya AI Disclaimer</div>
                    <p className="mb-1">
                      Nyaya is an AI assistant. Responses may not be legally binding. For urgent matters, contact Advocate Jiwan Kumar Acharya's team.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        
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