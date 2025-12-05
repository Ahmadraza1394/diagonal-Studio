// SEO-optimized alt text for images
// Organized by component/section with Riviera Maya keywords

export const seoAltText = {
  // Hero images
  hero: {
    es: "Arquitectura moderna en Riviera Maya - Diagonal Studio Tulum",
    en: "Modern architecture in Riviera Maya - Diagonal Studio Tulum",
  },

  // Contact page
  contactHero: {
    es: "Contacto arquitectos Tulum - Diagonal Studio Riviera Maya",
    en: "Contact architects Tulum - Diagonal Studio Riviera Maya",
  },

  // Project types
  projects: {
    residential: {
      es: "Arquitectura residencial de lujo en Tulum - Villa moderna Riviera Maya",
      en: "Luxury residential architecture in Tulum - Modern villa Riviera Maya",
    },
    commercial: {
      es: "Arquitectura comercial Riviera Maya - Diseño contemporáneo Tulum",
      en: "Commercial architecture Riviera Maya - Contemporary design Tulum",
    },
    hospitality: {
      es: "Construcción de hoteles en Tulum - Arquitectura hotelera Riviera Maya",
      en: "Hotel construction in Tulum - Hospitality architecture Riviera Maya",
    },
    beachClub: {
      es: "Beach club Riviera Maya - Arquitectura costera Tulum",
      en: "Beach club Riviera Maya - Coastal architecture Tulum",
    },
  },

  // Services
  services: {
    design: {
      es: "Servicios de diseño arquitectónico Riviera Maya - Diagonal Studio",
      en: "Architectural design services Riviera Maya - Diagonal Studio",
    },
    construction: {
      es: "Construcción llave en mano Tulum - Servicios de construcción Riviera Maya",
      en: "Turnkey construction Tulum - Construction services Riviera Maya",
    },
    management: {
      es: "Gestión de proyectos arquitectónicos Riviera Maya - Project management Tulum",
      en: "Architectural project management Riviera Maya - Project management Tulum",
    },
  },

  // Generic project images
  showcase: {
    es: "Proyecto arquitectónico Riviera Maya - Construcción moderna Tulum",
    en: "Architectural project Riviera Maya - Modern construction Tulum",
  },
};

// Generate dynamic alt text for project images
export const getProjectAltText = (projectTitle, typology, language = "es") => {
  const typologyMap = {
    es: {
      Residencial: "arquitectura residencial",
      Comercial: "arquitectura comercial",
      Hospitalidad: "arquitectura hotelera",
      Hotelero: "construcción de hotel",
      "Beach Club": "beach club",
    },
    en: {
      Residential: "residential architecture",
      Commercial: "commercial architecture",
      Hospitality: "hotel architecture",
      Hotel: "hotel construction",
      "Beach Club": "beach club",
    },
  };

  const typologyText =
    typologyMap[language][typology] ||
    (language === "es" ? "proyecto arquitectónico" : "architectural project");
  const location =
    language === "es" ? "Riviera Maya Tulum" : "Riviera Maya Tulum";

  return `${projectTitle} - ${typologyText} ${location} - Diagonal Studio`;
};

// Get alt text by key
export const getAltText = (key, language = "es") => {
  const keys = key.split(".");
  let value = seoAltText;

  for (const k of keys) {
    value = value?.[k];
  }

  return value?.[language] || value || key;
};
