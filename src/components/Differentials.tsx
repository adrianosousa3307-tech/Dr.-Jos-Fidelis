import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../constants';
import { Sparkles, HeartHandshake, Smile, ShieldCheck, Building2, Cpu, Award } from 'lucide-react';

export default function Differentials() {
  const iconMap: Record<string, ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#B89234]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#B89234]" />,
    Smile: <Smile className="w-6 h-6 text-[#B89234]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#B89234]" />,
    Building2: <Building2 className="w-6 h-6 text-[#B89234]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#B89234]" />,
  };

  return (
    <section id="diferenciais" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E0D8] shadow-2xs mb-4"
          >
            <Award className="w-3.5 h-3.5 text-[#B89234]" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5C4D35]">
              Excelência & Padrão de Luxo
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] mb-4"
          >
            Por que escolher o <span className="italic font-light text-gold-gradient">Dr. José Fidelis</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="text-sm sm:text-base text-[#6A6A6A] leading-relaxed"
          >
            Cada detalhe do nosso atendimento e da nossa estrutura foi idealizado para proporcionar uma experiência serena, segura e inesquecível.
          </motion.p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 + idx * 0.08 }}
              className="bg-white p-8 rounded-3xl border border-[#E5E0D8] hover:border-[#D4AF37] hover:shadow-md active:scale-[0.98] active:duration-120 transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer will-change-transform gpu-accelerated"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF3E8] border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[item.iconName] || <Sparkles className="w-6 h-6 text-[#B89234]" />}
                </div>

                <h3 className="font-serif text-xl font-normal text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6A6A6A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E0D8]/60 flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#B89234] font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>Padrão Exclusivo</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
