import Breadcrumb from "@/Component/Breadcrumb";
import Contact from "@/section/Contact";
import React from "react";

function ContactUs() {
  return (
    <>
      <Breadcrumb title="Contact Us" pageName="Contact Us" />
      <div className="mt-5">
        <Contact />
      </div>
    </>
  );
}

export default ContactUs;
