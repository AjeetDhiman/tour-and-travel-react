import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

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

  return (
    <header>
      <nav className="bg-red-400">
        <div className="container mx-auto">
          <div className="flex flex-row items-center justify-between px-3 py-4 xl:px-0 xl:py-8">
            <Logo />
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
                <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-[36px] xl:gap-x-[72px]">
                  <Link
                    className="text-base font-medium lg:font-normal"
                    to="/trips"
                  >
                    Trips
                  </Link>
                  <Link
                    className="text-base font-medium lg:font-normal"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                  <Link
                    className="text-base font-medium lg:font-normal"
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="text-base font-medium lg:font-normal"
                    to="/contact"
                  >
                    Contact
                  </Link>
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
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
