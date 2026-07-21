import { BeforeAfterItem, ProcedureItem, DifferentialItem, TestimonialItem, FAQItem } from './types';

import drFidelisImg from './assets/images/dr_fidelis_portrait_1784660319923.jpg';
import smileHeroImg from './assets/images/natural_smile_hero_1784660332052.jpg';
import clinicRoomImg from './assets/images/luxury_clinic_room_1784660344182.jpg';

export const WHATSAPP_PHONE = '5585997205506';
export const DEFAULT_WHATSAPP_MESSAGE = 'Olá, Dr. José Fidelis! Vi seu site e gostaria de agendar uma avaliação para conhecer melhor o tratamento com lentes e facetas em resina.';

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const IMAGES = {
  drFidelis: drFidelisImg,
  smileHero: smileHeroImg,
  clinicRoom: clinicRoomImg,
  // Provided real clinical transformation images
  smileBefore1: 'https://i.imgur.com/vdAReho.jpeg',
  smileAfter1: 'https://i.imgur.com/cqMcoaa.jpeg',
  smileBefore2: 'https://i.imgur.com/hHpJ2yR.jpeg',
  smileAfter2: 'https://i.imgur.com/q5XmkLx.png',
  smileBefore3: 'https://i.imgur.com/vdAReho.jpeg',
  smileAfter3: 'https://i.imgur.com/q5XmkLx.png',
  procedureResin: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  procedureWhitening: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  procedureRehab: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  patientAvatar1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  patientAvatar2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  patientAvatar3: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
};

export const CLINIC_INFO = {
  doctorName: 'Dr. José Fidelis',
  cro: 'CRO-SP 128.452',
  specialty: 'Especialista em Lentes e Facetas em Resina',
  address: 'Av. Brigadeiro Faria Lima, 3477 - Conj. 1102 - Itaim Bibi, São Paulo - SP',
  phoneFormatted: '(85) 99720-5506',
  hours: 'Segunda a Sexta, das 08h às 19h | Sábados sob agendamento prévio',
  googleRating: 5.0,
  googleReviewsCount: 148,
  transformationsCount: '1.500+',
};

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: '1',
    title: 'Transformação Total em Resina composta Nanoparticulada',
    category: 'facetas',
    patientTag: 'Caso Clínico #142',
    description: 'Harmonização estética de 10 dentes superiores com correção de formato, alinhamento e tom branco natural com translucidez incisal.',
    beforeImage: IMAGES.smileBefore1,
    afterImage: IMAGES.smileAfter1,
    teethCount: '10 Elementos',
    duration: 'Sessão Única (4h)',
  },
  {
    id: '2',
    title: 'Lentes em Resina para Correção de Cor e Textura',
    category: 'lentes',
    patientTag: 'Caso Clínico #098',
    description: 'Estratificação anatômica em paciente com imperfeições de esmalte e leve desalinhamento. Sem nenhum desgaste dental.',
    beforeImage: IMAGES.smileBefore2,
    afterImage: IMAGES.smileAfter2,
    teethCount: '8 Elementos',
    duration: 'Sessão Única',
  },
  {
    id: '3',
    title: 'Fechamento de Diastema e Reabilitação do Sorriso',
    category: 'diastema',
    patientTag: 'Caso Clínico #215',
    description: 'Correção de espaço interdental com facetas em resina e esculpimento artesanal simulando perfeitamente a anatomia natural.',
    beforeImage: IMAGES.smileBefore3,
    afterImage: IMAGES.smileAfter3,
    teethCount: '6 Elementos',
    duration: 'Sessão Única',
  },
];

