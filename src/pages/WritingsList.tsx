import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Grid, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { writings, writingCategories, writingTags, WritingCategory, WritingTag } from '@/data/writings';

export default function WritingsList() {
  const { category } = useParams<{ category: string }>();
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<WritingTag[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categoryInfo = writingCategories.find(c => c.id === category);

  const filteredWritings = useMemo(() => {
    return writings.filter(w => {
      if (w.category !== category) return false;
      if (search && !w.title.toLowerCase().includes(search.toLowerCase()) && !w.excerpt.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedTags.length > 0 && !selectedTags.some(tag => w.tags.includes(tag))) return false;
      return true;
    });
  }, [category, search, selectedTags]);

  const toggleTag = (tag: WritingTag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div className="container py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-semibold mb-2">{categoryInfo?.label || 'Writings'}</h1>
        <p className="text-muted-foreground mb-8">{categoryInfo?.description}</p>

        {/* Search & View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search writings..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('list')}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {writingTags.map(tag => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                selectedTags.includes(tag.id)
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Writings Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
          {filteredWritings.map(writing => (
            <Link key={writing.id} to={`/writing/${writing.id}`}>
              <Card className="card-hover h-full">
                <CardContent className={viewMode === 'list' ? 'p-4 flex items-center gap-4' : 'p-6'}>
                  <div className="flex-1">
                    <div className="flex gap-2 mb-2">
                      {writing.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-1">{writing.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{writing.excerpt}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span>{new Date(writing.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>{writing.readTime} min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredWritings.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No writings found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
