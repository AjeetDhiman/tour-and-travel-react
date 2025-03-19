import PropTypes from "prop-types";
import { MapPin } from "lucide-react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Location = ({ iconEnable = false, iconClass, className, children }) => {
  return (
    <div
      className={twMerge(
        clsx("flex items-baseline gap-1 text-base font-light", className),
      )}
    >
      {iconEnable && <MapPin className={twMerge(clsx("h-4 w-4", iconClass))} />}
      {children}
    </div>
  );
};
Location.propTypes = {
  iconEnable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Location;
