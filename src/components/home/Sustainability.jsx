import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: "40+",
    label: "Completed Projects",
    desc: "Across residential, commercial, hospitality, and public sectors—demonstrating our versatility and depth.",
  },
  {
    value: "150+",
    label: "Industry Experts",
    desc: "A multidisciplinary team of experienced architects, designers, and engineers, dedicated to high-quality, innovative results.",
  },
  {
    value: "2B+",
    label: "Project Value",
    desc: "Expert management of high-budget, complex designs that deliver maximum value for our clients.",
  },
];

const images = [
  "/assets/images/1.jpg",
  "/assets/images/6.jpg",
  "/assets/images/3.jpg",
  "/assets/images/4.jpg",
  "/assets/images/5.jpg",
];

export default function Sustainability() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24"
      id="sustainability"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 px-4 sm:px-8 lg:px-12">
        <motion.div
          className="w-full lg:w-[280px] flex flex-col gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          ref={ref}
        >
          <div>
            <h3 className="font-monument text-lg sm:text-xl xl:text-2xl text-pantone-black uppercase leading-tight mb-2 sm:mb-3 tracking-tight">
              Sustainability
            </h3>
            <p className="font-abc-monument text-sm sm:text-base xl:text-lg text-pantone-black/85 leading-relaxed">
              Our commitment to eco-conscious innovation drives everything we
              do.
            </p>
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="font-monument-extended text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-pantone-7515 leading-tight mb-4 tracking-tight font-bold">
              Our Strength in Numbers
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:gap-10">
            {stats.map((item, idx) => (
              <motion.div
                key={item.value}
                className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 md:gap-8 py-4 sm:py-6 border-b border-pantone-black/10 last:border-0"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + idx * 0.1,
                  ease: "easeOut",
                }}
              >
                <span className="font-monument text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-pantone-black font-bold">
                  {item.value}
                </span>
                <div>
                  <h4 className="font-abc-monument text-base sm:text-lg md:text-xl text-pantone-black mb-1 sm:mb-2 font-medium">
                    {item.label}
                  </h4>
                  <p className="font-abc-monument text-sm sm:text-base xl:text-lg text-pantone-black/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-12 sm:mt-16 lg:mt-20 xl:mt-24 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden rounded-lg ${
                i === 0 ? "md:col-span-8" : "md:col-span-4"
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="relative overflow-hidden h-full">
                <img
                  src={img}
                  alt={`Sustainable project ${i + 1}`}
                  className={`w-full h-full ${
                    i === 0 ? "aspect-[16/9]" : "aspect-[1/1]"
                  } object-cover transition duration-700 hover:scale-105`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pantone-black/50 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
