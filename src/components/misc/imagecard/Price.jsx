import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Price = ({ className, children }) => {
  return (
    <span className={(twMerge, clsx("font-light", className))}>{children}</span>
  );
};
Price.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Price;
