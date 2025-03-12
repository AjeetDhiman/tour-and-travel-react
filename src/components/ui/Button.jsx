import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
const Button = ({
  children,
  type = "button",
  ariaLabel = "button",
  ariaExpanded = undefined,
  className = "",
  action,
  disabled = false,
  ...props
}) => {
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      className={twMerge(clsx("px-4 py-3", disabledStyle, className))}
      onClick={action}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
  ariaExpanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  action: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
