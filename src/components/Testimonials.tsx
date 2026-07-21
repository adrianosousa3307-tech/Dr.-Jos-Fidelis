import { useState, useRef, useEffect, TouchEvent } from 'react';
import { motion } from 'motion/react';
import { Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { getWhatsAppUrl, IMAGES } from '../constants';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Carolina Mendonça',
    role: 'Empresária',
    city: 'São Paulo • SP',
    comment: 'Eu tinha muito receio das facetas ficarem artificiais ou brancas demais. O Dr. José Fidelis fez um trabalho impecável e delicado! Todo mundo elogia meu sorriso e **ninguém percebe que são facetas**. Ficou **extremamente natural**.',
    rating: 5,
    image: IMAGES.patientAvatar1,
    procedure: '10 Facetas em Resina',
  },
  {
    id: '2',
    name: 'Rodrigo Silveira',
    role: 'Arquiteto',
    city: 'Itaim Bibi • SP',
    comment: 'Atendimento de altíssimo nível do início ao fim. Saí da avaliação com total clareza do planejamento e o resultado em sessão única **superou todas as expectativas**. Recomendo fortemente!',
    rating: 5,
    image: IMAGES.patientAvatar2,
    procedure: 'Lentes em Resina',
  },
  {
    id: '3',
    name: 'Dra. Beatriz Vasconcelos',
    role: 'Médica Dermatologista',
    city: 'Moema • SP',
    comment: 'A atenção aos detalhes do Dr. José é algo admirável. Ele escuta com paciência o que te incomoda no espelho e **o resultado ficou extremamente natural**, mantendo total harmonia com o meu rosto.',
    rating: 5,
    image: IMAGES.patientAvatar3,
    procedure: 'Reabilitação Estética',
  },
  {
    id: '4',
    name: 'Mariana Duarte',
    role: 'Advogada',
    city: 'Jardins • SP',
    comment: 'Fiquei impressionada em sair do consultório no **mesmo dia com o sorriso pronto** e lindo, sem dor e sem nenhum desgaste nos meus dentes naturais. Profissional fantástico!',
    rating: 5,
    image: IMAGES.patientAvatar1,
    procedure: '8 Lentes de Resina Nanoparticulada',
  },
  {
    id: '5',
    name: 'Gabriel Fonseca',
    role: 'Empresário',
    city: 'Vila Nova Conceição • SP',
    comment: 'Atendimento exclusivo e minucioso do Dr. José Fidelis. O acabamento das lentes em resina é perfeito, a textura imita o dente natural em cada detalhe. **Excelente experiência!**',
    rating: 5,
    image: IMAGES.patientAvatar2,
    procedure: 'Lentes de Resina em Sessão Única',
  },
  {
    id: '6',
    name: 'Patrícia Alencar',
    role: 'Designer de Interiores',
    city: 'Pinheiros • SP',
    comment: 'Sempre tive vergonha de sorrir em fotos. O Dr. José me devolveu a vontade de sorrir abertamente. **Renovou minha autoestima totalmente** com um trabalho artístico e seguro.',
    rating: 5,
    image: IMAGES.patientAvatar3,
    procedure: 'Transformação de Sorriso em Resina',
  },
];

// Helper to render bold markdown syntax (**phrase**) as <strong> tags
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-[#1A1A1A]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible count tracking
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  // Adjust current index if it exceeds max index after window resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance && currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else if (distance < -minSwipeDistance && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E5E0D8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E0D8] shadow-2xs mb-4"
          >
            <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5C4D35]">
              Prova Social
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight tracking-tight"
          >
            A Confiança de Quem Escolheu o <span className="italic font-light text-gold-gradient">Dr. José Fidelis</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="text-sm sm:text-base text-[#5A5A5A] mt-4 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Mais de 1.500 sorrisos transformados e pacientes que recomendam uma experiência baseada em naturalidade, excelência e atendimento personalizado.
          </motion.p>

          {/* Credibility Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
            className="inline-flex items-center justify-center gap-2.5 sm:gap-3.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-[#E5E0D8] shadow-2xs mt-6 text-xs text-[#1A1A1A] font-medium tracking-wide"
          >
            <div className="flex items-center gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-bold text-[#1A1A1A]">5.0 no Google</span>
            <span className="text-[#C5A059]">•</span>
            <span className="text-[#5A5A5A]">+150 avaliações verificadas</span>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
          className="relative overflow-hidden py-4 -mx-3 px-3"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform gpu-accelerated"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                style={{ width: `${100 / visibleCount}%` }}
                className="px-3 shrink-0 flex flex-col"
              >
                {/* Testimonial Card */}
                <div className="h-full bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E0D8] shadow-2xs hover:shadow-xl hover:-translate-y-2 hover:border-[#D4AF37]/40 transition-all duration-300 ease-out flex flex-col justify-between group">
                  
                  <div>
                    {/* Top Bar: Stars + Discrete Google Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                        ))}
                      </div>

                      {/* Discrete Google Verification Tag */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E5E0D8] text-[11px] font-medium text-[#5A5A5A]">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                        <span>Avaliação verificada</span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base text-[#3A3A3A] font-normal leading-relaxed mb-6">
                      "{renderFormattedText(item.comment)}"
                    </p>
                  </div>

                  {/* Patient Info Footer */}
                  <div className="flex items-center gap-3.5 pt-5 border-t border-[#F0ECE6] mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/30 shadow-2xs shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <h4 className="font-serif text-base font-bold text-[#1A1A1A] leading-tight truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#6A6A6A] mt-0.5 font-medium truncate">
                        {item.role} • <span className="text-[#8C7A5B]">{item.city}</span>
                      </p>
                      <p className="text-[11px] text-[#B89234] font-semibold mt-0.5 truncate">
                        {item.procedure}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carousel Navigation Arrows & Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className={`min-w-[48px] min-h-[48px] w-12 h-12 rounded-full border border-[#E5E0D8] bg-white text-[#1A1A1A] flex items-center justify-center shadow-2xs transition-all duration-200 cursor-pointer will-change-transform ${
              currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:scale-105 active:scale-90 active:duration-120'
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination dots */}
          <div className="flex items-center gap-1">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="p-2.5 flex items-center justify-center cursor-pointer min-w-[44px] min-h-[44px]"
                aria-label={`Ir para depoimento ${idx + 1}`}
              >
                <span
                  className={`h-2 rounded-full transition-all duration-200 ease-out ${
                    currentIndex === idx ? 'w-6 bg-[#B89234]' : 'w-2 bg-[#E5E0D8] hover:bg-[#C5A059] hover:scale-125'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))}
            disabled={currentIndex === maxIndex}
            className={`min-w-[48px] min-h-[48px] w-12 h-12 rounded-full border border-[#E5E0D8] bg-white text-[#1A1A1A] flex items-center justify-center shadow-2xs transition-all duration-200 cursor-pointer will-change-transform ${
              currentIndex === maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:scale-105 active:scale-90 active:duration-120'
            }`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.5 }}
          className="mt-12 text-center gpu-accelerated"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#252525] active:bg-[#000000] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] active:duration-120 transition-all duration-300 ease-out border border-[#D4AF37]/35 cursor-pointer group will-change-transform"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366] group-hover:scale-110 transition-transform duration-300" />
            <span>Agendar Minha Avaliação</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
