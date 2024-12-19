"use client";
import React from 'react';
import Link from "next/link";
import { FaWhatsapp, FaViber } from 'react-icons/fa';

const practiceAreas = [
  { 
    id: 1, 
    title: "Litigation",
    description: "Preparation of court forms, submission of cases, representing clients in court, and advocating for clients' rights and interests."
  },
  { 
    id: 2, 
    title: "Legal Drafting",
    description: "Professional drafting of laws and legal documents with precision and expertise."
  },
  { 
    id: 3, 
    title: "Translation",
    description: "Translating legal documents, laws, legal reports and other types of legal work in Dhivehi, Arabic, or English to any of these languages."
  },
  { 
    id: 4, 
    title: "Preparing & Reviewing Legal Documents",
    description: "Writing and reviewing contracts, wills, deeds, power of attorneys, and other legal documents."
  },
  { 
    id: 5, 
    title: "Retainer Services",
    description: "Providing company secretariate services and acting as company lawyer."
  },
  { 
    id: 6, 
    title: "Document Attestation",
    description: "Attesting, authenticating, certifying, notarizing, commissioner of oaths, and related services."
  },
  { 
    id: 7, 
    title: "Due Diligence Investigation",
    description: "Comprehensive due diligence services for investors considering business opportunities."
  },
  { 
    id: 8, 
    title: "Legal Advice",
    description: "Providing legal advice on all matters of law, helping clients understand their legal rights, obligations, positions, and how to proceed with solving disputes and securing rights."
  }
];

const languages = ["Dhivehi", "English", "Arabic"];

function HeroSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[#1e3a8a] text-4xl font-semibold mb-8">
            Our Services
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            We provide a wide range of legal services to a client base that includes individuals, businesses, and public sector 
            institutions. We have provided services to both local and international clients, with Dhivehi, English, and Arabic being 
            the languages in which we can deliver our services.
          </p>
          
          {/* Language Tags */}
          <div className="flex justify-center gap-3 mb-16">
            {languages.map((language) => (
              <span
                key={language}
                className="bg-[#1e3a8a] text-white px-6 py-2 rounded-md font-medium"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {practiceAreas.map(({ id, title, description }) => (
            <Link 
              href="/practice-details" 
              key={id}
              className="group block h-full"
            >
              <div className={`
                h-full p-6 rounded-lg transition-all duration-300
                ${id % 2 === 0 
                  ? 'bg-[#1e3a8a] text-white hover:bg-[#2847a0]' 
                  : 'bg-white text-[#1e3a8a] border border-[#1e3a8a] hover:bg-gray-50'
                }
                flex flex-col
                hover:shadow-lg
              `}>
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {title}
                </h2>
                <p className={`
                  text-sm leading-relaxed mt-2
                  ${id % 2 === 0 ? 'text-gray-200' : 'text-gray-600'}
                `}>
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="text-[#1e3a8a] text-2xl font-semibold mb-6">
            Seeking Legal Services?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our legal team through WhatsApp or Viber for prompt assistance with your legal matters.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/+9607946806?text=I%20am%20seeking%20a%20legal%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-md hover:bg-[#1ea952] transition-all duration-300"
            >
              <FaWhatsapp size={20} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="viber://chat?number=%2B9607946806"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#7360F2] text-white py-3 px-6 rounded-md hover:bg-[#5b4ac4] transition-all duration-300"
            >
              <FaViber size={20} />
              <span>Chat on Viber</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;