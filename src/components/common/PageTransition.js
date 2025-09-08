"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
