import { useState } from 'react';
import { motion } from 'motion/react';
import { FAQS, getWhatsAppUrl } from '../constants';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E0D8] shadow-2xs mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#B89234]" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5C4D35]">
              Esclarecimentos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] mb-4"
          >
            Perguntas <span className="italic font-light text-gold-gradient">Frequentes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="text-sm sm:text-base text-[#6A6A6A] leading-relaxed"
          >
            Respostas claras e transparentes para as dúvidas mais comuns dos nossos pacientes.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 + idx * 0.06 }}
                className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF3E8]/40 active:bg-[#FAF3E8]/80 active:scale-[0.99] active:duration-120 transition-all duration-200 ease-out will-change-transform"
                >
                  <span className="font-serif text-lg font-normal text-[#1A1A1A]">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF3E8] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#B89234]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm text-[#5A5A5A] leading-relaxed border-t border-[#E5E0D8]/50 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Unanswered Question CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
          className="mt-12 text-center bg-[#FAF3E8]/60 p-6 rounded-2xl border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-xs sm:text-sm text-[#5C4D35]">
            Ainda tem alguma dúvida específica sobre o seu caso?
          </span>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] hover:bg-[#252525] active:bg-[#000000] text-white text-xs uppercase tracking-wider font-bold px-5 min-h-[48px] rounded-full hover:scale-[1.02] active:scale-[0.98] active:duration-120 transition-all duration-200 ease-out flex items-center gap-2 shrink-0 will-change-transform"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Perguntar no WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
