import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

export default function Contact() {
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
      // EmailJS configuration
      const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

      const templateParams = {
        from_name: `${form.firstName} ${form.lastName}`,
        from_email: form.email,
        organization: form.org,
        region: form.region,
        subject: form.subject,
        message: form.message,
        to_email: form.email, // For confirmation email
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

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
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <section className="relative w-full min-h-screen flex items-center justify-center md:items-end md:justify-end overflow-hidden bg-pantone-719">
        <img
          src="/assets/images/3.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          draggable={false}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pantone-black/60 via-pantone-black/65 to-transparent z-0" />

        <div className="relative z-10 w-full flex flex-col items-center justify-center md:justify-end pb-8 md:pb-32 px-4">
          <h1 className="font-monument-extended text-4xl sm:text-5xl md:text-7xl text-white text-center font-bold leading-tight tracking-tight max-w-5xl">
            Ready to Transform
            <br />
            Your Vision Into
            <br />
            Reality?
          </h1>
          <p className="mt-6 text-white/90 font-abc-monument-grotesk text-base sm:text-lg md:text-2xl text-center max-w-2xl mx-auto leading-relaxed px-4">
            Let's create something extraordinary together. Reach out and start
            the conversation.
          </p>
        </div>
      </section>

      <section className="w-full py-8 md:py-16" id="contact-form">
        <div className="max-w-[1420px] mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-6">
          <div className="w-full md:w-1/4">
            <div className="font-monument-grotesk text-xl md:text-2xl text-pantone-black uppercase mb-2 font-bold">
              <span className="font-supreme">DIAGONAL</span>
            </div>
            <div className="font-abc-monument-grotesk text-base md:text-lg text-pantone-black/90">
              let's start a conversation
              <br />
              about how we can bring
              <br />
              your vision to life.
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
                    {field === "org"
                      ? "Organization"
                      : field.replace(/([A-Z])/g, " $1").trim()}
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
                      <option value="">{`Select a ${field}`}</option>
                      {field === "region"
                        ? ["Asia", "Europe", "America"].map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))
                        : [
                            "General Inquiry",
                            "Collaboration",
                            "Project Proposal",
                          ].map((opt) => (
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
                      placeholder={
                        field === "email"
                          ? "your@email.com"
                          : `Enter your ${field}`
                      }
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
                Message*
              </label>
              <textarea
                name="message"
                required
                rows={3}
                placeholder="My message is..."
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
                  You agree to our terms and conditions and acknowledge that you
                  have read our privacy policy.
                </span>
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto border border-pantone-black px-5 py-2 md:px-7 md:py-3 rounded font-monument-grotesk font-bold text-pantone-black text-base md:text-lg transition hover:bg-pantone-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND MY MESSAGE"}
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
                  ? "Thank you! Your message has been sent successfully. You will receive a confirmation email shortly."
                  : "Sorry, there was an error sending your message. Please try again or contact us directly."}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
