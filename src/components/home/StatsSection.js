"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Users, Car, MapPin, Award } from "lucide-react";

function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime;
      const startCount = 0;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(startCount + (end - startCount) * easeOutProgress));

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  const stats = [
    {
      number: 10000,
      suffix: "+",
      label: "Pelanggan Terpuaskan",
      icon: Users,
      description: "Kepercayaan ribuan keluarga Indonesia",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: 50,
      suffix: "+",
      label: "Unit Kendaraan",
      icon: Car,
      description: "Berbagai kategori mobil berkualitas",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      number: 25,
      suffix: "+",
      label: "Kota Terjangkau",
      icon: MapPin,
      description: "Layanan di seluruh Indonesia",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      number: 5,
      suffix: "",
      label: "Tahun Berpengalaman",
      icon: Award,
      description: "Dedikasi melayani dengan profesional",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h20V20H20zm0 0V0h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Element */}
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 w-12 h-12 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-300/20"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Award className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">
              Pencapaian Kami
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dipercaya Oleh{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ribuan
            </span>{" "}
            Pelanggan
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Angka-angka ini membuktikan komitmen kami dalam memberikan layanan
            rental mobil terbaik
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 overflow-hidden">
                <div
                  className={`absolute -top-10 -right-10 w-24 h-24 ${stat.bgColor} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4 relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bergabunglah dengan Ribuan Pelanggan Puas Kami
            </h3>
            <p className="text-blue-100 mb-6">
              Rasakan sendiri pengalaman rental mobil yang berbeda
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Mulai Perjalanan Anda
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
