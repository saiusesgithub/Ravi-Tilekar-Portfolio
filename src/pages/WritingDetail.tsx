import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { writings } from "@/data/writings";
import { setMetadata } from "@/utils/metadata";
import {
  injectSchema,
  clearSchemas,
  generateArticleSchema,
} from "@/utils/schema";

export default function WritingDetail() {
  const { id } = useParams<{ id: string }>();
  const [stageMode, setStageMode] = useState(false);

  const writing = writings.find((w) => w.id === id);
  const relatedWritings = writings
    .filter((w) => w.id !== id && w.category === writing?.category)
    .slice(0, 3);

  useEffect(() => {
    if (writing) {
      setMetadata({
        title: `${writing.title} | Writings by Ravi Tilekar`,
        description: writing.excerpt,
        keywords: writing.tags,
        ogType: "article",
        canonical:
          typeof window !== "undefined" ? window.location.href : undefined,
        publishedDate: writing.date,
        author: "Ravi Tilekar",
      });
      clearSchemas();
      injectSchema(
        generateArticleSchema({
          title: writing.title,
          description: writing.excerpt,
          content: writing.content,
          category: writing.category,
          publishedDate: writing.date,
          author: "Ravi Tilekar",
        }),
      );
    }
  }, [writing]);

  if (!writing) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Writing not found</h1>
        <Button asChild variant="outline">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    );
  }

  if (stageMode) {
    return (
      <div className="fixed inset-0 z-50 bg-background overflow-auto">
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 z-50"
          onClick={() => setStageMode(false)}
        >
          <X className="h-6 w-6" />
        </Button>
        <div className="max-w-3xl mx-auto py-20 px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-center">
            {writing.title}
          </h1>
          <div className="font-serif text-2xl md:text-3xl leading-relaxed whitespace-pre-line">
            {writing.content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link to={`/writings/${writing.category}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {writing.category}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStageMode(true)}
          >
            <Maximize2 className="h-4 w-4 mr-2" />
            Stage Mode
          </Button>
        </div>

        <article>
          <div className="flex gap-2 mb-4">
            {writing.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            {writing.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
            <span>
              {new Date(writing.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{writing.readTime} min read</span>
            <span>•</span>
            <span className="capitalize">{writing.category}</span>
          </div>

          <div className="font-serif text-lg md:text-xl leading-relaxed whitespace-pre-line">
            {writing.content}
          </div>
        </article>

        {/* Related Writings */}
        {relatedWritings.length > 0 && (
          <section className="mt-16 pt-8 border-t">
            <h2 className="font-serif text-2xl font-semibold mb-6">
              More {writing.category}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedWritings.map((related) => (
                <Link key={related.id} to={`/writing/${related.id}`}>
                  <Card className="card-hover h-full">
                    <CardContent className="p-4">
                      <h3 className="font-serif font-semibold mb-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
