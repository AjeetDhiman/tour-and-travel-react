import { motion } from "framer-motion";
import Section from "../components/misc/Section";
import { Link } from "react-router";
import { MoveRight } from "lucide-react";
import Heading from "../components/misc/Heading";
import ImageCard from "../components/misc/imagecard/ImageCard";
import Container from "../components/misc/Container";
import { packages, testimonials } from "../components/misc/data.jsx";
import homepagebanner from "../assets/img/homepage-banner.jpg";
import journeycta from "../assets/img/journey-cta.jpg";
import ContactSection from "../components/misc/ContactSection.jsx";
import OurTrueBeliefs from "../components/misc/OurTrueBeliefs.jsx";
import Testimonials from "../components/misc/Testimonials.jsx";
import {
  animateFadeUp,
  animateLeft,
  animateRight,
  animateCard,
} from "../components/misc/transition";
const Homepage = () => {
  return (
    <>
      <div
        className="z-auto -mt-[6.2rem] bg-cover bg-center bg-no-repeat pt-[8.1rem] pb-[4.45rem]"
        style={{
          backgroundImage: `url(${homepagebanner})`,
        }}
      >
        <Container>
          <div className="mb-6 text-center">
            <motion.p
              variants={animateFadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="inline-block rounded-[50px] bg-gradient-to-b from-white/20 to-white/60 px-6 py-2.5 text-sm font-medium text-white sm:text-base"
            >
              The Best Place to Start Your Adventure
            </motion.p>
          </div>
          <motion.div
            variants={animateFadeUp(0.6)}
            initial="hidden"
            animate="visible"
          >
            <Heading
              as="h1"
              className="mx-auto mb-[2rem] w-full text-center text-[2.8rem]/10 tracking-wide text-white sm:text-[5rem]/20 lg:mb-[6.238rem] lg:w-3xl"
            >
              Embark on <span className="text-white">Journey</span> not{" "}
              <span className="text-white">just</span> destinations with
              <span className="text-white">our trips.</span>
            </Heading>
          </motion.div>
          <div className="flex flex-col items-center justify-center lg:mt-0 lg:flex-row lg:justify-between">
            <motion.p
              variants={animateFadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="mb-8 max-w-[468.45px] text-center text-white md:text-start lg:mb-0"
            >
              Unlock the doors to diverse cultures, awe-inspiring landscapes,
              and thrilling adventures with us.
            </motion.p>
            <motion.div
              variants={animateFadeUp(0.6)}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/"
                role="button"
                className="pointer-events-auto flex cursor-pointer gap-2 rounded-full border border-white px-[2.05rem] py-[0.55rem] font-medium text-white hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black"
              >
                Explore Now <MoveRight />
              </Link>
            </motion.div>
          </div>
        </Container>
      </div>
      <Section>
        <Container>
          <motion.div
            variants={animateFadeUp(0.6)}
            initial="hidden"
            animate="visible"
            className="mb-12 flex flex-col items-center justify-between will-change-transform lg:flex-row"
          >
            <Heading>
              Must <span>experience</span> packages
            </Heading>
            <div className="lg:max-w-[419.96px]">
              <p className="text-secondary my-[1.75rem]">
                Indulge in our carefully crafted packages to immerse you in the
                most captivating and transformative travel adventures.
              </p>
              <Link to="/trips" className="font-bold">
                See All Packages
              </Link>
            </div>
          </motion.div>

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
                  <motion.div
                    key={index}
                    custom={index}
                    variants={animateCard}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
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
                  </motion.div>
                );
              })}
          </div>
        </Container>
      </Section>
      <motion.div
        variants={animateLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OurTrueBeliefs />
      </motion.div>
      <Section>
        <Container>
          <div
            className="relative block h-[300px] rounded-3xl bg-cover bg-center bg-no-repeat lg:h-[500px]"
            style={{
              backgroundImage: `url(${journeycta})`,
            }}
          >
            <motion.div
              variants={animateFadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="absolute top-1/2 left-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2 text-center text-white"
            >
              <Heading className="mb-6 w-full">
                Our <span className="text-white">Journey</span> in pictures
              </Heading>
              <p className="text-white!">
                See what makes each experience with our trips exceptional.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>
      <Testimonials testimonials={testimonials} />
      <ContactSection />
    </>
  );
};

export default Homepage;
