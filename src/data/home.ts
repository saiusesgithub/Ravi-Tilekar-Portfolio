export interface HeroContent {
  builder: {
    headline: string;
    subtitle: string;
  };
  writer: {
    headline: string;
    subtitle: string;
  };
}

export interface HighlightCard {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: string;
  mode: 'both' | 'builder' | 'writer';
}

export const heroContent: HeroContent = {
  builder: {
    headline: 'Building India\'s Next Generation of Entrepreneurs',
    subtitle: 'Founder, mentor, and ecosystem builder. Empowering 50,000+ aspiring entrepreneurs through StartupsIndia and IEC.',
  },
  writer: {
    headline: 'Words That Inspire, Stories That Transform',
    subtitle: 'Poet, storyteller, and author. 500+ writings that capture the spirit of ambition, love, and the human journey.',
  },
};

export const highlightCards: HighlightCard[] = [
  {
    id: 'mentorship',
    title: 'Startup Mentorship',
    value: '100+',
    description: 'Startups mentored from idea to growth',
    icon: 'TrendingUp',
    mode: 'builder',
  },
  {
    id: 'founder',
    title: 'Serial Founder',
    value: '5',
    description: 'Ventures built across sectors',
    icon: 'Briefcase',
    mode: 'builder',
  },
  {
    id: 'impact',
    title: 'NGO / Impact',
    value: '50K+',
    description: 'Lives touched through IEC',
    icon: 'Heart',
    mode: 'both',
  },
  {
    id: 'writings',
    title: 'Original Writings',
    value: '500+',
    description: 'Poems, shayari, songs & stories',
    icon: 'Feather',
    mode: 'writer',
  },
];

export const socialLinks = [
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/ravitilekar', icon: 'Linkedin' },
  { id: 'twitter', label: 'Twitter / X', url: 'https://twitter.com/ravitilekar', icon: 'Twitter' },
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/ravitilekar', icon: 'Instagram' },
  { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/@ravitilekar', icon: 'Youtube' },
];

export const navigation = [
  { id: 'home', label: 'Home', path: '/' },
  {
    id: 'writings',
    label: 'Writings',
    children: [
      { id: 'poems', label: 'Poems', path: '/writings/poems' },
      { id: 'shayari', label: 'Shayari', path: '/writings/shayari' },
      { id: 'songs', label: 'Songs', path: '/writings/songs' },
      { id: 'stories', label: 'Stories', path: '/writings/stories' },
    ],
  },
  { id: 'books', label: 'Books', path: '/books' },
  { id: 'articles', label: 'Articles', path: 'https://startupsindia.in', external: true },
  { id: 'journey', label: 'Journey', path: '/journey' },
  { id: 'impact', label: 'Impact', path: '/impact' },
  { id: 'speaker', label: 'Speaker', path: '/speaker' },
  {
    id: 'events',
    label: 'Events',
    children: [
      { id: 'gallery', label: 'Gallery', path: '/events/gallery' },
      { id: 'awards', label: 'Awards', path: '/events/awards' },
    ],
  },
];
