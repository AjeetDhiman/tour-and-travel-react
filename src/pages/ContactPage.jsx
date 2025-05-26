import React from "react";
import Breadcrumb from "../components/misc/Breadcrumb";
import Heading from "../components/misc/Heading";
import Section from "../components/misc/Section";
import Container from "../components/misc/Container";
import Card from "../components/misc/Card";
import BgContact from "/bg-gallery.jpg";
import Error from "../components/misc/Error";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb bg={BgContact}>
        <Heading
          as="h1"
          className="relative w-full text-[2.5rem] sm:text-[5rem]"
        >
          Contact <span>Us</span>
        </Heading>
      </Breadcrumb>
      <Section className="pt-0!">
        <Container className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-22 lg:gap-y-0">
          <form
            onSubmit={() => {}}
            className="order-last w-full lg:order-first lg:w-1/2"
          >
            <div className="mb-4 grid grid-cols-1 gap-4 text-start sm:mb-5 sm:grid-cols-2 sm:gap-5">
              <div>
                <div>
                  <label htmlFor="sendername" className="mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="sendername"
                    id="sendername"
                    value=""
                    onChange={() => {}}
                    className="w-full rounded-full border border-[#CCCCCC] px-4 py-2"
                  />
                </div>
                <Error>Please enter value</Error>
              </div>
              <div>
                <div>
                  <label htmlFor="emailaddress" className="mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailaddress"
                    id="emailaddress"
                    value=""
                    onChange={() => {}}
                    maxLength="10"
                    className="w-full rounded-full border border-[#CCCCCC] px-4 py-2"
                  />
                </div>
                <Error>Please enter value</Error>
              </div>
            </div>
            <div className="mb-5 text-start">
              <div>
                <label htmlFor="email" className="mb-2 block">
                  Message
                </label>
                <textarea
                  className="w-full rounded-2xl border border-[#CCCCCC] px-4 py-2"
                  rows={4}
                ></textarea>
              </div>
              <Error>Please enter value</Error>
            </div>
            <div>
              <button
                type="submit"
                className="pointer-events-auto w-full cursor-pointer rounded-full border border-current bg-black py-2.5 text-white duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black"
              >
                Subscribe Now
              </button>
            </div>
          </form>
          <div className="order-first flex w-full flex-col gap-y-4 lg:order-last lg:w-1/2">
            <Card className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div
                className="mx-auto flex aspect-square h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <Phone />
              </div>

              <div className="grow text-center sm:text-start">
                <h3 className="font-bold">Phone Number</h3>
                <a href="tel:" className="">
                  +91 0000000000
                </a>
              </div>
            </Card>
            <Card className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div
                className="mx-auto flex aspect-square h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <Mail />
              </div>

              <div className="grow text-center sm:text-start">
                <h3 className="font-bold">Email</h3>
                <a href="mailto:" className="">
                  info@lorem.com
                </a>
              </div>
            </Card>
            <Card className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div
                className="mx-auto flex aspect-square h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <MapPin />
              </div>

              <div className="grow text-center sm:text-start">
                <h3 className="font-bold">Address</h3>
                <p className="">Lorem Ipsum, dior, Uttarakhand</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
      <Section className="bg-[#f3f3f3]">
        <Container>
          <Heading
            as="h2"
            className="relative mb-6 w-full text-center text-[2.5rem] sm:text-[5rem]"
          >
            Find Us on <span>Map</span>
          </Heading>
          <p className="mx-auto mb-14 text-center md:w-[75%]">
            Explore our location easily with the interactive map below. Whether
            you're planning a visit or just curious about where we're located,
            our map will guide you straight to our doorstep.
          </p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.059417643775!2d-122.42067948468195!3d37.77492927975926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b8c5b27%3A0x8b3edda05a62c5b2!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
