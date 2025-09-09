import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Portafolio", href: "portfolio" },
  { name: "Servicios", href: "services" },
  { name: "Sobre", href: "about" },
  { name: "Contacto", href: "contact" },
];

const menuLinks = [
  { name: "Inicio", href: "/" },
  { name: "Portafolio", href: "portfolio" },
  { name: "Servicios", href: "services" },
  { name: "Sobre", href: "about" },
  { name: "Contacto", href: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      {/* Sticky Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm"
            : "bg-transparent backdrop-transparent"
        }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-12 py-6 select-none">
          {/* Left: Brand */}
          <div className="flex-1">
            <a href="/" className="block w-[120px] sm:w-[150px]">
              {/* <img
                src="/assets/images/Logos-01e.png"
                alt="Diagonal"
                className="h-8 sm:h-10 w-auto cursor-pointer hover:opacity-90 transition-opacity"
              /> */}
              <span className="font-supreme text-pantone-2935 text-base sm:text-lg">
                <span className="italic">DG</span>
                <span className="">NL</span>
              </span>
            </a>
          </div>
          {/* Center: EST */}
          {/* <div className="hidden md:flex-1 md:flex md:justify-center">
            <span
              className={`font-cardinal font-semibold text-lg md:text-xl tracking-wide ${
                scrolled ? "text-pantone-2935" : "text-white"
              }`}
            >
              EST – 1989
            </span>
          </div> */}
          {/* Right: Nav and Hamburger */}
          <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-4 xl:gap-6 font-abc-monument text-base xl:text-lg font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`hover:text-pantone-2935 transition whitespace-nowrap ${
                    scrolled ? "text-pantone-black" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Hamburger (mobile and desktop, matches Aether style) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col items-end justify-center w-10 h-10 focus:outline-none"
              aria-label="Open menu"
            >
              <span
                className={`block w-8 h-0.5 mb-1.5 rounded transition-all ${
                  scrolled ? "bg-pantone-black" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 rounded transition-all ${
                  scrolled ? "bg-pantone-black" : "bg-white"
                }`}
              ></span>
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="hidden lg:flex flex-col items-end justify-center w-10 h-10 ml-2 focus:outline-none"
              aria-label="Open menu"
            >
              <span
                className={`block w-8 h-0.5 mb-1.5 rounded transition-all ${
                  scrolled ? "bg-pantone-black" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 rounded transition-all ${
                  scrolled ? "bg-pantone-black" : "bg-white"
                }`}
              ></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Animated Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-3xl md:text-4xl text-pantone-black focus:outline-none"
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>
            {/* Menu Content */}
            <div className="flex flex-col md:flex-row h-full w-full pt-20 md:pt-0">
              {/* Left: Big Nav */}
              <div className="flex-1 flex flex-col items-start justify-center px-6 sm:px-8 md:px-16 lg:px-24">
                <nav className="space-y-4 md:space-y-6 lg:space-y-8 w-full">
                  {menuLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.07 * i }}
                      className="w-full"
                    >
                      <Link
                        to={link.href}
                        className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-monument font-bold uppercase text-pantone-black hover:text-pantone-2935 transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              {/* Right: Contact and Social */}
              <div className="flex-1 flex flex-col justify-end md:justify-center px-6 sm:px-8 pb-12 md:pb-0 md:px-12 lg:px-16">
                <div className="space-y-6 md:space-y-8 lg:space-y-10">
                  <div>
                    <div className="text-pantone-2935 font-cardinal font-semibold mb-1 text-base md:text-lg">
                      Contacto
                    </div>
                    <div className="font-medium text-pantone-black font-abc-monument text-sm sm:text-base">
                      hola@diagonalstudio.mx
                    </div>
                    <div className="font-medium text-pantone-black font-abc-monument text-sm sm:text-base">
                      +52 (55)5507 6330
                    </div>
                    <div className="font-medium text-pantone-black font-abc-monument text-sm sm:text-base">
                      Ciudad de México y Riviera Maya
                    </div>
                  </div>
                  <div>
                    <div className="text-pantone-2935 font-cardinal font-semibold mb-1 text-base md:text-lg">
                      Redes Sociales
                    </div>
                    <div className="flex flex-col space-y-1 font-medium font-abc-monument text-pantone-black text-sm sm:text-base">
                      <a
                        href="https://instagram.com/diagonal_studio"
                        className="flex items-center gap-2 hover:text-pantone-2935 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram @diagonal_studio"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                          <circle cx="18.406" cy="5.594" r="1.44" />
                        </svg>
                        <span>instagram</span>
                      </a>
                      {/* <a
                        href="#"
                        className="hover:text-pantone-2935 transition"
                      >
                        LinkedIn
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
