import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Content = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "absolute bottom-0 left-0 z-10 w-full px-5 py-3 text-white",
          className,
        ),
      )}
    >
      {children}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Content;
