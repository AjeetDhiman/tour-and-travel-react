import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const LocationPriceWrapper = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        clsx("flex items-baseline justify-between", className),
      )}
    >
      {children}
    </div>
  );
};

LocationPriceWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LocationPriceWrapper;
