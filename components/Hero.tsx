"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import SynthwaveBackground from "@/components/SynthwaveBackground";

const fullTitle = siteConfig.name;

/** Typing effect hook for hero headline */
function useTypingEffect(text: string, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayed(text.slice(0, index + 1));
        index++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypingEffect(fullTitle, 70);
  const [time, setTime] = useState("00:00:00");
  
  const [ping, setPing] = useState(24);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    

    // Simulate ping changes
    const pingInterval = setInterval(() => {
      setPing(Math.floor(Math.random() * 50) + 10);
    }, 2000);

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearInterval(interval);
      clearInterval(pingInterval);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden pt-16 px-4 py-8">
      {/* Vertical vector grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500/10 via-fuchsia-500/5 to-transparent"
            style={{
              left: `${(i + 1) * (100 / 13)}%`,
            }}
          />
        ))}
      </div>

      {/* Synthwave wireframe landscape */}
      <SynthwaveBackground />

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="container-max section-padding relative z-10 mx-auto -mt-80">
        <div className="max-w-3xl relative">
          {/* Corner reticles around headline */}
          <div className="pointer-events-none absolute -top-6 -left-6 w-6 h-6 border-t-2 border-l-2 border-fuchsia-500/50 rounded-tl" />
          <div className="pointer-events-none absolute -top-6 -right-6 w-6 h-6 border-t-2 border-r-2 border-fuchsia-500/50 rounded-tr" />
          <div className="pointer-events-none absolute -bottom-6 -left-6 w-6 h-6 border-b-2 border-l-2 border-fuchsia-500/50 rounded-bl" />
          <div className="pointer-events-none absolute -bottom-6 -right-6 w-6 h-6 border-b-2 border-r-2 border-fuchsia-500/50 rounded-br" />
          {/* Typing headline with neon glow */}
          <h1
            className="font-plex -ml-2 -mt-2 text-6xl font-[150] leading-tight tracking-tight sm:text-7xl lg:text-8xl text-white"
            style={{ 
              textShadow: "0 0 12px rgba(192, 38, 211, 0.6), 0 0 25px rgba(168, 85, 247, 0.4), 0 0 40px rgba(192, 38, 211, 0.2)"
            }}
          >
            <div className="inline-flex items-end gap-2">
              <span>{displayed}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="h-1 w-8 bg-fuchsia-400 mb-2"
              />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-2 font-plex text-lg font-[150] sm:text-xl text-white"
            style={{ 
              filter: "drop-shadow(0 0 12px rgba(192, 38, 211, 0.6)) drop-shadow(0 0 25px rgba(168, 85, 247, 0.4))"
            }}
          >
            {siteConfig.role}
          </motion.p>
        </div>
      </div>

      {/* Time and coordinates display */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-8 z-20 font-mono text-xs text-fuchsia-400/80 pointer-events-none"
          style={{
            textShadow: "0 0 10px rgba(192, 38, 211, 0.5)",
          }}
        >
          <div className="border border-fuchsia-500/30 bg-black/40 backdrop-blur-sm rounded px-2 py-1">
            <div>{time}</div>
          </div>
        </motion.div>
      )}

      {/* Ping indicator */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 right-8 z-20 font-mono text-xs text-fuchsia-400/80 pointer-events-none"
          style={{
            textShadow: "0 0 10px rgba(192, 38, 211, 0.5)",
          }}
        >
          <div className="border border-fuchsia-500/30 bg-black/40 backdrop-blur-sm rounded px-2 py-1 flex items-center gap-1">
            <motion.div
              animate={{ opacity: [1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"
            />
            <div>ping: {ping}ms</div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
