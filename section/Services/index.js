"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const practiceAreas = [
  {
    id: 1,
    number: "01",
    iconSrc: "/assets/images/proBono.jpg",
    title: "Pro Bono Service",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 2,
    number: "02",
    imageSrc: "/assets/images/bg/practice24.png",
    iconSrc: "/assets/images/intersetInvesting.jpg",
    title: "Interested in Investing in the Maldives?",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 3,
    number: "03",
    imageSrc: "/assets/images/bg/practice21.png",
    iconSrc: "/assets/images/bussiness.jpg",
    title: "Setting Up a Business in the Maldives",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 4,
    number: "04",
    imageSrc: "/assets/images/bg/practice22.png",
    iconSrc: "/assets/images/legalSystem.jpg",
    title: "An Introduction to the Maldives Legal System",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
];

function Services() {
  const dublerowSlide = {
    slidesToScroll: 2,
    slidesToShow: 3,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
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
      <div className="practice-area-section2 pb-120 max-w-[1700px] m-auto px-4">
        <div className="row align-items-end">
          <div className="col-12 m-auto overflow-hidden position-relative">
            <div className="text-xl-start text-center">
              <div className="section-title1 text-center">
                <h2>Our Services</h2>
              </div>
              <h3 className="text-center text-lg font-bold">
                We are for you to give you the best solutions.
              </h3>
            </div>

            <div className="w-[85%] lg:w-[90%] m-auto justify-center relative">
              <Slider
                spaceBetween={20}
                {...dublerowSlide}
                className="flex justify-center"
              >
                {practiceAreas.map(({ id, iconSrc, title, description }) => (
                  <div key={id}>
                    <div className="practice-single2 rounded shadow-sm">
                      <div className="content p-2">
                        <div className="relative w-full h-[20rem]">
                          <Image
                            src={iconSrc}
                            alt="image"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-md"
                          />
                        </div>
                        <div className="text mt-3 mb-2">
                          <h5>
                            <Link href="/practice-details">{title}</Link>
                          </h5>
                          <p>{description}</p>
                          <Link
                            href="/practice-details"
                            className="details-btn"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="flex justify-end mt-3">
              <Link
                href="/services"
                className="text-[#1f3864] font-bold flex items-center gap-1"
              >
                More Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#1f3864"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
