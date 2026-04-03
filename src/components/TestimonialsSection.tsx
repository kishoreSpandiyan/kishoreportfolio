import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "An exceptional developer who consistently delivers beyond expectations. Their attention to detail and problem-solving skills are unmatched.",
    name: "Sarah Chen",
    role: "CTO, TechVentures",
  },
  {
    quote: "Working with them was a game-changer for our startup. They built our entire platform in record time with incredible quality.",
    name: "Marcus Johnson",
    role: "Founder, StartupX",
  },
  {
    quote: "Their code quality and architecture decisions saved us months of technical debt. A true senior engineer in every sense.",
    name: "Emily Rodriguez",
    role: "VP Engineering, DataFlow",
  },
  {
    quote: "Reliable, creative, and technically brilliant. They brought our vision to life with a beautiful, performant application.",
    name: "David Kim",
    role: "Product Lead, InnovateCo",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TestimonialsSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            REVIEWS.LOG
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Testimonials
          </motion.h2>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex gap-6 overflow-x-auto pb-6 px-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="glass-card gradient-border retro-corners p-8 min-w-[320px] max-w-[400px] flex-shrink-0 snap-center"
          >
            <div className="text-primary/30 font-pixel text-lg mb-4">{"/**"}</div>
            <p className="text-muted-foreground leading-relaxed mb-6 font-retro text-lg">"{t.quote}"</p>
            <div className="text-primary/30 font-pixel text-lg mb-4">{"*/"}</div>
            <div className="retro-divider mb-4" />
            <div>
              <p className="font-heading font-bold text-foreground text-sm uppercase tracking-wider">{t.name}</p>
              <p className="text-xs text-primary font-heading uppercase tracking-wider">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-6 mt-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="glass-card gradient-border retro-corners p-8"
        >
          <p className="retro-label mb-3">THIRUKKURAL</p>
          <p className="text-foreground text-lg md:text-xl leading-relaxed font-medium mb-3">
            தெய்வத்தான் ஆகாது எனினும் முயற்சிதன்
            <br />
            மெய்வருத்தக் கூலி தரும்
          </p>
          <p className="text-xs md:text-sm text-primary font-heading uppercase tracking-wider mb-3">
            Deivaththaan Aagaadhu Eninum Muyarchithan Meyvaruththa Kooli Tharum
          </p>
          <p className="text-muted-foreground font-retro text-base leading-relaxed">
            Even if destiny does not help, sincere hard work always returns its due reward.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
