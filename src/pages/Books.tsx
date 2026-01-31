import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Quote, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { books, Book } from '@/data/books';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';

function BookReader({ book, onClose }: { book: Book; onClose: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);

  // Simulated pages
  const pages = [
    { type: 'cover', content: book.title, subtitle: book.subtitle },
    { type: 'dedication', content: "To all the dreamers who dare to defy the odds." },
    { type: 'text', title: 'Chapter 1', content: "The journey began not with a step, but with a thought. A thought that refused to be silenced..." },
    { type: 'text', title: 'Chapter 2', content: "Failure is often painted as the villain, but in the story of success, it is the most honest teacher..." },
    { type: 'end', content: "End of Preview" },
  ];

  const nextPage = () => setCurrentPage(p => Math.min(p + 1, pages.length - 1));
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 0));

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-4xl mx-auto py-8">
      {/* Book Spine / Frame */}
      <div className="relative aspect-[3/2] w-full max-h-[600px] bg-[#fdfbf7] shadow-2xl rounded-lg border border-[#e3dcd2] flex overflow-hidden">

        {/* Left Page (Previous Page or Blank if Cover) */}
        <div className="flex-1 border-r border-[#e3dcd2] p-8 md:p-12 flex flex-col items-center justify-center relative bg-[#faf8f1]">
          {currentPage > 0 && (
            <div className="text-center animate-fade-in">
              {pages[currentPage - 1].type === 'cover' ? (
                <div className="flex flex-col items-center justify-center h-full opacity-10 grayscale">
                  <BookOpen className="h-16 w-16 mb-4" />
                  <h2 className="font-serif font-bold text-xl">{pages[currentPage - 1].content}</h2>
                </div>
              ) : (
                <div className="prose prose-serif prose-sm md:prose-base">
                  {pages[currentPage - 1].title && <h3 className="font-bold uppercase tracking-widest mb-6 opacity-60 text-xs">{pages[currentPage - 1].title}</h3>}
                  <p>{pages[currentPage - 1].content}</p>
                </div>
              )}
              <span className="absolute bottom-6 left-8 text-xs text-muted-foreground">{currentPage}</span>
            </div>
          )}
          {/* Page Curl Effect */}
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
        </div>

        {/* Right Page (Current Page) */}
        <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center relative bg-[#fffdf5]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center w-full h-full flex flex-col items-center justify-center"
            >
              {pages[currentPage].type === 'cover' ? (
                <div className="border-4 border-double border-primary/20 p-8 rounded-sm">
                  <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-primary">{pages[currentPage].content}</h1>
                  {pages[currentPage].subtitle && <p className="text-lg italic text-muted-foreground">{pages[currentPage].subtitle}</p>}
                  <div className="mt-8 text-sm uppercase tracking-widest opacity-50">Ravi Tilekar</div>
                </div>
              ) : (
                <div className="prose prose-serif prose-sm md:prose-base text-left w-full">
                  {pages[currentPage].title && <h2 className="font-serif text-2xl font-bold mb-8 text-center">{pages[currentPage].title}</h2>}
                  <p className="leading-relaxed">{pages[currentPage].content}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <span className="absolute bottom-6 right-8 text-xs text-muted-foreground">{currentPage + 1}</span>
        </div>

        {/* Controls */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/5 hover:bg-black/10 disabled:opacity-0 transition-all text-foreground"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/5 hover:bg-black/10 disabled:opacity-0 transition-all text-foreground"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 flex gap-4">
        <Button variant="outline" onClick={onClose} className="rounded-full">Close Reader</Button>
        <Button className="rounded-full">Buy This Book</Button>
      </div>
    </div>
  );
}

export default function Books() {
  const [readingBook, setReadingBook] = useState<Book | null>(null);

  return (
    <div className="container py-12 animate-fade-in min-h-screen bg-[#f8f9fa]">

      {readingBook ? (
        <BookReader book={readingBook} onClose={() => setReadingBook(null)} />
      ) : (
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Library</h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              A collection of published works, exploring the depths of entrepreneurship, emotion, and life's nuances.
            </p>
          </div>

          <div className="grid gap-16">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Book Cover 3D Effect */}
                <div className="lg:w-1/3 perspective-1000 group cursor-pointer" onClick={() => setReadingBook(book)}>
                  <div className="relative aspect-[3/4] w-64 md:w-80 rounded-r-lg shadow-2xl bg-white border-l-4 border-l-gray-300 transition-transform duration-500 transform group-hover:rotate-y-[-15deg] group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-2 border-primary/10 m-2 border-dashed">
                      <BookOpen className="h-16 w-16 text-primary mb-6 opacity-80" />
                      <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">{book.title}</h3>
                      {book.subtitle && <p className="text-sm text-muted-foreground italic">{book.subtitle}</p>}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to Read
                    </div>
                  </div>
                  <div className="absolute -bottom-4 z-[-1] w-full h-4 bg-black/20 blur-xl rounded-full transform scale-x-75 group-hover:scale-x-90 transition-transform" />
                </div>

                {/* Book Details */}
                <div className="lg:w-2/3 space-y-6 text-center lg:text-left">
                  <div>
                    <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">{book.publishedYear}</span>
                    <h2 className="font-serif text-4xl font-bold mt-4 mb-2">{book.title}</h2>
                    {book.subtitle && (
                      <p className="text-xl text-muted-foreground">{book.subtitle}</p>
                    )}
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">{book.description}</p>

                  <div className="bg-white p-6 rounded-xl border shadow-sm">
                    <h4 className="font-semibold mb-3 flex items-center justify-center lg:justify-start gap-2">
                      <Sparkles className="h-4 w-4 text-primary" /> Key Highlights
                    </h4>
                    <ul className="space-y-2 text-left">
                      {book.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex gap-4 justify-center lg:justify-start pt-4">
                    <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20" onClick={() => setReadingBook(book)}>
                      Read Sample
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <section className="mt-32 pt-16 border-t border-dashed">
            <h2 className="font-serif text-3xl font-semibold mb-12 text-center">What Readers Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {books.flatMap(book => book.testimonials).map((testimonial, index) => (
                <Card key={index} className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow border-none shadow-sm">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-primary/20 mb-6" />
                    <p className="italic text-lg mb-6 leading-relaxed text-foreground/80">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        {testimonial.role && (
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
