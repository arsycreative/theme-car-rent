"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/data/cars";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata <span className="text-gradient">Pelanggan</span> Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah
            testimoni dari mereka yang telah merasakan layanan premium kami.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 group-hover:text-blue-400 transition-colors" />

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center">
                  <div className="relative max-h-12 w-12 h-12 mr-4 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
