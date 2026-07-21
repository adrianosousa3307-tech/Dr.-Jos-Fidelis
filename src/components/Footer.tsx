import { CLINIC_INFO, getWhatsAppUrl } from '../constants';
import { MessageCircle, MapPin, Phone, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-gradient-to-b from-[#0F0F0F] via-[#0D0D0D] to-[#080808] text-[#999999] pt-24 pb-14 border-t border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Subtle Gold Ambient Background Lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-[#D4AF37]/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[250px] bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Three Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#D4AF37]/15">
          
          {/* Column 1: Sobre o Dr. José Fidelis (5 Cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {CLINIC_INFO.doctorName}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
                Especialista em Lentes e Facetas em Resina
              </p>
              {/* Fine Gold Accent Line */}
              <div className="w-12 h-[1.5px] bg-[#D4AF37]/60 my-3" />
            </div>

            <p className="text-xs sm:text-[13px] text-[#8E8E8E] leading-relaxed max-w-sm font-normal">
              Atendimento odontológico estético de alta precisão e personalizado. Transformação de sorrisos em sessão única preservando a estrutura dental natural.
            </p>

            {/* CRO Seal / Certificate Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#161616]/90 backdrop-blur-sm border border-[#D4AF37]/35 text-[11px] text-[#D4AF37] font-mono tracking-wider shadow-inner">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CLINIC_INFO.cro}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navegação (3 Cols) */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navegação
            </h4>
            <ul className="space-y-1 text-xs">
              <li>
                <a
                  href="#transformacoes"
                  className="text-[#A0A0A0] hover:text-[#D4AF37] transition-all duration-300 relative min-h-[48px] flex items-center group"
                >
                  <span>Transformações</span>
                  <span className="absolute bottom-2 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-[#A0A0A0] hover:text-[#D4AF37] transition-all duration-300 relative min-h-[48px] flex items-center group"
                >
                  <span>Sobre o Doutor</span>
                  <span className="absolute bottom-2 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-[#A0A0A0] hover:text-[#D4AF37] transition-all duration-300 relative min-h-[48px] flex items-center group"
                >
                  <span>Depoimentos</span>
                  <span className="absolute bottom-2 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A0A0A0] hover:text-[#D4AF37] transition-all duration-300 relative min-h-[48px] flex items-center group"
                >
                  <span>Contato</span>
                  <span className="absolute bottom-2 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contato & Localização (4 Cols) */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Contato & Localização
            </h4>
            
            <div className="space-y-4 text-xs leading-relaxed text-[#AAAAAA]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#CCCCCC]">{CLINIC_INFO.address}</p>
                  <a
                    href="https://maps.google.com/?q=Itaim+Bibi+Sao+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#D4AF37] hover:text-[#E2D1A6] transition-colors duration-300 group mt-1.5 font-medium"
                  >
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="underline underline-offset-2">Abrir no Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>WhatsApp: <strong className="text-white font-medium">{CLINIC_INFO.phoneFormatted}</strong></span>
              </div>
            </div>

            {/* Highlighted WhatsApp Premium Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#1A1A1A] hover:bg-[#252525] active:bg-[#000000] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full border border-[#D4AF37]/40 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:scale-[1.02] active:scale-[0.98] active:duration-120 transition-all duration-300 ease-out group cursor-pointer will-change-transform"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] group-hover:scale-110 transition-transform duration-300" />
                <span>Conversar via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar Separator & Footer Links */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777] gap-4">
          <p className="tracking-wide">© 2026 {CLINIC_INFO.doctorName}. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6 text-xs text-[#777777]">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Política de Privacidade
            </a>
            <span className="text-[#333333]">•</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
