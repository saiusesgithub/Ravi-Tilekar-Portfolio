/**
 * Sitemap Generation Utility
 * Generates XML sitemaps for search engine discovery
 */

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

/**
 * Generate XML sitemap content
 */
export const generateSitemap = (entries: SitemapEntry[]): string => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ""}
    ${entry.priority !== undefined ? `<priority>${entry.priority}</priority>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return xml;
};

/**
 * Main sitemap entries
 */
export const mainSitemapEntries: SitemapEntry[] = [
  {
    url: "https://ravitilekar.com/",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    url: "https://ravitilekar.com/writings/poems",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "https://ravitilekar.com/writings/shayari",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "https://ravitilekar.com/writings/songs",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "https://ravitilekar.com/writings/stories",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "https://ravitilekar.com/books",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "https://ravitilekar.com/journey",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "https://ravitilekar.com/impact",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "https://ravitilekar.com/speaker",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "https://ravitilekar.com/events/gallery",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "https://ravitilekar.com/events/awards",
    changefreq: "monthly",
    priority: 0.7,
  },
];

/**
 * Escape XML special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

/**
 * Generate sitemap index for large sites
 */
export const generateSitemapIndex = (sitemapUrls: string[]): string => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <sitemap>
    <loc>${escapeXml(url)}</loc>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>`;

  return xml;
};

/**
 * Generate image sitemap
 * Important for image SEO
 */
export interface ImageSitemapEntry {
  imageUrl: string;
  pageUrl: string;
  title?: string;
  caption?: string;
  license?: string;
}

export const generateImageSitemap = (entries: ImageSitemapEntry[]): string => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.pageUrl)}</loc>
    <image:image>
      <image:loc>${escapeXml(entry.imageUrl)}</image:loc>
      ${entry.title ? `<image:title>${escapeXml(entry.title)}</image:title>` : ""}
      ${entry.caption ? `<image:caption>${escapeXml(entry.caption)}</image:caption>` : ""}
      ${entry.license ? `<image:license>${escapeXml(entry.license)}</image:license>` : ""}
    </image:image>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return xml;
};

/**
 * Usage example for generating sitemaps:
 *
 * // In your build process or API endpoint:
 * import { generateSitemap, mainSitemapEntries } from '@/utils/sitemap';
 *
 * const sitemapXml = generateSitemap(mainSitemapEntries);
 * // Write to public/sitemap.xml
 */
