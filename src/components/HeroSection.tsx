import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      {/* Full Background Image - Display ENTIRE image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/kudosbakground.png" 
          alt="Kudos Background" 
          className="w-full h-full object-contain object-left"
        />
      </div>

      {/* Content positioned on the right blank space */}
      <div className="relative z-10 w-full flex justify-end">
        <div className="w-2/5 min-h-screen flex items-center pr-4 pl-16">
          <div className="max-w-lg">
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-[#015c22] leading-tight mb-6">
              Kudos College of Youth Leadership
            </h1>
            
            <h2 className="font-montserrat font-semibold text-2xl lg:text-3xl text-[#6e9e52] mb-4">
              Find your voice. Shape your future.
            </h2>
            
            <p className="font-lato text-lg text-gray-700 mb-8 leading-relaxed">
              The competitive edge for college success.
            </p>
            
            <button className="bg-[#6e9e52] text-white px-8 py-4 rounded-lg font-lato font-semibold text-lg hover:bg-[#015c22] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Our Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;