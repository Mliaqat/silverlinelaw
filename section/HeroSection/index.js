"use client";
import React from 'react';
import Link from "next/link";
import { FaWhatsapp, FaViber } from 'react-icons/fa';
import { 
  FaGavel, 
  FaFileContract, 
  FaLanguage, 
  FaFileSignature,
  FaBriefcase,
  FaStamp,
  FaSearchDollar,
  FaBalanceScale,
  FaBuilding
} from 'react-icons/fa';

const practiceAreas = [
  { 
    id: 1, 
    title: "Litigation",
    description: "Preparation of court forms, submission of cases, representing clients in court, and advocating for clients' rights and interests.",
    icon: FaGavel,
    color: "#1e3a8a"
  },
  { 
    id: 2, 
    title: "Legal Drafting",
    description: "Professional drafting of laws and legal documents with precision and expertise.",
    icon: FaFileContract,
    color: "#1e3a8a"
  },
  { 
    id: 3, 
    title: "Translation",
    description: "Translating legal documents, laws, legal reports and other types of legal work in Dhivehi, Arabic, or English to any of these languages.",
    icon: FaLanguage,
    color: "#1e3a8a"
  },
  { 
    id: 4, 
    title: "Preparing & Reviewing Legal Documents",
    description: "Writing and reviewing contracts, wills, deeds, power of attorneys, and other legal documents.",
    icon: FaFileSignature,
    color: "#1e3a8a"
  },
  { 
    id: 5, 
    title: "Retainer Services",
    description: "Providing company secretariate services and acting as company lawyer.",
    icon: FaBriefcase,
    color: "#1e3a8a"
  },
  { 
    id: 6, 
    title: "Document Attestation",
    description: "Attesting, authenticating, certifying, notarizing, commissioner of oaths, and related services.",
    icon: FaStamp,
    color: "#1e3a8a"
  },
  { 
    id: 7, 
    title: "Due Diligence Investigation",
    description: "Comprehensive due diligence services for investors considering business opportunities.",
    icon: FaSearchDollar,
    color: "#1e3a8a"
  },
  { 
    id: 8, 
    title: "Legal Advice",
    description: "Providing legal advice on all matters of law, helping clients understand their legal rights, obligations, positions, and how to proceed with solving disputes and securing rights.",
    icon: FaBalanceScale,
    color: "#1e3a8a"
  },
  {
    id: 9,
    title: "Business Registration",
    description: "Business Registration services and foreign investment registration services.",
    icon: FaBuilding,
    color: "#1e3a8a"
  }
];

const languages = ["Dhivehi", "English", "Arabic"];

function HeroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[#1e3a8a] text-5xl font-bold mb-8">
            Our Services
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            We provide a wide range of legal services to a client base that includes individuals, businesses, and public sector 
            institutions. We have provided services to both local and international clients, with Dhivehi, English, and Arabic being 
            the languages in which we can deliver our services.
          </p>
          
          {/* Language Tags */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {languages.map((language) => (
              <span
                key={language}
                className="bg-[#1e3a8a] text-white text-lg px-8 py-3 rounded-lg font-medium shadow-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {practiceAreas.map(({ id, title, description, icon: Icon }) => (
            <Link 
              href="/practice-details" 
              key={id}
              className="group block h-full"
            >
              <div className={`
                h-full p-8 rounded-xl transition-all duration-300
                ${id % 2 === 0 
                  ? 'bg-[#1e3a8a] text-white hover:bg-[#2847a0]' 
                  : 'bg-white text-[#1e3a8a] border-2 border-[#1e3a8a] hover:bg-gray-50'
                }
                shadow-md hover:shadow-lg
              `}>
                <div className="flex flex-col items-center">
                  <div className={`mb-6 p-4 rounded-full ${id % 2 === 0 ? 'bg-white/10' : 'bg-[#1e3a8a]/10'}`}>
                    <Icon className={`w-10 h-10 ${id % 2 === 0 ? 'text-white' : 'text-[#1e3a8a]'}`} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    {title}
                  </h2>
                  <p className={`
                    text-lg leading-relaxed text-center
                    ${id % 2 === 0 ? 'text-white/90' : 'text-gray-700'}
                  `}>
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-[#1e3a8a] rounded-xl shadow-lg p-10 text-center">
          <h3 className="text-white text-3xl font-bold mb-6">
            Seeking Legal Services?
          </h3>
          <p className="text-white text-xl mb-10 max-w-2xl mx-auto">
            Get in touch with our legal team through WhatsApp or Viber for prompt assistance with your legal matters.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://wa.me/+9607946806?text=I%20am%20seeking%20a%20legal%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 text-xl"
            >
              <FaWhatsapp size={28} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="viber://chat?number=%2B9607946806"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#7360F2] text-white py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 text-xl"
            >
              <FaViber size={28} />
              <span>Chat on Viber</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;