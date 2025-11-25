import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation("privacy");
  const sections = t("sections", { returnObjects: true });

  const lastUpdated = new Date().toLocaleDateString(
    i18n.language === "es" ? "es-ES" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-pantone-719 text-white flex items-center justify-center py-24 md:py-32 overflow-hidden">
        <img
          src="/assets/images/3.jpg"
          alt="Privacy Policy Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pantone-black via-pantone-black/70 to-pantone-black/50 z-0"></div>
        <div className="relative z-10 w-full max-w-[1420px] mx-auto px-4 md:px-6 flex flex-col items-start">
          <div className="bg-white text-pantone-black font-abc-monument text-sm px-4 py-2 rounded-full mb-6">
            {t("lastUpdated")}: {lastUpdated}
          </div>
          <h1 className="font-monument-extended text-5xl sm:text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 font-abc-monument text-pantone-black/90 text-base md:text-lg leading-relaxed space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed">{t("intro")}</p>

          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
                {section.title}
              </h2>
              <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
