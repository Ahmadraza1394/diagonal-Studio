import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/" },
    { name: "Twitter", href: "https://twitter.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/company/" },
  ];

  return (
    <footer className="bg-pantone-black text-white pt-16 pb-8 px-6 select-none">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
        {/* Contact Column */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div>
            <div className="font-supreme text-2xl uppercase tracking-tight mb-2">
              DIAGONAL
            </div>
            <div className="font-monument-grotesk text-base md:text-lg text-white/90 mb-6">
              Reach out to us, and we'll get back to you!
            </div>
          </div>
          <a
            href="contact"
            className="inline-flex items-center border border-white px-7 py-3 rounded font-monument-grotesk font-medium text-white text-base transition hover:bg-white hover:text-pantone-black group w-fit"
          >
            CONTACT US
            <span className="ml-2 group-hover:translate-x-1.5 transition-transform">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/3 flex flex-col gap-1 mt-10 md:mt-0">
          <div className="font-monument-grotesk text-white/60 text-base mb-2">
            Quick Links
          </div>
          <ul className="font-monument-extended font-bold text-3xl md:text-4xl leading-tight space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-accent-purple transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-1/3 flex flex-col gap-1 mt-10 md:mt-0">
          <div className="font-monument-grotesk text-white/60 text-base mb-2">
            Socials
          </div>
          <ul className="font-monument-extended font-bold text-3xl md:text-4xl leading-tight space-y-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-purple transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white/80 font-cardinal-classic text-lg">
        <div className="w-full md:w-auto text-left">
          © {new Date().getFullYear()} Diagonal. All rights reserved.
        </div>
        <div className="w-full md:w-auto text-center">
          <Link to="/privacy" className="hover:text-accent-purple transition">
            Privacy Policy
          </Link>
        </div>
        <div className="w-full md:w-auto text-right flex items-center gap-2">
          <a
            href="#"
            className="hover:text-accent-purple font-cardinal-classic transition"
          >
            Back to top
          </a>
          <svg
            className="w-4 h-4 inline-block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}
