import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import ImageOverlayTitle from "./Title";
import Itenary from "./Itenary";
import LocationPriceWrapper from "./LocationPriceWrapper";
import Location from "./Location";
import Price from "./Price";
import Content from "./Content";
import Image from "./Image";

const ImageCard = ({ to, className, children }) => {
  const base = twMerge(
    clsx(
      "relative inline-block overflow-hidden rounded-3xl before:absolute before:inset-0 before:block before:bg-black/50 before:opacity-0 before:transition-opacity before:duration-300 before:ease-out hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100",
      className,
    ),
  );
  return (
    <Link to={to} className={base}>
      {children &&
        React.Children.map(children, (child) =>
          React.isValidElement(child) ? React.cloneElement(child) : child,
        )}
    </Link>
  );
};

ImageCard.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
ImageCard.Image = Image;
ImageCard.Content = Content;
ImageCard.Title = ImageOverlayTitle;
ImageCard.Itenary = Itenary;
ImageCard.Wrapper = LocationPriceWrapper;
ImageCard.Location = Location;
ImageCard.Price = Price;

export default ImageCard;
