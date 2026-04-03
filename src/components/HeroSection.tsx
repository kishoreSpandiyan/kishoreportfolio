import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import HeroScene from "./HeroScene";

const heroTexts = [
  { line1: "Full Stack", line2: "Developer", smallLine2: false },
  { line1: "Kishore", line2: "Soundarapandiyan", smallLine2: true },
];

const slideVariants = {
  enter: { y: 60, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -60, opacity: 0 },
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient retro-horizon">
      {/* 3D Background */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-70 md:opacity-100 bg-gradient-to-l from-primary/10 via-primary/5 to-transparent dark:from-transparent dark:via-transparent">
        <HeroScene />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="retro-label mb-6"
          >
            SYSTEM.INIT<span className="blink">_</span>
          </motion.p>

          {/* Sliding text container */}
          <div className="h-[140px] md:h-[180px] lg:h-[210px] overflow-hidden relative mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight absolute inset-0"
              >
                <span className="retro-heading retro-flicker">{heroTexts[index].line1}</span>
                <br />
                <span className={`text-foreground ${heroTexts[index].smallLine2 ? 'text-3xl md:text-4xl lg:text-5xl' : ''}`}>{heroTexts[index].line2}</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed font-retro text-xl"
          >
            I craft high-performance digital experiences with modern technologies.
            Turning complex problems into elegant, scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#" className="gradient-btn">
              <Download className="mr-2" size={16} />
              Resume
            </a>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="retro-btn-outline"
            >
              Explore
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary/50" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;

