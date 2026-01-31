import { Lightbulb, BookOpen, Mic, Users } from 'lucide-react';

export function PersonalIntro() {
    return (
        <section className="py-20 bg-background">
            <div className="container max-w-5xl">
                {/* Name Heading */}
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-foreground">
                    Ravi Tilekar
                </h2>

                {/* Bio Description */}
                <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                    Ravi is an entrepreneur, ecosystem builder, and mentor based in India. He is the founder of StartupsIndia and IEC, empowering 50,000+ aspiring entrepreneurs. He is also a bestselling author and writes poems, shayari, songs, and stories. His aim through his work is to inspire people to pursue their dreams with awareness, not ignorance.
                </p>

                {/* Signature */}
                <div className="text-center mb-12">
                    <div className="inline-block" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.5rem', color: 'hsl(var(--primary))' }}>
                        Ravi Tilekar
                    </div>
                </div>

                {/* Four Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
                    {/* Entrepreneur */}
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <Lightbulb className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Entrepreneur</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Founder of StartupsIndia, empowering 50,000+ aspiring entrepreneurs. Built ventures across education, technology, and social impact sectors since 2008.
                        </p>
                    </div>

                    {/* Writer */}
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Writer</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Author of multiple books and 500+ original writings including poems, shayari, songs, and stories that capture the spirit of ambition and the human journey.
                        </p>
                    </div>

                    {/* Speaker */}
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <Mic className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Speaker</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Keynote speaker at national and international events, inspiring audiences with insights on entrepreneurship, leadership, and personal growth.
                        </p>
                    </div>

                    {/* Ecosystem Builder */}
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Ecosystem Builder</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Building India's entrepreneurial ecosystem through IEC, mentoring startups, and creating platforms that connect dreamers with opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
