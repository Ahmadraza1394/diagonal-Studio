import React from "react";

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
            Last Updated: {lastUpdated}
          </div>
          <h1 className="font-monument-extended text-5xl sm:text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 font-abc-monument text-pantone-black/90 text-base md:text-lg leading-relaxed space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed">
            Welcome to Diagonal Studio. We are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website.
          </p>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              1. Information We Collect
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              We may collect personal information from you such as your name,
              email address, and organization when you fill out our contact
              form. We also collect non-personal information, such as browser
              type, operating system, and web pages visited to help us manage
              our website.
            </p>
          </div>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              2. Use of Your Information
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              We use the information we collect to respond to your inquiries,
              provide you with our services, and improve our website. We will
              not share your personal information with any third parties without
              your consent, except as required by law.
            </p>
          </div>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              3. Security of Your Information
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable.
            </p>
          </div>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              4. Changes to This Privacy Policy
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page. You are advised to review this Privacy Policy
              periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              5. Contact Us
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              If you have any questions about this Privacy Policy, please
              contact us through our contact form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
