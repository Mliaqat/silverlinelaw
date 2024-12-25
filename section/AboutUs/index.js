"use client";
import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="relative min-h-[600px]" id="about">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="assets/protifilo.jpg"
          alt="Silver Line Law Office Background"
          className="w-full h-full object-cover"
        />
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-[#1f3864]/85" style={{
          backdropFilter: 'brightness(0.8)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="relative mb-16 flex flex-col items-center">
          {/* Plus Sign Design */}
  
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white pt-16 drop-shadow-md text-center">
            About Silverline Law Associates
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Description */}
          <p className="text-lg sm:text-xl text-white leading-relaxed mb-12 drop-shadow-md font-medium">
            Silverline Law Associates is a Law Firm registered in the Republic of Maldives 
            by a partnership of licensed and experienced legal professionals. 
            We provide legal services of a wide range, including:
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="h-2 w-2 bg-white rounded-full mb-3 group-hover:scale-110 transition-transform shadow-glow" />
              <span className="text-lg sm:text-xl text-white font-medium tracking-wide drop-shadow-md">
                Court Representation
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="h-2 w-2 bg-white rounded-full mb-3 group-hover:scale-110 transition-transform shadow-glow" />
              <span className="text-lg sm:text-xl text-white font-medium tracking-wide drop-shadow-md">
                Legal Consultation
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="h-2 w-2 bg-white rounded-full mb-3 group-hover:scale-110 transition-transform shadow-glow" />
              <span className="text-lg sm:text-xl text-white font-medium tracking-wide drop-shadow-md">
                Document Preparation
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="h-2 w-2 bg-white rounded-full mb-3 group-hover:scale-110 transition-transform shadow-glow" />
              <span className="text-lg sm:text-xl text-white font-medium tracking-wide drop-shadow-md">
                Legal Research
              </span>
            </div>
          </div>

          {/* Additional Services */}
          <p className="text-lg sm:text-xl text-white leading-relaxed drop-shadow-md font-medium max-w-3xl mx-auto">
            We provide all legal services to both national and international 
            clients, in areas such as constitutional and administrative law, 
            criminal law, business law, taxation, banking and insurance, 
            land and conveyance, law of torts, employment law, and family law.
          </p>
        </div>

        {/* Decorative Elements */}
        <style jsx>{`
          .shadow-glow {
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
          }
        `}</style>
      </div>
    </section>
  );
}

export default AboutUs;