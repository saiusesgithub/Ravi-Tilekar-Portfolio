import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    }
  },
};

export default function Index() {
  const [mode, setMode] = useState<'builder' | 'writer'>('builder');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  const hero = heroContent[mode];
  const headlineWords = hero.headline.split(" ");

  // Handle route-based mode switching
  useEffect(() => {
    if (location.pathname === '/writing') {
      setMode('writer');
    } else {
      setMode('builder'); // Default to builder for home
    }
  }, [location.pathname]);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Zoom & Fate */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img
                src={heroImages[currentImageIndex]}
                alt="Hero Background"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/90 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        </div>

        {/* Content */}
        <div className="container relative z-20 max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl mt-32 md:mt-0">
            <motion.div
              key={mode} // Re-animate on mode switch
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-6 inline-block">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-widest text-primary border border-white/20 uppercase">
                  {mode === 'builder' ? 'Entrepreneur & Mentor' : 'Poet & Storyteller'}
                </span>
              </motion.div>

              {/* Headline Staggered */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-white drop-shadow-lg text-left">
                {headlineWords.map((word, i) => (
                  <motion.span key={i} variants={itemVariants} className="inline-block mr-2 md:mr-4 origin-bottom">
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-xl text-white/80 leading-relaxed drop-shadow-md text-left max-w-2xl mb-10 font-light"
              >
                {hero.subtitle}
              </motion.p>
            </motion.div>

            {/* Mode Toggle with premium look */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-start w-full"
            >
              <div className="relative inline-flex rounded-full bg-black/40 backdrop-blur-md border border-white/10 p-1.5 shadow-2xl">
                {/* Sliding Background */}
                <motion.div
                  className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-md z-0"
                  initial={false}
                  animate={{
                    left: mode === 'builder' ? '6px' : '50%',
                    width: 'calc(50% - 9px)',
                    x: mode === 'writer' ? '3px' : '0px'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                <button
                  onClick={() => setMode('builder')}
                  className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${mode === 'builder' ? 'text-black' : 'text-white/70 hover:text-white'}`}
                >
                  Builder
                </button>
                <button
                  onClick={() => setMode('writer')}
                  className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${mode === 'writer' ? 'text-black' : 'text-white/70 hover:text-white'}`}
                >
                  Writer
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </motion.div>
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30 -z-10" />
        <div className="container max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Let's Create Something Meaningful</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Whether you want to build a startup, invite me to speak, or collaborate on a creative project—I'm ready to listen.
            </p>
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <ContactDialog />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div >
  );
}
