import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import PropTypes from "prop-types";

const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge(clsx("container mx-auto px-[1.2rem]", className))}
      {...props}
    >
      {children}
    </div>
  );
};
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Container;
