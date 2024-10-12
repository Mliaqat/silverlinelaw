"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetInTouch from "../OnelineContact";

const practiceAreas = [
  {
    id: 1,
    number: "01",
    imageSrc: "assets/images/bg/practice23.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Litigation ",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 2,
    number: "02",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Legal Drafting",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 3,
    number: "03",
    imageSrc: "assets/images/bg/practice21.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Translation",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 4,
    number: "04",
    imageSrc: "assets/images/bg/practice22.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Preparing & Reviewing Legal Documents",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 5,
    number: "05",
    imageSrc: "assets/images/bg/practice23.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Retainer Services",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 6,
    number: "06",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Document Attestation",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 7,
    number: "06",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Due Diligence Investigation",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 8,
    number: "06",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Legal Advise",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 9,
    number: "06",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Business Formation",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 10,
    number: "06",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Negotiation",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
];

function HeroSection() {
  const dublerowSlide = {
    slidesToScroll: 2,
    slidesToShow: 3,
    autoplay: 1000,
    spaceBetween: 30,
    margin: 30,
    rows: 2,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".service-prev1",
      prevEl: ".service-next1",
    },
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          rows: 2, // This doesn't appear to work in responsive (Mac/Chrome)
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          rows: 2, // This doesn't appear to work in responsive (Mac/Chrome)
        },
      },
    ],
  };
  return (
    <>
      <div className="banner-section relative">
        <div className="container pb-20">
          <div className="row justify-content-center">
            <div className="practice-area-section2  max-w-[1700px] m-auto px-4">
              <div className="row align-items-end">
                <div className="col-12 m-auto relative w-[88%] md:w-full">
                  <Slider
                    spaceBetween={20}
                    {...dublerowSlide}
                    className="slick-wrapper"
                  >
                    {practiceAreas.map(({ id, title, description }) => (
                      <div
                        className="practice-single2 bg-white rounded-lg"
                        key={id}
                      >
                        <div className="content">
                          <div className="text">
                            <h5>
                              <Link href="/practice-details">{title}</Link>
                            </h5>
                            <p className="my-2">{description}</p>
                            <Link
                              href="/practice-details"
                              className="details-btn"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
