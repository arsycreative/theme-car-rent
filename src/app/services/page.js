"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Heart,
  Building,
  Clock,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      icon: Calendar,
      title: "Sewa Harian & Bulanan",
      description:
        "Fleksibilitas waktu sesuai kebutuhan Anda — dari perjalanan singkat hingga kontrak bulanan dengan opsi harga yang jelas.",
      features: [
        "Minimal sewa 4 jam",
        "Diskon untuk sewa mingguan",
        "Kontrak bulanan tersedia",
        "Pilihan pembayaran fleksibel",
      ],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Layanan Pernikahan",
      description:
        "Jadikan hari spesial lebih rapi dan nyaman dengan kendaraan yang rapi dan layanan sopir profesional.",
      features: [
        "Dekorasi mobil sesuai permintaan",
        "Koordinasi dengan wedding organizer",
        "Sopir berpengalaman",
        "Paket foto / dokumentasi opsional",
      ],
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Building,
      title: "Layanan Korporat",
      description:
        "Transportasi andal untuk kebutuhan bisnis: airport transfer, meeting, dan acara perusahaan dengan standar layanan profesional.",
      features: [
        "Airport transfer",
        "Transport untuk meeting",
        "Transport acara perusahaan",
        "Executive package",
      ],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Trip Keluarga & Group",
      description:
        "Solusi transportasi nyaman untuk rombongan — pilihan kendaraan sesuai kapasitas dan rute perjalanan Anda.",
      features: [
        "Multi-car booking",
        "Diskon grup",
        "Paket tur opsional",
        "Itinerary kustom",
      ],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      color: "from-green-500 to-green-600",
    },
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "Layanan 24/7",
      description:
        "Tim customer service siap membantu kapan saja, termasuk tanggap darurat dan layanan breakdown.",
    },
    {
      icon: Shield,
      title: "Asuransi Lengkap",
      description:
        "Setiap kendaraan dilengkapi asuransi dan perawatan berkala untuk perlindungan dan kenyamanan Anda.",
    },
    {
      icon: Star,
      title: "Sopir Profesional",
      description:
        "Sopir berlisensi dengan pengalaman rute lokal, menjaga keselamatan dan kenyamanan selama perjalanan.",
    },
    {
      icon: CheckCircle,
      title: "Jaminan Kualitas",
      description:
        "Kendaraan diperiksa rutin dan disiapkan dalam kondisi prima sebelum setiap pemakaian.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic Package",
      duration: "4-8 Jam",
      price: "Mulai 800rb",
      features: [
        "Mobil + Sopir + BBM",
        "Area Jakarta & sekitar",
        "Maksimal 100km",
        "Customer support",
        "Asuransi dasar",
      ],
      popular: false,
    },
    {
      name: "Premium Package",
      duration: "12 Jam",
      price: "Mulai 1.2jt",
      features: [
        "Kendaraan premium + Sopir",
        "Area Jabodetabek",
        "Maksimal 200km",
        "Prioritas support",
        "Asuransi komprehensif",
        "Air mineral complimentary",
      ],
      popular: true,
    },
    {
      name: "Executive Package",
      duration: "24 Jam",
      price: "Mulai 2jt",
      features: [
        "Kendaraan berkualitas + Sopir profesional",
        "Area luas / lintas kota",
        "Mileage fleksibel",
        "VIP support",
        "Asuransi penuh",
        "Pickup/drop bandara",
        "Layanan concierge",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with decorative background */}
      <section className="relative h-[60vh] overflow-hidden flex items-center">
        {/* decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />

          {/* animated grid */}
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

          {/* floating blobs */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-16 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl"
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

          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/30 to-slate-900/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Layanan{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Kami
              </span>
            </h1>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-8">
              Dari kebutuhan pribadi hingga korporat — kami menyediakan solusi
              transportasi yang andal, nyaman, dan mudah diakses. Booking cepat,
              armada terawat, dan layanan sopir profesional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-cyan-600">Utama</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pilihan layanan yang dirancang untuk memenuhi berbagai kebutuhan
              perjalanan Anda.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] py-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <div
                      className={`absolute top-4 left-4 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-semibold py-3 rounded-full`}
                    >
                      <a
                        href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan ${encodeURIComponent(
                          service.title
                        )}. Tolong info lebih lanjut.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Konsultasi Sekarang
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-cyan-600">Tambahan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dukungan ekstra untuk memastikan pengalaman rental yang mulus.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-cyan-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paket <span className="text-cyan-600">Harga</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative ${plan.popular ? "scale-105" : ""}`}
              >
                <div
                  className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl ${
                    plan.popular
                      ? "ring-2 ring-cyan-500"
                      : "border border-gray-100"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Paling Populer
                      </div>
                    </div>
                  )}

                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 mb-6">{plan.duration}</p>

                    <div className="mb-8">
                      <span className="text-4xl font-bold text-cyan-600">
                        {plan.price}
                      </span>
                      <span className="text-gray-500"> /paket</span>
                    </div>

                    <div className="space-y-4 mb-8 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`w-full font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                          : "border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <a
                        href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan paket ${encodeURIComponent(
                          plan.name
                        )}. Mohon info harga dan ketersediaan.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pilih Paket Ini
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Butuh paket khusus atau memiliki kebutuhan spesifik?
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://wa.me/6281234567890?text=Halo, saya butuh paket custom sesuai kebutuhan saya. Bisa konsultasi?"
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi Custom Package
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara <span className="text-cyan-600">Pemesanan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proses sederhana dan cepat untuk mendapatkan kendaraan yang Anda
              butuhkan.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Konsultasi & Pemilihan",
                description:
                  "Hubungi tim kami via WhatsApp atau telepon untuk konsultasi kebutuhan dan pemilihan kendaraan yang paling sesuai.",
              },
              {
                step: "02",
                title: "Konfirmasi & Booking",
                description:
                  "Konfirmasi detail pemesanan, jadwal, dan lokasi pickup. Tim kami akan mengatur semua kebutuhan logistik Anda.",
              },
              {
                step: "03",
                title: "Pembayaran & Dokumen",
                description:
                  "Proses pembayaran fleksibel dan persiapan dokumen untuk keamanan dan kenyamanan bersama.",
              },
              {
                step: "04",
                title: "Pickup & Nikmati Perjalanan",
                description:
                  "Kendaraan siap di lokasi sesuai jadwal. Nikmati perjalanan Anda dengan tenang dan nyaman.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  } mb-4 md:mb-0`}
                >
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl md:text-6xl font-bold text-cyan-600 mb-3 md:mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot only for md+ */}
                <div className="hidden md:flex w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10 items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu Anda menemukan solusi transportasi yang
              paling sesuai. Konsultasi mudah dan bebas komitmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://wa.me/6281234567890?text=Halo, saya tertarik konsultasi layanan transportasi. Bisa bantu?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mulai Konsultasi
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <a href="/cars">Lihat Armada</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
