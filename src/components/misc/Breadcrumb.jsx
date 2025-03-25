import React from "react";
import Heading from "./Heading";

const Breadcrumb = ({ bg, children }) => {
  return (
    <div
      className="breadcrumb relative z-10 mb-12 bg-cover bg-center bg-no-repeat py-[4.297rem] text-center before:absolute before:inset-0 before:z-0 before:bg-black/10 sm:py-[8.594rem] md:mb-[6.25rem]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Heading as="h1" className="relative w-full text-[2.5rem] sm:text-[5rem]">
        Tour <span>Packages</span>
      </Heading>
      {children}
    </div>
  );
};

export default Breadcrumb;
