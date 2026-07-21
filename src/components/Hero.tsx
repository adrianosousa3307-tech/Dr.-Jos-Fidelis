import { motion } from 'motion/react';
import { MessageCircle, Star, Award } from 'lucide-react';
import { IMAGES, getWhatsAppUrl } from '../constants';

interface HeroProps {
  onOpenQuiz?: () => void;
}

export default function Hero({ onOpenQuiz }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#FAF8F5] select-none">
      
      {/* Background Layer - Extremely Subtle Depth, Zero Distraction */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src={IMAGES.smileHero}
          alt="Sorriso natural e iluminado por Dr. José Fidelis"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 scale-105 gpu-accelerated"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]/80" />
      </div>

      {/* Warm Ambient Radial Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#C5A059]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Luxury Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E5E0D8]/80 shadow-2xs mb-8"
        >
          <Award className="w-3.5 h-3.5 text-[#B89234]" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5C4D35]">
            Lentes & Facetas em Resina • Itaim Bibi - SP
          </span>
        </motion.div>

        {/* 1. Headline - Refined Editorial Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#1A1A1A] tracking-tight leading-[1.1] max-w-3xl mb-6"
        >
          Transforme seu sorriso com <span className="italic font-light text-gold-gradient">naturalidade</span>.
        </motion.h1>

        {/* 2. Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#5A5A5A] font-normal max-w-2xl mb-10 leading-relaxed tracking-wide"
        >
          Especialista em <strong className="font-semibold text-[#1A1A1A]">Lentes e Facetas em Resina</strong>. Resultados harmônicos, bio-miméticos e executados em sessão única.
        </motion.p>

        {/* 3. Primary CTA - WhatsApp Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
          className="w-full sm:w-auto mb-8 gpu-accelerated"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] bg-[#1A1A1A] hover:bg-[#252525] active:bg-[#000000] text-white font-bold text-base sm:text-lg tracking-wide px-10 py-4.5 rounded-full shadow-2xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:scale-[1.02] active:scale-[0.98] active:duration-120 transition-all duration-300 ease-out flex items-center justify-center gap-3.5 border border-[#D4AF37]/40 relative overflow-hidden group cursor-pointer will-change-transform"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <MessageCircle className="w-6 h-6 text-[#25D366] fill-[#25D366] group-hover:scale-110 transition-transform duration-300" />
            <span>Agendar Avaliação pelo WhatsApp</span>
          </a>
        </motion.div>

        {/* 4. Simplified Single-Line Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[#E5E0D8]/60 text-xs text-[#4A4A4A] font-medium tracking-wide shadow-2xs"
        >
          <div className="flex items-center gap-0.5 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="font-semibold text-[#1A1A1A]">5,0 no Google</span>
          <span className="text-[#999999]">•</span>
          <span>Mais de 1.500 sorrisos transformados</span>
        </motion.div>

      </div>
    </section>
  );
}
