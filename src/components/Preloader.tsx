"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"logo" | "blink" | "exit">("logo");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("preloader_shown")) {
      setShow(false);
      return;
    }
    setShow(true);
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase("blink"), 500);
    const t2 = setTimeout(() => setPhase("exit"), 1800);
    const t3 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("preloader_shown", "true");
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Top half */}
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "50vh",
              backgroundColor: "#1A1A2E",
              zIndex: 99999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: "2.5rem",
              overflow: "hidden",
            }}
            animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
            transition={phase === "exit" ? { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.05 } : { duration: 0 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                phase === "logo"
                  ? { opacity: 1, scale: 1 }
                  : phase === "blink"
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0.8, scale: 1 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
            >
              <img
                src="https://kleinbusse-paul.de/wp-content/uploads/2017/11/logo.jpg"
                alt="H. Paul GmbH"
                width={120}
                height={120}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom half */}
          <motion.div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50vh",
              backgroundColor: "#1A1A2E",
              zIndex: 99999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: "2.5rem",
            }}
            animate={phase === "exit" ? { y: "100%" } : { y: 0 }}
            transition={phase === "exit" ? { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.05 } : { duration: 0 }}
          >
            {/* Text with blink effect */}
            <motion.p
              animate={
                phase === "blink"
                  ? {
                      opacity: [1, 0.2, 1, 0.2, 1, 0.2, 1],
                    }
                  : { opacity: 1 }
              }
              transition={
                phase === "blink"
                  ? { duration: 1.0, times: [0, 0.15, 0.3, 0.5, 0.65, 0.8, 1], ease: "linear" }
                  : {}
              }
              style={{
                fontFamily: "var(--font-heading), 'Playfair Display', serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "white",
                letterSpacing: "0.04em",
              }}
            >
              H. Paul <span style={{ color: "#DB0F10" }}>GmbH</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase !== "logo" ? 0.4 : 0 }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: "0.5rem",
              }}
            >
              Kleinbusvermietung · Mosbach
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
