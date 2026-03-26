import { Link } from 'react-router-dom';
import { Dumbbell, Zap, Utensils, Music, Target, Heart, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const Services = () => {
  const services = [
    { 
      title: 'Strength Training', 
      icon: <Dumbbell size={48} />, 
      desc: 'Free weights, machines, and progressive overload programs designed for maximum muscle growth and power.',
      features: ['Modern Free Weights', 'Hammer Strength Machines', 'Custom Power Racks', 'Olympic Lifting Platforms']
    },
    { 
      title: 'Cardio Sessions', 
      icon: <Zap size={48} />, 
      desc: 'High-end treadmills, cycling, and HIIT circuits to push your endurance and cardiovascular health to the limit.',
      features: ['Curved Treadmills', 'Concept2 Rowers', 'Assault Bikes', 'Heart Rate Monitoring']
    },
    { 
      title: 'Protein Meals', 
      icon: <Utensils size={48} />, 
      desc: 'Our in-gym nutrition bar provides macro-tracked meals and post-workout shakes to fuel your recovery.',
      features: ['Custom Meal Plans', 'Fresh Protein Shakes', 'Macro-Balanced Bowls', 'Nutrition Consultation']
    },
    { 
      title: 'Zumba Classes', 
      icon: <Music size={48} />, 
      desc: 'High-energy group dance fitness classes that are beginner-friendly and scheduled daily for your convenience.',
      features: ['Expert Instructors', 'Modern Sound System', 'Spacious Studio', 'Daily Time Slots']
    },
    { 
      title: 'Kickboxing', 
      icon: <Target size={48} />, 
      desc: 'Combat fitness and technique training sessions that are perfect for stress-busting and full-body conditioning.',
      features: ['Heavy Bags', 'Pad Work Sessions', 'Technique Focus', 'Small Group Batches']
    },
    { 
      title: 'Yoga Classes', 
      icon: <Heart size={48} />, 
      desc: 'Morning and evening batches focused on flexibility, mobility, and mental wellness in a serene environment.',
      features: ['Hatha & Vinyasa', 'Meditation Sessions', 'Mobility Workshops', 'Serene Studio Vibe']
    },
  ];

  return (
    <div className="pt-32">
      <section className="section-padding text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl text-white mb-6">OUR <span className="text-fit-orange">SERVICES</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Everything you need under one roof to build your strongest self.</p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          {services.map((s, idx) => (
            <div key={idx} className={cn(
              "flex flex-col lg:flex-row gap-12 items-center",
              idx % 2 !== 0 && "lg:flex-row-reverse"
            )}>
              <div className="flex-1 space-y-8">
                <div className="text-fit-orange">{s.icon}</div>
                <h2 className="text-4xl md:text-5xl text-white">{s.title}</h2>
                <p className="text-xl text-white/60 leading-relaxed">{s.desc}</p>
                <Link to="/join" className="inline-block bg-fit-orange text-white px-10 py-4 rounded-pill font-heading font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                  Get Started
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="p-10 bg-[#2A2A2A] rounded-soft border border-white/5">
                  <h3 className="text-xl text-white/40 uppercase tracking-[0.2em] mb-8">What's Included</h3>
                  <ul className="space-y-6">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-4 text-white text-lg">
                        <CheckCircle2 className="text-fit-orange" size={24} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#181919]">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col md:flex-row items-center justify-center gap-8">
          <h2 className="text-3xl text-white">Unlock All Services With One Membership</h2>
          <Link to="/join" className="bg-fit-orange text-white px-12 py-4 rounded-pill font-heading font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
