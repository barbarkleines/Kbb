import { motion } from "motion/react";
import { Sparkles, Leaf, Droplet, Heart } from "lucide-react";
import { useInView } from "./hooks/useInView";

const features = [
  {
    icon: Droplet,
    title: "0% Alcohol",
    description: "All the flavor, none of the hangover. Pure refreshment.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Leaf,
    title: "No Gluten",
    description: "Crisp and clean, friendly to all lifestyles.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Sparkles,
    title: "Zero Calories",
    description: "Indulge guilt-free, anytime, anywhere.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Heart,
    title: "Pure Delight",
    description: "Tropical, bright, crisp — a taste you'll crave.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

export function Features() {
  const { ref, inView } = useInView();

  return (
    <section id="product" className="py-32 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 id="features-heading" className="text-5xl font-bold text-gray-900 mb-4">
            Refreshingly Simple
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you love about beer, reimagined for a modern lifestyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all hover:shadow-xl">
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}