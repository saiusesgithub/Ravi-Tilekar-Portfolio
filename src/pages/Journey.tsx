import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { journeyMilestones, journeyStats } from "@/data/journey";
import { Badge } from "@/components/ui/badge";
import { setMetadata, pageMetadata } from "@/utils/metadata";

export default function Journey() {
  useEffect(() => {
    setMetadata(pageMetadata.journey);
  }, []);
  return (
    <div className="container py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-semibold mb-2">
          Professional Journey
        </h1>
        <p className="text-muted-foreground mb-12">
          From intern to founder — a path of continuous building and learning.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {journeyStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6 text-center">
                <div className="font-serif text-3xl font-semibold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {journeyMilestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6" />

              {/* Content */}
              <div
                className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
              >
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-sm text-muted-foreground">
                        {milestone.period}
                      </span>
                      {milestone.current && (
                        <Badge variant="secondary">Current</Badge>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-1">
                      {milestone.organization}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {milestone.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {milestone.description}
                    </p>
                    <div className="space-y-1">
                      {milestone.achievements
                        .slice(0, 3)
                        .map((achievement, i) => (
                          <div
                            key={i}
                            className="text-sm flex items-start gap-2"
                          >
                            <span className="text-primary">✓</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
