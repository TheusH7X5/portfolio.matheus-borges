import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export const ParallaxWord = ({ word, children }) => {
  const { scrollY } = useViewportScroll();
  const yPosition = useTransform(scrollY, word.yValues, [0, -600]);
  return (
    <motion.h1 style={{ y: yPosition }} animate={{ scale: word.scale }}>
      {children}
    </motion.h1>
  );
};
