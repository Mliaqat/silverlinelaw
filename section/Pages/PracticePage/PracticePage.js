import Breadcrumb from "@/Component/Breadcrumb";
import InfoSection from "@/section/InfoSection";
import Practice from "@/section/Practice";

function PracticeArea() {
  return (
    <>
      <Breadcrumb title="Practice Area" pageName="Practice Area" />
      <div className="mt-5">
        <Practice />
      </div>
      <InfoSection />
    </>
  );
}

export default PracticeArea;
