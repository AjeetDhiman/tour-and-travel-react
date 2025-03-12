import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Heading = ({ as: Tag = "h2", className = "", children }) => {
  return (
    <>
      <Tag
        className={twMerge(
          clsx("section-heading", className),
        )}
      >
        {children}
      </Tag>
    </>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
