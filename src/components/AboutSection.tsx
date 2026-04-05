import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stakeholderPhotos = [
  `${import.meta.env.BASE_URL}stakeholders/PORT%20IMG%202.jpeg`,
  `${import.meta.env.BASE_URL}stakeholders/PORT%20IMG%202.5.jpeg`,
  `${import.meta.env.BASE_URL}stakeholders/PORT%20IMG%203.jpeg`,
];

const profileDetails = [
  { label: "Languages", value: "HTML, CSS, JS, Python, Java, SQL" },
  { label: "Framework", value: "Django" },
  { label: "Cloud", value: "AWS" },
  { label: "Focus", value: "Full Stack & Web Development" },
  { label: "Tools", value: "VS Code, Figma, Photoshop, MS Office" },
  { label: "Location", value: "Karur, Tamil Nadu" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const { ref, controls } = useScrollReveal();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const totalSlides = stakeholderPhotos.length;

  const getRelativePosition = (index: number) => {
    const delta = (index - activeSlide + totalSlides) % totalSlides;
    if (delta === 0) {
      return 0;
    }
    if (delta === 1) {
      return 1;
    }
    return -1;
  };

  useEffect(() => {
    if (isCarouselPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((previousSlide) => (previousSlide + 1) % totalSlides);
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isCarouselPaused, totalSlides]);

  return (
    <section id="about" className="py-24 relative">
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-pink/3 blur-[80px] animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            ABOUT.ME
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Who I Am
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
            <motion.div variants={fadeUp} className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground leading-relaxed font-retro text-xl">
                Hi, I'm <span className="text-primary font-bold">Kishore S</span>, a passionate Computer Science Engineering
                student from Karur, Tamil Nadu, with a strong interest in Full Stack and Web Development.
                I enjoy designing and developing modern, responsive web applications that provide
                great user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed font-retro text-lg">
                I have experience working with technologies such as HTML, CSS, JavaScript, SQL, Python,
                and Java, and I use tools like VS Code, Figma, Photoshop, and MS Office during development
                and design. I love turning ideas into real digital solutions and continuously learning
                new technologies to improve my skills.
              </p>
              <p className="text-muted-foreground leading-relaxed font-retro text-lg">
                My goal is to grow as a developer and contribute to innovative projects that create
                meaningful impact. Let's build something extraordinary together.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2 self-start flex items-start justify-center md:-ml-10 md:-mt-4">
              <div className="w-full max-w-[430px] space-y-3">
                <div
                  className="relative h-[380px] overflow-visible"
                  onPointerEnter={() => setIsCarouselPaused(true)}
                  onPointerLeave={() => setIsCarouselPaused(false)}
                  onPointerDown={(event) => {
                    if (event.pointerType === "touch") {
                      setIsCarouselPaused(true);
                    }
                  }}
                  onPointerUp={(event) => {
                    if (event.pointerType === "touch") {
                      setIsCarouselPaused(false);
                    }
                  }}
                  onPointerCancel={() => setIsCarouselPaused(false)}
                  onFocusCapture={() => setIsCarouselPaused(true)}
                  onBlurCapture={() => setIsCarouselPaused(false)}
                >
                  {stakeholderPhotos.map((photo, index) => {
                    const relativePosition = getRelativePosition(index);
                    const isCenterSlide = relativePosition === 0;
                    return (
                      <motion.div
                        key={photo}
                        className="absolute left-1/2 top-0 h-[340px] w-[230px] -translate-x-1/2 overflow-hidden rounded-[28px]"
                        animate={{
                          x: relativePosition === -1 ? -104 : relativePosition === 1 ? 104 : 0,
                          scale: isCenterSlide ? 1 : 0.86,
                          opacity: isCenterSlide ? 1 : 0.38,
                          zIndex: isCenterSlide ? 30 : 10,
                          filter: isCenterSlide ? "blur(0px)" : "blur(1.5px)",
                        }}
                        transition={{ duration: 0.65, ease: "easeInOut" }}
                      >
                        <img
                          src={photo}
                          alt={`Stakeholder photo ${index + 1}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                      </motion.div>
                    );
                  })}

                  <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex items-center justify-center gap-2">
                    {stakeholderPhotos.map((photo, index) => (
                      <button
                        key={photo}
                        type="button"
                        aria-label={`Show photo ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === index ? "w-5 bg-primary" : "w-2 bg-primary/40"
                        }`}
                      />
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-10 flex justify-start">
            <div className="glass-card gradient-border retro-corners p-4 w-full max-w-none">
              <p className="text-xs font-heading uppercase tracking-[0.24em] text-primary">Skills Structure</p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 border-2 border-primary/35">
                {profileDetails.map((item) => (
                  <div key={item.label} className="min-h-[88px] p-3">
                    <p className="text-[10px] font-heading uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      {item.label}
                    </p>
                    <p className="font-pixel text-[10px] text-primary leading-relaxed break-words">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
