import React from 'react';
import { MessageCircle, Camera, Scale } from 'lucide-react';

const ThreePillars = () => {
  const pillars = [
    {
      icon: MessageCircle,
      title: "Communication Skills",
      description: "Master critical thinking, persuasive writing, and champion-level speech and debate. We transform students into clear, compelling, and confident communicators."
    },
    {
      icon: Camera,
      title: "Performance Skills", 
      description: "Develop poise and charisma through Drama, TV News Training, and even Magic. Students learn to connect with any audience, on stage or on camera."
    },
    {
      icon: Scale,
      title: "Law, Government, & Citizenship",
      description: "Gain a practical understanding of the justice system and civic duty through Mock Trial. We build responsible, engaged citizens and future leaders."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl text-center text-[#015c22] mb-16">
          Our Three Pillars of Leadership
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[#6e9e52] rounded-full flex items-center justify-center group-hover:bg-[#015c22] transition-colors duration-300">
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="font-montserrat font-semibold text-2xl text-[#015c22] mb-4">
                {pillar.title}
              </h3>
              
              <p className="font-lato text-gray-700 leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;