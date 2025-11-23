import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.portfolio"), href: "portfolio" },
    { name: t("nav.services"), href: "services" },
    { name: t("nav.about"), href: "about" },
    { name: t("nav.contact"), href: "contact" },
  ];

  const socialLinks = [
    { name: t("instagram"), href: "https://instagram.com/diagonal_studio" },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 select-none">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
        {/* Contact Column */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div>
            <div className="font-supreme text-pantone-2935 text-2xl uppercase tracking-tight mb-2">
              DIAGONAL
            </div>
            <div className="font-monument-grotesk text-base md:text-lg text-white/90 mb-6">
              {t("contactUs")}
            </div>
            <div className="font-abc-monument text-sm text-white/80 space-y-1">
              <p>{t("email")}</p>
              <p>{t("phone")}</p>
              <p>{t("location")}</p>
            </div>
          </div>
          <a
            href="contact"
            className="inline-flex items-center border border-white px-7 py-3 rounded font-monument-grotesk font-medium text-white text-base transition hover:bg-white hover:text-pantone-black group w-fit"
          >
            {t("contactButton")}
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
            {t("quickLinks")}
          </div>
          <ul className="font-monument-extended font-bold text-3xl md:text-4xl leading-tight space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-pantone-2935 transition"
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
            {t("socialLinks")}
          </div>
          <ul className="font-monument-extended font-bold text-2xl md:text-4xl leading-tight space-y-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pantone-2935 transition"
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
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
        <div className="w-full md:w-auto text-center">
          <Link to="/privacy" className="hover:text-pantone-2935 transition">
            {t("privacyPolicy")}
          </Link>
        </div>
        <div className="w-full md:w-auto text-right flex items-center gap-2">
          <a
            href="#"
            className="hover:text-pantone-2935 font-cardinal-classic transition"
          >
            {t("backToTop")}
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
