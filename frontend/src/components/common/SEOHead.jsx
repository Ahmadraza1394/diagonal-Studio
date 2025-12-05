import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { seoConfig } from "../../config/seoConfig";

export default function SEOHead({
  page = "home",
  customTitle,
  customDescription,
  customImage,
  customKeywords,
}) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const pageConfig =
    seoConfig.pages[page]?.[currentLang] || seoConfig.pages.home[currentLang];

  const title = customTitle || pageConfig.title;
  const description = customDescription || pageConfig.description;
  const keywords = customKeywords || pageConfig.keywords.join(", ");
  const image = customImage || seoConfig.defaultImage;
  const url = `${seoConfig.siteUrl}${page === "home" ? "" : `/${page}`}`;

  const fullImageUrl = image.startsWith("http")
    ? image
    : `${seoConfig.siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLang === "es" ? "es-MX" : "en-US"} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Alternate Language Tags */}
      <link
        rel="alternate"
        href={url}
        hreflang={currentLang === "es" ? "es-MX" : "en-US"}
      />
      <link rel="alternate" href={url} hreflang="x-default" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta
        property="og:locale"
        content={currentLang === "es" ? "es_MX" : "en_US"}
      />
      <meta property="og:site_name" content={seoConfig.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="MX-ROO" />
      <meta name="geo.placename" content={seoConfig.location.city} />
      <meta
        name="geo.position"
        content={`${seoConfig.location.coordinates.latitude};${seoConfig.location.coordinates.longitude}`}
      />
      <meta
        name="ICBM"
        content={`${seoConfig.location.coordinates.latitude}, ${seoConfig.location.coordinates.longitude}`}
      />

      {/* Additional SEO Tags */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content={seoConfig.siteName} />
      <meta
        name="language"
        content={currentLang === "es" ? "Spanish" : "English"}
      />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(seoConfig.structuredData.organization)}
      </script>

      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
        {JSON.stringify(seoConfig.structuredData.localBusiness)}
      </script>
    </Helmet>
  );
}
