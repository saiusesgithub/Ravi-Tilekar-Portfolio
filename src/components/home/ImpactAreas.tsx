import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Rocket, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const impactAreas = [
    {
        id: 'education',
        title: 'Education',
        icon: GraduationCap,
        image: '/images/speaking.jpeg',
        description: 'Transforming the way students learn through practical, hands-on experiences and mentorship.',
        initiatives: [
            'Innovation Workshops in rural schools',
            'Curriculum development for entrepreneurship',
            'Student mentorship programs',
            'Digital literacy campaigns'
        ]
    },
    {
        id: 'entrepreneurship',
        title: 'Entrepreneurship',
        icon: Rocket,
        image: '/images/award1.jpeg',
        description: 'Building a robust ecosystem for aspiring founders to launch and scale their ventures.',
        initiatives: [
            'Incubation support for early-stage startups',
            'Access to angel investor networks',
            'Startup bootcamps and hackathons',
            'Regulatory compliance guidance'
        ]
    },
    {
        id: 'youth',
        title: 'Youth Empowerment',
        icon: Users,
        image: '/images/speaking3.jpeg',
        description: 'Nurturing the next generation of leaders through skills training and exposure.',
        initiatives: [
            'Youth leadership summits',
            'Soft skills development programs',
            'International exchange opportunities',
            'Career counseling and guidance'
        ]
    },
    {
        id: 'community',
        title: 'Community Development',
        icon: Heart,
        image: '/images/speaking5.jpeg',
        description: 'Creating positive change at the grassroots level through sustainable initiatives.',
        initiatives: [
            'Rural entrepreneurship programs',
            'Women entrepreneur support groups',
            'Local artisan marketplace development',
            'Community health and awareness campaigns'
        ]
    }
];

export function ImpactAreas() {
    const [activeTab, setActiveTab] = useState('community');

    const activeArea = impactAreas.find(area => area.id === activeTab) || impactAreas[0];

    return (
        <section className="py-20 bg-secondary/20">
            <div className="container">
                <div className="mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8">Impact Areas</h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {impactAreas.map((area) => {
                            const Icon = area.icon;
                            return (
                                <button
                                    key={area.id}
                                    onClick={() => setActiveTab(area.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border ${activeTab === area.id
                                        ? 'bg-background border-primary text-primary shadow-sm'
                                        : 'bg-transparent border-transparent text-muted-foreground hover:bg-background/50 hover:text-foreground'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {area.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="bg-background border-none shadow-sm">
                                <CardContent className="p-8 md:p-10">
                                    <div className="grid md:grid-cols-2 gap-10 items-center">
                                        <div>
                                            <h3 className="font-serif text-2xl font-bold mb-4">{activeArea.title}</h3>
                                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                                {activeArea.description}
                                            </p>

                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-foreground">Key Initiatives</h4>
                                                <ul className="space-y-3">
                                                    {activeArea.initiatives.map((initiative, index) => (
                                                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                            <span className="text-sm md:text-base">{initiative}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Illustration/Image Placeholder */}
                                        <div className="hidden md:block relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-md">
                                            <img
                                                src={activeArea.image}
                                                alt={activeArea.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                                            <div className="absolute bottom-6 left-6 text-white">
                                                <div className="bg-primary/20 p-3 rounded-full backdrop-blur-sm w-fit mb-3 border border-white/10">
                                                    <activeArea.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <p className="font-serif text-lg opacity-90">Impact in Action</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Moments of Impact Gallery */}
                <div className="mt-20">
                    <h3 className="font-serif text-2xl font-bold mb-8">Moments of Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                        {/* Using placeholder colors/images for now as per specific request for layout */}
                        <div className="row-span-2 overflow-hidden rounded-xl border border-white/10 relative group">
                            <img src="/images/speaking.jpeg" alt="Impact Moment 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        </div>
                        <div className="overflow-hidden rounded-xl border border-white/10 relative group">
                            <img src="/images/award1.jpeg" alt="Impact Moment 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="overflow-hidden rounded-xl border border-white/10 relative group">
                            <img src="/images/speaking7.jpeg" alt="Community Gathering" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-xs text-white/90">Community Gathering</div>
                        </div>
                        <div className="row-span-2 overflow-hidden rounded-xl border border-white/10 relative group">
                            <img src="/images/speaking3.jpeg" alt="Impact Moment 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="col-span-1 md:col-span-2 overflow-hidden rounded-xl border border-white/10 relative group">
                            <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                                <p className="text-primary font-serif italic text-lg opacity-80">"Empowering one life at a time"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
