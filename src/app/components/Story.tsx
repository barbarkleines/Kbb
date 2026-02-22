import { motion } from "motion/react";
import { Award, MapPin, Calendar } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Story() {
  const { ref, inView } = useInView();

  return (
    <section id="story" className="py-32 bg-gradient-to-b from-white via-emerald-50/20 to-white" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715852429155-2d70be208df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmV3ZXJ5JTIwbW9kZXJuJTIwaW5kdXN0cmlhbCUyMEdlcm1hbnl8ZW58MXx8fHwxNzcxNzU1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Brewery craftsmanship"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl"
            >
              <p className="text-4xl font-bold text-emerald-700">20+</p>
              <p className="text-sm text-gray-600 mt-1">Years of Expertise</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 id="story-heading" className="text-5xl font-bold text-gray-900 leading-tight">
                Crafted with German Precision
              </h2>
              <p className="text-xl text-emerald-700">
                A modern twist on centuries of brewing heritage
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Born in Berlin, H₂OP brings together over 20 years of brewing
              experience with a vision for the future. We've reimagined what
              hoppy refreshment can be — honoring tradition while embracing a
              vibrant, alcohol-free lifestyle.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Every bottle is a testament to our commitment to quality,
              sustainability, and pure enjoyment. This isn't just a beverage;
              it's a movement toward mindful, modern refreshment.
            </p>

            {/* Brand highlights */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Berlin Born</p>
                  <p className="text-sm text-gray-600">Made in Germany</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Craft</p>
                  <p className="text-sm text-gray-600">Premium Quality</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">20+ Years</p>
                  <p className="text-sm text-gray-600">Of Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}