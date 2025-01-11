"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AttorneysData = [
  {
    id: 1,
    images: "/assets/ahmed.png",
    name: "Dr. Ahmed Abdulla Didi",
    designation: "Managing Partner",
  },
  {
    id: 2,
    images: "/assets/Uz.png",
    name: "Uz. Ahmed Maajid",
    designation: "Partner",
  },
  {
    id: 3,
    images: "/assets/uz.shimyaza.jpeg",
    name: "Uza. Aminath Shimyaza",
    designation: "Associate",
  },
  {
    id: 4,
    images: "/assets/uza.naaz.jpeg",
    name: "Uza. Aminath Naazly",
    designation: "Associate",
  },
];

function AttorneySection() {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    pauseOnHover: true,
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
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-[1700px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#1f3864] text-2xl font-bold mb-6">Legal Team</h2>
          <div className="w-16 h-px bg-[#1f3864] mx-auto" />
        </div>

        {/* Team Slider */}
        <div className="w-[92%] mx-auto">
          <Slider {...sliderSettings}>
            {AttorneysData.map((attorney, index) => (
              <div key={index} className="px-4">
                <div className="relative group rounded-xl overflow-hidden shadow-sm">
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 rounded-xl">
                    <Image
                      src={attorney.images}
                      alt={attorney.name}
                      fill
                      sizes="(max-width: 576px) 100vw, (max-width: 776px) 50vw, (max-width: 1300px) 33vw, 25vw"
                      priority={index < 4}
                      className="object-cover object-center rounded-xl"
                    />
                    {/* Base Overlay - Always visible */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1f3864]/30 to-[#1f3864]/95 rounded-xl" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#1f3864]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>

                  {/* Content Overlay - Always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-[#1f3864]/90 to-transparent">
                    <h3 className="text-base font-semibold mb-0.5 drop-shadow-md">
                      {attorney.name}
                    </h3>
                    <p className="text-xs tracking-wide text-white font-medium opacity-90">
                      {attorney.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        :global(.slick-track) {
          display: flex !important;
        }
        :global(.slick-slide) {
          height: inherit !important;
          padding-bottom: 1rem;
        }
        :global(.slick-slide > div) {
          height: 100%;
        }
        :global(.slick-prev),
        :global(.slick-next) {
          width: 32px;
          height: 32px;
          z-index: 10;
        }
        :global(.slick-prev:before),
        :global(.slick-next:before) {
          color: #1f3864;
          font-size: 32px;
          opacity: 0.5;
        }
        :global(.slick-prev:hover:before),
        :global(.slick-next:hover:before) {
          opacity: 0.75;
        }
        :global(.slick-prev) {
          left: -45px;
        }
        :global(.slick-next) {
          right: -45px;
        }
      `}</style>
    </section>
  );
}

export default AttorneySection;
