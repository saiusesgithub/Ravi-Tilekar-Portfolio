import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import { awards } from '@/data/events';

export default function Awards() {
  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="font-serif text-4xl font-semibold mb-2">Awards & Recognition</h1>
      <p className="text-muted-foreground mb-12">Humbled by the recognition received for our collective work.</p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {awards.map(award => (
          <Card key={award.id} className="card-hover">
            <CardContent className="p-6 flex gap-4">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">{award.year}</span>
                <h3 className="font-serif text-lg font-semibold">{award.title}</h3>
                <p className="text-sm text-primary mb-2">{award.organization}</p>
                {award.description && (
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
