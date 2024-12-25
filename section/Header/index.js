"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-end space-x-8">
          <a href="tel:+9603005653" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2 text-sm">
            <i className="bi bi-telephone-fill"></i>
            +960 300 5653
          </a>
          <a href="mailto:info@silverlinelaw.com.mv" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2 text-sm">
            <i className="bi bi-envelope-fill"></i>
            info@silverlinelaw.com.mv
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`w-full transition-all duration-300 
        ${isSticky 
          ? 'fixed top-0 left-0 right-0 z-50 shadow-lg animate-slideDown bg-[#2563eb]' 
          : 'bg-[#2563eb]'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="bg-white p-2.5 rounded-lg shadow-sm">
                  <div className="relative w-12 h-12">
                    <Image 
                      src="/assets/logo.png" 
                      alt="logo" 
                      fill
                      className="object-contain"
                      sizes="(max-width: 48px) 100vw, 48px"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h1 className="text-white font-bold text-2xl tracking-wide">
                    Silverline Law Associates
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block">
              <ul className="flex items-center space-x-8">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about-us' },
                  { name: 'Our Services', path: '/services' },
                  { name: 'Knowledge Center', path: '/knowledge-center' },
                  { name: 'Contact Us', path: '/contact-us' },
                  { name: 'Join our Team', path: '/join-us' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`relative font-medium text-base tracking-wide transition-colors group
                        ${pathname === item.path 
                          ? 'text-white' 
                          : 'text-blue-50 hover:text-white'
                        }`}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-white p-2 hover:bg-blue-600 rounded-lg"
              onClick={handleMobileMenu}
            >
              <i className={`bi ${showMobileMenu ? 'bi-x-lg' : 'bi-list'} text-2xl`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden absolute w-full bg-[#2563eb] shadow-xl transition-all duration-300 
          ${showMobileMenu ? 'max-h-screen border-t border-white/10' : 'max-h-0 overflow-hidden'}`}>
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Our Services', path: '/services' },
                { name: 'Knowledge Center', path: '/knowledge-center' },
                { name: 'Contact Us', path: '/contact-us' },
                { name: 'Join our Team', path: '/join-us' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block py-2 px-4 rounded transition-colors
                      ${pathname === item.path 
                        ? 'text-white bg-blue-600 font-medium' 
                        : 'text-blue-50 hover:bg-blue-600 hover:text-white'
                      }`}
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Header;