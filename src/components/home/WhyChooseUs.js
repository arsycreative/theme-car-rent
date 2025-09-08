"use client";
import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description:
        "Semua mobil dilengkapi asuransi all risk dan telah lolos inspeksi keselamatan berkala",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description:
        "Mobil terawat dengan standar tinggi, servis rutin, dan selalu dalam kondisi prima",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Driver Profesional",
      description:
        "Tim driver berpengalaman, berlisensi, dan telah melalui training keselamatan berlalu lintas",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Layanan 24/7",
      description:
        "Customer service siaga 24 jam untuk membantu kebutuhan perjalanan Anda kapan saja",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
                  alt="Professional Car Service"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl" />
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-3 md:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-200/50"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    10K+
                  </div>
                  <div className="text-sm text-slate-600">
                    Perjalanan Sukses
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-3 md:-left-6 bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-xl text-white"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">4.8★</div>
                  <div className="text-xs opacity-90">Rating Google</div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </AnimatedSection>

          {/* Right Content */}
          <AnimatedSection direction="right" className="lg:pl-8">
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6"
              >
                Mengapa Kami
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Kepercayaan{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Ribuan
                </span>{" "}
                Pelanggan
              </h2>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Dengan komitmen pada kualitas, keamanan, dan pelayanan terbaik,
                kami telah menjadi pilihan utama untuk kebutuhan rental mobil di
                Indonesia.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <div className="text-2xl font-bold text-slate-900">5+</div>
                  <div className="text-sm text-slate-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <div className="text-2xl font-bold text-slate-900">99%</div>
                  <div className="text-sm text-slate-600">On-Time Rate</div>
                </div>
              </div>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/50 hover:border-blue-300/50 hover:shadow-lg transition-all duration-300">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {advantage.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Konsultasi Gratis Sekarang
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
