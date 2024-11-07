"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
  {
    id: 3,
    images: "assets/ahmed.png",
    name: "Dr. Ahmed Abdulla Didi",
    designation: "Senior Lawyer",
  },
  {
    id: 4,
    images: "assets/Uz.png",
    name: "Uz. Ahmed Maajid",
    designation: "Senior Lawyer",
  },
];

function AttorneySection() {
  const dublerowSlide = {
    slidesToScroll: 2,
    slidesToShow: 4,
    // autoplay: 1000,
    spaceBetween: 30,
    margin: 30,
    rows: 1,
    loop: true,
    dots: true,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="attorneys-section  relative">
        <div className="pb-20">
          <div className="row justify-content-center">
            <div className="practice-area-section2  max-w-[1700px] m-auto px-4">
              <div className="row align-items-end m-auto w-[90%]">
                <div className="col-12 m-auto justify-center relative w-full">
                  <Slider
                    spaceBetween={20}
                    {...dublerowSlide}
                    className="flex justify-center"
                  >
                    {AttorneysData.map((item, index) => (
                      <div key={index}>
                        <div
                          className="attorney-single flex justify-center relative w-full"
                          style={{ display: "flex" }}
                        >
                          <img
                            src={item.images}
                            className="casestudy1"
                            alt="image"
                          />
                          <div className="content absolute bottom-10 left-0">
                            <h4>
                              <Link href="/lawyer-details">{item.name}</Link>
                            </h4>
                            <p>{item.designation}</p>
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
      </div>
    </>
  );
}

export default AttorneySection;
