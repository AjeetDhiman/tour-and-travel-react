import Section from "./Section";
import Container from "./Container";
import Card from "./Card";
import Heading from "./Heading";
import { beliefs } from "./data";

const OurTrueBeliefs = () => {
  return (
    <Section className="bg-light-gray">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Heading>
              Our true <span>beliefs</span> for <span>your</span> benefits
            </Heading>
            <div className="lg:max-w-[419.96px]">
              <p className="text-secondary my-[1.75rem]">
                Our beliefs aren't just words; they are the foundation of every
                adventure we offer. With high commitment to sustainability,
                authenticity, and customer-centricity, we ensure that every trip
                you take with us is valuable.
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
                      <div
                        className="mx-auto flex aspect-square h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border"
                        aria-hidden="true"
                      >
                        {belief.icon}
                      </div>

                      <div className="grow text-center sm:text-start">
                        <h3 className="font-bold">{belief.heading}</h3>
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
  );
};

export default OurTrueBeliefs;
