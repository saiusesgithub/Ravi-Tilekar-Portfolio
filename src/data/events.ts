export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'workshop' | 'conference' | 'award' | 'community' | 'media';
  date?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description?: string;
  image?: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 'gal-1', src: '/placeholder.svg', alt: 'Keynote speech at Startup Summit', category: 'conference', date: '2024' },
  { id: 'gal-2', src: '/placeholder.svg', alt: 'Workshop with college students', category: 'workshop', date: '2024' },
  { id: 'gal-3', src: '/placeholder.svg', alt: 'Receiving Excellence Award', category: 'award', date: '2024' },
  { id: 'gal-4', src: '/placeholder.svg', alt: 'Community outreach program', category: 'community', date: '2024' },
  { id: 'gal-5', src: '/placeholder.svg', alt: 'Panel discussion on innovation', category: 'conference', date: '2023' },
  { id: 'gal-6', src: '/placeholder.svg', alt: 'Youth entrepreneurship bootcamp', category: 'workshop', date: '2023' },
  { id: 'gal-7', src: '/placeholder.svg', alt: 'Media interview on startup ecosystem', category: 'media', date: '2023' },
  { id: 'gal-8', src: '/placeholder.svg', alt: 'Rural innovation workshop', category: 'community', date: '2023' },
  { id: 'gal-9', src: '/placeholder.svg', alt: 'Startup pitch competition judge', category: 'conference', date: '2023' },
  { id: 'gal-10', src: '/placeholder.svg', alt: 'Book launch event', category: 'media', date: '2023' },
  { id: 'gal-11', src: '/placeholder.svg', alt: 'Mentorship session with founders', category: 'workshop', date: '2022' },
  { id: 'gal-12', src: '/placeholder.svg', alt: 'Award ceremony - Young Achiever', category: 'award', date: '2022' },
];

export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Young Entrepreneur of the Year',
    organization: 'Maharashtra State Innovation Council',
    year: 2024,
    description: 'Recognized for outstanding contribution to the startup ecosystem and youth empowerment.',
    image: '/placeholder.svg',
  },
  {
    id: 'award-2',
    title: 'Social Impact Award',
    organization: 'IEC Foundation',
    year: 2023,
    description: 'For impacting 10,000+ youth through entrepreneurship education programs.',
    image: '/placeholder.svg',
  },
  {
    id: 'award-3',
    title: 'Best Content Creator - Entrepreneurship',
    organization: 'Digital India Awards',
    year: 2023,
    description: 'Recognized for creating valuable content for aspiring entrepreneurs.',
    image: '/placeholder.svg',
  },
  {
    id: 'award-4',
    title: 'Rising Star in Education',
    organization: 'EdTech Awards India',
    year: 2022,
    description: 'For innovative approaches to entrepreneurship education.',
    image: '/placeholder.svg',
  },
  {
    id: 'award-5',
    title: 'Community Leader Award',
    organization: 'StartupIndia',
    year: 2022,
    description: 'For building and nurturing a community of 50,000+ entrepreneurs.',
    image: '/placeholder.svg',
  },
  {
    id: 'award-6',
    title: 'Youth Icon Award',
    organization: 'Pune Youth Foundation',
    year: 2021,
    description: 'For inspiring and mentoring young entrepreneurs in the region.',
    image: '/placeholder.svg',
  },
];

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'conference', label: 'Conferences' },
  { id: 'award', label: 'Awards' },
  { id: 'community', label: 'Community' },
  { id: 'media', label: 'Media' },
];
