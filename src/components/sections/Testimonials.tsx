"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--bg-base)] py-24 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent)] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)] mb-4"
          >
            <Star className="w-4 h-4 fill-[var(--accent)]" />
            50,000+ Happy Customers
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6"
          >
            Trusted by People <span className="text-[var(--accent)]">Like You</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[var(--text-muted)]"
          >
            Real feedback from users who found their perfect internet connection through our platform.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-8 relative group hover:border-[var(--accent-border)] transition-colors duration-300"
            >
              <div className="absolute top-6 right-8 text-[var(--border-bright)] opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-10 h-10" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--accent)] text-[var(--accent)]" />
                ))}
              </div>
              
              <p className="text-white/90 leading-relaxed mb-8 italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--border)] group-hover:border-[var(--accent)] transition-colors">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{testimonial.role}</p>
                </div>
              </div>

              {/* Glassmorphism subtle overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Signals Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-12 border-t border-[var(--border)] flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-lg">
              <span className="font-bold text-white">Trustpilot</span>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-[#00b67a]" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-xl italic">Google</span>
            <div className="flex gap-1 text-[#fbbc05]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 font-bold text-white text-lg">
            <span>BBB</span>
            <span className="bg-blue-600 px-2 py-0.5 rounded text-xs">ACCREDITED BUSINESS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
