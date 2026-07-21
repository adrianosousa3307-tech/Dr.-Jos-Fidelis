import { useState } from 'react';
import { X, Sparkles, CheckCircle, ArrowRight, MessageCircle, RefreshCw } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

interface SmileQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SmileQuizModal({ isOpen, onClose }: SmileQuizModalProps) {
  const [step, setStep] = useState<number>(1);
  const [complaint, setComplaint] = useState<string>('');
  const [previousTreatment, setPreviousTreatment] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');

  if (!isOpen) return null;

  const complaintOptions = [
    'Dentes escuros ou amarelados',
    'Espaços interdentais (Diastema)',
    'Tamanho pequeno ou desgastado',
    'Desalinhamento leve ou assimetria',
    'Desejo renovar facetas antigas'
  ];

  const previousOptions = [
    'Nunca fiz tratamento estético',
    'Já fiz clareamento dental',
    'Tenho facetas/resinas antigas',
    'Já usei aparelho ortodôntico'
  ];

  const timelineOptions = [
    'Quero realizar o quanto antes (1 a 2 semanas)',
    'Planejando para este mês',
    'Apenas pesquisando valores e opções'
  ];

  const isStepValid = () => {
    if (step === 1) return !!complaint;
    if (step === 2) return !!previousTreatment;
    if (step === 3) return !!timeline;
    return false;
  };

  const handleFinish = () => {
    const message = `Olá Dr. José Fidelis! Fiz o diagnóstico rápido no site:
• Principal incômodo: ${complaint}
• Histórico prévio: ${previousTreatment}
• Prazo desejado: ${timeline}

Gostaria de agendar minha avaliação no consultório.`;
    
    window.open(getWhatsAppUrl(message), '_blank');
    onClose();
  };

  const resetQuiz = () => {
    setStep(1);
    setComplaint('');
    setPreviousTreatment('');
    setTimeline('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-lg rounded-3xl border border-[#E5E0D8] shadow-2xl p-6 sm:p-8 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 min-w-[48px] min-h-[48px] rounded-full bg-[#E5E0D8]/50 text-[#1A1A1A] flex items-center justify-center hover:bg-[#E5E0D8] active:scale-90 active:duration-120 transition-all duration-200 cursor-pointer will-change-transform"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#B89234]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B89234]">
            Diagnóstico Express (1 min)
          </span>
        </div>

        <h3 className="font-serif text-2xl font-normal text-[#1A1A1A] mb-6">
          Análise Personalizada do Sorriso
        </h3>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                num <= step ? 'bg-[#D4AF37]' : 'bg-[#E5E0D8]'
              }`}
            />
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <label className="text-xs font-bold uppercase tracking-wider text-[#5A5A5A] block">
              1. O que mais te incomoda no seu sorriso hoje?
            </label>
            <div className="space-y-2">
              {complaintOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setComplaint(opt)}
                  className={`w-full text-left p-3.5 min-h-[48px] rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98] active:duration-120 flex items-center justify-between cursor-pointer ${
                    complaint === opt
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                      : 'bg-white text-[#3A3A3A] border-[#E5E0D8] hover:border-[#D4AF37]'
                  }`}
                >
                  <span>{opt}</span>
                  {complaint === opt && <CheckCircle className="w-4 h-4 text-[#D4AF37]" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <label className="text-xs font-bold uppercase tracking-wider text-[#5A5A5A] block">
              2. Você já realizou algum tratamento estético dental antes?
            </label>
            <div className="space-y-2">
              {previousOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setPreviousTreatment(opt)}
                  className={`w-full text-left p-3.5 min-h-[48px] rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98] active:duration-120 flex items-center justify-between cursor-pointer ${
                    previousTreatment === opt
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                      : 'bg-white text-[#3A3A3A] border-[#E5E0D8] hover:border-[#D4AF37]'
                  }`}
                >
                  <span>{opt}</span>
                  {previousTreatment === opt && <CheckCircle className="w-4 h-4 text-[#D4AF37]" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <label className="text-xs font-bold uppercase tracking-wider text-[#5A5A5A] block">
              3. Quando deseja iniciar a sua transformação?
            </label>
            <div className="space-y-2">
              {timelineOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setTimeline(opt)}
                  className={`w-full text-left p-3.5 min-h-[48px] rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98] active:duration-120 flex items-center justify-between cursor-pointer ${
                    timeline === opt
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                      : 'bg-white text-[#3A3A3A] border-[#E5E0D8] hover:border-[#D4AF37]'
                  }`}
                >
                  <span>{opt}</span>
                  {timeline === opt && <CheckCircle className="w-4 h-4 text-[#D4AF37]" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Modal Navigation Controls */}
        <div className="mt-8 pt-4 border-t border-[#E5E0D8] flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="text-xs uppercase tracking-wider text-[#6A6A6A] hover:text-[#1A1A1A] font-semibold cursor-pointer active:scale-95 transition-all duration-200 min-h-[48px] px-3 flex items-center"
            >
              Voltar
            </button>
          ) : (
            <button
              onClick={resetQuiz}
              className="text-xs text-[#8C7A5B] flex items-center gap-1 hover:text-[#1A1A1A] cursor-pointer active:scale-95 transition-all duration-200 min-h-[48px] px-3"
            >
              <RefreshCw className="w-3 h-3" />
              Reiniciar
            </button>
          )}

          {step < 3 ? (
            <button
              disabled={!isStepValid()}
              onClick={() => setStep(step + 1)}
              className={`px-6 min-h-[48px] rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer transition-all duration-200 ease-out ${
                isStepValid()
                  ? 'bg-[#1A1A1A] text-white hover:bg-[#252525] hover:scale-[1.02] active:scale-[0.98] active:duration-120'
                  : 'bg-[#E5E0D8] text-[#8C7A5B] cursor-not-allowed'
              }`}
            >
              <span>Avançar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              disabled={!isStepValid()}
              onClick={handleFinish}
              className={`px-6 min-h-[48px] rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-2 cursor-pointer transition-all duration-200 ease-out shadow-md ${
                isStepValid()
                  ? 'bg-[#1A1A1A] text-white hover:bg-[#252525] hover:scale-[1.02] active:scale-[0.98] active:duration-120 border border-[#D4AF37]/50'
                  : 'bg-[#E5E0D8] text-[#8C7A5B] cursor-not-allowed'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Enviar Respostas no WhatsApp</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
