import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const Error = ({ className, children }) => {
  return (
    <div className={twMerge(clsx("mt-2 text-red-500 empty:hidden", className))}>
      {children}
    </div>
  );
};

export default Error;
