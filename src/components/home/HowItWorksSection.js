"use client";
import { motion } from "framer-motion";
import { Search, Calendar, Car, CheckCircle } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Pilih Mobil",
      description:
        "Jelajahi berbagai pilihan mobil yang sesuai dengan kebutuhan dan anggaran Anda",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      delay: 0.1,
    },
    {
      icon: Calendar,
      title: "Tentukan Tanggal",
      description:
        "Pilih tanggal sewa dan durasi yang diinginkan dengan sistem booking yang mudah",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      delay: 0.2,
    },
    {
      icon: Car,
      title: "Ambil Mobil",
      description:
        "Ambil mobil di lokasi kami atau gunakan layanan antar-jemput gratis kami",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      delay: 0.3,
    },
    {
      icon: CheckCircle,
      title: "Nikmati Perjalanan",
      description:
        "Berkendaralah dengan nyaman dan aman, kami siap membantu kapan saja",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      delay: 0.4,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
          >
            Cara Kerja Kami
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Rental Mobil dalam{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              4 Langkah Mudah
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Proses yang simpel dan transparan untuk mendapatkan mobil idaman
            Anda
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: step.delay + 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 origin-left"
                  />
                </div>
              )}

              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/50 group-hover:border-blue-300/50 overflow-hidden">
                {/* Background Decoration */}
                <div
                  className={`absolute -top-10 -right-10 w-20 h-20 ${step.bgColor} rounded-full opacity-50 group-hover:opacity-70 transition-opacity`}
                />

                {/* Step Number */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-600">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Siap Memulai Perjalanan Anda?
              </h3>

              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Dapatkan penawaran terbaik dan mulai petualangan Anda hari ini
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#featured-cars"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl"
                >
                  Lihat Armada
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10"
                >
                  Hubungi Sekarang
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
