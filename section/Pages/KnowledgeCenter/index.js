// import Breadcrumb from "@/Component/Breadcrumb";
// import React from "react";

// function KnowledgeCenter() {
//   return (
//     <>
//       <>
//         <Breadcrumb title="Knowledge Center" pageName="Knowledge Center" />
//       </>
//     </>
//   );
// }

// export default KnowledgeCenter;

"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const attornyData=[
  {
    "id": 1,
    "images": "assets/images/bg/attorney1.png",
    "name": "Abigail Sofia",
    "designation": "Family Lawyer"
  },
  {
    "id": 2,
    "images": "assets/images/bg/attorney2.png",
    "name": "Charles Caleb",
    "designation": "Family Lawyer"
  },
  {
    "id": 3,
    "images": "assets/images/bg/attorney3.png",
    "name": "Anthony Dylan",
    "designation": "Criminal Lawyer"
  },
  {
    "id": 4,
    "images": "assets/images/bg/attorney4.png",
    "name": "Ezra Gabriel",
    "designation": "Drug Offense Lawyer"
  }
]


import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function KnowledgeCenter() {
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
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
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
                <p>
                  In consequat tincidunt turpis sit amet imperdiet. Praesent
                  Class officelan nonatoureanor mauris laoreet, iaculis libero
                  quis.Curabitur et tempus eri consequat tincidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                {...arrtornySlider}
                className="swiper attorney-slider pb-65"
              >
                <div className="swiper-wrapper">
                  {attornyData.slice(0, 4).map((item) => {
                    return (
                      <SwiperSlide
                        key={item.id}
                        className="swiper-slide wow fadeInDown"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.2s"
                      >
                        <div className="attorney-single">
                          <img
                            src={item.images}
                            className="casestudy1"
                            alt="image"
                          />
                          <div className="content">
                            <h4>
                              <Link href="/lawyer-details">
                                {item.name}
                              </Link>
                            </h4>
                            <p>{item.designation}</p>
                            <ul className="social-list gap-3">
                              <li>
                                <a href="https://www.facebook.com/">
                                  <i className="bx bxl-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.twitter.com/">
                                  <i className="bx bxl-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com/">
                                  <i className="bx bxl-instagram" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.pinterest.com/">
                                  <i className="bx bxl-pinterest" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
                <div className="swiper-pagination d-flex align-items-center justify-content-center" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeCenter;
