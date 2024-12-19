import AboutUs from "@/section/AboutUs";
import AttorneySection from "@/section/Attorneys";
import Believe from "@/section/Believe";
import HeroSection from "@/section/HeroSection";
import GetInTouch from "@/section/OnelineContact";
import Practice from "@/section/Practice";
import Records from "@/section/Records";
//import Services from "@/section/Services";
import BlackboardNavigation from "@/section/BlackboardNevigation";
import ContactSection from "@/section/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ContactSection /> */}
      <AboutUs />
      <Believe />
    
      <BlackboardNavigation />
      {/* <Practice /> */}
      <AttorneySection />
    </>
  );
}
