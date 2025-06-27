import React from 'react';
import { GraduationCap, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 - Logo and Copyright */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="h-8 w-8 text-[#6e9e52]" />
              <span className="font-montserrat font-bold text-xl">
                Kudos College
              </span>
            </div>
            <p className="font-lato text-gray-400 text-sm">
              © 2025 Kudos College of Youth Leadership. All Rights Reserved.
            </p>
          </div>
          
          {/* Column 2 - Navigation */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#programs" className="font-lato text-gray-400 hover:text-white transition-colors block">
                Our Programs
              </a>
              <a href="#success" className="font-lato text-gray-400 hover:text-white transition-colors block">
                Our Success
              </a>
              <a href="#contact" className="font-lato text-gray-400 hover:text-white transition-colors block">
                Contact
              </a>
            </div>
          </div>
          
          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3 font-lato text-gray-400">
              <p>123 Leadership Lane<br />Excellence City, EC 12345</p>
              <p>(555) 123-KUDOS</p>
              <p>info@kudoscollege.edu</p>
              
              <div className="flex space-x-4 pt-4">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-[#6e9e52] cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-[#6e9e52] cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-[#6e9e52] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;