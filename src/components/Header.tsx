import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../constants';

interface HeaderProps {
  onOpenQuiz?: () => void;
}

export default function Header({ onOpenQuiz }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Transformações', href: '#transformacoes' },
    { name: 'Sobre o Doutor', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out gpu-accelerated ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl py-3 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border-b border-[#E5E0D8]/40'
          : 'bg-[#FAF8F5]/60 backdrop-blur-md py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* Doctor Name & Subtitle Branding */}
          <a href="#" className="flex flex-col justify-center group active:scale-[0.98] transition-transform duration-200">
            <span className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A] tracking-wide leading-none group-hover:text-[#8C7A5B] transition-colors">
              {CLINIC_INFO.doctorName}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#8C7A5B] font-medium mt-1 leading-none">
              Lentes & Facetas em Resina
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.16em] text-[#4A4A4A] hover:text-[#1A1A1A] font-medium transition-all duration-200 active:scale-[0.98] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button - Single Premium WhatsApp CTA */}
          <div className="hidden sm:flex items-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] hover:bg-[#252525] text-white text-[11px] uppercase tracking-widest font-semibold px-5 min-h-[48px] rounded-full shadow-2xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] active:duration-120 transition-all duration-300 ease-out flex items-center gap-2 group border border-[#D4AF37]/35 cursor-pointer will-change-transform"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366] group-hover:scale-110 transition-transform duration-300" />
              <span>Agendar Avaliação</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-[#1A1A1A] hover:bg-[#E5E0D8]/40 active:bg-[#E5E0D8]/60 active:scale-[0.95] active:duration-120 rounded-lg transition-all duration-200 cursor-pointer will-change-transform"
            aria-label="Alternar Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-[#E5E0D8]/50 p-6 shadow-xl gpu-accelerated"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest text-[#1A1A1A] font-semibold min-h-[48px] flex items-center border-b border-[#E5E0D8]/30 active:scale-[0.98] active:text-[#D4AF37] active:duration-120 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#1A1A1A] active:bg-[#252525] text-white min-h-[48px] mt-3 rounded-full text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2.5 shadow-md active:scale-[0.98] active:duration-120 transition-all duration-300 border border-[#D4AF37]/35 will-change-transform"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Agendar Avaliação via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
