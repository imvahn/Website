"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {stiffness: 500, damping: 25});

  return (
    <motion.div
      className="fixed inset-0 h-[10px] bg-lime-500 origin-[0%] z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollIndicator;
