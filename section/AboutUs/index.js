"use client";
import React from "react";

function AboutUs() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-gray-50" id="about">
      {/* Background design element */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="assets/images/bg/section-bg1.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1700px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              {/* Heading with decorative element */}
              <div className="relative">
                <div className="w-20 h-1 bg-[#1f3864] mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#1f3864]">
                  About Silver Line Law
                </h2>
              </div>

              {/* Main content with improved typography */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Silver Line is a Law Firm registered in the Republic of
                  Maldives by a partnership of licensed and experienced legal
                  professionals. We provide legal services of a wide range,
                  including:
                </p>
                
                {/* Services list with better formatting */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#1f3864] rounded-full mr-2" />
                    Court Representation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#1f3864] rounded-full mr-2" />
                    Legal Consultation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#1f3864] rounded-full mr-2" />
                    Document Preparation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#1f3864] rounded-full mr-2" />
                    Legal Research
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  We provide all legal services to both national and
                  international clients, in areas such as constitutional and
                  administrative law, criminal law, business law, taxation,
                  banking and insurance, land and conveyance, law of torts,
                  employment law, and family law.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 hidden lg:block">
            <div className="relative">
              {/* Main image with enhanced styling */}
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="assets/protifilo.jpg"
                  alt="Silver Line Law Office"
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1f3864] opacity-10 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1f3864] opacity-10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;