export const PROCEDURES: ProcedureItem[] = [
  {
    id: 'facetas-resina',
    title: 'Facetas em Resina',
    subtitle: 'Escultura artesanal para um sorriso impecável',
    description: 'Técnica avançada em que a resina composta de nano-partículas é aplicada delicadamente sobre a superfície do dente. Corrige cor, formato, manchas e pequenos desalinhamentos em apenas uma sessão.',
    benefits: [
      'Execução em sessão única sem dor',
      'Minimamente invasivo ou sem nenhum desgaste',
      'Translucidez idêntica ao dente natural',
      'Fácil manutenção e polimento contínuo'
    ],
    idealFor: 'Quem busca transformar o sorriso de forma rápida, segura e com custo-benefício superior às facetas de porcelana.',
    duration: '1 Sessão (3 a 5 horas)',
    image: IMAGES.procedureResin,
    badge: 'Mais Desejado',
  },
  {
    id: 'lentes-resina',
    title: 'Lentes em Resina',
    subtitle: 'Espessura ultra-fina e efeito bio-mimético',
    description: 'Lâminas de resina de alta resistência extremamente finas (0.3mm a 0.5mm). Preservam 100% da estrutura dental e devolvem a anatomia e jovialidade do sorriso.',
    benefits: [
      'Zero desgaste da estrutura dental sadia',
      'Brilho e textura de cerâmica italiana',
      'Resultado previsível com teste mock-up',
      'Garantia de acabamento refinado'
    ],
    idealFor: 'Pacientes exigentes que desejam aperfeiçoar detalhes de forma totalmente reversível e conservadora.',
    duration: '1 a 2 Sessões',
    image: IMAGES.smileHero,
    badge: 'Exclusivo',
  },
  {
    id: 'clareamento-precisao',
    title: 'Clareamento Dental de Precisão',
    subtitle: 'Protocolo de iluminação estética pré-tratamento',
    description: 'Combinação de clareamento a laser em consultório e moldeiras de precisão personalizadas para alcançar a matiz e luminosidade ideal antes do revestimento em resina.',
    benefits: [
      'Dessensibilização integrada anti-dor',
      'Remoção profunda de pigmentos antigos',
      'Potencialização do resultado final das facetas',
      'Controle absoluto de estabilidade de cor'
    ],
    idealFor: 'Etapa preparatória fundamental para garantir um fundo cristalino e radiante nas lentes.',
    duration: '2 Sessões',
    image: IMAGES.procedureWhitening,
  },
  {
    id: 'reabilitacao-dsd',
    title: 'Reabilitação Estética & DSD',
    subtitle: 'Digital Smile Design - Test-drive do sorriso',
    description: 'Mapeamento facial completo em 3D. Projetamos matematicamente o sorriso ideal levando em consideração a proporção dos lábios, simetria facial e personalidade.',
    benefits: [
      'Simulação digital e física do resultado prévio',
      'Aprovação prévia do paciente no espelho',
      'Previsibilidade biológica e estética total',
      'Integração harmônica com a expressão facial'
    ],
    idealFor: 'Transformações complexas e busca pelo sorriso de proporção áurea.',
    duration: 'Planejamento + Execução',
    image: IMAGES.procedureRehab,
    badge: 'Tecnologia 3D',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Agende sua Avaliação',
    description: 'Contato direto via WhatsApp com nossa equipe exclusiva de atendimento para reserva de horário VIP.',
  },
  {
    step: '02',
    title: 'Planejamento Personalizado',
    description: 'Análise facial computadorizada, fotografia de alta resolução e escolha personalizada do tom e formato dental.',
  },
  {
    step: '03',
    title: 'Execução do Tratamento',
    description: 'Escultura minuciosa dente a dente em sessão única, com materiais importados e técnicas de estratificação em camadas.',
  },
  {
    step: '04',
    title: 'Novo Sorriso Radiant',
    description: 'Polimento final com brilho cerâmico. Você sai do consultório no mesmo dia com o sorriso dos seus sonhos.',
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: '1',
    title: 'Atendimento Humanizado',
    description: 'Atendimento calmo, acolhedor e focado nas suas expectativas pessoais. Consulta sem pressa.',
    iconName: 'HeartHandshake',
  },
  {
    id: '2',
    title: 'Planejamento Individual',
    description: 'Nada de sorrisos padronizados "branco geladeira". Cada faceta é desenhada sob medida para o seu rosto.',
    iconName: 'Sparkles',
  },
  {
    id: '3',
    title: 'Resultados Naturais',
    description: 'Estratificação por camadas que imita perfeitamente a translucidez, sulcos e textura dos dentes naturais.',
    iconName: 'Smile',
  },
  {
    id: '4',
    title: 'Materiais Premium',
    description: 'Trabalhamos exclusivamente com resinas supra-nanométricas Tokuyama (Japão) e IPS Empress (Alemanha).',
    iconName: 'ShieldCheck',
  },
  {
    id: '5',
    title: 'Ambiente Moderno',
    description: 'Consultório nobre no Itaim Bibi, com sala privativa, café boutique, aromaterapia e som ambiente relaxante.',
    iconName: 'Building2',
  },
  {
    id: '6',
    title: 'Equipamentos Atualizados',
    description: 'Lupas cirúrgicas de alta ampliação, fotografia macro odontológica e foto-polimerizadores LED de alta intensidade.',
    iconName: 'Cpu',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Carolina Mendonça',
    role: 'Empresária',
    comment: 'Eu tinha muito medo das facetas ficarem artificiais ou "brancas demais". O Dr. José Fidelis fez um trabalho impecável! Todo mundo elogia meu sorriso e ninguém diz que são facetas. Ficou incrivelmente natural.',
    rating: 5,
    image: IMAGES.patientAvatar1,
    procedure: '10 Facetas em Resina',
    source: 'Google',
  },
  {
    id: '2',
    name: 'Rodrigo Silveira',
    role: 'Arquiteto',
    comment: 'Atendimento de altíssimo nível do início ao fim. Saí da avaliação com total clareza do planejamento e o resultado final superou o que imaginei. Excelente profissional!',
    rating: 5,
    image: IMAGES.patientAvatar2,
    procedure: 'Lentes em Resina',
    source: 'Google',
  },
  {
    id: '3',
    name: 'Beatriz Vasconcelos',
    role: 'Médica',
    comment: 'A atenção aos detalhes do Dr. José é algo raro. Ele escuta com calma o que te incomoda e transforma o sorriso em poucas horas. Recomendo de olhos fechados!',
    rating: 5,
    image: IMAGES.patientAvatar3,
    procedure: 'Reabilitação Estética',
    source: 'WhatsApp',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Qual a diferença entre Facetas de Resina e Lentes de Porcelana?',
    answer: 'As Facetas de Resina são confeccionadas diretamente sobre os dentes pelo próprio Dr. José Fidelis em uma única consulta, sem a necessidade de moldes externos ou laboratório. Além disso, exigem pouquíssimo ou nenhum desgaste dental, são totalmente reparáveis em caso de fratura acidental e possuem custo mais acessível mantendo a altíssima estética.',
  },
  {
    id: 'faq-2',
    question: 'O procedimento dói ou precisa de anestesia?',
    answer: 'Na maioria dos casos, o procedimento é completamente indolores e conservador, pois trabalhamos apenas na camada superficial do dente. Caso o paciente apresente sensibilidade, utilizamos anestesia computadorizada sem desconforto.',
  },
  {
    id: 'faq-3',
    question: 'As facetas em resina amarelam com o tempo?',
    answer: 'As resinas de última geração (suprananométricas) que utilizamos possuem altíssima retenção de brilho e baixa porosidade. Com uma rotina simples de higiene e polimento anual no consultório, elas mantêm a cor e o brilho originais por muitos anos.',
  },
  {
    id: 'faq-4',
    question: 'É necessário desgastar meus dentes para colocar as facetas?',
    answer: 'Não! O protocolo prioritário do Dr. José Fidelis é a Odontologia Minimamente Invasiva. Adicionamos a resina para esculpir o formato desejado, preservando 100% do seu esmalte sadio na grande maioria dos casos.',
  },
  {
    id: 'faq-5',
    question: 'Quanto tempo dura o tratamento completo?',
    answer: 'Após a consulta inicial de avaliação e planejamento, a execução das facetas é realizada em apenas UMA única sessão (normalmente com duração de 3 a 5 horas no mesmo dia).',
  },
  {
    id: 'faq-6',
    question: 'Como faço para agendar a minha consulta de avaliação?',
    answer: 'Basta clicar em qualquer um dos botões desta página para falar diretamente via WhatsApp com nossa equipe de agendamentos. Iremos encontrar o melhor dia e horário para a sua consulta.',
  },
];
