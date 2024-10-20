// import React from "react";

// function Services() {
//   return (
//     <div className="practice-area-section pb-120">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <div className="section-title1 text-center">
//               <h2>Our Services</h2>
//             </div>
//             <div className="grid grid-cols-3 gap-4">
//               {[
//                 "Pro Bono Service",
//                 "Interested in Investing in the Maldives?",
//                 "Setting Up a Business in the Maldives",
//                 "An Introduction to the Maldives Legal System",
//                 "News Items Related to Law and Judiciary",
//                 "New Laws and Regulations",
//                 "Landmark Cases",
//               ].map((data, index) => (
//                 <div className="flex flex-col items-center justify-center shadow-sm border p-3 rounded-lg">
//                   <p className="font-bold text-xl mb-1">{index + 1}</p>
//                   <p>{data}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const practiceAreas = [
  {
    id: 1,
    number: "01",
    imageSrc: "assets/images/bg/practice23.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Pro Bono Service",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 2,
    number: "02",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Interested in Investing in the Maldives?",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 3,
    number: "03",
    imageSrc: "assets/images/bg/practice21.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Setting Up a Business in the Maldives",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 4,
    number: "04",
    imageSrc: "assets/images/bg/practice22.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "An Introduction to the Maldives Legal System",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 5,
    number: "05",
    imageSrc: "assets/images/bg/practice23.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "News Items Related to Law and Judiciary",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 6,
    number: "06",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Landmark Cases",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
];

function Services() {
  const dublerowSlide = {
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: 1000,
    spaceBetween: 30,
    margin: 30,
    rows: 2, // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          spaceBetween: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          rows: 3, // This doesn't appear to work in responsive (Mac/Chrome)
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          rows: 3, // This doesn't appear to work in responsive (Mac/Chrome)
        },
      },
    ],
  };
  return (
    <>
      <div className="practice-area-section2 pb-120 max-w-[1700px] m-auto px-4">
        <div className="row align-items-end">
          <div className="col-12 m-auto overflow-hidden position-relative">
            <div className="section-title2 sibling3 text-xl-start text-center">
              <div className="section-title1 text-center">
                {" "}
                <h2>Our Services</h2>
              </div>
              <h3 className="text-center text-lg font-bold">
                We are for you to give you the best solutions.
              </h3>
            </div>
            <Slider
              spaceBetween={20}
              {...dublerowSlide}
              className="slick-wrapper mt-40"
            >
              {practiceAreas.map(
                ({ id, number, imageSrc, iconSrc, title, description }) => (
                  <div className="practice-single2" key={id}>
                    {/* <span className="sl-number">{number}</span> */}
                    <div className="image">
                      <img src={imageSrc} alt="image" />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <img src={iconSrc} alt="" />
                      </div>
                      <div className="text">
                        <h5>
                          <Link href="/practice-details">{title}</Link>
                        </h5>
                        <p>{description}</p>
                        <Link href="/practice-details" className="details-btn">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
