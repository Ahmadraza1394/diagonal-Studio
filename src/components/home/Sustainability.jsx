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
    value: "$2B+",
    label: "Project Value",
    desc: "Expert management of high-budget, complex designs that deliver maximum value for our clients.",
  },
];

const images = [
  "/assets/images/1.jpg",
  "/assets/images/2.jpg",
  "/assets/images/3.jpg",
];

export default function Sustainability() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="w-full bg-white py-16 lg:py-24" id="sustainability">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 px-4 sm:px-8 lg:px-12">
        <motion.div
          className="w-full lg:w-[380px] flex flex-col gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          ref={ref}
        >
          <div>
            <h3 className="font-monument text-xl xl:text-2xl text-pantone-black uppercase leading-tight mb-3 tracking-tight">
              Sustainability at Our Core
            </h3>
            <p className="font-museo text-base xl:text-lg text-pantone-black/85 leading-relaxed">
              Our commitment to eco-conscious innovation drives everything we
              do. We strive to shape a brighter, greener future—designing
              projects that benefit the planet and the generations to come.
            </p>
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="font-monument text-4xl sm:text-5xl xl:text-6xl text-pantone-7515 leading-tight mb-4 tracking-tight">
              Our Strength in Numbers
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:gap-10">
            {stats.map((item, idx) => (
              <motion.div
                key={item.value}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 py-6 border-b border-pantone-black/10 last:border-0"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + idx * 0.1,
                  ease: "easeOut",
                }}
              >
                <span className="font-monument text-5xl sm:text-6xl xl:text-7xl text-pantone-black">
                  {item.value}
                </span>
                <div>
                  <h4 className="font-museo text-lg sm:text-xl text-pantone-black mb-2">
                    {item.label}
                  </h4>
                  <p className="font-museo text-base xl:text-lg text-pantone-black/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-16 lg:mt-24 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img}
              className={`relative overflow-hidden ${
                i === 0 ? "col-span-8" : i === 1 ? "col-span-4" : "col-span-12"
              } aspect-[4/3]`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
            >
              <img
                src={img}
                alt={`Sustainable architecture ${i + 1}`}
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
