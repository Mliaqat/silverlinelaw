"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);

const AttorneysData = [
  {
    id: 1,
    images: "assets/ahmed.png",
    name: "Dr. Ahmed Abdulla Didi",
    designation: "Senior Lawyer",
  },
  {
    id: 2,
    images: "assets/Uz.png",
    name: "Uz. Ahmed Maajid",
    designation: "Senior Lawyer",
  },
  // {
  //   id: 3,
  //   images: "assets/images/bg/attorney3.png",
  //   name: "Anthony Dylan",
  //   designation: "Criminal Lawyer",
  // },
  // {
  //   id: 4,
  //   images: "assets/images/bg/attorney4.png",
  //   name: "Ezra Gabriel",
  //   designation: "Drug Offense Lawyer",
  // },
];

function AttorneySection() {
  const arrtornySlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 15,
    autoplay: true,
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
    breakpoints: {
      280: {
        slidesPerView: 1,
        navigation: false,
      },
      576: {
        slidesPerView: 2,
        navigation: false,
      },
      768: {
        slidesPerView: 2,
        navigation: false,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <>
      <div className="attorneys-section pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="section-title1 text-center">
                <h2>Our Attorneys</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="w-md-75 w-lg-50 m-auto">
              {/* <Swiper
                {...arrtornySlider}
                className="swiper attorney-slider pb-65"
              > */}
              <div className="w-md-75 w-75 row justify-content-center g-4 m-auto">
                {AttorneysData.slice(0, 2).map((item) => {
                  return (
                    // <SwiperSlide
                    //   key={item.id}
                    //   className="swiper-slide wow fadeInDown"
                    //   data-wow-duration="1.5s"
                    //   data-wow-delay="0.2s"
                    // >
                    <div className="attorney-single  col-lg-4 col-md-6 col-sm-10">
                      <img
                        src={item.images}
                        className="casestudy1"
                        alt="image"
                      />
                      <div className="content">
                        <h4>
                          <Link href="/lawyer-details">{item.name}</Link>
                        </h4>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="swiper-pagination d-flex align-items-center justify-content-center" />
              {/* </Swiper> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttorneySection;
