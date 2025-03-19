import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Clock } from "lucide-react";

const Itenary = ({ iconEnable = false, iconClass, className, children }) => {
  return (
    <div className={twMerge(clsx("mb-1 flex items-baseline gap-1", className))}>
      {iconEnable && <Clock className={twMerge(clsx("h-4 w-4", iconClass))} />}
      {children}
    </div>
  );
};
Itenary.propTypes = {
  iconEnable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Itenary;
