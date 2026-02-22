import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-emerald-700">
              H₂OP
            </span>
            <span className="text-sm text-gray-600 hidden sm:inline">
              Das Hopfenwasser
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#story"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              Story
            </a>
            <a
              href="#lifestyle"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              Lifestyle
            </a>
            <a
              href="#product"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              Product
            </a>
          </div>

          <button className="px-6 py-2.5 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-200">
            Join Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}