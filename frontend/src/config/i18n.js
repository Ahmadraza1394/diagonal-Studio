import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import home page translations
import heroEs from "../locales/es/home/hero.json";
import heroEn from "../locales/en/home/hero.json";
import aboutEs from "../locales/es/home/about.json";
import aboutEn from "../locales/en/home/about.json";
import trustedPartnersEs from "../locales/es/home/trustedPartners.json";
import trustedPartnersEn from "../locales/en/home/trustedPartners.json";
import featuredProjectsEs from "../locales/es/home/featuredProjects.json";
import featuredProjectsEn from "../locales/en/home/featuredProjects.json";
import servicesListEs from "../locales/es/home/servicesList.json";
import servicesListEn from "../locales/en/home/servicesList.json";
import sustainabilityEs from "../locales/es/home/sustainability.json";
import sustainabilityEn from "../locales/en/home/sustainability.json";

// Import common translations (header, footer)
import headerEs from "../locales/es/common/header.json";
import headerEn from "../locales/en/common/header.json";
import footerEs from "../locales/es/common/footer.json";
import footerEn from "../locales/en/common/footer.json";

// Import services page translations
import serviceHeroEs from "../locales/es/services/serviceHero.json";
import serviceHeroEn from "../locales/en/services/serviceHero.json";
import serviceTabsEs from "../locales/es/services/serviceTabs.json";
import serviceTabsEn from "../locales/en/services/serviceTabs.json";

// Import about page translations
import aboutHeroEs from "../locales/es/about/aboutHero.json";
import aboutHeroEn from "../locales/en/about/aboutHero.json";
import companyInfoEs from "../locales/es/about/companyInfo.json";
import companyInfoEn from "../locales/en/about/companyInfo.json";

// Import contact page translations
import contactEs from "../locales/es/contact/contact.json";
import contactEn from "../locales/en/contact/contact.json";

// Import privacy page translations
import privacyEs from "../locales/es/privacy/privacy.json";
import privacyEn from "../locales/en/privacy/privacy.json";

// Import portfolio page translations
import portfolioEs from "../locales/es/portfolio/portfolio.json";
import portfolioEn from "../locales/en/portfolio/portfolio.json";

/**
 * i18n Configuration for Diagonal Studio
 *
 * Structure: Separate translation files per component for better organization
 * Languages: Spanish (es) - default, English (en)
 *
 * Language detection order:
 * 1. localStorage (user's previous selection)
 * 2. Browser language preference
 * 3. Default: Spanish (es)
 */

const resources = {
  es: {
    hero: heroEs,
    about: aboutEs,
    trustedPartners: trustedPartnersEs,
    featuredProjects: featuredProjectsEs,
    servicesList: servicesListEs,
    sustainability: sustainabilityEs,
    header: headerEs,
    footer: footerEs,
    serviceHero: serviceHeroEs,
    serviceTabs: serviceTabsEs,
    aboutHero: aboutHeroEs,
    companyInfo: companyInfoEs,
    contact: contactEs,
    privacy: privacyEs,
    portfolio: portfolioEs,
  },
  en: {
    hero: heroEn,
    about: aboutEn,
    trustedPartners: trustedPartnersEn,
    featuredProjects: featuredProjectsEn,
    servicesList: servicesListEn,
    sustainability: sustainabilityEn,
    header: headerEn,
    footer: footerEn,
    serviceHero: serviceHeroEn,
    serviceTabs: serviceTabsEn,
    aboutHero: aboutHeroEn,
    companyInfo: companyInfoEn,
    contact: contactEn,
    privacy: privacyEn,
    portfolio: portfolioEn,
  },
};

// Get initial language from localStorage or browser
const getInitialLanguage = () => {
  const saved = localStorage.getItem("i18nLanguage");
  if (saved && ["es", "en"].includes(saved)) {
    return saved;
  }

  const browserLang = navigator.language.split("-")[0];
  if (["es", "en"].includes(browserLang)) {
    return browserLang;
  }

  return "es"; // Default to Spanish
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "es",
  ns: [
    "hero",
    "about",
    "trustedPartners",
    "featuredProjects",
    "servicesList",
    "sustainability",
    "header",
    "footer",
    "serviceHero",
    "serviceTabs",
    "aboutHero",
    "companyInfo",
    "contact",
    "privacy",
    "portfolio",
  ],
  defaultNS: "hero",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
