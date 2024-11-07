import Breadcrumb from "@/Component/Breadcrumb";
import Link from "next/link";
import React from "react";

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
  {
    id: 7,
    number: "06",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Landmark Cases",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
  {
    id: 8,
    number: "06",
    imageSrc: "assets/images/bg/practice24.png",
    iconSrc: "assets/images/icons/practice-icon21.svg",
    title: "Landmark Cases",
    description:
      "Legal Advise - providing legal advise on all matters of law, in order to help clients understand their legal rights,",
  },
];

function Services() {
  return (
    <>
      <Breadcrumb title="Services" pageName="Services" />
      <div className="grid sm:grid-cols-2 px-3 py-4 gap-3">
        {practiceAreas.map(
          ({ id, imageSrc, iconSrc, title, description }) => (
            <div className="practice-single2 p-2 rounded" key={id}>
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
      </div>
    </>
  );
}

export default Services;
