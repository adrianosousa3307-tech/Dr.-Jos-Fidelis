import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Transformations from './components/Transformations';
import AboutDoctor from './components/AboutDoctor';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SmileQuizModal from './components/SmileQuizModal';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#D4AF37]/20 relative">
      
      {/* Fixed Luxury Header */}
      <Header onOpenQuiz={() => setIsQuizOpen(true)} />

      <main>
        {/* 1. HERO SECTION */}
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* 2. TRANSFORMAÇÕES (Core Visual Social Proof Carousel) */}
        <Transformations />

        {/* 3. SOBRE O DOUTOR (1 Photo, Dr. José Fidelis, CRO-SP 128.452, Max 3 lines) */}
        <AboutDoctor />

        {/* 4. DEPOIMENTOS (Max 4 Real Patient Reviews) */}
        <Testimonials />

        {/* 5. CTA FINAL ("Seu novo sorriso começa hoje.") */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Smile Diagnostic Quiz Modal */}
      <SmileQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

    </div>
  );
}
