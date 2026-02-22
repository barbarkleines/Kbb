import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function CTA() {
  const { ref, inView } = useInView();

  return (
    <section className="py-32 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 id="cta-heading" className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            More Than a Drink.
            <br />A Movement.
          </h2>

          <p className="text-xl lg:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
            A premium alcohol-free alternative that feels effortless, modern,
            and culturally cool. Join the revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group px-10 py-5 bg-white text-emerald-700 rounded-full hover:bg-emerald-50 transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2">
              <span className="font-semibold">Join the Revolution</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-10 py-5 border-2 border-white/50 text-white rounded-full hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm">
              Learn More
            </button>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-12 border-t border-white/20 mt-12"
          >
            <p className="text-emerald-50 text-sm uppercase tracking-wider mb-4">
              Trusted by Modern Drinkers
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-white/90">
                <p className="text-3xl font-bold">0%</p>
                <p className="text-sm text-emerald-100">Alcohol</p>
              </div>
              <div className="text-white/90">
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-emerald-100">Calories</p>
              </div>
              <div className="text-white/90">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-emerald-100">Refreshment</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 mt-20 pt-12 border-t border-white/20"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">H₂OP</span>
              <span className="text-sm">Das Hopfenwasser</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <p className="text-sm">© 2026 H₂OP. Berlin Born.</p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}