import { MapPin, Clock } from "lucide-react";
import Section from "../components/misc/Section";
import Container from "../components/misc/Container";
import Heading from "../components/misc/Heading";
import Image from "../components/misc/imagecard/Image";
import SingleProductImage from "../assets/img/products/single-product.jpg";
import AsideForm from "../components/misc/AsideForm";

const TourDetail = () => {
  return (
    <>
      <Section>
        <Container>
          <div className="mb-[3.125rem] grid grid-cols-1 xl:mb-[6.25rem] xl:grid-cols-2">
            <Heading
              as="h1"
              className="mb-5 w-full text-[2.5rem] lg:text-[5rem]/20 xl:mb-0"
            >
              Valley of Flowers, Chamoli
            </Heading>
            <div className="w-full lg:ms-auto xl:w-[434px]">
              <ul className="mb-7">
                <li className="mb-2 flex items-center gap-2">
                  <MapPin className="me-1 h-5 w-5" />
                  Chamoli, Uttarakhand
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="me-1 h-4 w-4" />7 days, 6 nights
                </li>
              </ul>
              <p>
                Discover the rich biodiversity, explore jungle trails, and
                immerse yourself in the culture of the Amazon’s indigenous
                communities on this once-in-a-lifetime journey.
              </p>
            </div>
          </div>
          <Image
            src={SingleProductImage}
            alt="single product"
            width={1440}
            height={675}
          />
          <div className="flex flex-row justify-between">
            <div className="detailed-content">
              <div className="package-detail">
                <div>
                  <p>Price</p>
                  <span>$7999</span>
                </div>
                <div>
                  <p>Quota</p>
                  <span>10</span>
                </div>
                <div>
                  <p>Schedule</p>
                  <span>October 24, 2025</span>and<span>October 18, 2025</span>
                </div>
              </div>
            </div>
            <aside>
              <AsideForm />
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TourDetail;
