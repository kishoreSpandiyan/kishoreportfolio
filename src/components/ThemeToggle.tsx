import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark" ||
                (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <motion.button
            onClick={() => setIsDark(!isDark)}
            className="relative w-10 h-10 rounded-full flex items-center justify-center
               bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40
               transition-all duration-300 group"
            whileTap={{ scale: 0.9, rotate: 15 }}
            whileHover={{ scale: 1.1 }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 180 : 0,
                    scale: isDark ? 0 : 1,
                    opacity: isDark ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute"
            >
                <Sun size={18} className="text-primary" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : -180,
                    scale: isDark ? 1 : 0,
                    opacity: isDark ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute"
            >
                <Moon size={18} className="text-primary" />
            </motion.div>

            {/* Glow ring on hover */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      shadow-[0_0_12px_hsl(217_91%_60%/0.3)]" />
        </motion.button>
    );
};

export default ThemeToggle;
