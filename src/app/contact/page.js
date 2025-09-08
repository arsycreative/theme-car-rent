"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon Langsung",
      subtitle: "Hubungi kami sekarang",
      value: "+62 812-3456-7890",
      action: "tel:+6281234567890",
      description: "Tersedia 24/7 untuk kebutuhan darurat dan konsultasi cepat",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      subtitle: "Chat langsung",
      value: "+62 812-3456-7890",
      action:
        "https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan luxury car rental Anda.",
      description:
        "Respon cepat dalam hitungan menit, kirim foto dan dokumen dengan mudah",
      color: "from-green-400 to-green-500",
    },
    {
      icon: Mail,
      title: "Email Resmi",
      subtitle: "info@luxuryrental.id",
      value: "info@luxuryrental.id",
      action: "mailto:info@luxuryrental.id",
      description: "Untuk pertanyaan detail, quotation, dan komunikasi resmi",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Kunjungi Showroom",
      subtitle: "Jakarta Pusat",
      value: "Jl. Sudirman No. 123",
      action: "#location",
      description:
        "Lihat langsung armada kami dan konsultasi dengan tim professional",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const officeInfo = [
    {
      title: "Alamat Lengkap",
      content: "Jl. Sudirman No. 123, Jakarta Pusat 10220, Indonesia",
    },
    {
      title: "Jam Operasional",
      content: "Senin - Minggu: 24 Jam\nShowroom: 08:00 - 20:00 WIB",
    },
    {
      title: "Area Layanan",
      content:
        "Jakarta, Bogor, Depok, Tangerang, Bekasi\ndan seluruh Indonesia",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Halo, saya ${formData.name}.\n\nEmail: ${formData.email}\nTelepon: ${formData.phone}\nLayanan: ${formData.service}\n\nPesan: ${formData.message}\n\nMohon informasi lebih lanjut. Terima kasih.`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Sama seperti di halaman utama */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hubungi{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Kami
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Tim professional kami siap membantu Anda 24/7. Pilih cara komunikasi
            terbaik Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Sekarang
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <a href="tel:+6281234567890">
                <Phone className="w-5 h-5 mr-2" />
                Telepon
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cara <span className="text-gradient">Menghubungi</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai pilihan komunikasi untuk memudahkan Anda terhubung dengan
              tim kami
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {method.subtitle}
                    </p>
                    <div className="text-lg font-semibold text-blue-600 mb-4">
                      {method.value}
                    </div>
                    <p className="text-sm text-gray-600 mb-6 flex-grow">
                      {method.description}
                    </p>
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${method.color} hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-semibold py-3 rounded-full`}
                    >
                      <a
                        href={method.action}
                        target={
                          method.action.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          method.action.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                      >
                        Hubungi Sekarang
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="right">
              <Card className="border-0 shadow-xl">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Kirim Pesan
                  </CardTitle>
                  <p className="text-gray-600">
                    Isi form di bawah ini dan kami akan menghubungi Anda segera
                  </p>
                </CardHeader>

                <CardContent className="p-8 pt-4">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Masukkan nama Anda"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nomor Telepon *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="08xxxxxxxxxx"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="nama@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Layanan yang Diminati
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Pilih layanan</option>
                          <option value="Sewa Harian">Sewa Harian</option>
                          <option value="Sewa Bulanan">Sewa Bulanan</option>
                          <option value="Wedding Car">Wedding Car</option>
                          <option value="Corporate Service">
                            Corporate Service
                          </option>
                          <option value="Airport Transfer">
                            Airport Transfer
                          </option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Pesan *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Ceritakan kebutuhan Anda..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pesan via WhatsApp
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Pesan Terkirim!
                      </h3>
                      <p className="text-gray-600">
                        WhatsApp akan terbuka dengan pesan Anda. Tim kami akan
                        segera merespon.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Office Information */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Informasi Kantor
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {officeInfo.map((info, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-blue-500 pl-4"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Mengapa Memilih Kami?
                    </h3>

                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { value: "24/7", label: "Customer Support" },
                        { value: "4.9★", label: "Rating Pelanggan" },
                        { value: "50+", label: "Armada Premium" },
                        { value: "500+", label: "Pelanggan Puas" },
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lokasi <span className="text-gradient">Showroom</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kunjungi showroom kami untuk melihat langsung armada premium dan
              konsultasi dengan tim ahli
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-96 lg:h-full rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8317476!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1635825632974!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Showroom Luxury Car Rental"
                />
              </div>
            </div>

            <AnimatedSection>
              <Card className="border-0 shadow-xl h-full">
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Kunjungi Showroom
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Lihat langsung koleksi mobil mewah kami dan rasakan
                      kualitas premium yang kami tawarkan.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Alamat:</p>
                        <p className="text-gray-600">
                          Jl. Sudirman No. 123
                          <br />
                          Jakarta Pusat 10220
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Jam Buka:</p>
                        <p className="text-gray-600">
                          Senin - Minggu
                          <br />
                          08:00 - 20:00 WIB
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href="https://goo.gl/maps/example"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buka di Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
