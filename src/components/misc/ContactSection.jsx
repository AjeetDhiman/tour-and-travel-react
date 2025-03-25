import { useState } from "react";
import Section from "./Section";
import Container from "./Container";
import Card from "./Card";
import Heading from "./Heading";
import formbg from "../../assets/img/form-bg.jpg";
import Error from "./Error";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    sendername: "",
    phonenumber: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    sendername: "",
    phone_number: "",
    email: "",
  });

  const [error, setError] = useState(false);

  const contact = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phonenumber") {
      if (/^\d*$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <Section
      className="relative bg-cover bg-center bg-no-repeat lg:pt-0 lg:before:absolute lg:before:inset-0 lg:before:h-[300px] lg:before:bg-gradient-to-b lg:before:from-white lg:before:to-white/0 lg:before:content-['']"
      style={{
        backgroundImage: `url(${formbg})`,
      }}
    >
      <Container className="relative z-10">
        <Heading className="mx-auto mb-6 w-full text-center lg:max-w-[33.875rem]">
          Ready to <span>embark</span> on a <span>new</span>journey?
        </Heading>
        <p className="mx-auto mb-8 max-w-[52.875rem] text-center text-black lg:mb-16">
          Don't let your dream getaway remain a dream any longer. Take action
          now and let us craft your next unforgettable adventure. Join us in
          turning your travel fantasies into unforgettable realities.
        </p>
        <Card className="z-10 mx-auto mb-0 max-w-[54.25rem] border-0 bg-white p-12 lg:mb-[5.975rem]">
          <form onSubmit={contact}>
            <div className="mb-3 grid grid-cols-1 gap-5 text-start sm:mb-5 sm:grid-cols-2">
              <div>
                <div>
                  <label htmlFor="sendername" className="mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="sendername"
                    id="sendername"
                    value={formData.sendername}
                    onChange={handleChange}
                    className="w-full rounded-full border border-[#CCCCCC] px-4 py-2"
                  />
                </div>
                {error && <Error>{errorMessage}</Error>}
              </div>
              <div>
                <div>
                  <label htmlFor="phonenumber" className="mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phonenumber"
                    id="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    maxLength="10"
                    className="w-full rounded-full border border-[#CCCCCC] px-4 py-2"
                  />
                </div>
                {error && <Error>{errorMessage}</Error>}
              </div>
            </div>
            <div className="mb-4 text-start">
              <div>
                <label htmlFor="email" className="mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-full border border-[#CCCCCC] px-4 py-2"
                />
              </div>
              {error && <Error>{errorMessage}</Error>}
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
        </Card>
      </Container>
    </Section>
  );
};

export default ContactSection;
