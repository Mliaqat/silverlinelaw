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
    designation: "Managing Partner",
  },
  {
    id: 2,
    images: "assets/Uz.png",
    name: "Uz. Ahmed Maajid",
    designation: "Partner",
  },
  {
    id: 3,
    images: "assets/uz.shimyaza.jpeg",
    name: "Uza. Aminath Shimyaza",
    designation: "Associate",
  },
  {
    id: 4,
    images: "assets/uza.naaz.png",
    name: "Uza. Aishath Naazly",
    designation: "Associate",
  },
  {
    id: 5,
    images: "assets/mr.mustho.jpg",
    name: "Mr. Abdulla Musthafa",
    designation: "Partner",
  },
];

function AttorneySection() {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <section className="bg-gray-50 py-16">
      <div className="max-w-[1700px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#1f3864] text-3xl font-bold mb-4">OUR LEGAL TEAM</h2>
          <div className="w-24 h-1 bg-[#1f3864] mx-auto"/>
        </div>

        {/* Team Slider */}
        <div className="w-[90%] mx-auto">
          <Slider {...sliderSettings}>
            {AttorneysData.map((attorney, index) => (
              <div key={index} className="px-3">
                <div className="relative group overflow-hidden rounded-lg">
                  {/* Image Container */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={attorney.images}
                      alt={attorney.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f3864] p-6 transform translate-y-0 transition-all duration-300">
                    {/* <Link 
                      href="/lawyer-details"
                      className="block text-white text-xl font-semibold mb-2 hover:text-gray-200 transition-colors"
                    > */}
                      {attorney.name}
                    {/* </Link> */}
                    <p className="text-gray-200 text-sm">{attorney.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        :global(.slick-dots) {
          bottom: -40px;
        }
        :global(.slick-dots li button:before) {
          color: #1f3864;
        }
        :global(.slick-dots li.slick-active button:before) {
          color: #1f3864;
        }
      `}</style>
    </section>
  );
}

export default AttorneySection;