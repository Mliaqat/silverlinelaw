import Breadcrumb from "@/Component/Breadcrumb";
import Contact from "@/section/Contact";
import React from "react";

function ContactUs() {
  return (
    <>
      <Breadcrumb title="Contact Us" pageName="Contact Us" />
      <div className="">
        <Contact />
      </div>
    </>
  );
}

export default ContactUs;
