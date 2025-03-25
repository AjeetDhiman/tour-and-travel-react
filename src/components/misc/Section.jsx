import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import PropTypes from "prop-types";

const Section = ({ className, children, ...props }) => {
  return (
    <section
      className={twMerge(
        clsx(
          "py-[3.125rem] text-center lg:py-[6.25rem] lg:text-start",
          className,
        ),
      )}
      {...props}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
