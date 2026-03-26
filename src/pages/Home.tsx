import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap, Dumbbell, Utensils, Music, Target, Heart, ArrowRight, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"
            alt="Gym Hero"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-white/10 text-fit-orange font-heading font-bold text-xs tracking-[0.3em] uppercase mb-8 bg-white/5 backdrop-blur-md">
              Pune's Elite Performance Hub
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter leading-[0.9] text-white mb-8">
              WHERE STRENGTH <br /> MEETS <span className="text-fit-orange">DISCIPLINE</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light">
              Invest in your performance with the precision of a private bank. The elite vault where physical assets are forged.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/join" className="bg-fit-orange text-white px-10 py-5 rounded-pill font-heading font-bold text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-fit-orange/20 text-center">
                Get Started
              </Link>
              <Link to="/pricing" className="border border-white/20 text-white px-10 py-5 rounded-pill font-heading font-bold text-lg uppercase tracking-widest hover:bg-white/5 transition-colors text-center">
                Explore Plans
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Performance Ticker */}
        <div className="absolute bottom-0 w-full bg-white/5 border-t border-white/5 py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-16 items-center">
                <div className="flex items-center gap-4 text-fit-orange font-heading font-bold tracking-[0.2em] uppercase text-sm">
                  <Zap size={16} /> 500+ VAULT MEMBERS
                </div>
                <div className="flex items-center gap-4 text-white/40 font-heading font-bold tracking-[0.2em] uppercase text-sm">
                  <div className="w-2 h-2 rounded-full bg-white/20" /> 6 EXPERT TRAINERS
                </div>
                <div className="flex items-center gap-4 text-fit-orange font-heading font-bold tracking-[0.2em] uppercase text-sm">
                  <Zap size={16} /> 24/7 BIOMETRIC ACCESS
                </div>
                <div className="flex items-center gap-4 text-white/40 font-heading font-bold tracking-[0.2em] uppercase text-sm">
                  <div className="w-2 h-2 rounded-full bg-white/20" /> 4.9★ GOOGLE RATING
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl text-white mb-4">WHAT WE <span className="text-fit-orange">OFFER</span></h2>
              <div className="w-24 h-1 bg-fit-orange" />
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-fit-orange font-heading font-bold uppercase tracking-widest hover:gap-4 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Strength Training', icon: <Dumbbell />, desc: 'Free weights, machines, and progressive overload.' },
              { title: 'Cardio Sessions', icon: <Zap />, desc: 'Treadmills, cycling, and HIIT circuits.' },
              { title: 'Protein Meals', icon: <Utensils />, desc: 'Macro-tracked meals and post-workout shakes.' },
              { title: 'Zumba Classes', icon: <Music />, desc: 'Group dance fitness, beginner-friendly slots.' },
              { title: 'Kickboxing', icon: <Target />, desc: 'Combat fitness and technique training.' },
              { title: 'Yoga Classes', icon: <Heart />, desc: 'Flexibility and mental wellness focus.' },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-[#2A2A2A] rounded-soft border border-white/5 hover:border-fit-orange/30 transition-all group"
              >
                <div className="text-fit-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl text-white mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="section-padding bg-[#181919]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-white mb-4">SIMPLE, <span className="text-fit-orange">TRANSPARENT</span> PRICING</h2>
            <div className="w-24 h-1 bg-fit-orange mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Basic', price: '1,800', period: '/month' },
              { name: 'Premium', price: '10,000', period: '/6 months', popular: true },
              { name: 'Elite', price: '12,000', period: '/12 months' },
            ].map((plan, idx) => (
              <div key={idx} className={cn(
                "p-10 bg-[#2A2A2A] rounded-soft border-t-4 flex flex-col items-center text-center",
                plan.popular ? "border-fit-orange scale-105 z-10" : "border-transparent"
              )}>
                <h3 className="text-xl text-white/60 mb-4 uppercase tracking-widest">{plan.name}</h3>
                <div className="text-5xl font-heading font-bold text-white mb-2">₹{plan.price}</div>
                <div className="text-white/40 text-sm mb-8 uppercase tracking-widest">{plan.period}</div>
                <Link to="/pricing" className="w-full py-3 rounded-pill border border-white/10 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                  Select
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl text-white mb-4">WHAT OUR <span className="text-fit-orange">MEMBERS</span> SAY</h2>
            <div className="w-24 h-1 bg-fit-orange" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Aryan Sharma', quote: 'The best gym in Pune. The equipment is top-notch and the vibe is unmatched.', rating: 5 },
              { name: 'Priya Patel', quote: 'FITBANK transformed my fitness journey. The trainers are true professionals.', rating: 5 },
              { name: 'Rohan Deshmukh', quote: 'Premium experience from start to finish. The nutrition bar is a game changer.', rating: 5 },
            ].map((t, idx) => (
              <div key={idx} className="p-10 bg-[#2A2A2A] rounded-soft border border-white/5">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="fill-fit-orange text-fit-orange" />)}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fit-orange/20 flex items-center justify-center text-fit-orange font-bold">
                    {t.name[0]}
                  </div>
                  <div className="font-heading font-bold text-white uppercase tracking-wider">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="section-padding bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl text-white mb-8">READY TO START YOUR <span className="text-fit-orange">JOURNEY?</span></h2>
            <p className="text-xl text-white/60 mb-12">Join the elite performance vault today and unlock your true potential.</p>
            <Link to="/join" className="inline-block bg-fit-orange text-white px-16 py-6 rounded-pill font-heading font-bold text-2xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-fit-orange/30">
              Join Now — Apply for Membership
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
