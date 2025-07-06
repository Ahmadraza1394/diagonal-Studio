export default function ServiceHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-end justify-end overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/images/4.jpg"
        alt="Service Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        draggable={false}
        loading="eager"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pantone-black/50 via-pantone-black/30 to-transparent z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {/* Hero Text */}
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] ml-auto">
          <h1
            className="font-monument text-white text-right leading-[1.1] drop-shadow-xl 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
          >
            Exceptional Services,
            <br />
            Endless Possibilities
          </h1>
        </div>

        {/* CTA Button */}
        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24">
          <a
            href="#services"
            className="inline-block bg-white hover:bg-pantone-719 text-pantone-black font-museo 
              px-6 py-3 rounded shadow-lg transition-colors duration-300 ease-in-out
              text-sm sm:text-base md:text-lg whitespace-nowrap"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
