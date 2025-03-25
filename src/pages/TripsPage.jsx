import React from "react";
import Section from "../components/misc/Section";
import Container from "../components/misc/Container";
import Breadcrumb from "../components/misc/Breadcrumb";
import TourPackage from "../assets/img/breadcrumb/tour-packages.jpg";
import { lgpackages } from "../components/misc/data";
import ImageCard from "../components/misc/imagecard/ImageCard";
import ContactSection from "../components/misc/ContactSection";
const TripsPage = () => {
  return (
    <>
      <Breadcrumb bg={TourPackage} />
      <Section className="mb-12 py-0 md:mb-[6.25rem] lg:py-0">
        <Container>
          <div className="grid grid-cols-1 gap-4 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {lgpackages &&
              lgpackages.map((pack, index) => {
                const {
                  to,
                  src,
                  alt,
                  width,
                  height,
                  title,
                  itenary,
                  location,
                  price,
                } = pack;

                return (
                  <ImageCard to={to} key={index}>
                    <ImageCard.Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                    />
                    <ImageCard.Content>
                      <ImageCard.Title className="text-xl capitalize">
                        {title}
                      </ImageCard.Title>
                      <ImageCard.Itenary iconEnable={true}>
                        {itenary}
                      </ImageCard.Itenary>
                      <ImageCard.Wrapper>
                        <ImageCard.Location iconEnable={true}>
                          {location}
                        </ImageCard.Location>
                        <ImageCard.Price>{price}</ImageCard.Price>
                      </ImageCard.Wrapper>
                    </ImageCard.Content>
                  </ImageCard>
                );
              })}
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
};

export default TripsPage;
