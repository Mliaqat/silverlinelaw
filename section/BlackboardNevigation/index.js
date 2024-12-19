// section/BlackboardNavigation/index.js
"use client";
import React from 'react';
import Link from 'next/link';

const mainLinks = [
  { title: 'Pro Bono Service', href: '/pro-bono' },
  { title: 'Interested in Investing in the Maldives?', href: '/invest' },
  { title: 'Setting Up a Business in the Maldives', href: '/business' },
  { title: 'An Introduction to the Maldives Legal System', href: '/legal-system' },
  { title: 'News Items Related to Law and Judiciary', href: '/news' },
  { title: 'New Laws and Regulations', href: '/laws' },
  { title: 'Landmark Cases', href: '/cases' }
];

const usefulLinks = [
  { title: 'Supreme Court', href: '/supreme-court' },
  { title: 'High Court', href: '/high-court' },
  { title: 'Civil Court', href: '/civil-court' },
  { title: 'Criminal Court', href: '/criminal-court' }
];

const BlackboardNavigation = () => {
  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4">
        {/* Main blackboard area */}
        <div className="max-w-4xl mx-auto rounded-lg p-8 relative" style={{
          backgroundColor: '#141414',
          boxShadow: 'inset 0 0 80px rgba(0,0,0,0.7)',
          border: '12px solid #2c2c2c'
        }}>
          {/* Chalk dust effect */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.80" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.08"/%3E%3C/svg%3E")',
            mixBlendMode: 'overlay'
          }} />
          
          {/* Main Links Section */}
          <div className="mb-12 relative">
            <h2 className="text-3xl text-center mb-10 tracking-wider" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '2px 2px 3px rgba(255,255,255,0.1)',
              fontFamily: 'serif'
            }}>
              EVENTS AND CALENDER
            </h2>
            <nav className="space-y-6">
              {mainLinks.map((link) => (
                <div key={link.href} className="text-center">
                  <Link 
                    href={link.href}
                    className="relative inline-block group"
                  >
                    <span className="text-lg relative" style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      textShadow: '1px 1px 2px rgba(255,255,255,0.15)'
                    }}>
                      {link.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/40 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Useful Links Section */}
          <div className="relative pt-8" style={{
            borderTop: '2px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 className="text-3xl text-center mb-10 tracking-wider" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '2px 2px 3px rgba(255,255,255,0.1)',
              fontFamily: 'serif'
            }}>
              USEFUL LINKS
            </h2>
            <div className="flex justify-center gap-x-8 gap-y-4 flex-wrap">
              {usefulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative inline-block group"
                >
                  <span className="relative" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textShadow: '1px 1px 2px rgba(255,255,255,0.15)'
                  }}>
                    {link.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/40 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Edge effects */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default BlackboardNavigation;