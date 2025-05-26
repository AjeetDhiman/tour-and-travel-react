import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { MoveRight, MapPin } from "lucide-react";
import Heading from "../components/misc/Heading";
import Breadcrumb from "../components/misc/Breadcrumb";
import Section from "../components/misc/Section";
import Container from "../components/misc/Container";
import OurTrueBeliefs from "../components/misc/OurTrueBeliefs";
import {
  animateFadeUp,
  animateLeft,
  animateRight,
  animateCard,
} from "../components/misc/transition.js";
import AboutCompany from "/about-company.jpg";
import journeyctavideo from "/journey-cta-video.jpg";
import ContactSection from "../components/misc/ContactSection";
import { teams } from "../components/misc/data";
import ImageCard from "../components/misc/imagecard/ImageCard";
const AboutPage = () => {
  return (
    <>
      <Breadcrumb bg={AboutCompany}>
        <Heading
          as="h1"
          className="relative w-full text-[2.5rem] sm:text-[5rem]"
        >
          About <span>Company</span>
        </Heading>
      </Breadcrumb>
      <Section className="pt-0 lg:pt-0">
        <Container>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-30">
            <div className="lg:w-2/4">
              <img
                src="crafting-img-1.jpg"
                width={555}
                height={181}
                alt="1"
                className="mb-6 w-full rounded-2xl"
              />
              <img
                src="crafting-img-2.jpg"
                width={555}
                height={301}
                alt="2"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="lg:w-2/4">
              <Heading as="h2" className="section-heading">
                Crafting <span>travel</span> experiences
              </Heading>
              <p className="my-[1.6rem] lg:mb-14">
                We are passionate about crafting extraordinary travel
                experiences that leave a lasting impact. With years of
                expertise, we have honed the art of live curating unique
                journeys that blend adventure, culture, and sustainability. Our
                mission is to connect travelers with the world's wonders while
                preserving its beauty for generations to come.
              </p>
              <Link
                to="/"
                role="button"
                className="pointer-events-auto inline-flex cursor-pointer gap-2 rounded-full border border-white bg-black px-[2.05rem] py-[0.55rem] font-medium text-white hover:border-black hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black"
              >
                Explore Now <MoveRight />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
      <OurTrueBeliefs />
      <Section>
        <Container>
          <div
            className="relative block h-[300px] rounded-3xl bg-cover bg-center bg-no-repeat lg:h-[500px]"
            style={{
              backgroundImage: `url(${journeyctavideo})`,
            }}
          >
            <motion.div
              variants={animateFadeUp(1)}
              initial="hidden"
              animate="visible"
              className="px-2.5 pt-5 text-end sm:pe-5 lg:pe-10 lg:pt-10"
            >
              <p className="flex flex-wrap justify-center gap-1 text-center sm:justify-end sm:gap-2">
                <MapPin /> Location Mountain Strait, Any State.
              </p>
            </motion.div>
            <motion.div
              variants={animateFadeUp(1)}
              initial="hidden"
              animate="visible"
              className="absolute bottom-4 left-0 h-auto w-full text-white lg:left-10"
            >
              <Heading className="mb-6 w-full">
                Our <span className="text-white">Journey</span> in videos
              </Heading>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="lg:pt-0">
        <Container>
          <motion.div
            variants={animateFadeUp(0.6)}
            initial="hidden"
            animate="visible"
            className="mb-3 flex flex-col items-center justify-between will-change-transform lg:mb-12 lg:flex-row"
          >
            <Heading>
              Our <span>passionate</span> teammates
            </Heading>
            <div className="lg:max-w-[419.96px]">
              <p className="text-secondary my-[1.75rem]">
                Meet the heart and soul of xplore – our own dynamic team of
                travel enthusiasts.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams &&
              teams.map((team, index) => {
                const { src, alt, width, height } = team;

                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={animateCard}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <ImageCard key={index}>
                      <ImageCard.Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                      />
                    </ImageCard>
                    <div>
                      <h3 className="mt-3 text-2xl font-bold lg:mt-6 lg:mb-1.5 lg:text-3xl">
                        {team.pname}
                      </h3>
                      <p>{team.designation}</p>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
};

export default AboutPage;
