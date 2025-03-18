import { Link } from "react-router";
import Heading from "../components/misc/Heading";
import homepagebanner from "../assets/img/homepage-banner.png";
import { MoveRight } from "lucide-react";
const Homepage = () => {
  return (
    <>
      <div
        className="z-auto -mt-[5.5rem] bg-cover bg-center bg-no-repeat pt-[8.1rem] pb-[4.45rem]"
        style={{
          backgroundImage: `url(${homepagebanner})`,
        }}
      >
        <div className="container mx-auto">
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
        </div>
      </div>
      <section>
        <div className="container">
          <div className="flex flex-col items-center justify-between lg:flex-row">
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
        </div>
      </section>
    </>
  );
};

export default Homepage;
