/**
 * AEO (Answer Engine Optimization) Components
 * Structured content for AI search engines (ChatGPT, Perplexity, Bing AI)
 */

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FAQ Section for Answer Engines
 * Displays Q&A in schema-friendly format
 */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  faqs,
  className,
}) => {
  return (
    <section className={cn("space-y-6", className)}>
      {title && (
        <div>
          <h2 className="font-serif text-3xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about Ravi Tilekar and his work.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="hover:border-primary/50 transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-lg">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

/**
 * Profile Authority Card
 * Establishes credibility and expertise for AI engines
 */
interface AuthorityCardProps {
  name: string;
  title: string;
  expertise: string[];
  achievements: string[];
  image?: string;
}

export const AuthorityCard: React.FC<AuthorityCardProps> = ({
  name,
  title,
  expertise,
  achievements,
  image,
}) => {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardContent className="p-6">
        <div className="flex gap-4 mb-6">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
          )}
          <div>
            <h3 className="font-serif text-2xl font-semibold">{name}</h3>
            <p className="text-primary font-medium">{title}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Core Expertise</h4>
            <ul className="flex flex-wrap gap-2">
              {expertise.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Key Achievements</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * Impact Statistics for Answer Engines
 * Clearly structured data points
 */
interface ImpactStat {
  number: string;
  metric: string;
  description: string;
}

interface ImpactStatsProps {
  title?: string;
  stats: ImpactStat[];
  className?: string;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({
  title = "Impact by Numbers",
  stats,
  className,
}) => {
  return (
    <section className={cn("space-y-6", className)}>
      {title && <h2 className="font-serif text-3xl font-semibold">{title}</h2>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="font-serif text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <h3 className="font-semibold text-lg">{stat.metric}</h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

/**
 * Definition/Glossary Component
 * Helps AI engines understand key terms
 */
interface DefinitionItem {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

interface DefinitionListProps {
  title?: string;
  items: DefinitionItem[];
  className?: string;
}

export const DefinitionList: React.FC<DefinitionListProps> = ({
  title = "Key Definitions",
  items,
  className,
}) => {
  return (
    <section className={cn("space-y-6", className)}>
      {title && <h2 className="font-serif text-3xl font-semibold">{title}</h2>}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-l-4 border-primary/50 pl-4 py-2">
            <dt className="font-semibold text-lg mb-1">{item.term}</dt>
            <dd className="text-muted-foreground mb-2">{item.definition}</dd>
            {item.relatedTerms && (
              <div className="text-xs space-y-1">
                <p className="font-medium text-foreground/70">Related:</p>
                <p className="text-muted-foreground">
                  {item.relatedTerms.join(", ")}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Key Points Callout
 * Highlights important information for AI extraction
 */
interface KeyPointsProps {
  title?: string;
  points: string[];
  variant?: "default" | "highlight" | "warning";
  className?: string;
}

export const KeyPoints: React.FC<KeyPointsProps> = ({
  title = "Key Points",
  points,
  variant = "default",
  className,
}) => {
  const variants = {
    default: "bg-muted border-muted-foreground/30",
    highlight: "bg-primary/10 border-primary/30",
    warning: "bg-yellow-500/10 border-yellow-500/30",
  };

  return (
    <Card className={cn(variants[variant], className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="font-bold text-primary flex-shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

/**
 * About/Bio Section
 * Comprehensive introduction for AI understanding
 */
interface AboutSectionProps {
  name: string;
  headline: string;
  bio: string;
  roles: string[];
  callToAction?: {
    text: string;
    href: string;
  };
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  name,
  headline,
  bio,
  roles,
  callToAction,
  className,
}) => {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="space-y-3">
        <h1 className="font-serif text-4xl font-semibold">{name}</h1>
        <p className="text-xl font-medium text-primary">{headline}</p>

        <div className="flex flex-wrap gap-2">
          {roles.map((role, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
        {bio.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {callToAction && (
        <a
          href={callToAction.href}
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          {callToAction.text}
        </a>
      )}
    </section>
  );
};
