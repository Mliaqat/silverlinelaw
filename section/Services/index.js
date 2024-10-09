import React from "react";

function Services() {
  return (
    <div className="practice-area-section pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-title1 text-center">
              <h2>Our Services</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                "Pro Bono Service",
                "Interested in Investing in the Maldives?",
                "Setting Up a Business in the Maldives",
                "An Introduction to the Maldives Legal System",
                "News Items Related to Law and Judiciary",
                "New Laws and Regulations",
                "Landmark Cases",
              ].map((data, index) => (
                <div className="flex flex-col items-center justify-center shadow-sm border p-3 rounded-lg">
                  <p className="font-bold text-xl mb-1">{index + 1}</p>
                  <p>{data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
