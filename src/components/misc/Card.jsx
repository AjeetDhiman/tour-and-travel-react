import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <div className={twMerge(clsx("card rounded-3xl border p-4", className))}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
