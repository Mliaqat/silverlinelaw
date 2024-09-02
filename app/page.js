import AboutUs from "@/section/AboutUs";
import HeroSection from "@/section/HeroSection";
import Practice from "@/section/Practice";
import Records from "@/section/Records";

export default function Home() {
  return (
    <>
      <div className="position-relative">
        <HeroSection />
        <div className="mt-3">
          <Records />
        </div>
      </div>
      <AboutUs />
      <Practice />
    </>
  );
}
