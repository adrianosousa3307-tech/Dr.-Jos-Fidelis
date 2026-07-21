import { motion } from 'motion/react';
import { MessageCircle, Star, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-[#121212] text-white relative overflow-hidden border-t border-[#D4AF37]/25">
      
      {/* Background Subtle Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#D4AF37]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        
        {/* Discrete Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 mb-8 shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D1A6]">
            ATENDIMENTO PARTICULAR • HORÁRIOS SOB AGENDAMENTO
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.15] max-w-3xl mb-6"
        >
          Pronto para <span className="italic font-light text-gold-gradient">transformar seu sorriso</span>?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          className="text-base sm:text-lg text-[#B0B0B0] font-normal max-w-2xl mb-10 leading-relaxed"
        >
          Agende sua avaliação e descubra como conquistar um sorriso natural, harmônico e personalizado.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
          className="w-full sm:w-auto mb-10 gpu-accelerated"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3.5 bg-[#1A1A1A] hover:bg-[#252525] active:bg-[#000000] text-white font-bold text-sm sm:text-base tracking-wide px-9 py-4.5 sm:py-5 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:scale-[1.02] active:scale-[0.98] active:duration-120 transition-all duration-300 ease-out border border-[#D4AF37]/40 cursor-pointer group will-change-transform"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366] group-hover:scale-110 transition-transform duration-300" />
            <span>Agendar Avaliação pelo WhatsApp</span>
          </a>
        </motion.div>

        {/* Credibility Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-white/10 text-xs text-[#A0A0A0] font-medium tracking-wide"
        >
          <div className="flex items-center gap-2">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0 no Google</span>
          </div>

          <span className="hidden sm:inline text-white/20">•</span>

          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>+150 avaliações verificadas</span>
          </div>

          <span className="hidden sm:inline text-white/20">•</span>

          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>+1.500 sorrisos transformados</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
