import React from "react";

function AboutUs() {
  return (
    <>
      <div className="about-section pt-3 pt-lg-120 pb-120" id="about">
        <img
          src="assets/images/bg/section-bg1.svg"
          alt="image"
          className="section-bg1 img-fluid"
        />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 text-lg-start text-center wow fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="section-title1">
                <h2>About Silver Line Law</h2>
                <p>
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
              <div className="about-content1">
                <h3>Get about our law firm and learn about our expertise.</h3>
                <div className="lawyer-word">
                  <p>
                    In consequat tincidunt turpis sit amet imperdiet. Praesent
                    Classei consequat tincidunt turpis sit amet imperdiet for
                    mind.
                  </p>
                  <h6>Dr. Ahmed Abdullah Didi, CEO-Founder</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div
                className="about1-img wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/protifilo.jpg" alt="image" />
                {/* <div className="experience-tag">
                  <h2>
                    25 <span>Years</span>
                  </h2>
                  <p>We Have A Lot Of Real Experience</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
