import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Logo from "./Logo";
import Button from "../ui/Button";
import Container from "../misc/Container";
import { navItemVariant } from "../misc/transition";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const location = useLocation();

  const isHomePage = location.pathname.replace(/\/+$/, "") === "";
  const iconColor = isHomePage ? "text-white" : "text-black";

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const pageURL = [
    {
      url: "/trips",
      title: "trips",
    },
    {
      url: "/gallery",
      title: "gallery",
    },
    {
      url: "/about",
      title: "about",
    },
    {
      url: "/contact",
      title: "contact",
    },
  ];
  const getBaseStyle = (isDesktop, isHomePage) =>
    twMerge(
      clsx(
        "relative text-base font-medium capitalize",
        "lg:font-normal lg:px-4 lg:py-[5px] rounded-[50px]",
        "transition-all duration-300 ease-in-out outline-2 outline-transparent outline-offset-0",

        {
          "text-white": isHomePage,
          "text-black": isDesktop && !isHomePage,
          "hover:text-red-600": !isDesktop,
          "lg:hover:text-white": isDesktop,
          "lg:hover:outline-white": isDesktop && isHomePage,
          "lg:hover:outline-black lg:hover:text-black":
            isDesktop && !isHomePage,
        },
      ),
    );

  return (
    <header className={`z-50 ${isHomePage ? "bg-transparent" : "bg-white"}`}>
      <nav>
        <Container>
          <div className="flex flex-row items-center justify-between py-4 xl:py-8">
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              <Logo />
            </motion.div>
            <AnimatePresence>
              {!isDesktop && isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: "0" }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                  onClick={() => setIsOpen(false)}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={isDesktop ? { opacity: 0 } : { x: "-100%" }}
                animate={
                  isDesktop ? { opacity: 1 } : { x: isOpen ? 0 : "-100%" }
                }
                exit={isDesktop ? { opacity: 0 } : { x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`${
                  isDesktop ? "relative flex-row" : "fixed top-0 left-0 z-50"
                } min-h-screen min-w-3xs bg-white px-4 pt-12 pb-4 shadow lg:min-h-auto lg:w-auto lg:bg-transparent lg:p-0 lg:shadow-none`}
              >
                {!isDesktop && (
                  <Button
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={24} />
                  </Button>
                )}
                <div
                  className={`flex flex-col gap-y-4 lg:flex-row lg:gap-x-3 xl:gap-x-[40px]`}
                >
                  {pageURL.map((link, index) => {
                    return (
                      <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={navItemVariant}
                      >
                        <NavLink
                          key={index}
                          to={link.url}
                          className={({ isActive }) =>
                            twMerge(
                              clsx(getBaseStyle(isDesktop, isHomePage), {
                                "outline-white":
                                  isActive && isDesktop && isHomePage,
                                "outline-black":
                                  isActive && isDesktop && !isHomePage,
                                "text-red-500": isActive && !isDesktop,
                              }),
                            )
                          }
                        >
                          {link.title}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {!isDesktop && (
              <Button
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X size={24} className={iconColor} />
                  ) : (
                    <Menu size={24} className={iconColor} />
                  )}
                </motion.div>
              </Button>
            )}
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
