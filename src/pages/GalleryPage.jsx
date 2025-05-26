import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Breadcrumb from "../components/misc/Breadcrumb";
import Heading from "../components/misc/Heading";
import BgGallery from "/bg-gallery.jpg";
import Section from "../components/misc/Section";
import Container from "../components/misc/Container";
import JourneyInCulture from "/journey_in_culture.jpg";
import JE1 from "/je-1.jpg";
import JE2 from "/je-2.jpg";
import JE3 from "/je-3.jpg";
import ContactSection from "../components/misc/ContactSection";

const galleryImages = [
  {
    src: "/g1.jpg",
    width: "394",
    height: "173",
    alt: "",
  },
  {
    src: "/g2.jpg",
    width: "394",
    height: "431",
    alt: "",
  },
  {
    src: "/g3.jpg",
    width: "394",
    height: "331",
    alt: "",
  },
  {
    src: "/g4.jpg",
    width: "112",
    height: "273",
    alt: "",
  },
  {
    src: "/g5.jpg",
    width: "253",
    height: "273",
    alt: "",
  },
  {
    src: "/g6.jpg",
    width: "394",
    height: "381",
    alt: "",
  },
  {
    src: "/g7.jpg",
    width: "394",
    height: "213",
    alt: "",
  },
];

const GalleryPage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Breadcrumb bg={BgGallery}>
        <Heading
          as="h1"
          className="relative w-full text-[2.5rem] sm:text-[5rem]"
        >
          Visual <span>Gallery</span>
        </Heading>
      </Breadcrumb>
      <Section className="py-0!">
        <Container>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-wrap justify-center">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                width={galleryImages[0].width}
                height={galleryImages[0].height}
                className="mb-3 h-auto"
              />
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                width={galleryImages[1].width}
                height={galleryImages[1].height}
                className="mb-3"
              />
            </div>
            <div className="flex flex-col items-center justify-center lg:block lg:flex-row">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                width={galleryImages[2].width}
                height={galleryImages[2].height}
                className="mb-3"
              />
              <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:justify-start">
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  width={galleryImages[3].width}
                  height={galleryImages[3].height}
                  className="mb-3"
                />
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  width={galleryImages[4].width}
                  height={galleryImages[4].height}
                  className="mb-3"
                />
              </div>
            </div>
            <div className="mx-auto">
              <img
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                width={galleryImages[5].width}
                height={galleryImages[5].height}
                className="mb-3"
              />
              <img
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                width={galleryImages[6].width}
                height={galleryImages[6].height}
                className="mb-3"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading as="h2" className="section-heading mb-11 w-full text-center">
            Journey <span>in</span> Culture
          </Heading>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            className="h-auto"
          >
            <SwiperSlide>
              <img
                src={JourneyInCulture}
                alt=""
                className="mx-auto object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={JourneyInCulture}
                alt=""
                className="mx-auto object-contain"
              />
            </SwiperSlide>
            <button
              ref={prevRef}
              className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black p-2 text-white shadow"
            >
              <MoveLeft size={18} />
            </button>

            <button
              ref={nextRef}
              className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black p-2 text-white shadow"
            >
              <MoveRight size={18} />
            </button>
          </Swiper>
        </Container>
      </Section>
      <Section className="pt-0!">
        <Container>
          <Heading as="h2" className="section-heading mb-11 w-full">
            Journey <span>in</span> Europe
          </Heading>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pagination-outside [&_.swiper-pagination]:relative! [&_.swiper-pagination]:mt-10 [&_.swiper-pagination]:text-center [&_.swiper-pagination-bullet]:mx-[6px] [&_.swiper-pagination-bullet]:h-[14px]! [&_.swiper-pagination-bullet]:w-[14px]! [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-[#222]! [&_.swiper-pagination-bullet]:opacity-40 [&_.swiper-pagination-bullet-active]:opacity-100"
          >
            <SwiperSlide>
              <img
                src={JE1}
                alt=""
                className="mx-auto rounded-2xl object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={JE2}
                alt=""
                className="mx-auto rounded-2xl object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={JE3}
                alt=""
                className="mx-auto rounded-2xl object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={JE3}
                alt=""
                className="mx-auto rounded-2xl object-contain"
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
};

export default GalleryPage;
