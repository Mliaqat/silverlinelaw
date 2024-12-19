// components/ContactSection/index.js
"use client";
import React from 'react';
import { FaWhatsapp, FaViber } from 'react-icons/fa';

function ContactSection() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Looking for legal services badge */}
      <div className="relative mb-2">
        <div className="bg-[#1e3a8a] text-white text-sm py-2 px-4 rounded-lg shadow-lg whitespace-nowrap">
          Looking for legal services?
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-[#1e3a8a] transform rotate-45"></div>
        </div>
      </div>

      {/* WhatsApp Link */}
      <a
        href="https://wa.me/+9607946806?text=I%20am%20seeking%20a%20legal%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[#1ea952] transition-all duration-300"
      >
        <FaWhatsapp size={20} />
        <span className="text-sm font-medium">Chat on WhatsApp</span>
      </a>

      {/* Viber Link */}
      <a
        href="viber://chat?number=%2B9607946806"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#7360F2] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[#5b4ac4] transition-all duration-300"
      >
        <FaViber size={20} />
        <span className="text-sm font-medium">Chat on Viber</span>
      </a>
    </div>
  );
}

export default ContactSection;