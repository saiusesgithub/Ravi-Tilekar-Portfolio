import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Briefcase,
  Heart,
  Feather,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { heroContent, highlightCards } from "@/data/home";
import { writings } from "@/data/writings";
import { journeyMilestones } from "@/data/journey";
import { HeroImage } from "@/components/OptimizedImage";
import { setMetadata, pageMetadata } from "@/utils/metadata";
import {
  injectSchema,
  clearSchemas,
  generatePersonSchema,
  generateFAQSchema,
  aeoFAQs,
} from "@/utils/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Briefcase,
  Heart,
  Feather,
};

const heroImages = [
  "/images/speaking.jpeg",
  "/images/award1.jpeg",
  "/images/56cb8460-4c3c-4a03-a703-d8c2cd339f18.jpeg",
  "/images/speaking3.jpeg",
  "/images/805359ea-e48d-4f65-b6cb-494e1637c741.jpeg",
  "/images/award2.jpeg",
];

export default function Index() {
  const [mode, setMode] = useState<"builder" | "writer">("builder");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hero = heroContent[mode];
  const featuredWritings = writings.filter((w) => w.featured).slice(0, 6);

  useEffect(() => {
    // SEO & AEO metadata/schema
    setMetadata(pageMetadata.home);
    clearSchemas();
    injectSchema(generatePersonSchema());
    injectSchema(generateFAQSchema(aeoFAQs));

    // Preload images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleHighlights = highlightCards.filter(
    (card) => card.mode === "both" || card.mode === mode,
  );

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
        {/* Background Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <HeroImage
              src={heroImages[currentImageIndex]}
              alt="Hero background"
              className="w-full h-full"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="container relative z-20 max-w-6xl">
          <div className="max-w-xl">
            {/* Mode Toggle */}
            <div className="inline-flex rounded-full border border-white/20 p-1 mb-8 bg-black/30 backdrop-blur-sm">
              <button
                onClick={() => setMode("builder")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === "builder"
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Builder
              </button>
              <button
                onClick={() => setMode("writer")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === "writer"
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Writer
              </button>
            </div>

            <motion.h1
              key={mode + "-title"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 tracking-tight text-white drop-shadow-sm text-left"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              key={mode + "-subtitle"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed drop-shadow-sm text-left"
            >
              {hero.subtitle}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-base bg-white text-black hover:bg-white/90 border-transparent h-12 px-8"
              >
                <Link to="/writings/poems">Explore Writings</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base border-white text-white hover:bg-white/10 hover:text-white h-12 px-8 bg-transparent"
              >
                <Link to="/speaker">Invite for Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6">
            {visibleHighlights.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <Card
                  key={card.id}
                  className="card-hover border-transparent shadow-sm bg-card/50 backdrop-blur-sm w-full sm:w-[calc(50%-1.5rem)] md:w-64"
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <div className="font-serif text-3xl font-semibold mb-1">
                      {card.value}
                    </div>
                    <div className="text-sm font-medium">{card.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {card.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Writings */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-3xl font-semibold">
              Featured Writings
            </h2>
            <Link
              to="/writings/poems"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWritings.map((writing) => (
              <Card key={writing.id} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                    {writing.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    {writing.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {writing.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="capitalize">{writing.category}</span>
                    <span>{writing.readTime} min read</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Snapshot */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-3xl font-semibold">
              Journey Snapshot
            </h2>
            <Link
              to="/journey"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Full journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-6">
            {journeyMilestones.slice(0, 4).map((milestone, index) => (
              <div key={milestone.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {index < 3 && <div className="w-px h-full bg-border" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-serif text-lg font-semibold">
                    {milestone.organization}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.role} • {milestone.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8">
            Whether you want to collaborate, invite me to speak, or just say
            hello—I'd love to hear from you.
          </p>
          <Button asChild size="lg">
            <Link to="/speaker">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
