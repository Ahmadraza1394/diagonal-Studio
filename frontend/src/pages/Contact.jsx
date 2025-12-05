import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEOHead from "../components/common/SEOHead";
import { getAltText } from "../utils/seoAltText";

export default function Contact() {
  const { t, i18n } = useTranslation("contact");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    org: "",
    region: "",
    subject: "",
    message: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          org: form.org,
          region: form.region,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send email");
      }

      setSubmitStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        org: "",
        region: "",
        subject: "",
        message: "",
        agree: false,
      });
    } catch (error) {
      console.error("Email Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <SEOHead page="contact" />
      <section className="relative w-full h-screen flex items-center justify-center text-center bg-pantone-black text-white overflow-hidden">
        <motion.img
          src="/assets/images/contactHero.jpg"
          alt={getAltText("contactHero", i18n.language)}
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-75"
          draggable={false}
          loading="eager"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pantone-black/60 via-pantone-black/40 to-transparent z-5"></div>

        <div className="relative z-10 px-4">
          <motion.h1
            className="w-full text-center text-[clamp(40px,8vw,180px)] sm:text-[clamp(50px,10vw,200px)] font-extrabold uppercase tracking-tight font-monument-extended leading-[1.05] text-white"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="not-italic block md:inline text-shadow-lg font-supreme">
              {t("title")}
            </span>
          </motion.h1>
          <p className="font-abc-monument text-lg md:text-xl mt-4 max-w-3xl mx-auto text-white/90 drop-shadow-md">
            {/* */}
          </p>
        </div>
      </section>

      <section className="w-full py-8 md:py-16" id="contact-form">
        <div className="max-w-[1420px] mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-6">
          <div className="w-full md:w-1/4">
            {/* <h3 className="font-supreme text-pantone-2935 text-base sm:text-lg mb-2">
              DGNL
            </h3> */}
            <span className="font-supreme text-pantone-2935 text-base sm:text-lg">
              <span className="italic">DG</span>
              <span className="">NL</span>
            </span>
            <div className="font-abc-monument-grotesk text-base md:text-lg text-pantone-black/90 whitespace-pre-line">
              {t("sidebarDescription")}
            </div>
          </div>

          <form
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 font-abc-monument-grotesk"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {["firstName", "lastName", "email", "org", "region", "subject"].map(
              (field) => (
                <div key={field}>
                  <label className="block mb-2 text-pantone-black font-medium capitalize">
                    {t(`form.${field}`)}
                    {field !== "org" && "*"}
                  </label>
                  {["region", "subject"].includes(field) ? (
                    <select
                      name={field}
                      required
                      className="w-full border-b border-pantone-black bg-transparent text-lg md:text-xl py-2 focus:outline-none text-pantone-black/80"
                      value={form[field]}
                      onChange={handleChange}
                    >
                      <option value="">
                        {t(
                          `form.select${
                            field.charAt(0).toUpperCase() + field.slice(1)
                          }`
                        )}
                      </option>
                      {(field === "region"
                        ? t("form.regions", { returnObjects: true })
                        : t("form.subjects", { returnObjects: true })
                      ).map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required={field !== "org"}
                      placeholder={t(`form.${field}Placeholder`, {
                        defaultValue: "",
                      })}
                      className="w-full border-b border-pantone-black bg-transparent text-lg md:text-xl py-2 focus:outline-none placeholder:text-pantone-black/40"
                      value={form[field]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              )
            )}

            <div className="md:col-span-2">
              <label className="block mb-2 text-pantone-black font-medium">
                {t("form.message")}*
              </label>
              <textarea
                name="message"
                required
                rows={3}
                placeholder={t("form.messagePlaceholder")}
                className="w-full border-b border-pantone-black bg-transparent text-lg md:text-xl py-2 focus:outline-none placeholder:text-pantone-black/40 resize-none"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
              <label className="flex items-start md:items-center text-pantone-black text-sm md:text-base">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  required
                  className="mr-3 accent-pantone-719 w-4 h-4 mt-1 md:mt-0"
                />
                <span className="font-cardinal-classic">
                  {t("form.agreeText")}
                </span>
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto border border-pantone-black px-5 py-2 md:px-7 md:py-3 rounded font-monument-grotesk font-bold text-pantone-black text-base md:text-lg transition hover:bg-pantone-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? t("form.submittingButton")
                  : t("form.submitButton")}
              </button>
            </div>

            {submitStatus && (
              <div
                className={`md:col-span-2 mt-4 p-4 rounded font-cardinal-classic ${
                  submitStatus === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus === "success"
                  ? t("form.successMessage")
                  : t("form.errorMessage")}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
