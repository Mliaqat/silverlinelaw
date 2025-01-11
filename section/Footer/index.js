// section/footer/index.js
"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <section className="relative">
      {/* Contact Info Bar */}
      <div className="bg-yellow-400 py-3">
        <div className="max-w-[1700px] mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/icons/phone.svg"
                  alt="phone"
                  className="w-4 h-4"
                />
                <span className="text-sm">Phone</span>
              </div>
              <a href="tel:+960-3005653" className="text-sm">
                +960-3005653
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/icons/email.svg"
                  alt="email"
                  className="w-4 h-4"
                />
                <span className="text-sm">Email</span>
              </div>
              <a href="mailto:info@silverlinelaw.com.mv" className="text-sm">
                info@silverlinelaw.com.mv
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/icons/location.svg"
                  alt="location"
                  className="w-4 h-4"
                />
                <span className="text-sm">Location</span>
              </div>
              <span className="text-sm">
                Ma. Maaraa, 1st Flr, Gulaabee Magu, Male City,Maldives.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#1e3a8a] text-white">
        <div className="max-w-[1700px] mx-auto px-4 py-8">
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-6">
            <Link
              href="https://Facebook.com"
              className="text-white hover:text-yellow-400 transition-colors"
              target="_blank"
            >
              Facebook
            </Link>
            <Link
              href="https://Instagram.com"
              className="text-white hover:text-yellow-400 transition-colors"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://x.com"
              className="text-white hover:text-yellow-400 transition-colors"
              target="_blank"
            >
              X
            </Link>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="border-t border-white/20">
            <div className="text-center max-w-5xl mx-auto pt-6">
              <p className="mb-4">
                ©2020 All Right Reserved to Silverline Law Associates LLP.{" "}
                <Link
                  href="/disclaimer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Disclaimer
                </Link>
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                The materials appearing on this website are provided for
                informational use only, and are in no way intended to constitute
                legal advice or the opinions of this law firm or any of its
                attorneys. Transmission or receipt of any information from this
                website does not create an attorney-client relationship, and you
                should not act or rely upon any information appearing on this
                website without seeking the advice of an attorney.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
