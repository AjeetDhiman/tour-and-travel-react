import Container from "../misc/Container";
import { Link } from "react-router";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 lg:py-[4rem]">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-3 text-white">Discover</h3>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/trips">Trip Packages</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/lincenses">Licenses</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-3 text-white">Packages</h3>
            <ul>
              <li>
                <Link to="/tropical-paradise">Tropical Paradise</Link>
              </li>
              <li>
                <Link to="/cruise-getaway">Cruise Getaway</Link>
              </li>
              <li>
                <Link to="/cultural-morocco">Cultural Morocco</Link>
              </li>
              <li>
                <Link to="/river-expedition">River Expedition</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-3 text-white">Treks</h3>
            <ul>
              <li>
                <Link to="/mountain-adventure">Mountain Adventure</Link>
              </li>
              <li>
                <Link to="/wildlife-safari">Wildlife Safari</Link>
              </li>
              <li>
                <Link to="/roma-adventure">Roma Adventure</Link>
              </li>
              <li>
                <Link to="/amazon-expedition">Amazon Expedition</Link>
              </li>
            </ul>
          </div>
          <div className="sm:mb-4 lg:mb-0">
            <h3 className="mb-3 text-white">Contact</h3>
            <Link
              to="mailto:+91"
              className="mb-3 flex flex-row items-center gap-1"
            >
              <Phone className="me-1" size={16} />
              +91 0000000000
            </Link>
            <p className="text-gray! flex flex-row items-stretch gap-1">
              <MapPin className="me-1" /> 123 lorem isum dior comet,
              Uttarakhand.
            </p>
            <hr className="text-gray! mt-6 mb-5" />
            <p className="text-gray!">Copyright © 2025</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
