import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Section from "./Section";
import Container from "./Container";
import Card from "./Card";
import Heading from "./Heading";
import Image from "./imagecard/Image";
import quote from "../../assets/img/icons/quote-icon.png";

const Testimonials = ({ testimonials }) => {
  return (
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
                        alt={`${testimonial.name.toLowerCase()} image`}
                        width={44}
                        height={44}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="grow text-center sm:text-start">
                      <h3 className="mb-2.5 font-bold">{testimonial.name}</h3>
                      <p className="text-black!">{testimonial.place}</p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Section>
  );
};

export default Testimonials;
