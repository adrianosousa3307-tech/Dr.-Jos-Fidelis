import { useState, useRef, useEffect, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ChevronLeft, ChevronRight, Sparkles, X, Maximize2 } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

const TRANSFORMATION_IMAGES = [
  {
    id: '1',
    src: 'https://i.imgur.com/vdAReho.jpeg',
    alt: 'Resultado de transformação de sorriso antes e depois por Dr. José Fidelis',
  },
  {
    id: '2',
    src: 'https://i.imgur.com/cqMcoaa.jpeg',
    alt: 'Resultado de transformação de sorriso antes e depois por Dr. José Fidelis',
  },
  {
    id: '3',
    src: 'https://i.imgur.com/hHpJ2yR.jpeg',
    alt: 'Resultado de transformação de sorriso antes e depois por Dr. José Fidelis',
  },
];

export default function Transformations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const lightboxTouchStartX = useRef<number | null>(null);
  const lightboxTouchEndX = useRef<number | null>(null);

  // Preload all real transformation images to guarantee instant switching with zero flicker
  useEffect(() => {
    TRANSFORMATION_IMAGES.forEach((img) => {
      const imageLoader = new Image();
      imageLoader.src = img.src;
    });
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TRANSFORMATION_IMAGES.length - 1 ? prev + 1 : prev));
  };

  // Lightbox Handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev < TRANSFORMATION_IMAGES.length - 1 ? prev + 1 : prev));
  };

  // Keyboard navigation and body scroll lock for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        handleLightboxPrev();
      } else if (e.key === 'ArrowRight') {
        handleLightboxNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  // Touch Swipe Handlers for Mobile Lightbox
  const handleLightboxTouchStart = (e: TouchEvent) => {
    lightboxTouchStartX.current = e.touches[0].clientX;
  };

  const handleLightboxTouchMove = (e: TouchEvent) => {
    lightboxTouchEndX.current = e.touches[0].clientX;
  };

  const handleLightboxTouchEnd = () => {
    if (!lightboxTouchStartX.current || !lightboxTouchEndX.current) return;
    const distance = lightboxTouchStartX.current - lightboxTouchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleLightboxNext();
    } else if (distance < -minSwipeDistance) {
      handleLightboxPrev();
    }

    lightboxTouchStartX.current = null;
    lightboxTouchEndX.current = null;
  };

  // Touch Swipe Handlers for Mobile Carousel
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

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const whatsappMessage = "Olá Dr. José Fidelis! Gostei muito das transformações no site e gostaria de agendar uma avaliação.";

  return (
    <section id="transformacoes" className="py-20 sm:py-28 bg-[#0D0D0D] text-white relative overflow-hidden select-none">
      
      {/* Soft Ambient Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimalist Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#D4AF37]/20 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]">
              Galeria Exclusiva
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight"
          >
            Transformações Reais
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="text-xs sm:text-base text-[#A0A0A0] mt-3 font-light tracking-wide max-w-lg mx-auto leading-relaxed"
          >
            Veja alguns resultados reais de pacientes atendidos pelo Dr. José Fidelis.
          </motion.p>
        </div>

        {/* Carousel Outer Frame (Fixed Width & Aspect Ratio - Zero Layout Shift) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          
          {/* Main Display Container */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/90 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] hover:shadow-[0_30px_70px_rgba(212,175,55,0.15)] transition-shadow duration-500 ease-out"
          >
            {TRANSFORMATION_IMAGES.map((img, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={img.id}
                  onClick={() => openLightbox(index)}
                  className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out cursor-zoom-in group/card active:scale-[0.985] active:opacity-95 active:duration-100 ${
                    isActive
                      ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                      : 'opacity-0 scale-[0.98] z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover/card:scale-[1.02] transition-transform duration-700 ease-out will-change-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Discrete "ANTES" Badge - Top Left */}
                  <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 z-20 bg-black/75 backdrop-blur-md text-white/90 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest px-3 py-1 sm:py-1.5 rounded-full border border-white/15 shadow-md">
                    Antes
                  </div>

                  {/* Discrete "DEPOIS" Badge - Top Right */}
                  <div className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 z-20 bg-black/75 backdrop-blur-md text-[#D4AF37] text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest px-3 py-1 sm:py-1.5 rounded-full border border-[#D4AF37]/30 shadow-md">
                    Depois
                  </div>

                  {/* Hover Hint Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-md text-white text-[11px] font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-xl transform scale-90 group-hover/card:scale-100">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Ver em tela cheia</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile-Only Side Navigation Buttons (Centered Over Photo) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              disabled={activeIndex === 0}
              className={`flex sm:hidden absolute top-1/2 -translate-y-1/2 left-2 z-20 min-w-[48px] min-h-[48px] w-12 h-12 rounded-full bg-black/70 active:bg-black/90 backdrop-blur-md text-white border border-white/20 items-center justify-center transition-all duration-200 ease-out cursor-pointer shadow-lg will-change-transform ${
                activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 active:scale-90 active:duration-120'
              }`}
              aria-label="Foto Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              disabled={activeIndex === TRANSFORMATION_IMAGES.length - 1}
              className={`flex sm:hidden absolute top-1/2 -translate-y-1/2 right-2 z-20 min-w-[48px] min-h-[48px] w-12 h-12 rounded-full bg-black/70 active:bg-black/90 backdrop-blur-md text-white border border-white/20 items-center justify-center transition-all duration-200 ease-out cursor-pointer shadow-lg will-change-transform ${
                activeIndex === TRANSFORMATION_IMAGES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 active:scale-90 active:duration-120'
              }`}
              aria-label="Próxima Foto"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Subtle Slide Count Pill */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white/80 text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border border-white/10 pointer-events-none">
              0{activeIndex + 1} / 0{TRANSFORMATION_IMAGES.length}
            </div>
          </div>

          {/* Desktop Navigation Arrows (Positioned Outside Image Container for Zero Overlay Distraction) */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-5 md:-left-7 z-20 w-11 h-11 rounded-full bg-black/80 hover:bg-black active:scale-90 active:duration-120 backdrop-blur-md text-white border border-white/20 items-center justify-center transition-all duration-200 cursor-pointer will-change-transform ${
              activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-80 hover:scale-110 hover:border-[#D4AF37]/50'
            }`}
            aria-label="Resultado Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === TRANSFORMATION_IMAGES.length - 1}
            className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-5 md:-right-7 z-20 w-11 h-11 rounded-full bg-black/80 hover:bg-black active:scale-90 active:duration-120 backdrop-blur-md text-white border border-white/20 items-center justify-center transition-all duration-200 cursor-pointer will-change-transform ${
              activeIndex === TRANSFORMATION_IMAGES.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-80 hover:scale-110 hover:border-[#D4AF37]/50'
            }`}
            aria-label="Próximo Resultado"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </motion.div>

        {/* Minimalist Navigation Dots */}
        <div className="flex items-center justify-center gap-1 mt-6">
          {TRANSFORMATION_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="p-2.5 flex items-center justify-center cursor-pointer min-w-[48px] min-h-[48px]"
              aria-label={`Ir para resultado ${idx + 1}`}
            >
              <span
                className={`block transition-all duration-200 ease-out rounded-full ${
                  activeIndex === idx
                    ? 'w-8 h-2 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60 hover:scale-125'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Conversion CTA Button Below Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
          className="mt-12 text-center flex flex-col items-center gpu-accelerated"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ebd51] text-white font-bold text-base sm:text-lg tracking-wide px-10 py-4.5 rounded-full shadow-2xl hover:scale-[1.02] active:scale-[0.98] active:duration-120 transition-all duration-300 ease-out flex items-center justify-center gap-3 border border-white/20 group cursor-pointer will-change-transform"
          >
            <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform duration-300" />
            <span>Quero um sorriso assim</span>
          </a>

          <span className="text-[11px] text-[#777777] mt-3 tracking-wide">
            Agendamento direto e exclusivo via WhatsApp.
          </span>
        </motion.div>

      </div>

      {/* High-Resolution Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-6 gpu-accelerated"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 min-w-[48px] min-h-[48px] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 active:duration-100 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer hover:scale-105 will-change-transform"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[88vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleLightboxTouchStart}
              onTouchMove={handleLightboxTouchMove}
              onTouchEnd={handleLightboxTouchEnd}
            >
              {/* Image Wrapper with Zoom Animation */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black shadow-[0_0_60px_rgba(0,0,0,0.9)] max-h-[82vh] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0.85, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.85, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    src={TRANSFORMATION_IMAGES[lightboxIndex].src}
                    alt={TRANSFORMATION_IMAGES[lightboxIndex].alt}
                    className="max-w-[94vw] sm:max-w-[85vw] max-h-[80vh] object-contain will-change-transform"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* ANTES Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-black/80 backdrop-blur-md text-white/90 text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 sm:py-1.5 rounded-full border border-white/15 shadow-md pointer-events-none">
                  Antes
                </div>

                {/* DEPOIS Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 bg-black/80 backdrop-blur-md text-[#D4AF37] text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 sm:py-1.5 rounded-full border border-[#D4AF37]/30 shadow-md pointer-events-none">
                  Depois
                </div>

                {/* Counter Indicator */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 bg-black/70 backdrop-blur-md text-white/80 text-[10px] sm:text-[11px] font-mono tracking-widest px-3 py-1 rounded-full border border-white/10 pointer-events-none">
                  0{lightboxIndex + 1} / 0{TRANSFORMATION_IMAGES.length}
                </div>
              </div>

              {/* Navigation Arrows for Lightbox */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLightboxPrev();
                }}
                disabled={lightboxIndex === 0}
                className={`absolute left-1 sm:-left-6 z-40 min-w-[48px] min-h-[48px] w-12 h-12 rounded-full bg-black/80 hover:bg-black active:scale-90 active:duration-100 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer will-change-transform ${
                  lightboxIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-90 hover:scale-110 hover:border-[#D4AF37]/50'
                }`}
                aria-label="Imagem Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLightboxNext();
                }}
                disabled={lightboxIndex === TRANSFORMATION_IMAGES.length - 1}
                className={`absolute right-1 sm:-right-6 z-40 min-w-[48px] min-h-[48px] w-12 h-12 rounded-full bg-black/80 hover:bg-black active:scale-90 active:duration-100 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer will-change-transform ${
                  lightboxIndex === TRANSFORMATION_IMAGES.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-90 hover:scale-110 hover:border-[#D4AF37]/50'
                }`}
                aria-label="Próxima Imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

