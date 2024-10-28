import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ImageWithText = ({ imageUrl, content, reverse }) => {
  const bodyStyle = clsx(
    "flex w-full md:gap-[40px] lg:gap-[72px] gap-[20px] flex-col lg:flex-row",
    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
  );
  const contentStyle = clsx("flex-1 flex items-center text-center", reverse ? "lg:text-right" : "lg:text-left");

  return (
    <div className={bodyStyle}>
      <div className="sm:basis-[65%] basis-full">
        <Image src={imageUrl} alt="image" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      </div>
      <div className={contentStyle}>
        <div className="text-2xl sm:text-4xl font-medium leading-8 md:leading-[46px] lg:leading-[52px] w-full">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
