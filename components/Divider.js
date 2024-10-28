import clsx from "clsx";
import React from "react";

const Divider = ({ className }) => {
  const mergeClassName = clsx("h-[1px] bg-[#D8D8D8] w-full my-10", className);
  return (
    <div className="flex-center">
      <div className={mergeClassName}></div>
    </div>
  );
};

export default Divider;
