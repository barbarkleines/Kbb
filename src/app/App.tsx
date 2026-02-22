import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Story } from "./components/Story";
import { Lifestyle } from "./components/Lifestyle";
import { CTA } from "./components/CTA";
import { Navigation } from "./components/Navigation";
import { SEO } from "./components/SEO";

export default function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <Features />
        <Story />
        <Lifestyle />
        <CTA />
      </div>
    </>
  );
}