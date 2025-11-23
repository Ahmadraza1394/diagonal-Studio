import React from "react";
import { useTranslation } from "react-i18next";

const CompanyInfo = () => {
  const { t } = useTranslation("companyInfo");
  const paragraphs = t("paragraphs", { returnObjects: true });
  const stats = t("stats", { returnObjects: true });

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-monument text-3xl md:text-4xl text-pantone-black mb-6 font-bold">
          {t("title")}
        </h2>
        <div className="space-y-5">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="font-abc-monument text-justify text-base md:text-lg text-pantone-black/80 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="font-cardinal text-pantone-black/70 text-center"
            >
              <span className="block text-2xl md:text-3xl font-bold text-pantone-black">
                {stat.value}
              </span>
              <span className="block text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
