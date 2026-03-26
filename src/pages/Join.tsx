import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

const Join = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<string | null>('Premium');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    emergency: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleComplete = () => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-[#2A2A2A] p-12 rounded-soft text-center border border-fit-orange/30"
        >
          <div className="w-24 h-24 bg-fit-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} className="text-fit-orange" />
          </div>
          <h1 className="text-4xl text-white mb-4 uppercase">Welcome to FITBANK, {formData.name || 'Champion'}!</h1>
          <p className="text-white/60 mb-12 leading-relaxed">
            Your membership is now active. You will receive a confirmation email with your biometric access details shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-4 rounded-pill border border-white/10 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
              Download Receipt
            </button>
            <Link to="/" className="flex-1 py-4 rounded-pill bg-fit-orange text-white font-heading font-bold uppercase tracking-widest hover:scale-105 transition-transform text-center">
              Go to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
          {[1, 2, 3].map((s) => (
            <div key={s} className="relative z-10 flex flex-col items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500",
                step >= s ? "bg-fit-orange text-white" : "bg-charcoal border border-white/20 text-white/40"
              )}>
                {step > s ? <Check size={20} /> : s}
              </div>
              <span className={cn(
                "mt-2 text-xs font-heading font-bold uppercase tracking-widest",
                step >= s ? "text-fit-orange" : "text-white/20"
              )}>
                {s === 1 ? 'Plan' : s === 2 ? 'Details' : 'Payment'}
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <h2 className="text-4xl text-white text-center">CHOOSE YOUR <span className="text-fit-orange">PLAN</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Basic', price: '₹1,800' },
                  { name: 'Premium', price: '₹10,000' },
                  { name: 'Elite', price: '₹12,000' },
                ].map((plan) => (
                  <button 
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={cn(
                      "p-8 rounded-soft border-2 transition-all text-left",
                      selectedPlan === plan.name ? "border-fit-orange bg-fit-orange/5 shadow-lg shadow-fit-orange/10" : "border-white/5 bg-[#2A2A2A] hover:border-white/20"
                    )}
                  >
                    <div className="text-white/40 uppercase tracking-widest text-xs mb-4">{plan.name}</div>
                    <div className="text-3xl font-heading font-bold text-white">{plan.price}</div>
                  </button>
                ))}
              </div>
              <div className="text-center">
                <button 
                  onClick={() => setStep(2)}
                  className="bg-fit-orange text-white px-16 py-4 rounded-pill font-heading font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Continue <ArrowRight className="inline ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <h2 className="text-4xl text-white text-center">YOUR <span className="text-fit-orange">DETAILS</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-4">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-4">Date of Birth</label>
                  <input type="date" className="w-full bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-4">Emergency Contact</label>
                  <input type="tel" placeholder="Name & Number" className="w-full bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none" />
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 rounded-pill border border-white/10 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="flex-2 bg-fit-orange text-white py-4 rounded-pill font-heading font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Continue to Payment <ArrowRight className="inline ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <h2 className="text-4xl text-white text-center">SECURE <span className="text-fit-orange">PAYMENT</span></h2>
              
              <div className="p-8 bg-[#2A2A2A] rounded-soft border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/40 uppercase tracking-widest text-xs">Selected Plan</span>
                  <span className="text-fit-orange font-bold uppercase tracking-widest">{selectedPlan}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/40 uppercase tracking-widest text-xs">Total Amount</span>
                  <span className="text-2xl font-heading font-bold text-white">
                    {selectedPlan === 'Basic' ? '₹1,800' : selectedPlan === 'Premium' ? '₹10,000' : '₹12,000'}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  {['UPI', 'Card', 'Net Banking'].map((m) => (
                    <button key={m} className="px-8 py-3 rounded-pill bg-[#2A2A2A] border border-white/10 text-white font-bold uppercase tracking-widest hover:border-fit-orange transition-colors">
                      {m}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <input type="text" placeholder="Card Number" className="w-full bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="w-full bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none" />
                    <input type="text" placeholder="CVV" className="w-full bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <input type="text" placeholder="Promo Code" className="flex-1 bg-[#2A2A2A] border-none rounded-pill p-4 text-white focus:ring-2 focus:ring-fit-orange outline-none" />
                  <button className="px-8 py-4 rounded-pill border border-white/10 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">Apply</button>
                </div>
              </div>

              <div className="space-y-6">
                <button 
                  onClick={handleComplete}
                  className="w-full bg-fit-orange text-white py-6 rounded-pill font-heading font-bold text-xl uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-2xl shadow-fit-orange/30"
                >
                  Complete Payment & Activate Membership
                </button>
                <div className="flex items-center justify-center gap-2 text-white/30 text-xs uppercase tracking-widest">
                  <Lock size={12} /> 256-bit secure payment
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Join;
