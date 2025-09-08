"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message =
      "Halo! Saya tertarik dengan layanan rental mobil mewah Anda. Bisa bantu saya?";
    window.open(createWhatsAppLink(message), "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-2xl"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.button>
  );
}
