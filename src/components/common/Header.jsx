import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Services", href: "services" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

const menuLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Services", href: "services" },

  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky Main Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-transparent ">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-12 py-6 select-none">
          {/* Left: Brand */}
          <div className="flex-1">
            <a href="/" className="block w-[150px]">
              <img
                src="/assets/images/Logos-01e.png"
                alt="Diagonal Studio"
                className="h-10 w-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
          {/* Center: EST */}
          <div className="hidden md:flex-1 md:flex md:justify-center">
            <span className="text-[#0055b8] font-museo font-semibold text-lg md:text-xl tracking-wide">
              EST – 1995
            </span>
          </div>
          {/* Right: Nav and Hamburger */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6 font-museo text-pantone-black text-lg font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-[#0055b8] transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Hamburger (mobile and desktop, matches Aether style) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col items-end justify-center w-10 h-10 focus:outline-none"
              aria-label="Open menu"
            >
              <span className="block w-8 h-0.5 bg-pantone-black mb-1.5 rounded transition-all"></span>
              <span className="block w-6 h-0.5 bg-pantone-black rounded transition-all"></span>
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="hidden md:flex flex-col items-end justify-center w-10 h-10 ml-2 focus:outline-none"
              aria-label="Open menu"
            >
              <span className="block w-8 h-0.5 bg-pantone-black mb-1.5 rounded transition-all"></span>
              <span className="block w-6 h-0.5 bg-pantone-black rounded transition-all"></span>
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
              className="absolute top-8 right-8 text-4xl text-pantone-black focus:outline-none"
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>
            {/* Menu Content */}
            <div className="flex flex-col md:flex-row h-full w-full">
              {/* Left: Big Nav */}
              <div className="flex-1 flex flex-col items-start justify-center px-8 md:px-24">
                <nav className="space-y-4 md:space-y-8">
                  {menuLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.07 * i }}
                    >
                      <Link
                        to={link.href}
                        className="block text-3xl md:text-6xl font-monument font-light uppercase text-pantone-black hover:text-pantone-2935 transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              {/* Right: Contact and Social */}
              <div className="flex-1 flex flex-col justify-end md:justify-center px-8 pb-16 md:pb-0 md:px-0">
                <div className="space-y-6 md:space-y-10">
                  <div>
                    <div className="text-pantone-7515 font-semibold mb-1 text-base md:text-lg opacity-70">
                      Contact
                    </div>
                    <div className="font-medium text-pantone-black font-museo">
                      info@diagonalstudio.com
                    </div>
                    <div className="font-medium text-pantone-black font-museo">
                      +01 123 456 7890
                    </div>
                    <div className="font-medium text-pantone-black font-museo">
                      123 Main Avenue,
                      <br /> Karachi, Pakistan
                    </div>
                  </div>
                  <div>
                    <div className="text-pantone-7515 font-semibold mb-1 text-base md:text-lg opacity-70">
                      Socials
                    </div>
                    <div className="flex flex-col space-y-1 font-medium font-museo text-pantone-black">
                      <a href="#" className="hover:text-pantone-2935">
                        Instagram
                      </a>
                      <a href="#" className="hover:text-pantone-2935">
                        Twitter
                      </a>
                      <a href="#" className="hover:text-pantone-2935">
                        LinkedIn
                      </a>
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
