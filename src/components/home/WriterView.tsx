import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { writings } from '@/data/writings';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, PenTool } from 'lucide-react';

export function WriterView() {
    const featuredWritings = writings.filter(w => w.featured).slice(0, 6);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
        >
            {/* Introduction / Philosophy */}
            <section className="py-24 bg-secondary/10">
                <div className="container max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <PenTool className="h-10 w-10 mx-auto mb-8 text-primary opacity-80" />
                    </motion.div>
                    <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight mb-8">
                        "Words are bridges and words are walls, <br /> They heal the broken and answer calls."
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        Exploring the human condition through poetry, stories, and reflections.
                        Writing is not just an act of expression, but a journey of discovery.
                    </p>
                </div>
            </section>

            {/* Featured Writings */}
            <section className="py-24">
                <div className="container">
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="font-serif text-3xl font-semibold">Selected Works</h2>
                        <Link to="/writings/poems" className="text-sm font-medium text-primary hover:underline flex items-center gap-1 group">
                            View Archive <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredWritings.map((writing, index) => (
                            <motion.div
                                key={writing.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="card-hover h-full flex flex-col group border-border/50 bg-background/50 hover:bg-background transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
                                    <CardContent className="p-8 flex flex-col flex-grow">
                                        <div className="mb-6">
                                            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3 block">
                                                {writing.category}
                                            </span>
                                            <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                                {writing.title}
                                            </h3>
                                            <div className="h-1 w-12 bg-border group-hover:bg-primary/50 transition-colors mb-5" />
                                            <p className="text-muted-foreground leading-relaxed line-clamp-3">
                                                {writing.excerpt}
                                            </p>
                                        </div>
                                        <div className="mt-auto flex items-center text-sm font-medium text-foreground/60 pt-4 border-t border-dashed border-border/50">
                                            <BookOpen className="h-4 w-4 mr-2" />
                                            {writing.readTime} min read
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Books Preview */}
            <section className="py-24 bg-gradient-to-b from-secondary/30 to-background/0">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 max-w-lg">
                            <h2 className="font-serif text-4xl font-bold mb-6">Published Works</h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Deep dives into specific themes, these collections represent years of observation and refinement.
                                Coming soon to bookshelves near you.
                            </p>
                            <Button variant="outline" size="lg" className="rounded-full px-8">Explore Books</Button>
                        </div>
                        <div className="flex-1 flex justify-center items-center gap-6 perspective-1000">
                            {/* Book Placeholders */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
                                className="w-48 h-72 bg-white text-black shadow-2xl rounded-r-lg border-l-4 border-gray-300 flex items-center justify-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 font-serif font-bold text-4xl opacity-10">01</div>
                                <span className="font-serif italic text-xl font-bold z-10 text-center px-4">The Silent<br />Echo</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
                                className="w-48 h-72 bg-primary text-primary-foreground shadow-2xl rounded-r-lg border-l-4 border-white/20 flex items-center justify-center relative overflow-hidden -ml-12 md:-ml-20 mt-12"
                            >
                                <div className="absolute top-0 right-0 p-4 font-serif font-bold text-4xl opacity-10">02</div>
                                <span className="font-serif italic text-xl font-bold z-10 text-center px-4">Roots &<br />Wings</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
