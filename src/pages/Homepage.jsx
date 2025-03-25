import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Section from "../components/misc/Section";
import { Link } from "react-router";
import Heading from "../components/misc/Heading";
import { MoveRight, Quote } from "lucide-react";
import ImageCard from "../components/misc/imagecard/ImageCard";
import Container from "../components/misc/Container";
import Card from "../components/misc/Card";
import { packages, beliefs, testimonials } from "../components/misc/data.jsx";
import Image from "../components/misc/imagecard/Image.jsx";
import homepagebanner from "../assets/img/homepage-banner.jpg";
import journeycta from "../assets/img/journey-cta.jpg";
import quote from "../assets/img/icons/quote-icon.png";
import ContactSection from "../components/misc/ContactSection.jsx";

const Homepage = () => {
  return (
    <>
      <div
        className="z-auto -mt-[5.5rem] bg-cover bg-center bg-no-repeat pt-[8.1rem] pb-[4.45rem]"
        style={{
          backgroundImage: `url(${homepagebanner})`,
        }}
      >
        <Container>
          <div className="mb-6 text-center">
            <p className="inline-block rounded-[50px] bg-gradient-to-b from-white/20 to-white/60 px-6 py-2.5 text-sm font-medium text-white sm:text-base">
              The Best Place to Start Your Adventure
            </p>
          </div>
          <Heading className="mx-auto mb-[2rem] w-full text-center text-[2.8rem]/10 tracking-wide text-white sm:text-[5rem]/20 lg:mb-[6.238rem] lg:w-3xl">
            Embark on <span className="text-white">Journey</span> not{" "}
            <span className="text-white">just</span> destinations with
            <span className="text-white">our trips.</span>
          </Heading>
          <div className="flex flex-col items-center justify-center lg:mt-0 lg:flex-row lg:justify-between">
            <p className="mb-8 max-w-[468.45px] text-center text-white md:text-start lg:mb-0">
              Unlock the doors to diverse cultures, awe-inspiring landscapes,
              and thrilling adventures with us.
            </p>
            <Link
              to="/"
              className="pointer-events-auto flex cursor-pointer gap-2 rounded-full border border-white px-[2.05rem] py-[0.55rem] font-medium text-white hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black"
            >
              Explore Now <MoveRight />
            </Link>
          </div>
        </Container>
      </div>
      <Section>
        <Container>
          <div className="mb-12 flex flex-col items-center justify-between lg:flex-row">
            <Heading>
              Must <span>experience</span> packages
            </Heading>
            <div className="lg:max-w-[419.96px]">
              <p className="text-secondary my-[1.75rem]">
                Indulge in our carefully crafted packages to immerse you in the
                most captivating and transformative travel adventures.
              </p>
              <Link to="/" className="font-bold">
                See All Packages
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {packages &&
              packages.map((pack, index) => {
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
                      <ImageCard.Title>{title}</ImageCard.Title>
                      <ImageCard.Itenary iconEnable={false}>
                        {itenary}
                      </ImageCard.Itenary>
                      <ImageCard.Wrapper>
                        <ImageCard.Location iconEnable={false}>
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
      <Section className="bg-light-gray">
        <Container>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <Heading>
                Our true <span>beliefs</span> for <span>your</span> benefits
              </Heading>
              <div className="lg:max-w-[419.96px]">
                <p className="text-secondary my-[1.75rem]">
                  Our beliefs aren't just words; they are the foundation of
                  every adventure we offer. With high commitment to
                  sustainability, authenticity, and customer-centricity, we
                  ensure that every trip you take with us is valuable.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              {beliefs &&
                beliefs.map((belief, index) => {
                  return (
                    <Card
                      className={`mb-5 px-12 py-6 ${index % 2 !== 0 ? "bg-black text-white" : "bg-transparent"}`}
                      key={index}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                        <div className="mx-auto flex aspect-square h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border">
                          {belief.icon}
                        </div>

                        <div className="grow text-center sm:text-start">
                          <h5 className="font-bold">{belief.heading}</h5>
                          <p>{belief.content}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div
            className="relative block h-[300px] rounded-3xl bg-cover bg-center bg-no-repeat lg:h-[500px]"
            style={{
              backgroundImage: `url(${journeycta})`,
            }}
          >
            <div className="absolute top-1/2 left-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <Heading className="mb-6 w-full">
                Our <span className="text-white">Journey</span> in pictures
              </Heading>
              <p>See what makes each experience with our trips exceptional.</p>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="mb-[1rem] py-0 lg:mb-[6.238rem] lg:py-0">
        <Container>
          <div className="mb-[2.5rem] flex flex-col items-center justify-between lg:mb-[5rem] lg:flex-row lg:items-end">
            <Heading className="mx-auto w-full md:mx-0 md:max-w-[25rem]">
              Real <span>stories</span> from travelers
            </Heading>
            <div className="hidden lg:block lg:max-w-[419.96px]">
              <Image src={quote} alt="quote icon" width={40} height={41} />
            </div>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={3.5}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3.5,
              },
            }}
            className="testimonails mb-16"
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card className="w-full p-[2.05rem] lg:max-w-[360px]">
                    <p className="mb-5">{testimonial.description}</p>
                    <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                      <div className="mx-auto flex aspect-square h-[3.25rem] w-[3.25rem] items-center justify-center overflow-hidden rounded-full">
                        <img
                          src={testimonial.profile}
                          alt="all"
                          width={44}
                          height={44}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="grow text-center sm:text-start">
                        <h6 className="mb-2.5 font-bold">{testimonial.name}</h6>
                        <p>{testimonial.place}</p>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
};

export default Homepage;
