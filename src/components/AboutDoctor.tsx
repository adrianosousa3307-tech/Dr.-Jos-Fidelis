import { motion } from 'motion/react';
import { CLINIC_INFO, IMAGES, getWhatsAppUrl } from '../constants';
import { MessageCircle, CheckCircle2, UserCheck, Award, BadgeCheck, Sparkles } from 'lucide-react';

export default function AboutDoctor() {
  const authorityCards = [
    {
      icon: UserCheck,
      title: 'Atendimento Personalizado',
      description: 'Consulta individualizada e dedicada',
    },
    {
      icon: Award,
      title: '+1.500 Sorrisos Transformados',
      description: 'Casos estéticos de alta complexidade',
    },
    {
      icon: CheckCircle2,
      title: 'Especialista em Lentes & Facetas',
      description: 'Sessão única com resinas de alta fidelidade',
    },
    {
      icon: BadgeCheck,
      title: 'CRO Ativo (CRO-SP 128.452)',
      description: 'Registro profissional e atuação regular',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E5E0D8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo Column - Preserving exact original doctor photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
            className="lg:col-span-5 relative gpu-accelerated"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-md group">
              <img
                src={IMAGES.drFidelis}
                alt="Dr. José Fidelis - Especialista em Lentes e Facetas em Resina"
                loading="lazy"
                decoding="async"
                className="w-full h-[420px] sm:h-[460px] lg:h-[500px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out will-change-transform"
                referrerPolicy="no-referrer"
              />
              {/* Soft Gradient Overlay for High Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              {/* Refined Minimalist Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/75 backdrop-blur-md text-white border border-white/15 shadow-xl">
                <p className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  {CLINIC_INFO.doctorName}
                </p>
                <div className="flex items-center justify-between mt-1 text-xs text-white/80">
                  <span className="text-[#D4AF37] font-medium">{CLINIC_INFO.specialty}</span>
                  <span className="text-white/60 font-mono text-[11px]">{CLINIC_INFO.cro}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Authority Hierarchy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Tag / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E0D8] shadow-2xs w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B89234]" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5C4D35]">
                Autoridade & Exclusividade
              </span>
            </motion.div>

            {/* 1. Impactful Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-[1.15] tracking-tight"
            >
              Excelência e precisão na <span className="italic font-light text-gold-gradient">escultura do seu sorriso</span>.
            </motion.h2>

            {/* 2. Short Authority Sentence */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
              className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed font-normal"
            >
              Referência em Odontologia Estética no Itaim Bibi, o Dr. José Fidelis combina arte, tecnologia e resinas de alta fidelidade para criar sorrisos naturais e harmônicos em sessão única.
            </motion.p>

            {/* 3. Authority Badges Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 pb-1"
            >
              {authorityCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-white border border-[#E5E0D8] hover:border-[#D4AF37]/50 active:scale-[0.98] active:duration-120 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3 group cursor-pointer will-change-transform"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-[#B89234] flex items-center justify-center shrink-0 group-hover:bg-[#1A1A1A] group-hover:text-[#D4AF37] group-hover:border-[#1A1A1A] transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#1A1A1A] tracking-wide flex items-center gap-1">
                        <span className="text-[#D4AF37]">✓</span> {card.title}
                      </h3>
                      <p className="text-[11px] text-[#6A6A6A] mt-0.5 leading-snug">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* 4. Primary CTA - WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
              className="pt-2 gpu-accelerated"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#252525] active:bg-[#000000] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] active:duration-120 transition-all duration-300 ease-out border border-[#D4AF37]/35 cursor-pointer group will-change-transform"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366] group-hover:scale-110 transition-transform duration-300" />
                <span>Agendar Consulta com Dr. José Fidelis</span>
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
