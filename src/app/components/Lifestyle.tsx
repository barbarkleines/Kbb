import { motion } from "motion/react";
import { Coffee, Users, Sun } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const moments = [
  {
    icon: Coffee,
    title: "Sip Solo",
    description: "Your perfect companion for mindful moments",
    image:
      "https://images.unsplash.com/photo-1620080360587-21ad6c7b0416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwYmV2ZXJhZ2UlMjBjYW4lMjB3aGl0ZXxlbnwxfHx8fDE3NzE3NTU5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Users,
    title: "Crack it at Brunch",
    description: "Elevate every gathering with effortless style",
    image:
      "https://images.unsplash.com/photo-1599987854271-7af1c48a4dd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYnJ1bmNoJTIwZnJpZW5kcyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzE3NTU5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Sun,
    title: "Swap it for Happy Hour",
    description: "Refreshing vibes, no hangover — pure delight",
    image:
      "https://images.unsplash.com/photo-1554297004-58db71ab7f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdyZWVuJTIwbGVhZiUyMG1pbmltYWx8ZW58MXx8fHwxNzcxNzU1OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Lifestyle() {
  const { ref, inView } = useInView();

  return (
    <section id="lifestyle" className="py-32 bg-white" aria-labelledby="lifestyle-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 id="lifestyle-heading" className="text-5xl font-bold text-gray-900 mb-4">
            Your Lifestyle, Elevated
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Refreshing, clean, light — pure delight with no hangover
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
                <ImageWithFallback
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <moment.icon className="w-6 h-6 text-emerald-700" />
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{moment.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 text-center px-4">
                {moment.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Refreshing, clean, light — pure delight with{" "}
            <span className="text-emerald-700 font-semibold">no hangover</span>.
            Just refreshing vibes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}