export interface ImpactCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  initiatives: string[];
}

export interface ImpactStat {
  label: string;
  value: string;
  description?: string;
}

export interface ImpactImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const impactCategories: ImpactCategory[] = [
  {
    id: 'education',
    title: 'Education',
    description: 'Making quality entrepreneurship education accessible to all, regardless of background or location.',
    icon: 'GraduationCap',
    initiatives: [
      'Free online courses for aspiring entrepreneurs',
      'Scholarship programs for underprivileged students',
      'Curriculum development for schools and colleges',
      'Teacher training programs for entrepreneurship education',
    ],
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    description: 'Building an ecosystem that nurtures and supports new ventures from idea to scale.',
    icon: 'Rocket',
    initiatives: [
      'Startup incubation and acceleration programs',
      'Seed funding connections for early-stage startups',
      'Mentorship matching with industry experts',
      'Networking events and demo days',
    ],
  },
  {
    id: 'youth',
    title: 'Youth Empowerment',
    description: 'Inspiring and equipping young people with skills and mindset for success.',
    icon: 'Users',
    initiatives: [
      'Youth leadership development programs',
      'Campus ambassador programs',
      'Skill development workshops',
      'Career guidance and counseling',
    ],
  },
  {
    id: 'community',
    title: 'Community Development',
    description: 'Creating positive change at the grassroots level through sustainable initiatives.',
    icon: 'Heart',
    initiatives: [
      'Rural entrepreneurship programs',
      'Women entrepreneur support groups',
      'Local artisan marketplace development',
      'Community health and awareness campaigns',
    ],
  },
];

export const impactStats: ImpactStat[] = [
  { label: 'Lives Impacted', value: '50,000+', description: 'Through various programs and initiatives' },
  { label: 'Workshops Conducted', value: '200+', description: 'Across schools, colleges, and communities' },
  { label: 'Startups Mentored', value: '100+', description: 'From idea stage to growth' },
  { label: 'Cities Reached', value: '30+', description: 'Including tier-2 and tier-3 cities' },
  { label: 'Partner Organizations', value: '50+', description: 'NGOs, colleges, and corporate partners' },
  { label: 'Volunteer Hours', value: '5,000+', description: 'Community service and outreach' },
];

export const impactImages: ImpactImage[] = [
  { id: 'img-1', src: '/images/speaking2.jpeg', alt: 'Workshop session with students', category: 'education' },
  { id: 'img-2', src: '/images/speaking4.jpeg', alt: 'Startup pitch event', category: 'entrepreneurship' },
  { id: 'img-3', src: '/images/speaking5.jpeg', alt: 'Youth leadership camp', category: 'youth' },
  { id: 'img-4', src: '/images/speaking6.jpeg', alt: 'Rural community workshop', category: 'community' },
  { id: 'img-5', src: '/images/speaking7.jpeg', alt: 'Mentorship session', category: 'entrepreneurship' },
  { id: 'img-6', src: '/images/c2b80b55-54d7-4d6d-9793-318956463d41.jpeg', alt: 'College entrepreneurship cell launch', category: 'education' },
  { id: 'img-7', src: '/images/e295f6eb-9325-4984-a801-28bc4fa0d586.jpeg', alt: 'Women entrepreneur meetup', category: 'community' },
  { id: 'img-8', src: '/images/b68a0013-06aa-4022-81ba-f8baea159320.jpeg', alt: 'Student innovation showcase', category: 'youth' },
];
