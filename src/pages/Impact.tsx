import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Rocket, Users, Heart } from 'lucide-react';
import { impactCategories, impactStats, impactImages } from '@/data/impact';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, Rocket, Users, Heart,
};

export default function Impact() {
  const [activeCategory, setActiveCategory] = useState('education');

  const activeInfo = impactCategories.find(c => c.id === activeCategory);

  return (
    <div className="container py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl font-semibold mb-2">Social Impact</h1>
        <p className="text-muted-foreground mb-12">Creating lasting change through IEC and community initiatives.</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {impactStats.slice(0, 6).map(stat => (
            <Card key={stat.label}>
              <CardContent className="p-6 text-center">
                <div className="font-serif text-3xl font-semibold text-primary">{stat.value}</div>
                <div className="font-medium text-sm">{stat.label}</div>
                {stat.description && (
                  <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-semibold mb-6">Impact Areas</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {impactCategories.map(category => {
              const Icon = iconMap[category.icon];
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 rounded-lg border text-left transition-all ${activeCategory === category.id
                      ? 'border-primary bg-primary/5'
                      : 'hover:border-primary/50'
                    }`}
                >
                  <Icon className={`h-6 w-6 mb-2 ${activeCategory === category.id ? 'text-primary' : 'text-muted-foreground'}`} />
                  <div className="font-semibold text-sm">{category.title}</div>
                </button>
              );
            })}
          </div>

          {activeInfo && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{activeInfo.title}</h3>
                <p className="text-muted-foreground mb-4">{activeInfo.description}</p>
                <h4 className="font-semibold mb-2">Key Initiatives</h4>
                <ul className="space-y-2">
                  {activeInfo.initiatives.map((initiative, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">•</span>
                      {initiative}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Gallery Preview */}
        <section>
          <h2 className="font-serif text-2xl font-semibold mb-6">Moments of Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactImages.slice(0, 8).map(image => (
              <div key={image.id} className="aspect-square relative overflow-hidden rounded-lg group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center">
                  <span className="text-white text-xs font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
