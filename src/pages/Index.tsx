import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroContent } from '@/data/home';
import { ContactDialog } from '@/components/home/ContactDialog';
import { BuilderView } from '@/components/home/BuilderView';
import { WriterView } from '@/components/home/WriterView';

const heroImages = [
  "/images/speaking.jpeg",
  "/images/award1.jpeg",
  "/images/56cb8460-4c3c-4a03-a703-d8c2cd339f18.jpeg",
  "/images/speaking3.jpeg",
  "/images/805359ea-e48d-4f65-b6cb-494e1637c741.jpeg",
];

export default function Index() {
  const [mode, setMode] = useState<'builder' | 'writer'>('builder');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hero = heroContent[mode];

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Fade */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover opacity-50"
              alt="Background"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        {/* Content */}
        <div className="container relative z-20 max-w-6xl">
          <div className="max-w-xl">
            <motion.h1
              key={mode + '-title'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 tracking-tight text-white drop-shadow-sm text-left mt-32 md:mt-48"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              key={mode + '-subtitle'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm md:text-lg text-white/90 mb-8 leading-relaxed drop-shadow-sm text-left max-w-lg"
            >
              {hero.subtitle}
            </motion.p>

            {/* Mode Toggle */}
            <div className="flex justify-center w-full">
              <div className="inline-flex rounded-full border border-white/20 p-1 mb-2 bg-black/30 backdrop-blur-sm">
                <button
                  onClick={() => setMode('builder')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${mode === 'builder' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                    }`}
                >
                  Builder
                </button>
                <button
                  onClick={() => setMode('writer')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${mode === 'writer' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                    }`}
                >
                  Writer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {mode === 'builder' ? (
          <BuilderView key="builder" />
        ) : (
          <WriterView key="writer" />
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            Whether you want to collaborate, invite me to speak, or just say hello—I'd love to hear from you.
          </p>
          <ContactDialog />
        </div>
      </section>
    </div >
  );
}
