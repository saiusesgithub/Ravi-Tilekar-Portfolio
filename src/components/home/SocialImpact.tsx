import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const impactStats = [
    {
        value: "50,000+",
        label: "Lives Impacted",
        description: "Through various programs and initiatives"
    },
    {
        value: "200+",
        label: "Workshops Conducted",
        description: "Across schools, colleges, and communities"
    },
    {
        value: "100+",
        label: "Startups Mentored",
        description: "From idea stage to growth"
    },
    {
        value: "30+",
        label: "Cities Reached",
        description: "Including tier-2 and tier-3 cities"
    },
    {
        value: "50+",
        label: "Partner Organizations",
        description: "NGOs, colleges, and corporate partners"
    },
    {
        value: "5,000+",
        label: "Volunteer Hours",
        description: "Community service and outreach"
    }
];

export function SocialImpact() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Social Impact</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Creating lasting change through IEC and community initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impactStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border hover:shadow-md transition-shadow duration-300">
                                <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                                    <span className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 block">
                                        {stat.value}
                                    </span>
                                    <h3 className="font-semibold text-xl mb-2 text-foreground">
                                        {stat.label}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {stat.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
