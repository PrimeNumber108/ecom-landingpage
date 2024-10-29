import React from "react";
import TrialButton from "@/components/button/TrialButton";
import Divider from "@/components/Divider";
import ImageWithText from "./ImageWithText";

const Homepage = () => {
  return (
    <div className="padding-layout pb-[60px]">
      <div className="py-[68px] w-full flex-center flex-col gap-10">
        <h1 className="sm:text-[40px] text-[30px] font-semibold text-black-gradient">E-commerce manage tool</h1>
        <TrialButton />
      </div>
      <div className="p-8 bg-[#F6F6F6] rounded-[36px]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#141414] text-center">Main features</h2>
        <Divider className="max-w-[370px] mt-5" />
        <ImageWithText imageUrl="/images/home-1.png" content="AI suggestion" />
        <Divider />
        <ImageWithText reverse imageUrl="/images/home-2.png" content="Customer classification" />
        <Divider />
        <ImageWithText imageUrl="/images/home-3.png" content="Realtime report by page" />
        <Divider />
        <ImageWithText reverse imageUrl="/images/home-4.png" content="Realtime report by product" />
        <Divider />
        <ImageWithText imageUrl="/images/home-5.png" content="Convenient customer division" />
        <Divider />
        <ImageWithText
          reverse
          imageUrl="/images/home-6.png"
          content="Full and centralized customer history (sales interface)"
        />
        <Divider />
        <ImageWithText imageUrl="/images/home-7.png" content="Full and centralized customer history (CS interface)" />
        <Divider />
        <ImageWithText reverse imageUrl="/images/home-8.png" content="Data reporting by customer source" />
        <Divider />
        <ImageWithText imageUrl="/images/home-9.png" content="Connect landing page and shopify" />
        <Divider />
        <ImageWithText reverse imageUrl="/images/home-10.png" content="Smart ads setting" />
        <Divider />
        <ImageWithText imageUrl="/images/home-11.png" content="The effectiveness of each content" />
        <Divider />
        <div className="flex-col w-full gap-10 flex-center">
          <h1 className="text-3xl font-semibold md:text-4xl text-black-gradient">Get your free trial now!!</h1>
          <TrialButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
