import React from "react";
import "./Believe.scss";

function Believe() {
  return (
    <div className="practice-area-section pb-120 max-w-[1700px] m-auto px-4">
      <div className="row justify-content-center">
        <div className="section-title1 text-center mt-4 lg:mt-0">
          <h2>WE BELIEVE IN</h2>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {[
            "Rule of Law",
            "Justice",
            "Affordable Legal Service ",
            "Commitment and Diligence",
          ].map((data, index) => (
            <div className="flex flex-col items-center justify-center shadow-sm border   px-3 py-5 rounded-[12px] relative">
              <p className="font-bold text-6xl mb-1 absolute left-3 top-0 opacity-25 -z-10 text-[#2B3D5C]">
                0{index + 1}
              </p>
              <p className="font-bold text-xl whitespace-nowrap mt-3">{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Believe;
