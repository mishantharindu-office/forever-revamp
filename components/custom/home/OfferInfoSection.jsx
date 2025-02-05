import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

function OfferInfoSection() {
  return (
    <div className="grid w-full grid-cols-1 gap-3 px-3 py-11 sm:grid-cols-3">
      <div className="sm:h-[70vh] w-full h-screen bg-green-500 relative">
        <Image
          src={"/image/banner-26.jpg"}
          width={600}
          height={600}
          alt="Image"
          className="absolute inset-0 object-cover object-center w-auto h-full"
        ></Image>
        <div className="absolute left-0 right-0 flex items-center justify-center w-full bottom-5">
          <div>
            <p className="mb-3 text-3xl font-bold text-white font-primary">
              Autumn Skincare
            </p>
            <div className="flex items-center justify-center">
              <p className="text-base font-bold text-white font-primary">
                Discover Now
              </p>
              <ArrowTopRightIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:h-[70vh] w-full h-screen bg-green-500 relative">
        <Image
          src={"/image/banner-27.jpg"}
          width={600}
          height={600}
          alt="Image"
          className="absolute inset-0 object-cover object-center w-auto h-full"
        ></Image>
        <div className="absolute left-0 right-0 flex items-center justify-center w-full bottom-5">
          <div>
            <p className="mb-3 text-3xl font-bold text-white font-primary">
              Autumn Skincare
            </p>
            <div className="flex items-center justify-center">
              <p className="text-base font-bold text-white font-primary">
                Discover Now
              </p>
              <ArrowTopRightIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:h-[70vh] w-full h-screen bg-green-500 relative">
        <Image
          src={"/image/banner-28.jpg"}
          width={600}
          height={600}
          alt="Image"
          className="absolute inset-0 object-cover object-center w-auto h-full"
        ></Image>
        <div className="absolute left-0 right-0 flex items-center justify-center w-full bottom-5">
          <div>
            <p className="mb-3 text-3xl font-bold text-white font-primary">
              Autumn Skincare
            </p>
            <div className="flex items-center justify-center">
              <p className="text-base font-bold text-white font-primary">
                Discover Now
              </p>
              <ArrowTopRightIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default OfferInfoSection;
