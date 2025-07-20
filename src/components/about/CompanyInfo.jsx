import React from "react";

const CompanyInfo = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* History Section with Image */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-monument text-3xl md:text-4xl text-pantone-black mb-4 font-bold">
                History
              </h2>
              <p className="font-abc-monument text-base text-pantone-black/80 leading-relaxed">
                Founded in 2010, Diagonal started with a vision to challenge
                conventional architecture. From a small team of passionate
                designers, we have grown into a collective of innovators and
                thinkers dedicated to creating spaces that inspire. Our journey
                is marked by a commitment to excellence and a portfolio of
                projects that speak to our unique design philosophy.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="/assets/images/1.jpg"
                alt="Our History"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Vision Section with Image */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-first">
              <img
                src="/assets/images/2.jpg"
                alt="Our Vision"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-monument text-3xl md:text-4xl text-pantone-black mb-4 font-bold">
                Vision
              </h2>
              <p className="font-abc-monument text-base text-pantone-black/80 leading-relaxed">
                Our vision is to be a global leader in architectural design,
                known for our sustainable and human-centric approach. We aim to
                design buildings and spaces that not only meet the needs of
                today but also anticipate the challenges of tomorrow, creating a
                lasting legacy of positive impact.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div>
          <h2 className="font-monument text-3xl md:text-4xl text-pantone-black mb-8 text-center font-bold">
            Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-pantone-719/10 p-6 rounded-lg">
              <img
                src="/assets/images/1.jpg"
                alt="Architectural Design"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-monument text-pantone-7515 mb-2 font-bold">
                Architectural Design
              </h3>
              <p className="font-abc-monument text-pantone-black/80">
                From conceptual sketches to final construction, we provide
                comprehensive architectural services.
              </p>
            </div>
            <div className="bg-pantone-719/10 p-6 rounded-lg">
              <img
                src="/assets/images/3.jpg"
                alt="Interior Styling"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-monument text-pantone-7515 mb-2 font-bold">
                Interior Styling
              </h3>
              <p className="font-abc-monument text-pantone-black/80">
                We create bespoke interiors that reflect the personality and
                needs of our clients.
              </p>
            </div>
            <div className="bg-pantone-719/10 p-6 rounded-lg">
              <img
                src="/assets/images/2.jpg"
                alt="Sustainable Building"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-monument text-pantone-7515 mb-2 font-bold">
                Sustainable Building
              </h3>
              <p className="font-abc-monument text-pantone-black/80">
                Our commitment to the planet is reflected in our use of
                eco-friendly materials and practices.
              </p>
            </div>
            <div className="bg-pantone-719/10 p-6 rounded-lg">
              <img
                src="/assets/images/1.jpg"
                alt="Urban Planning"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-monument text-pantone-7515 mb-2 font-bold">
                Urban Planning
              </h3>
              <p className="font-abc-monument text-pantone-black/80">
                We design thoughtful urban spaces that foster community and
                connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
