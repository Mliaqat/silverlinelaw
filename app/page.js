import AboutUs from "@/section/AboutUs";
import AttorneySection from "@/section/Attorneys";
import Believe from "@/section/Believe";
import HeroSection from "@/section/HeroSection";
import Practice from "@/section/Practice";
import Records from "@/section/Records";
import Services from "@/section/Services";

export default function Home() {
  return (
    <>
      <div className="position-relative">
        <HeroSection />
        <div className="mt-3 hidden">{/* <Records /> */}</div>
      </div>
      <AboutUs />
      <Believe />
      <Services />
      {/* <Practice /> */}
      <AttorneySection />
    </>
  );
}
