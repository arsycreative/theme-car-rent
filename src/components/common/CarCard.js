"use client";
import { motion } from "framer-motion";
import { Users, Zap, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function CarCard({ car, index }) {
  const whatsappMessage = `Halo, saya tertarik untuk menyewa ${car.name}. Mohon informasi lebih lanjut mengenai harga dan ketersediaan. Terima kasih.`;
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="overflow-hidden py-0 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
        <div className="relative overflow-hidden">
          <Image
            src={car.image}
            alt={car.name}
            width={800}
            height={500}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
            {car.category}
          </Badge>

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-sm font-semibold text-gray-800">
              {car.specs.year}
            </span>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {car.name}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-blue-600">
                Rp {car.price}
              </span>
              <span className="text-sm text-gray-500">/ hari</span>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{car.specs.passengers} Penumpang</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Zap className="w-4 h-4 text-green-500" />
              <span className="text-sm">{car.specs.transmission}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span className="text-sm">{car.specs.fuel}</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              Fitur Unggulan:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {car.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg group-hover:scale-105"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Sewa Sekarang
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
