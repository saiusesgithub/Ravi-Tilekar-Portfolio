import { Link } from 'react-router-dom';
import { Feather, Lightbulb, Users, Briefcase, ArrowRight } from 'lucide-react';
import { journeyMilestones } from '@/data/journey';

export function JourneySnapshot() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container max-w-4xl">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold">Journey Snapshot</h2>
                    <Link to="/journey" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                        Full journey <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12">
                    {journeyMilestones.slice(0, 4).map((milestone) => {
                        // Assign icons based on usage/id for a creative touch
                        let MilestoneIcon = Feather; // Default
                        if (milestone.id === 'startupsindia') MilestoneIcon = Lightbulb;
                        if (milestone.id === 'iec') MilestoneIcon = Users;
                        if (milestone.id === 'shiromani-mart') MilestoneIcon = Briefcase;
                        if (milestone.id === 'creative-guys') MilestoneIcon = Feather;

                        return (
                            <div key={milestone.id} className="relative pl-8 md:pl-12 group">
                                {/* Timeline Dot with Icon */}
                                <div className="absolute -left-[9px] top-0 bg-background border-2 border-primary rounded-full p-2 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <MilestoneIcon className="h-4 w-4 md:h-5 md:w-5" />
                                </div>

                                <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-baseline">
                                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {milestone.organization}
                                    </h3>
                                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                                        {milestone.period}
                                    </span>
                                </div>

                                <div className="mt-2 mb-4">
                                    <p className="text-base font-medium text-foreground/80">{milestone.role}</p>
                                </div>

                                <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm md:text-base">
                                    {milestone.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
