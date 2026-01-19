export interface SpeakingTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  keyPoints: string[];
}

export interface SpeakingEvent {
  id: string;
  eventName: string;
  venue: string;
  date: string;
  type: 'keynote' | 'panel' | 'workshop' | 'guest-lecture';
  image?: string;
}

export const speakingTopics: SpeakingTopic[] = [
  {
    id: 'entrepreneurship',
    title: 'Building from Zero',
    description: 'The journey of building a startup from scratch—failures, pivots, and breakthroughs.',
    icon: 'Rocket',
    keyPoints: [
      'Finding your first idea',
      'Building without resources',
      'The art of the pivot',
      'Scaling with limited capital',
    ],
  },
  {
    id: 'innovation',
    title: 'Innovation in Bharat',
    description: 'How Indian entrepreneurs can innovate for India and the world.',
    icon: 'Lightbulb',
    keyPoints: [
      'Jugaad vs. sustainable innovation',
      'Solving India-first problems',
      'Technology for the masses',
      'Building globally competitive products',
    ],
  },
  {
    id: 'youth',
    title: 'Youth & Ambition',
    description: 'Inspiring the next generation to dream big and take action.',
    icon: 'Star',
    keyPoints: [
      'From consumer to creator',
      'Building skills for the future',
      'The power of starting early',
      'Balancing dreams with reality',
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Impact',
    description: 'Leading with purpose and creating lasting impact.',
    icon: 'Users',
    keyPoints: [
      'Servant leadership in practice',
      'Building high-trust teams',
      'Social entrepreneurship',
      'Measuring impact beyond profit',
    ],
  },
  {
    id: 'content',
    title: 'Building in Public',
    description: 'The power of sharing your journey—content, community, and brand building.',
    icon: 'Mic',
    keyPoints: [
      'Personal branding for entrepreneurs',
      'Content that converts',
      'Building community around your mission',
      'From writer to thought leader',
    ],
  },
  {
    id: 'rural',
    title: 'Rural Innovation',
    description: 'Entrepreneurship opportunities in tier-2, tier-3 cities and villages.',
    icon: 'MapPin',
    keyPoints: [
      'Untapped opportunities in small towns',
      'Distribution and logistics challenges',
      'Building for the next billion users',
      'Case studies of rural success stories',
    ],
  },
];

export const speakingEvents: SpeakingEvent[] = [
  {
    id: 'event-1',
    eventName: 'TEDx Youth Summit',
    venue: 'Mumbai',
    date: '2024-11',
    type: 'keynote',
    image: '/placeholder.svg',
  },
  {
    id: 'event-2',
    eventName: 'Startup India Conclave',
    venue: 'Delhi',
    date: '2024-09',
    type: 'panel',
    image: '/placeholder.svg',
  },
  {
    id: 'event-3',
    eventName: 'IIT Bombay E-Summit',
    venue: 'Mumbai',
    date: '2024-08',
    type: 'keynote',
    image: '/placeholder.svg',
  },
  {
    id: 'event-4',
    eventName: 'Youth Entrepreneurship Workshop',
    venue: 'Pune',
    date: '2024-07',
    type: 'workshop',
    image: '/placeholder.svg',
  },
  {
    id: 'event-5',
    eventName: 'Maharashtra State Innovation Summit',
    venue: 'Nagpur',
    date: '2024-06',
    type: 'guest-lecture',
    image: '/placeholder.svg',
  },
  {
    id: 'event-6',
    eventName: 'College Fest - E-Cell',
    venue: 'Bangalore',
    date: '2024-04',
    type: 'keynote',
    image: '/placeholder.svg',
  },
];

export const speakerStats = [
  { label: 'Events', value: '100+' },
  { label: 'Audience Reached', value: '25,000+' },
  { label: 'Cities', value: '20+' },
  { label: 'Corporate Talks', value: '30+' },
];
