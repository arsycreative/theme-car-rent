"use client";
import { motion } from "framer-motion";
import { Award, Users, Car, Shield, Target, Eye } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: "5+ Tahun Pengalaman",
      description: "Melayani ribuan pelanggan dengan kepuasan tinggi",
    },
    {
      icon: Car,
      title: "50+ Armada Terpercaya",
      description:
        "Koleksi armada berkualitas untuk berbagai kebutuhan perjalanan — bisnis, keluarga, dan acara spesial.",
    },
    {
      icon: Users,
      title: "500+ Pelanggan Puas",
      description: "Testimoni positif dari berbagai kalangan",
    },
    {
      icon: Shield,
      title: "Perlindungan & Keamanan",
      description:
        "Semua kendaraan dilengkapi asuransi & perawatan berkala untuk kenyamanan Anda.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Misi Kami",
      description:
        "Menyediakan layanan rental mobil yang andal, nyaman, dan mudah diakses — sehingga setiap perjalanan pelanggan terasa aman dan menyenangkan.",
    },
    {
      icon: Eye,
      title: "Visi Kami",
      description:
        "Menjadi pilihan utama layanan rental mobil di Indonesia — dikenal karena kualitas armada, kemudahan layanan, dan pengalaman pelanggan yang unggul.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative background (animated grid + subtle floating blobs) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />

          {/* animated grid pattern */}
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* floating shapes */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 right-16 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 18, 0], x: [0, -12, 0], rotate: [0, -10, 0] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 left-10 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -12, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"
          />

          {/* radial overlay for subtle contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/30 to-slate-900/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Tentang{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  Layanan Rental Mobil
                </span>
              </h1>

              <p className="text-lg text-slate-200 leading-relaxed mb-6 max-w-2xl">
                Kami hadir untuk memudahkan perjalanan Anda — menyediakan armada
                berkualitas, proses booking yang mudah, dan layanan pelanggan
                yang responsif. Baik untuk perjalanan bisnis, liburan keluarga,
                maupun acara spesial, kami siap membantu Anda sampai tujuan
                dengan nyaman dan aman.
              </p>

              <div className="grid grid-cols-2 gap-6 max-w-md">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <p className="text-slate-300">Pelanggan Puas</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <p className="text-slate-300">Armada Terpercaya</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-3xl shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg"
                  alt="About Rental"
                  width={1200}
                  height={800}
                  className="object-cover w-full h-96"
                />
                {/* subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                {/* Floating Card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-700">
                      Layanan 24/7
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Dukungan pelanggan siap membantu kapan saja
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pencapaian <span className="text-cyan-600">Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedikasi kami dalam memberikan layanan yang andal dan ramah
              pelanggan menghasilkan pencapaian yang membanggakan.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="bg-gray-50 p-7 rounded-3xl hover:shadow-xl transition-all duration-400 group-hover:bg-white border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                direction={index === 0 ? "left" : "right"}
              >
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 mt-3">{value.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tim <span className="text-cyan-600">Profesional</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Didukung oleh tim berpengalaman yang berkomitmen memberikan
              pelayanan terbaik.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmad Wijaya",
                role: "General Manager",
                image:
                  "https://images.pexels.com/photos/2336301/pexels-photo-2336301.jpeg",
                description:
                  "10+ tahun pengalaman di industri otomotif dan layanan pelanggan",
              },
              {
                name: "Sari Indah",
                role: "Customer Relations",
                image:
                  "https://images.pexels.com/photos/15101389/pexels-photo-15101389.jpeg",
                description:
                  "Ahli dalam memberikan pengalaman pelanggan yang hangat dan responsif",
              },
              {
                name: "Budi Santoso",
                role: "Fleet Manager",
                image:
                  "https://images.pexels.com/photos/4391221/pexels-photo-4391221.jpeg",
                description:
                  "Bertanggung jawab atas kualitas, perawatan, dan kesiapan armada",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gray-50 p-6 rounded-3xl hover:shadow-xl transition-all duration-400 group-hover:bg-white border border-gray-100 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan <span className="text-cyan-600">Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dari awal sederhana hingga menjadi layanan rental mobil yang dapat
              diandalkan.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2019",
                title: "Awal Perjalanan",
                description:
                  "Didirikan dengan tujuan memberikan layanan rental mobil berkualitas dan terpercaya.",
              },
              {
                year: "2020",
                title: "Ekspansi Armada",
                description:
                  "Menambah koleksi armada untuk memenuhi kebutuhan pelanggan dari berbagai segmen.",
              },
              {
                year: "2021",
                title: "Layanan 24/7",
                description:
                  "Meluncurkan layanan pelanggan 24/7 dan sistem booking online untuk kemudahan pelanggan.",
              },
              {
                year: "2022",
                title: "Standar Kualitas",
                description:
                  "Memperkuat proses perawatan dan kontrol kualitas armada untuk kenyamanan pelanggan.",
              },
              {
                year: "2023",
                title: "Pencapaian Milestone",
                description:
                  "Mencapai ribuan pemesanan dan memperluas jaringan layanan ke lebih banyak area.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center mb-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-6 md:text-right" : "md:pl-6"
                  } mb-4 md:mb-0`}
                >
                  <div className="bg-white p-5 rounded-2xl shadow border border-gray-100">
                    <div className="text-xl font-bold text-cyan-600 mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot only shows on md+ */}
                <div className="hidden md:flex w-12 h-12 mx-4 items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-white shadow-lg" />
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
