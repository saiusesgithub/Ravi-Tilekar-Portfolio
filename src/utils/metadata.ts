/**
 * Metadata Generation Utility
 * Generates SEO-optimized metadata for all pages
 */

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType: "website" | "article" | "profile";
  canonical?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

const SITE_NAME = "Ravi Tilekar";
const SITE_URL = "https://ravitilekar.com"; // Update with actual domain
const DEFAULT_OG_IMAGE = "/og-default.png";

export const generateMetaTags = (
  metadata: PageMetadata,
): Record<string, string> => {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.join(", "),
    author: metadata.author || "Ravi Tilekar",
    "og:title": metadata.title,
    "og:description": metadata.description,
    "og:type": metadata.ogType,
    "og:image": metadata.ogImage || DEFAULT_OG_IMAGE,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:site_name": SITE_NAME,
    "og:url": metadata.canonical || SITE_URL,
    "twitter:card": "summary_large_image",
    "twitter:title": metadata.title,
    "twitter:description": metadata.description,
    "twitter:image": metadata.ogImage || DEFAULT_OG_IMAGE,
    "twitter:creator": "@ravitilekar",
    "twitter:site": "@ravitilekar",
    canonical: metadata.canonical || SITE_URL,
  };
};

/**
 * Page-specific metadata configurations
 */
export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "Ravi Tilekar | Builder & Writer | Startups India Founder",
    description:
      "Entrepreneur, founder, and mentor empowering 50,000+ aspiring entrepreneurs through Startups India. Poet and author of 500+ original writings.",
    keywords: [
      "Ravi Tilekar",
      "Startups India",
      "entrepreneur",
      "founder",
      "mentor",
      "writer",
      "poet",
    ],
    ogType: "website",
    ogImage: "/og-hero.png",
  },

  writings: {
    title: "Writings & Poetry | Ravi Tilekar",
    description:
      "Explore 500+ original poems, shayari, songs and stories. Words that inspire, stories that transform.",
    keywords: [
      "poetry",
      "shayari",
      "writings",
      "stories",
      "songs",
      "inspiration",
    ],
    ogType: "website",
  },

  books: {
    title: "Books | Ravi Tilekar",
    description:
      "Discover books authored by Ravi Tilekar. Stories of entrepreneurship, inspiration, and human connection.",
    keywords: ["books", "author", "literary works", "entrepreneurship"],
    ogType: "website",
  },

  journey: {
    title: "Professional Journey | Ravi Tilekar",
    description:
      "From intern to founder — a path of continuous building and learning. Explore the milestones that shaped Ravi Tilekar's career.",
    keywords: [
      "career",
      "journey",
      "entrepreneurship",
      "professional experience",
      "mentorship",
    ],
    ogType: "website",
  },

  impact: {
    title: "Social Impact | Ravi Tilekar",
    description:
      "Creating lasting change through IEC and community initiatives. 50,000+ lives touched, multiple impact programs.",
    keywords: [
      "social impact",
      "community",
      "entrepreneurship education",
      "IEC",
      "non-profit",
    ],
    ogType: "website",
  },

  speaker: {
    title: "Speaking Engagements | Ravi Tilekar",
    description:
      "Book Ravi Tilekar as a speaker for conferences, events, and corporate sessions on entrepreneurship and innovation.",
    keywords: [
      "speaker",
      "public speaking",
      "conference",
      "event",
      "entrepreneurship",
    ],
    ogType: "website",
  },
  gallery: {
    title: "Gallery | Ravi Tilekar",
    description:
      "Moments from events, workshops, and impact programs featuring Ravi Tilekar and community initiatives.",
    keywords: ["gallery", "events", "workshops", "community", "impact"],
    ogType: "website",
  },
  awards: {
    title: "Awards & Recognition | Ravi Tilekar",
    description:
      "Recognitions and awards received for entrepreneurship, ecosystem building, and social impact.",
    keywords: ["awards", "recognition", "entrepreneurship awards", "impact"],
    ogType: "website",
  },
};

/**
 * Update document head with metadata
 */
export const setMetadata = (metadata: PageMetadata): void => {
  // Set title
  document.title = metadata.title;

  // Set or update meta tags
  const metaTags = generateMetaTags(metadata);

  Object.entries(metaTags).forEach(([name, content]) => {
    if (name === "title" || name === "canonical") return; // Handle separately

    const property =
      name.includes("og:") || name.includes("twitter:") ? "property" : "name";
    let element = document.querySelector(
      `meta[${property}="${name}"]`,
    ) as HTMLMetaElement;

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(property, name);
      document.head.appendChild(element);
    }

    element.content = content;
  });

  // Set canonical URL
  let canonical = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = metadata.canonical || SITE_URL;
};

/**
 * Generate dynamic Open Graph image URL
 * Useful for social sharing
 */
export const generateOGImageUrl = (
  title: string,
  subtitle?: string,
  template: "default" | "article" | "profile" = "default",
): string => {
  const params = new URLSearchParams({
    title,
    ...(subtitle && { subtitle }),
    template,
  });
  return `${SITE_URL}/api/og?${params.toString()}`;
};
