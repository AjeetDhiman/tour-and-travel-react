import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
const Logo = ({ className }) => {
  return (
    <NavLink to="/" className={twMerge(clsx(className))}>
      {/* <img src="" alt="" width={80} height={80} /> */}
      Tour & Travels
    </NavLink>
  );
};

export default Logo;
