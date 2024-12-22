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
    images: "/assets/uza.naaz.png",
    name: "Uza. Aishath Naazly",
    designation: "Associate",
  },
  // {
  //   id: 5,
  //   images: "assets/mr.mustho.jpg",
  //   name: "Mr. Abdulla Musthafa",
  //   designation: "Partner",
  // },
];

function AttorneySection() {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <section className="bg-white py-20">
      <div className="max-w-[1700px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#1f3864] text-3xl font-bold mb-3">Our Legal Team</h2>
          <div className="w-20 h-0.5 bg-[#1f3864] mx-auto"/>
        </div>

        {/* Team Slider */}
        <div className="w-[90%] mx-auto">
          <Slider {...sliderSettings}>
            {AttorneysData.map((attorney, index) => (
              <div key={index} className="px-3">
                <div className="bg-white">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={attorney.images}
                      alt={attorney.name}
                      fill
                      sizes="(max-width: 576px) 100vw, (max-width: 776px) 50vw, (max-width: 1300px) 33vw, 25vw"
                      priority={index < 4}
                      className="object-cover object-top"
                      style={{ backgroundColor: '#f8f9fa' }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center py-4">
                    <h3 className="text-[#1f3864] text-lg font-semibold mb-1">
                      {attorney.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
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
        :global(.slick-prev),
        :global(.slick-next) {
          width: 40px;
          height: 40px;
          z-index: 10;
        }
        :global(.slick-prev:before),
        :global(.slick-next:before) {
          color: #1f3864;
          font-size: 40px;
          opacity: 0.75;
        }
        :global(.slick-prev:hover:before),
        :global(.slick-next:hover:before) {
          opacity: 1;
        }
        :global(.slick-prev) {
          left: -50px;
        }
        :global(.slick-next) {
          right: -50px;
        }
      `}</style>
    </section>
  );
}

export default AttorneySection;