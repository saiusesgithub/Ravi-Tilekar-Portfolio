import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Grid, List, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { writings, writingCategories, writingTags, WritingCategory, WritingTag } from '@/data/writings';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function WritingsList() {
  const { category } = useParams<{ category: string }>();
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<WritingTag[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categoryInfo = writingCategories.find(c => c.id === category);
  const isPoems = category === 'poems';

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
    <div className={cn(
      "min-h-screen py-12 transition-colors duration-500",
      isPoems ? "bg-gradient-to-b from-purple-50/50 to-background" : "bg-background"
    )}>
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-secondary mb-4">
            {isPoems ? <Sparkles className="h-6 w-6 text-purple-500" /> : <Sparkles className="h-6 w-6 text-primary" />}
          </div>
          <h1 className={cn(
            "font-serif text-4xl md:text-5xl font-bold mb-4",
            isPoems ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600" : "text-foreground"
          )}>
            {categoryInfo?.label || 'Writings'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{categoryInfo?.description}</p>
        </motion.div>

        {/* Search & View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-background/50 p-4 rounded-xl border border-border/50 backdrop-blur-sm sticky top-20 z-10 shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={`Search ${categoryInfo?.label.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-background"
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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {writingTags.map(tag => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={cn(
                "px-4 py-1.5 text-sm rounded-full border transition-all duration-300",
                selectedTags.includes(tag.id)
                  ? (isPoems ? "bg-purple-100 border-purple-200 text-purple-700" : "bg-primary text-primary-foreground border-primary")
                  : "border-border hover:border-primary/50 hover:bg-secondary"
              )}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Writings Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
          {filteredWritings.map((writing, index) => (
            <motion.div
              key={writing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/writing/${writing.id}`}>
                <Card className={cn(
                  "h-full transition-all duration-300 group overflow-hidden border",
                  isPoems
                    ? "hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-200 hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
                    : "card-hover"
                )}>
                  <CardContent className={viewMode === 'list' ? 'p-6 flex items-center gap-6' : 'p-8 flex flex-col h-full'}>
                    <div className="flex-1">
                      <div className="flex gap-2 mb-4">
                        {writing.tags.slice(0, 2).map(tag => (
                          <span key={tag} className={cn(
                            "text-xs px-2 py-1 rounded-full uppercase tracking-wider font-semibold",
                            isPoems ? "bg-purple-100 text-purple-700" : "bg-secondary text-secondary-foreground"
                          )}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={cn(
                        "font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors",
                        isPoems && "group-hover:text-purple-700"
                      )}>
                        {writing.title}
                      </h3>
                      <div className={cn(
                        "h-1 w-10 rounded-full mb-4 transition-all duration-300 group-hover:w-20",
                        isPoems ? "bg-purple-200 group-hover:bg-purple-400" : "bg-primary/20 group-hover:bg-primary"
                      )} />
                      <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                        {writing.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-dashed border-border/50 text-xs font-medium text-muted-foreground">
                        <span>{new Date(writing.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        <span>{writing.readTime} min read</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredWritings.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-muted-foreground/30" />
            <h3 className="text-xl font-medium mb-2">No writings found</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
