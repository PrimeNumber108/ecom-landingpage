import TrialForm from "@/components/form/TrialForm";
import React from "react";

const Trial = () => {
  return (
    <div className="flex-center py-10 sm:py-[68px] padding-layout">
      <div className="rounded-[30px] px-10 sm:px-[170px] py-10 shadow-box w-full sm:w-fit">
        <div className="w-full sm:w-[320px]">
          <div>
            <p className="text-[28px] font-semibold text-black-gradient">Start your free trial</p>
            <p className="text-[40px] text-black-gradient font-semibold leading-[40px]">now !!!</p>
          </div>
          <div className="mt-4">
            <TrialForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
