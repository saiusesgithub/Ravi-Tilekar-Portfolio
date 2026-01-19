import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Quote } from 'lucide-react';
import { books } from '@/data/books';

export default function Books() {
  return (
    <div className="container py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-semibold mb-2">Books</h1>
        <p className="text-muted-foreground mb-12">Words bound together, stories that transform.</p>

        <div className="space-y-16">
          {books.map((book, index) => (
            <div key={book.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
              {/* Book Cover Placeholder */}
              <div className="md:w-1/3">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border">
                  <BookOpen className="h-16 w-16 text-primary/40" />
                </div>
              </div>

              {/* Book Details */}
              <div className="md:w-2/3">
                <span className="text-sm text-muted-foreground">{book.publishedYear}</span>
                <h2 className="font-serif text-3xl font-semibold mt-1 mb-2">{book.title}</h2>
                {book.subtitle && (
                  <p className="text-lg text-muted-foreground mb-4">{book.subtitle}</p>
                )}
                <p className="text-muted-foreground mb-6">{book.description}</p>

                <h4 className="font-semibold mb-3">Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {book.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Button>Buy / Enquire</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <section className="mt-20 pt-12 border-t">
          <h2 className="font-serif text-2xl font-semibold mb-8 text-center">What Readers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {books.flatMap(book => book.testimonials).map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="italic mb-4">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    {testimonial.role && (
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
