import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const TrialButton = () => {
  return (
    <Link href="/trial">
      <Button variant="sandstone" className="relative font-medium rounded-lg py-2 px-[18px] w-fit h-fit text-base">
        <span>Start free trial</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </Button>
    </Link>
  );
};

export default TrialButton;
