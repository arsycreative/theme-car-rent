"use client";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "../AnimatedSection";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon Langsung",
      description: "Hubungi kami untuk konsultasi dan booking",
      value: "+62 812-3456-7890",
      action: "tel:+6281234567890",
      buttonText: "Telepon Sekarang",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat langsung untuk respon cepat 24/7",
      value: "Chat via WhatsApp",
      action:
        "https://wa.me/6281234567890?text=Halo, saya ingin berkonsultasi tentang rental mobil",
      buttonText: "Chat WhatsApp",
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Kirim pertanyaan detail via email",
      value: "info@carrentalpro.id",
      action: "mailto:info@carrentalpro.id",
      buttonText: "Kirim Email",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  const operatingHours = [
    { day: "Senin - Jumat", time: "08:00 - 20:00" },
    { day: "Sabtu - Minggu", time: "09:00 - 18:00" },
    { day: "Customer Support", time: "24/7 Online" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
          >
            <Headphones className="w-4 h-4 mr-2" />
            Hubungi Kami
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Siap{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Melayani
            </span>{" "}
            Anda 24/7
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Tim customer service professional kami siap membantu kebutuhan
            rental mobil Anda. Pilih cara komunikasi yang paling nyaman untuk
            Anda.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 group-hover:border-blue-300/50 text-center relative overflow-hidden">
                {/* Background Decoration */}
                <div
                  className={`absolute -top-10 -right-10 w-24 h-24 ${method.bgColor} rounded-full opacity-30 group-hover:opacity-50 transition-opacity`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {method.description}
                </p>

                <div className="text-lg font-semibold text-blue-600 mb-6">
                  {method.value}
                </div>

                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${method.color} hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-semibold py-3 rounded-xl relative z-10`}
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
                    {method.buttonText}
                  </a>
                </Button>

                {/* Hover Effect */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${method.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Office Info & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200/50"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Lokasi Kantor
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 text-lg">
                  CarRental Pro - Jakarta Pusat
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Jl. Sudirman Kav. 45
                  <br />
                  Jakarta Pusat 10220
                  <br />
                  DKI Jakarta, Indonesia
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Jam Operasional
                </h4>
                <div className="space-y-2">
                  {operatingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-slate-50 rounded-xl"
                    >
                      <span className="text-slate-700 font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-blue-600 font-semibold">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-2xl border border-green-200/50">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900">
                    Layanan Darurat 24/7
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  Untuk keperluan mendesak di luar jam operasional, kami tetap
                  siap melayani Anda
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-4 shadow-lg border border-slate-200/50 h-full">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8317476!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1635825632974!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor CarRental Pro"
                  className="rounded-2xl"
                />

                {/* Map Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-slate-200/50">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-900">
                      CarRental Pro
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Butuh Bantuan Segera?
              </h3>

              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Tim customer service kami siap membantu Anda 24/7 untuk
                kebutuhan rental mobil mendesak
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/6281234567890?text=Halo, saya butuh bantuan segera untuk rental mobil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Sekarang
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+6281234567890"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon Langsung
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
