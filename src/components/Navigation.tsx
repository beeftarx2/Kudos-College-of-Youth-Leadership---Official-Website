import React from 'react';
import { GraduationCap } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-[#015c22]" />
            <span className="font-montserrat font-bold text-xl text-[#015c22]">
              Kudos College
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="font-lato text-gray-700 hover:text-[#015c22] transition-colors">
              Our Programs
            </a>
            <a href="#success" className="font-lato text-gray-700 hover:text-[#015c22] transition-colors">
              Our Success
            </a>
            <a href="#about" className="font-lato text-gray-700 hover:text-[#015c22] transition-colors">
              About Us
            </a>
            <button className="bg-[#015c22] text-white px-6 py-2 rounded-lg font-lato font-semibold hover:bg-[#014a1c] transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;