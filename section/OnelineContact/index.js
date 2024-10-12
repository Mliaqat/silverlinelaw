import Image from "next/image";
import React from "react";

function GetInTouch() {
  return (
    <div className="">
      <p className="text-center font-bold text-lg pt-2 text-white">
        Get in touch with us
      </p>
      <div className="flex justify-center gap-6 items-center py-2">
        <div className="flex items-center gap-1">
          <Image src="/Icons/whatapp.png" alt="..." width={50} height={50} />
          <p className="text-white text-lg"> +960-1234567</p>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/Icons/viber.png" alt="..." width={27} height={27} />
          <p className="text-white text-lg"> +960-1234567</p>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
