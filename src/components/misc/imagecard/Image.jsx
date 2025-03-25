import clsx from "clsx";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Image = ({ src, alt, width, height, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={twMerge(clsx("h-full w-full object-cover", className))}
      {...props}
    />
  );
};
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};
export default Image;
