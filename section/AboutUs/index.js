import React from "react";

function AboutUs() {
  return (
    <>
      <div className="about-section pt-3 pt-lg-120 pb-11 mt-5" id="about">
        <img
          src="assets/images/bg/section-bg1.svg"
          alt="image"
          className="section-bg1 img-fluid"
        />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 text-lg-start text-center wow fadeInLeft"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="section-title1 px-6">
                <h2>About Silver Line Law</h2>
                <p className="leading-10 tracking-wide">
                  Silver Line is a Law Firm registered in the Republic of
                  Maldives by a partnership of licensed and experienced legal
                  professionals. We provide legal services of a wide range,
                  including representing clients at court, legal advice and
                  consultation, preparation of legal documents, review of legal
                  documents, legal drafting and translation, legal research,
                  representing clients in negotiation processes, and providing
                  legal assistance in setting up businesses and other legal
                  entities including companies and foreign investments in the
                  Maldives. We provide all legal services to both national and
                  international clients, in areas such as constitutional and
                  administrative law, criminal law, business law, taxation,
                  banking and insurance, land and conveyance, law of torts,
                  employment law, and family law.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex  col-lg-6 justify-content-lg-end justify-content-center fadeInRight">
              <img
                src="assets/protifilo.jpg"
                className="shadow rounded fadeInRight"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
