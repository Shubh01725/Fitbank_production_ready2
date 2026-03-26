import { Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32">
      <section className="section-padding text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl text-white mb-6">THE FITBANK <span className="text-fit-orange">STORY</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Founded in Pune with one mission — make elite fitness accessible.</p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl text-white">OUR PHILOSOPHY</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              FITBANK was born from the idea that physical health is the ultimate asset. Like a bank manages your wealth, we manage your kinetic potential. Our facility in Pune is designed for those who take their performance seriously.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              We've created a community where discipline is celebrated and results are the only currency that matters. No fluff, no distractions — just pure performance.
            </p>
          </div>
          <div className="rounded-soft overflow-hidden bg-[#2A2A2A] aspect-video relative">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-60"
              alt="Gym Interior"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Owner */}
      <section className="section-padding bg-[#181919]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-48 h-48 rounded-full bg-fit-orange/20 mx-auto mb-8 overflow-hidden border-4 border-fit-orange">
             <img 
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale"
              alt="Owner"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-4xl text-white mb-2">VIKRAM SINGH</h2>
          <p className="text-fit-orange font-heading font-bold uppercase tracking-widest mb-6">Founder & Head Coach</p>
          <p className="text-xl text-white/60 leading-relaxed mb-8">
            "I founded FITBANK to bridge the gap between commercial gyms and elite performance centers. My goal is to provide every member with the tools and environment they need to exceed their own expectations."
          </p>
          <div className="flex justify-center gap-4">
            <span className="px-4 py-1 rounded-full bg-white/5 text-fit-orange text-xs font-bold uppercase tracking-widest">ACE Certified</span>
            <span className="px-4 py-1 rounded-full bg-white/5 text-fit-orange text-xs font-bold uppercase tracking-widest">15+ Years Exp</span>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-white mb-4">OUR EXPERT <span className="text-fit-orange">TEAM</span></h2>
            <div className="w-24 h-1 bg-fit-orange mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Sameer K.', role: 'Strength & Conditioning', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop' },
              { name: 'Anjali M.', role: 'Yoga & Mobility', img: 'https://images.unsplash.com/photo-1518611012118-2969c6360227?q=80&w=2070&auto=format&fit=crop' },
              { name: 'Rahul V.', role: 'HIIT & Combat', img: 'https://images.unsplash.com/photo-1507398941214-57f5162123bf?q=80&w=1973&auto=format&fit=crop' },
            ].map((t, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white/5 group-hover:border-fit-orange">
                  <img src={t.img} className="w-full h-full object-cover" alt={t.name} referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl text-white mb-2">{t.name}</h3>
                <p className="text-white/40 uppercase tracking-widest text-sm mb-4">{t.role}</p>
                <div className="text-fit-orange text-xs font-bold uppercase tracking-widest">Certified Pro</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-[#181919]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-heading font-bold text-fit-orange mb-4">4.9★ ON GOOGLE</h2>
            <p className="text-white/40 uppercase tracking-[0.2em]">Real People. Real Results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Karan J.', text: 'The most professional gym environment I have ever experienced in Pune. Highly recommended.' },
              { name: 'Sneha R.', text: 'The trainers actually care about your form and progress. Not just another commercial gym.' },
              { name: 'Amit P.', text: 'Clean, modern, and powerful. The elite membership is worth every rupee.' },
            ].map((r, idx) => (
              <div key={idx} className="p-8 bg-[#2A2A2A] rounded-soft border border-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-fit-orange text-fit-orange" />)}
                </div>
                <p className="text-white/70 mb-6 italic">"{r.text}"</p>
                <div className="text-white font-bold uppercase tracking-widest text-sm">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
