import Container from "../misc/Container";
import { Link } from "react-router";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 lg:py-[4rem]">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          <div className="mb-4 lg:mb-0">
            <h4 className="mb-3 text-white">Discover</h4>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Trip Packages</Link>
              </li>
              <li>
                <Link to="/">Gallery</Link>
              </li>
              <li>
                <Link to="/">Licenses</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0">
            <h4 className="mb-3 text-white">Packages</h4>
            <ul>
              <li>
                <Link to="/">Tropical Paradise</Link>
              </li>
              <li>
                <Link to="/">Cruise Getaway</Link>
              </li>
              <li>
                <Link to="/">Cultural Morocco</Link>
              </li>
              <li>
                <Link to="/">River Expedition</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0">
            <h4 className="mb-3 text-white">Treks</h4>
            <ul>
              <li>
                <Link to="/">Mountain Adventure</Link>
              </li>
              <li>
                <Link to="/">Wildlife Safari</Link>
              </li>
              <li>
                <Link to="/">Roma Adventure</Link>
              </li>
              <li>
                <Link to="/">Amazon Expedition</Link>
              </li>
            </ul>
          </div>
          <div className="sm:mb-4 lg:mb-0">
            <h4 className="mb-3 text-white">Contact</h4>
            <Link
              to="mailto:+91"
              className="mb-3 flex flex-row items-center gap-1"
            >
              <Phone className="me-1" size={16} />
              +91 0000000000
            </Link>
            <p className="text-gray flex flex-row items-stretch gap-1">
              <MapPin className="me-1" /> 123 lorem isum dior comet,
              Uttarakhand.
            </p>
            <hr className="text-gray mt-6 mb-5" />
            <p className="text-gray">Copyright © 2025</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
