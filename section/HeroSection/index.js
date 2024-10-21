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
  // {
  //   id: 7,
  //   number: "06",
  //   imageSrc: "assets/images/bg/practice24.png",
  //   iconSrc: "assets/images/icons/practice-icon21.svg",
  //   title: "Due Diligence Investigation",
  //   description:
  //     "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  // },
  // {
  //   id: 8,
  //   number: "06",
  //   imageSrc: "assets/images/bg/practice24.png",
  //   iconSrc: "assets/images/icons/practice-icon21.svg",
  //   title: "Legal Advise",
  //   description:
  //     "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  // },
  // {
  //   id: 9,
  //   number: "06",
  //   imageSrc: "assets/images/bg/practice24.png",
  //   iconSrc: "assets/images/icons/practice-icon21.svg",
  //   title: "Business Formation",
  //   description:
  //     "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  // },
  // {
  //   id: 10,
  //   number: "06",
  //   imageSrc: "assets/images/bg/practice24.png",
  //   iconSrc: "assets/images/icons/practice-icon21.svg",
  //   title: "Negotiation",
  //   description:
  //     "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  // },
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
                <div className="col-12 m-auto relative lg:w-[90%] 2xl:w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 py-8">
                    {practiceAreas.map(({ id, title, description }) => (
                      <div
                        className="rounded-lg"
                        key={id}
                        style={{
                          background: `${id % 2 == 0 ? "#1f3864" : "#fff"}`,
                          color: `${id % 2 == 0 ? "#fff" : "#1f3864"}`,
                        }}
                      >
                        <div className="flex justify-center pt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            width="50px"
                            height="50px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M22.951,11.259a.919.919,0,0,0-.057-.189c-.007-.014-.006-.03-.013-.044l-3.5-6.5a.913.913,0,0,0-.142-.187A.989.989,0,0,0,18.5,4H13V2a1,1,0,0,0-2,0V4H5.5a.989.989,0,0,0-.739.339.913.913,0,0,0-.142.187l-3.5,6.5c-.007.014-.006.03-.013.044a.91.91,0,0,0-.057.188.98.98,0,0,0-.04.2c0,.015-.009.028-.009.044a4.5,4.5,0,0,0,9,0c0-.016-.008-.029-.009-.044a.97.97,0,0,0-.04-.2.919.919,0,0,0-.057-.189c-.007-.014-.006-.03-.013-.044L7.174,6H11V18H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2H13V6h3.826l-2.707,5.026c-.007.014-.006.03-.013.044a.91.91,0,0,0-.057.188.98.98,0,0,0-.04.2c0,.015-.009.028-.009.044a4.5,4.5,0,0,0,9,0c0-.016-.008-.029-.009-.044A.97.97,0,0,0,22.951,11.259ZM5.5,14a2.5,2.5,0,0,1-2.291-1.5H7.791A2.5,2.5,0,0,1,5.5,14Zm1.826-3.5H3.674L5.5,7.109ZM18.5,7.109,20.326,10.5H16.674ZM18.5,14a2.5,2.5,0,0,1-2.291-1.5h4.582A2.5,2.5,0,0,1,18.5,14ZM21,22a1,1,0,0,1-1,1H4a1,1,0,0,1,0-2H20A1,1,0,0,1,21,22Z"
                              fill={`${id % 2 == 0 ? "#fff" : "#1f3864"}`}
                            />
                          </svg>
                        </div>
                        <h5 className="text-center font-bold pb-4 pt-2 px-2">
                          <Link href="/practice-details">{title}</Link>
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
