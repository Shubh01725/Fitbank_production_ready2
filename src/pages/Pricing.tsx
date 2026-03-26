import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const Pricing = () => {
  const faqs = [
    { q: 'Can I cancel my membership?', a: 'Yes, we have a flexible cancellation policy. Basic plans can be cancelled with a 30-day notice.' },
    { q: 'How do I book classes?', a: 'Classes can be booked via our mobile app or at the front desk up to 48 hours in advance.' },
    { q: 'Is personal training included?', a: 'Elite plans include 4 PT sessions per month. Other plans can add PT as an add-on.' },
    { q: 'Do you offer student discounts?', a: 'Yes, we offer a 15% discount for students with a valid ID card.' },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-32">
      <section className="section-padding text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl text-white mb-6">INVEST IN <span className="text-fit-orange">YOURSELF</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">No hidden fees. No lock-ins. Just results.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Basic */}
            <div className="p-12 bg-[#2A2A2A] rounded-[20px] flex flex-col justify-between border border-white/5">
              <div>
                <h3 className="text-xl text-white/40 uppercase tracking-widest mb-8">Basic</h3>
                <div className="text-6xl font-heading font-bold text-white mb-2">₹1,800</div>
                <div className="text-white/30 text-sm mb-12 uppercase tracking-widest">/ month</div>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-3 text-white/80"><Check size={20} className="text-fit-orange" /> Gym Floor Access</li>
                  <li className="flex items-center gap-3 text-white/80"><Check size={20} className="text-fit-orange" /> Cardio Equipment</li>
                  <li className="flex items-center gap-3 text-white/80"><Check size={20} className="text-fit-orange" /> 1 Group Class/Week</li>
                </ul>
              </div>
              <Link to="/join" className="w-full py-4 rounded-pill border border-white/10 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/5 transition-colors text-center">
                Get Basic
              </Link>
            </div>

            {/* Premium */}
            <div className="p-12 bg-[#2A2A2A] rounded-[20px] flex flex-col justify-between border-2 border-fit-orange relative scale-105 z-10 shadow-2xl shadow-fit-orange/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fit-orange text-white text-xs font-bold uppercase tracking-widest px-6 py-1.5 rounded-full">
                Most Popular
              </div>
              <div>
                <h3 className="text-xl text-fit-orange uppercase tracking-widest mb-8">Premium</h3>
                <div className="text-6xl font-heading font-bold text-white mb-2">₹10,000</div>
                <div className="text-white/30 text-sm mb-12 uppercase tracking-widest">/ 6 months</div>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-3 text-white"><Check size={20} className="text-fit-orange" /> All Basic Features</li>
                  <li className="flex items-center gap-3 text-white"><Check size={20} className="text-fit-orange" /> Unlimited Group Classes</li>
                  <li className="flex items-center gap-3 text-white"><Check size={20} className="text-fit-orange" /> Nutrition Consultation</li>
                </ul>
              </div>
              <Link to="/join" className="w-full py-5 rounded-pill bg-fit-orange text-white font-heading font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform text-center shadow-lg shadow-fit-orange/20">
                Get Premium
              </Link>
            </div>

            {/* Elite */}
            <div className="p-12 bg-[#2A2A2A] rounded-[20px] flex flex-col justify-between border border-white/5">
              <div>
                <h3 className="text-xl text-white/40 uppercase tracking-widest mb-8">Elite</h3>
                <div className="text-6xl font-heading font-bold text-white mb-2">₹12,000</div>
                <div className="text-white/30 text-sm mb-12 uppercase tracking-widest">/ 12 months</div>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-3 text-white/80"><Check size={20} className="text-fit-orange" /> All Premium Features</li>
                  <li className="flex items-center gap-3 text-white/80"><Check size={20} className="text-fit-orange" /> Personal Trainer Sessions</li>
                  <li className="flex items-center gap-3 text-white/80"><Check size={20} className="text-fit-orange" /> Priority Slot Booking</li>
                  <li className="flex items-center gap-3 text-white/80"><Check size={20} className="text-fit-orange" /> Custom Meal Plan</li>
                </ul>
              </div>
              <Link to="/join" className="w-full py-4 rounded-pill border border-white/10 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/5 transition-colors text-center">
                Get Elite
              </Link>
            </div>
          </div>

          <div className="mt-16 p-6 rounded-pill border border-fit-orange/30 bg-fit-orange/5 text-center">
            <p className="text-fit-orange font-heading font-bold uppercase tracking-widest">
              Elite saves you ₹9,600 vs monthly billing
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#181919]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl text-white mb-12 text-center">FREQUENTLY ASKED <span className="text-fit-orange">QUESTIONS</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#2A2A2A] rounded-soft overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left"
                >
                  <span className="text-lg text-white font-bold">{faq.q}</span>
                  <ChevronDown className={cn("text-fit-orange transition-transform", openFaq === i && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6 text-white/60 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <h2 className="text-3xl text-white mb-8">Not sure which plan? Talk to us.</h2>
        <Link to="/contact" className="inline-block border border-white/20 text-white px-12 py-4 rounded-pill font-heading font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Pricing;
