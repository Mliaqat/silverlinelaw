"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
//import Breadcrumb from "@/Component/Breadcrumb";
import { FaBook, FaUniversity, FaGavel, FaNewspaper, FaLandmark, FaBalanceScale, FaGlobe, FaFileContract } from 'react-icons/fa';

const resources = [
  {
    id: 1,
    title: "Maldivian Legal System Overview",
    description: "Comprehensive guide to the structure and functioning of the Maldivian legal system, including courts hierarchy and jurisdiction.",
    icon: FaBalanceScale,
    imageSrc: "/assets/images/legal-system.jpg",
    category: "Legal Framework"
  },
  {
    id: 2,
    title: "Constitutional Rights & Laws",
    description: "Detailed information about fundamental rights, constitutional provisions, and key legislation in the Maldives.",
    icon: FaBook,
    imageSrc: "/assets/images/constitution.jpg",
    category: "Constitutional Law"
  },
  {
    id: 3,
    title: "Business & Investment Laws",
    description: "Guide to commercial laws, investment regulations, and business registration procedures in the Maldives.",
    icon: FaGlobe,
    imageSrc: "/assets/images/business-law.jpg",
    category: "Commercial Law"
  },
  {
    id: 4,
    title: "Civil & Criminal Procedures",
    description: "Overview of civil and criminal court procedures, legal processes, and dispute resolution mechanisms.",
    icon: FaGavel,
    imageSrc: "/assets/images/court.jpg",
    category: "Procedure"
  },
  {
    id: 5,
    title: "Latest Legal Developments",
    description: "Recent updates on laws, regulations, and significant legal changes affecting the Maldivian legal landscape.",
    icon: FaNewspaper,
    imageSrc: "/assets/images/updates.jpg",
    category: "Legal Updates"
  },
  {
    id: 6,
    title: "Landmark Court Decisions",
    description: "Analysis of significant court decisions that have shaped Maldivian law and legal precedents.",
    icon: FaLandmark,
    imageSrc: "/assets/images/landmark.jpg",
    category: "Case Law"
  },
  {
    id: 7,
    title: "Legal Education Resources",
    description: "Educational materials, guides, and resources for understanding Maldivian law and legal procedures.",
    icon: FaUniversity,
    imageSrc: "/assets/images/education.jpg",
    category: "Education"
  },
  {
    id: 8,
    title: "Legal Documents & Forms",
    description: "Templates, sample documents, and guidance on common legal forms and procedures.",
    icon: FaFileContract,
    imageSrc: "/assets/images/documents.jpg",
    category: "Documents"
  }
];

function KnowledgeCenter() {
  return (
    <>
      {/* <Breadcrumb title="Knowledge Center" pageName="Knowledge Center" /> */}
      
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-[#1e3a8a] text-4xl font-bold mb-6">
              Legal Knowledge Center
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
              Your comprehensive resource for understanding the Maldivian legal system, featuring detailed guides, 
              analysis, and updates on laws and regulations.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link 
                href={`/knowledge/${resource.id}`}
                key={resource.id}
                className="group block h-full"
              >
                <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 h-full border-2 border-gray-100 hover:border-[#1e3a8a]/20 hover:shadow-lg">
                  {/* Category Tag */}
                  <div className="px-6 pt-6">
                    <span className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] text-sm font-medium px-3 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-6 h-6 text-[#1e3a8a]" />
                      </div>
                      <h3 className="text-[#1e3a8a] text-xl font-bold group-hover:text-[#2847a0] transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {resource.description}
                    </p>

                    <span className="text-[#1e3a8a] font-semibold inline-flex items-center">
                      Read More 
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default KnowledgeCenter;