"use client";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Tentang Kami", href: "/about" },
      { name: "Armada", href: "/cars" },
      { name: "Layanan", href: "/services" },
      { name: "Kontak", href: "/contact" },
    ],
    services: [
      { name: "Sewa Harian", href: "/services" },
      { name: "Sewa Bulanan", href: "/services" },
      { name: "Mobil Pernikahan", href: "/services" },
      { name: "Layanan Korporat", href: "/services" },
    ],
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "cs@luxuryrental.id",
      href: "mailto:cs@luxuryrental.id",
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jl. Sudirman No. 123, Jakarta Pusat",
      href: "#",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "24/7 Layanan Siap Sedia",
      href: "#",
    },
  ];

  const socialMedia = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Luxury Rental</h3>
                <p className="text-sm text-gray-400">Premium Car Service</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Kami menyediakan layanan sewa mobil premium dengan armada pilihan,
              sopir profesional, dan pelayanan eksklusif untuk mendukung setiap
              perjalanan Anda—baik untuk bisnis, acara spesial, maupun kebutuhan
              harian.
            </p>

            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Kontak</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mt-1 group-hover:bg-blue-600 transition-colors duration-200">
                    <contact.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {contact.label}
                    </p>
                    {contact.href !== "#" ? (
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Luxury Car Rental. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
