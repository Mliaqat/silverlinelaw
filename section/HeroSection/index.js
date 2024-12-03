"use client";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import GetInTouch from "../OnelineContact";

const practiceAreas = [
  { id: 1, title: "Litigation", description: "Legal Advise ..." },
  { id: 2, title: "Legal Drafting", description: "Legal Advise ..." },
  { id: 3, title: "Translation", description: "Legal Advise ..." },
  {
    id: 4,
    title: "Preparing & Reviewing Legal Documents",
    description: "Legal Advise ...",
  },
  { id: 5, title: "Retainer Services", description: "Legal Advise ..." },
  { id: 6, title: "Document Attestation", description: "Legal Advise ..." },
  {
    id: 7,
    title: "Due Diligence Investigation",
    description: "Legal Advise ...",
  },
  { id: 8, title: "Legal Advise", description: "Legal Advise ..." },
];

function HeroSection() {
  return (
    <>
      <div className="banner-section relative">
        <div className="container pb-20">
          <div className="practice-area-section2 max-w-[1700px] m-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
              {practiceAreas.map(({ id, title, description }) => (
                <div
                  className={`rounded-lg grid place-content-center p-5 ${
                    id > 8 ? "hidden" : ""
                  }`}
                  key={id}
                  style={{
                    background: id % 2 === 0 ? "#1f3864" : "#fff",
                    color: id % 2 === 0 ? "#fff" : "#1f3864",
                  }}
                >
                  <h5 className="text-center font-bold text-xl px-2">
                    <Link href="/practice-details">{title}</Link>
                  </h5>
                </div>
              ))}
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
