// section/Believe/index.js
"use client";
import React from 'react';

const beliefs = [
  "Rule of Law",
  "Justice",
  "Affordable Legal Service",
  "Commitment and Diligence",
  "Compassion and Respect"
];

const Believe = () => {
  return (
    <section className="py-8">
      <div className="max-w-[1700px] mx-auto px-4">
        <div className="text-center">
          {/* Simple heading */}
          <h2 className="text-[#1f3864] text-2xl font-bold mb-4">
            WE BELIEVE IN
          </h2>
          
          {/* Beliefs content with minimal spacing */}
          <div className="flex flex-col items-center space-y-2">
            {beliefs.map((belief, index) => (
              <p 
                key={index} 
                className="text-[#1f3864] text-lg font-medium hover:text-[#2a4d8a] transition-colors duration-200"
              >
                {belief}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Believe;