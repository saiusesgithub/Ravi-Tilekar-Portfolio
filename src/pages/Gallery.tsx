import { useState } from 'react';
import { galleryImages, galleryCategories } from '@/data/events';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="font-serif text-4xl font-semibold mb-2">Gallery</h1>
      <p className="text-muted-foreground mb-8">Moments captured across events, workshops, and community programs.</p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {galleryCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`break-inside-avoid rounded-lg overflow-hidden bg-secondary ${
              index % 3 === 0 ? 'aspect-square' : index % 3 === 1 ? 'aspect-video' : 'aspect-[3/4]'
            } flex items-center justify-center`}
          >
            <span className="text-muted-foreground text-sm text-center p-4">{image.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
