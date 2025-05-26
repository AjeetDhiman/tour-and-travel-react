import { MapPin, Clock, Check } from "lucide-react";
import Section from "../components/misc/Section";
import Container from "../components/misc/Container";
import Heading from "../components/misc/Heading";
import Image from "../components/misc/imagecard/Image";
import SingleProductImage from "../assets/img/products/single-product.jpg";
import AsideForm from "../components/misc/AsideForm";
import Testimonials from "../components/misc/Testimonials";
import { testimonials } from "../components/misc/data.jsx";

const TravelPlan = [
  {
    travel_day: "Day 01",
    travel_desc: "Arrival in Iquitos & Transfer to Jungle Lodge",
  },
  {
    travel_day: "Day 02",
    travel_desc: "River Exploration & Jungle Trek",
  },
  {
    travel_day: "Day 03",
    travel_desc: "Canoeing & Indigenous Community Visit",
  },
  {
    travel_day: "Day 04",
    travel_desc: "Wildlife Safari & Fishing Adventure",
  },
  {
    travel_day: "Day 05",
    travel_desc: "Canopy Walkway & Zipline",
  },
  {
    travel_day: "Day 06",
    travel_desc: "Arrival in Iquitos & Transfer to Jungle Lodge",
  },
  {
    travel_day: "Day 07",
    travel_desc: "Arrival in Iquitos & Transfer to Jungle Lodge",
  },
];

const GridImages = [
  {
    src: "./img-1.jpg",
    width: "600",
    height: "681",
    altText: "Dummy Image",
  },
  {
    src: "./img-2.jpg",
    width: "600",
    height: "321",
    altText: "Dummy Image",
  },
  {
    src: "./img-3.jpg",
    width: "600",
    height: "321",
    altText: "Dummy Image",
  },
];

const TourDetail = () => {
  return (
    <>
      <Section className="text-start">
        <Container>
          <div className="mb-8 grid grid-cols-1 lg:mb-[6.25rem] xl:grid-cols-2">
            <Heading
              as="h1"
              className="mb-5 w-full text-start text-[2.5rem] lg:text-[5rem]/20 xl:mb-0"
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
                immerse yourself in the culture of the Amazon's indigenous
                communities on this once-in-a-lifetime journey.
              </p>
            </div>
          </div>
        </Container>
        <Image
          src={SingleProductImage}
          alt="single product"
          width={1440}
          height={675}
        />
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row xl:gap-28">
            <div className="detailed-content mt-8 lg:my-16 lg:max-w-[634px] 2xl:max-w-[868px]">
              <div className="package-detail">
                <div className="flex items-baseline gap-4 sm:items-center">
                  <p className="w-16 sm:w-28">Price</p>
                  <span className="font-bold">$7999</span>
                </div>
                <div className="flex items-baseline gap-4 sm:items-center">
                  <p className="w-16 sm:w-28">Quota</p>
                  <span className="font-bold">10</span>
                </div>
                <div className="flex items-baseline gap-4 sm:items-center">
                  <p className="w-16 sm:w-28">Schedule</p>
                  <span className="font-bold">
                    October 24, 2025 and October 18, 2025
                  </span>
                </div>
              </div>
              <div className="border-gray mt-8 border-0 border-t-[1px] border-b-[1px] py-8 lg:mt-16 lg:py-16">
                <p>
                  This expedition offers a rare opportunity to explore the lush,
                  untamed wilderness of the Amazon rainforest, where adventure
                  and nature come together. From navigating the winding rivers
                  by boat to trekking through dense jungle trails, you’ll
                  witness exotic wildlife, vibrant flora, and learn about
                  indigenous cultures that have thrived here for centuries.
                  Experience the sights and sounds of this breathtaking
                  ecosystem as you encounter monkeys, toucans, caimans, and
                  other unique species in their natural habitat.
                </p>
                <h2 className="mt-7 mb-5 text-[2rem] font-bold">Includes:</h2>
                <ul className="space-y-2">
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    Accommodations at an eco-lodge in the Amazon rainforest
                  </li>
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    All meals (breakfast, lunch, and dinner) featuring local
                    cuisine
                  </li>
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    Indigenous community visit and cultural experiences
                  </li>
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    Wildlife Safari & Fishing Adventure
                  </li>
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    Canopy Walkway & Zipline
                  </li>
                </ul>
                <h2 className="mt-7 mb-5 text-[2rem] font-bold">Excludes:</h2>
                <ul className="space-y-2">
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    Accommodations at an eco-lodge in the Amazon rainforest
                  </li>
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    All meals (breakfast, lunch, and dinner) featuring local
                    cuisine
                  </li>
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    Indigenous community visit and cultural experiences
                  </li>
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    Wildlife Safari & Fishing Adventure
                  </li>
                  <li className="flex items-baseline gap-1.5 text-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </span>
                    Canopy Walkway & Zipline
                  </li>
                </ul>
              </div>
              <div className="mt-8 lg:mt-16">
                <h2 className="mb-5 text-[2rem] font-bold">Travel Plans</h2>
                {TravelPlan.map((travel, index) => {
                  return (
                    <div className="mb-3 flex flex-col rounded-lg border py-3 ps-6 pe-2.5 sm:flex-row sm:gap-24 sm:ps-12 sm:pe-5 lg:mb-6 lg:py-6">
                      <span className="font-bold">{travel.travel_day}</span>
                      <p>{travel.travel_desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <aside className="mt-0 w-full lg:mt-16">
              <AsideForm />
            </aside>
          </div>
          <Testimonials testimonials={testimonials} />
          <div className="flex lg:gap-10">
            <div>
              <img
                src="./img-1.jpg"
                width={600}
                height={681}
                alt="image 1"
                className="rounded-2xl"
              />
            </div>
            <div>
              <img
                src="./img-2.jpg"
                width={600}
                height={321}
                alt="image 2"
                className="rounded-2xl lg:mb-10"
              />
              <img
                src="./img-3.jpg"
                width={600}
                height={321}
                alt="image 3"
                className="rounded-2xl"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TourDetail;
