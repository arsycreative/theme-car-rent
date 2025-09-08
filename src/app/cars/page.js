"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  SortAsc,
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
  ArrowRight,
  Grid3X3,
  List,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { cars } from "@/data/cars";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CarsPage() {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredCard, setHoveredCard] = useState(null);

  // ---------- DYNAMIC CATEGORIES (fixed) ----------
  // Generate categories from cars data and provide neutral bg/text styles
  const categories = useMemo(() => {
    const map = cars.reduce((acc, car) => {
      const key = car.category || "Uncategorized";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const base = [
      {
        name: "All",
        count: cars.length,
        // neutral badge styles used on cards
        bgColor: "bg-slate-100 border-slate-200",
        textColor: "text-slate-700",
      },
    ];
    const rest = Object.entries(map).map(([name, count]) => ({
      name,
      count,
      bgColor: "bg-slate-100 border-slate-200",
      textColor: "text-slate-700",
    }));
    return [...base, ...rest];
  }, []);

  // ---------- sort options ----------
  const sortOptions = [
    { value: "name", label: "Nama A-Z", icon: SortAsc },
    { value: "price", label: "Harga Terendah", icon: TrendingUp },
    { value: "year", label: "Tahun Terbaru", icon: Calendar },
    { value: "popular", label: "Paling Populer", icon: Star },
  ];

  const handleFilter = (category) => {
    setActiveCategory(category);
    let filtered = cars;

    if (category !== "All") {
      filtered = cars.filter((car) => car.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price")
        return (
          parseInt(a.price.replace(/\./g, "")) -
          parseInt(b.price.replace(/\./g, ""))
        );
      if (sortBy === "year") return b.specs.year - a.specs.year;
      if (sortBy === "popular")
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      return 0;
    });

    setFilteredCars(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    let filtered = cars;

    if (activeCategory !== "All") {
      filtered = cars.filter((car) => car.category === activeCategory);
    }

    if (term) {
      filtered = filtered.filter((car) =>
        car.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price")
        return (
          parseInt(a.price.replace(/\./g, "")) -
          parseInt(b.price.replace(/\./g, ""))
        );
      if (sortBy === "year") return b.specs.year - a.specs.year;
      if (sortBy === "popular")
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      return 0;
    });

    setFilteredCars(filtered);
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    const sorted = [...filteredCars].sort((a, b) => {
      if (sortType === "name") return a.name.localeCompare(b.name);
      if (sortType === "price")
        return (
          parseInt(a.price.replace(/\./g, "")) -
          parseInt(b.price.replace(/\./g, ""))
        );
      if (sortType === "year") return b.specs.year - a.specs.year;
      if (sortType === "popular")
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      return 0;
    });
    setFilteredCars(sorted);
  };

  const activeSort = sortOptions.find((option) => option.value === sortBy);
  const activeCategoryData = categories.find(
    (cat) => cat.name === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Floating Background Elements */}
      <div className="inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced Hero Section with Better Background */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px),
                  linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Subtle Floating Elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
          />

          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute bottom-32 left-20 w-32 h-32 bg-indigo-500/15 rounded-full blur-xl"
          />

          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"
          />

          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/30 to-slate-900/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-100 font-semibold text-sm">
                {cars.length} Armada Tersedia
              </span>
              <div className="w-2 h-2 bg-blue-400 rounded-full ml-3 animate-pulse"></div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight relative z-20"
            >
              Armada{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text">
                Premium
              </span>{" "}
              <br className="hidden md:block" />
              Terlengkap
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed relative z-20"
            >
              Jelajahi koleksi mobil mewah terlengkap dari brand ternama dunia.
              Setiap kendaraan dipelihara dengan standar premium untuk
              pengalaman berkendara yang tak terlupakan.
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto mb-8"
            >
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari mobil impian Anda..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full h-[58px] pl-14 pr-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 shadow-xl text-lg text-white placeholder-slate-300 transition-all duration-300"
                />
              </div>
              <Button className="h-[58px] px-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                {
                  icon: Car,
                  label: "50+ Unit",
                  color: "text-blue-400",
                  bg: "bg-blue-500/20",
                },
                {
                  icon: CheckCircle,
                  label: "Terawat",
                  color: "text-green-400",
                  bg: "bg-green-500/20",
                },
                {
                  icon: TrendingUp,
                  label: "Harga Bersaing",
                  color: "text-purple-400",
                  bg: "bg-purple-500/20",
                },
                {
                  icon: Star,
                  label: "Rating 4.9",
                  color: "text-orange-400",
                  bg: "bg-orange-500/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10"
                >
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-semibold text-white">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Filters & Controls (REPLACED UI ONLY) */}
      <section className="py-6 bg-white border-t border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap justify-center gap-3 mb-5"
          >
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleFilter(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
                  ${
                    activeCategory === category.name
                      ? "bg-slate-900 text-white border-transparent shadow"
                      : "bg-white border-slate-100 text-slate-700 hover:shadow-sm"
                  }`}
              >
                <span>{category.name}</span>
                <span className="ml-2 text-xs opacity-75">
                  ({category.count})
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Controls Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Sort */}
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm border border-slate-100">
                {activeSort?.icon && (
                  <activeSort.icon className="w-4 h-4 text-slate-500" />
                )}
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="bg-transparent focus:outline-none text-sm text-slate-700 font-medium"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-slate-100">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`p-2 rounded-full transition ${
                    viewMode === "grid"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  className={`p-2 rounded-full transition ${
                    viewMode === "list"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <div className="text-sm text-slate-700 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <span className="font-semibold text-slate-900">
                {filteredCars.length}
              </span>{" "}
              dari {cars.length} kendaraan
              {activeCategory !== "All" && (
                <span
                  className={`ml-3 inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700`}
                >
                  {activeCategory}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* End Filters & Controls (only UI changed) */}

      {/* Cars Grid/List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCars.length > 0 ? (
            <div
              className={`grid gap-8 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(car.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 group-hover:border-blue-300/50 min-h-[600px] flex flex-col">
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
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
                        >
                          <Heart className="w-5 h-5 text-slate-600 hover:text-red-500" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
                        >
                          <Eye className="w-5 h-5 text-slate-600 hover:text-blue-500" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Car Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Price Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <motion.div
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-slate-600 font-medium mb-1">
                                Mulai dari
                              </div>
                              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Rp {parseInt(car.price).toLocaleString("id-ID")}
                              </div>
                              <div className="text-xs text-slate-500">
                                per hari
                              </div>
                            </div>
                            <div className="text-green-600 bg-green-100 px-3 py-2 rounded-xl text-sm font-semibold">
                              Tersedia
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div
                            className={`text-xs font-semibold px-3 py-1 rounded-xl mb-2 inline-block ${activeCategoryData?.bgColor} ${activeCategoryData?.textColor}`}
                          >
                            {car.category}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                            {car.name}
                          </h3>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                              />
                            ))}
                            <span className="text-sm text-slate-600 ml-2">
                              4.9 (128 ulasan)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Specs */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                          <Users className="w-4 h-4 mr-2 text-blue-500" />
                          {car.specs.passengers} Orang
                        </div>
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                          <Settings className="w-4 h-4 mr-2 text-green-500" />
                          {car.specs.transmission}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                          <Fuel className="w-4 h-4 mr-2 text-orange-500" />
                          {car.specs.fuel}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                          <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                          {car.specs.year}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6 min-h-[56px]">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {car.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200"
                            >
                              {feature}
                            </span>
                          ))}
                          {car.features.length > 3 && (
                            <span className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-lg">
                              +{car.features.length - 3} lainnya
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Booking Sekarang
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-3 border-2 border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-50"
                        >
                          Detail
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300/50 rounded-3xl transition-all duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <div className="text-8xl mb-8">🚗</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Tidak ada kendaraan ditemukan
              </h3>
              <p className="text-slate-600 mb-8 text-lg">
                Coba ubah filter atau kata kunci pencarian Anda
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchTerm("");
                    setFilteredCars(cars);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg shadow-xl"
                >
                  Reset Filter
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-2xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Tidak Menemukan yang{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Anda Cari?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Tim ahli kami siap membantu Anda menemukan kendaraan yang sempurna
              sesuai kebutuhan dan preferensi. Konsultasi gratis dan rekomendasi
              terpersonalisasi menanti Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://wa.me/6281234567890?text=Halo, saya butuh bantuan untuk memilih mobil yang sesuai kebutuhan saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 bg-white text-blue-600 hover:bg-gray-50 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
                >
                  <div className="w-9 h-9 bg-green-500 rounded-full mr-3 flex items-center justify-center shadow-md">
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </div>
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-blue-100"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Respon 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Rating 4.9/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-300" />
                <span>10,000+ Pelanggan</span>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
