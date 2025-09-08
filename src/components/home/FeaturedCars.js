"use client";
import Link from "next/link";
import { cars } from "@/data/cars";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Filter,
  Star,
  Users,
  Settings,
  Fuel,
  Calendar,
  Heart,
  Eye,
  Car,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FeaturedCars() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      name: "Semua",
      count: cars.length,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      name: "MPV Keluarga",
      count: 4,
      color: "bg-green-100 text-green-700 border-green-200",
    },
    {
      name: "City Car",
      count: 2,
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
    {
      name: "SUV",
      count: 2,
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
  ];

  const filteredCars =
    activeCategory === "Semua"
      ? cars.slice(0, 6)
      : cars
          .filter((car) => car.category.includes(activeCategory.split(" ")[0]))
          .slice(0, 6);

  const popularCars = cars.filter((car) => car.popular).length;

  return (
    <section
      id="featured-cars"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30c6.627 0 12-5.373 12-12S36.627 6 30 6 18 11.373 18 18s5.373 12 12 12zm0 6c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div> */}

      {/* Floating Decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200/50 backdrop-blur-sm mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <Star className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold text-sm">
              {popularCars} Mobil Terpopuler
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full ml-3 animate-pulse"></div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Pilihan Mobil{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Terbaik
            </span>{" "}
            <br className="hidden md:block" />
            untuk Setiap Kebutuhan
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Dari city car hemat untuk perjalanan sehari-hari hingga MPV keluarga
            untuk liburan bersama. Semua dalam kondisi prima dengan harga
            terjangkau.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { icon: Car, label: "50+ Unit", color: "text-blue-600" },
              { icon: CheckCircle, label: "Terawat", color: "text-green-600" },
              {
                icon: TrendingUp,
                label: "Harga Bersaing",
                color: "text-purple-600",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`p-2 rounded-lg bg-slate-100 ${item.color}`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-2xl font-semibold cursor-pointer transition-all duration-300 border-2 ${
                activeCategory === category.name
                  ? `${category.color} shadow-lg transform scale-105`
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(car.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 group-hover:border-blue-300/50 relative">
                {/* Popular Badge */}
                {car.popular && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Populer
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-col gap-2">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110">
                      <Heart className="w-4 h-4 text-slate-600 hover:text-red-500" />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110">
                      <Eye className="w-4 h-4 text-slate-600 hover:text-blue-500" />
                    </button>
                  </div>
                </div>

                {/* Car Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Price Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-600 font-medium">
                            Mulai dari
                          </div>
                          <div className="text-xl font-bold text-blue-600">
                            Rp {parseInt(car.price).toLocaleString("id-ID")}
                          </div>
                          <div className="text-xs text-slate-500">per hari</div>
                        </div>
                        <div className="text-green-600 bg-green-100 px-2 py-1 rounded-lg text-xs font-semibold">
                          Tersedia
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg mb-2 inline-block">
                        {car.category}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {car.name}
                      </h3>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <Users className="w-4 h-4 mr-2 text-blue-500" />
                      {car.specs.passengers} Orang
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Settings className="w-4 h-4 mr-2 text-green-500" />
                      {car.specs.transmission}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Fuel className="w-4 h-4 mr-2 text-orange-500" />
                      {car.specs.fuel}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                      {car.specs.year}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {car.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                      {car.features.length > 2 && (
                        <span className="text-xs text-blue-600 font-medium">
                          +{car.features.length - 2} lainnya
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Booking Sekarang
                    </button>
                    <button className="px-4 py-3 border-2 border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                      Info
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300/50 rounded-3xl transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-8 right-8 w-12 h-12 border-2 border-white/20 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-8 left-8 w-8 h-8 bg-white/10 rounded-lg"
            />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Tidak Menemukan Mobil yang Cocok?
              </h3>

              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
                Kami memiliki lebih banyak pilihan mobil yang mungkin sesuai
                dengan kebutuhan dan budget Anda. Konsultasi gratis untuk
                mendapatkan rekomendasi terbaik!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/cars"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:bg-slate-50"
                  >
                    <Filter className="w-5 h-5 mr-2" />
                    Lihat Semua Armada
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://wa.me/6281234567890?text=Halo, saya ingin berkonsultasi tentang rental mobil yang sesuai kebutuhan saya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Konsultasi Gratis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
