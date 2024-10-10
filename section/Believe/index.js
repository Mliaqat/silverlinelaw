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
            <div
              className={`believeCard relative wow ${
                index > 1 ? "fadeInRight" : "fadeInLeft"
              }`}
              key={index}
            >
              <span className="sl-number">0{index + 1}</span>
              <div className="content">
                <div className="text">
                  <p className="font-bold text-xl text-center">{data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Believe;
