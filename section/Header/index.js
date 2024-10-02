"use client";
import React, { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
/*---------Using reducer mange the active or inactive menu----------*/

function Header() {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("sticky")
      : header.classList
      ? header.classList.remove("sticky")
      : header.classList.add("sticky");
  };

  const handleMobileMenu = () => {
    if (showMobileMenu === false || showMobileMenu === 0) {
      setMobileMenu(1);
    } else {
      setMobileMenu(false);
    }
  };

  return (
    <>
      <header className="header-area style-2">
        <div className="header-logo">
          <Link href="/" className="logo-align">
            <div className="logo">
              <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
            </div>
          </Link>
          <p>Silverline Law Associates </p>
        </div>
        <div
          className={showMobileMenu === 1 ? "main-nav show-menu" : "main-nav"}
        >
          <div className="mobile-logo-area d-xl-none d-flex justify-content-between">
            <div className="mobile-logo-wrap ">
              <Link href="/">
                <p>Silverline Law Associates</p>
              </Link>
            </div>
            <div onClick={handleMobileMenu} className="menu-close-btn">
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <ul className="menu-list">
            <li>
              <Link href="/" className={`${pathname == "/" ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/practice-area"
                className={`${pathname == "/practice-area" ? "active" : ""}`}
              >
                Practice Area
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${pathname == "/about-us" ? "active" : ""}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`${pathname == "/contact-us" ? "active" : ""}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-xl-none gap-5">
          <div
            className="mobile-menu-btn d-xl-none d-block"
            style={{ cursor: "pointer" }}
            onClick={handleMobileMenu}
          >
            <i className="bi bi-list" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
