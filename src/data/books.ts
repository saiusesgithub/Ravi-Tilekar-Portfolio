export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  coverImage?: string;
  buyLink?: string;
  testimonials: {
    quote: string;
    author: string;
    role?: string;
  }[];
  publishedYear: number;
}

export const books: Book[] = [
  {
    id: 'book-1',
    title: 'Sapnon Ka Safar',
    subtitle: 'From Dreams to Reality: A Guide for Young Entrepreneurs',
    description: 'This book chronicles the journey of building something from nothing. Through personal stories, practical insights, and actionable advice, "Sapnon Ka Safar" guides aspiring entrepreneurs from idea to execution. Written in a blend of Hindi and English, it speaks to the heart of young India—ambitious, resourceful, and ready to change the world.',
    highlights: [
      '25 real-life entrepreneurship lessons',
      'Step-by-step guide to building your first startup',
      'Stories of failures and what they taught me',
      'Practical worksheets and reflection exercises',
      'Foreword by a leading industry mentor',
    ],
    testimonials: [
      {
        quote: 'A must-read for anyone who has ever dared to dream. Ravi writes with the honesty of someone who has lived every word.',
        author: 'Ankit Agarwal',
        role: 'Founder, TechStartup India',
      },
      {
        quote: 'This book bridges the gap between inspiration and action. It\'s not just motivational—it\'s practical.',
        author: 'Priya Sharma',
        role: 'Entrepreneur & Mentor',
      },
    ],
    publishedYear: 2022,
  },
  {
    id: 'book-2',
    title: 'Awaaz - Voice of the Youth',
    subtitle: 'Collected Poems and Shayari for the Modern Dreamer',
    description: 'A collection of over 100 poems and shayaris that capture the essence of modern India—its hopes, struggles, love, and relentless ambition. "Awaaz" is a mirror for the youth, reflecting their inner battles and outer victories through verse that resonates across generations.',
    highlights: [
      '100+ original poems and shayaris',
      'Themes: Love, ambition, society, self-discovery',
      'Hindi-English bilingual format',
      'Perfect for stage performances and recitations',
      'Includes QR codes to audio recordings',
    ],
    testimonials: [
      {
        quote: 'Ravi\'s words have the power to move mountains. Each poem is a conversation with the soul.',
        author: 'Dr. Meena Kapoor',
        role: 'Literary Critic',
      },
      {
        quote: 'Finally, poetry that speaks the language of today\'s youth without losing the depth of tradition.',
        author: 'Vikram Singh',
        role: 'Poet & Author',
      },
    ],
    publishedYear: 2023,
  },
];
