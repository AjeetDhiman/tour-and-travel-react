import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Title = ({ as: Tag = "h2", className, children }) => {
  return (
    <Tag className={twMerge(clsx("mb-1 font-bold", className))}>{children}</Tag>
  );
};

Title.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "span"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Title;
