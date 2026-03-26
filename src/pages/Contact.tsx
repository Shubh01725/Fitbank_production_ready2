import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32">
      <section className="section-padding text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl text-white mb-6">LET'S <span className="text-fit-orange">TALK</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Have a question or want to visit? We're right here.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <MapPin />, label: 'Address', val: 'Kalyani Nagar, Pune' },
            { icon: <Phone />, label: 'Phone', val: '+91 20-FITBANK-00' },
            { icon: <Mail />, label: 'Email', val: 'vault@fitbank.in' },
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-[#2A2A2A] rounded-soft border border-white/5 text-center group hover:border-fit-orange/30 transition-all">
              <div className="text-fit-orange mb-6 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-white/40 uppercase tracking-widest text-xs mb-2">{item.label}</div>
              <div className="text-white text-lg font-bold">{item.val}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#181919]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl text-white mb-6">Ready to become a member?</h2>
          <p className="text-xl text-white/60 mb-12">Head over to our Join Now section to apply for membership.</p>
          <Link to="/join" className="inline-block bg-fit-orange text-white px-16 py-6 rounded-pill font-heading font-bold text-2xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-fit-orange/30">
            Apply for Membership <ArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="w-full h-[400px] bg-[#2A2A2A] rounded-soft overflow-hidden relative border border-white/5">
            <div className="absolute inset-0 flex items-center justify-center text-white/20">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="font-heading font-bold uppercase tracking-widest">Google Maps Embed Placeholder</p>
                <p className="text-sm">Kalyani Nagar, Pune, Maharashtra 411006</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
