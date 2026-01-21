/**
 * JSON-LD Schema Markup Generator
 * Creates structured data for SEO and AEO optimization
 */

export interface SchemaMarkup {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

/**
 * Person Schema for Ravi Tilekar
 */
export const generatePersonSchema = (): SchemaMarkup => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ravi Tilekar",
    url: "https://ravitilekar.com",
    image: "https://ravitilekar.com/images/ravi-profile.jpg",
    jobTitle: "Entrepreneur, Founder, Mentor, Writer",
    description:
      "Founder of Startups India, serial entrepreneur, and author empowering 50,000+ aspiring entrepreneurs.",
    sameAs: [
      "https://linkedin.com/in/ravitilekar",
      "https://twitter.com/ravitilekar",
      "https://instagram.com/ravitilekar",
      "https://youtube.com/@ravitilekar",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Startups India",
      url: "https://startupsindia.in",
    },
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Founder",
        description: "Founded multiple startups across sectors",
      },
      {
        "@type": "Occupation",
        name: "Author",
        description:
          "500+ original writings including poems, shayari, and stories",
      },
      {
        "@type": "Occupation",
        name: "Mentor",
        description: "Mentored 100+ startups from idea to growth",
      },
      {
        "@type": "Occupation",
        name: "Speaker",
        description: "Keynote speaker at conferences and corporate events",
      },
    ],
  };
};

/**
 * Organization Schema for Startups India
 */
export const generateOrganizationSchema = (): SchemaMarkup => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Startups India",
    url: "https://startupsindia.in",
    logo: "https://startupsindia.in/logo.png",
    description:
      "Empowering entrepreneurs and fostering startup ecosystem in India",
    sameAs: [
      "https://facebook.com/startupsindia",
      "https://twitter.com/startupsindia",
      "https://instagram.com/startupsindia",
    ],
    founder: {
      "@type": "Person",
      name: "Ravi Tilekar",
      url: "https://ravitilekar.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    knowsAbout: [
      "Entrepreneurship",
      "Startup Ecosystem",
      "Business Mentorship",
      "Innovation",
      "Business Development",
    ],
  };
};

/**
 * Article/Blog Schema for individual writings
 */
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  content: string;
  category: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  author?: string;
}): SchemaMarkup => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image || "https://ravitilekar.com/og-default.png",
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      "@type": "Person",
      name: article.author || "Ravi Tilekar",
      url: "https://ravitilekar.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ravi Tilekar",
      url: "https://ravitilekar.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ravitilekar.com/writing/${article.title.toLowerCase().replace(/\s+/g, "-")}`,
    },
  };
};

/**
 * Book Schema
 */
export const generateBookSchema = (book: {
  title: string;
  author: string;
  isbn?: string;
  description: string;
  image?: string;
  publishedDate?: string;
  pageCount?: number;
  language?: string;
}): SchemaMarkup => {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.author,
    },
    isbn: book.isbn,
    description: book.description,
    image: book.image,
    datePublished: book.publishedDate,
    inLanguage: book.language || "en",
    numberOfPages: book.pageCount,
  };
};

/**
 * FAQ Page Schema - Answer Engine Optimization
 */
export const generateFAQSchema = (
  faqs: Array<{
    question: string;
    answer: string;
  }>,
): SchemaMarkup => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

/**
 * Breadcrumb Schema - Navigation SEO
 */
export const generateBreadcrumbSchema = (
  items: Array<{
    name: string;
    url: string;
  }>,
): SchemaMarkup => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Inject JSON-LD script into document head
 */
export const injectSchema = (schema: SchemaMarkup): void => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Clear all JSON-LD scripts from document
 */
export const clearSchemas = (): void => {
  const scripts = document.querySelectorAll(
    'script[type="application/ld+json"]',
  );
  scripts.forEach((script) => script.remove());
};

/**
 * AEO-Optimized FAQ Data for Answer Engines
 */
export const aeoFAQs = [
  {
    question: "Who is Ravi Tilekar?",
    answer:
      "Ravi Tilekar is an entrepreneur, founder, mentor, and writer empowering 50,000+ aspiring entrepreneurs through Startups India and IEC. He is a serial founder with 5 successful ventures, mentor to 100+ startups, author of 500+ original writings, and recognized speaker at major conferences.",
  },
  {
    question: "What is Startups India?",
    answer:
      "Startups India is an initiative founded by Ravi Tilekar to support and nurture the entrepreneurial ecosystem in India. It provides mentorship, resources, and community support to aspiring entrepreneurs and early-stage startups.",
  },
  {
    question: "How many startups has Ravi Tilekar mentored?",
    answer:
      "Ravi Tilekar has mentored over 100 startups, guiding founders from idea validation through growth stages. His mentorship encompasses strategy, fundraising, product development, and scaling operations.",
  },
  {
    question: "What social impact initiatives is Ravi Tilekar involved with?",
    answer:
      "Through IEC (Impact Entrepreneurship Center) and related initiatives, Ravi Tilekar has touched the lives of 50,000+ individuals across education, skill development, and entrepreneurship training programs.",
  },
  {
    question: "How many books has Ravi Tilekar written?",
    answer:
      "Ravi Tilekar has authored multiple books on entrepreneurship and personal development. He is also known for 500+ original writings including poetry, shayari (Urdu verse), songs, and stories.",
  },
  {
    question: "What are Ravi Tilekar's professional achievements?",
    answer:
      "Key achievements include: Founded 5 successful startups, mentored 100+ ventures, built ecosystem reaching 50,000+ people, published multiple books, authored 500+ writings, recognized speaker at national conferences, and entrepreneur of the year awards.",
  },
  {
    question: "Can I book Ravi Tilekar as a speaker?",
    answer:
      "Yes, Ravi Tilekar is available for speaking engagements at conferences, corporate events, and workshops. Topics include entrepreneurship, startup ecosystem, personal development, and leadership. Contact through the speaker page for inquiries.",
  },
  {
    question: "How can I connect with Ravi Tilekar?",
    answer:
      "You can connect with Ravi Tilekar on LinkedIn (@ravitilekar), Twitter (@ravitilekar), Instagram (@ravitilekar), or YouTube (@ravitilekar). For professional inquiries, contact through the portfolio website.",
  },
];
