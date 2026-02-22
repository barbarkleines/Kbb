import image_d7d96233a203984d86100d173f110a139595fc12 from 'figma:asset/d7d96233a203984d86100d173f110a139595fc12.png'
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white"
      aria-label="Hero section"
    >
      {/* Subtle glow effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Brand name */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-sm tracking-wide"
            >
              Berlin Born · Made in Germany
            </motion.div>
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
              H₂OP
            </h1>
            <p className="text-xl text-gray-600 italic">Das Hopfenwasser</p>
          </div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
          >
            Join the Revolution
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl text-emerald-700"
          >
            Fizzy hoppy goodness for beer lovers
          </motion.p>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed max-w-xl"
          >
            Tropical, bright, crisp flavor you know and crave — with{" "}
            <span className="font-semibold">0% alcohol</span>,{" "}
            <span className="font-semibold">no gluten</span>, and{" "}
            <span className="font-semibold">no calories</span>.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-all hover:shadow-2xl hover:shadow-emerald-300/50 hover:scale-105">
              Discover More
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-emerald-700 hover:text-emerald-700 transition-all">
              Our Story
            </button>
          </motion.div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/40 via-yellow-200/40 to-cyan-300/40 rounded-3xl blur-2xl scale-110" />

            {/* Image container */}
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <ImageWithFallback
                src={image_d7d96233a203984d86100d173f110a139595fc12}
                alt="H₂OP Hopfenwasser"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 -left-4 bg-white px-4 py-3 rounded-2xl shadow-xl"
          >
            <p className="text-sm font-semibold text-emerald-700">
              0% Alcohol
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-12 -right-4 bg-white px-4 py-3 rounded-2xl shadow-xl"
          >
            <p className="text-sm font-semibold text-yellow-600">
              Zero Calories
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  );
}