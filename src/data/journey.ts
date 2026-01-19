export interface JourneyMilestone {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
  current?: boolean;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'startupsindia',
    organization: 'StartupsIndia',
    role: 'Founder & CEO',
    period: '2020 - Present',
    description: 'Founded StartupsIndia with a mission to democratize entrepreneurship education. Built a platform that connects aspiring entrepreneurs with mentors, resources, and opportunities. The platform has grown to become one of India\'s leading voices in the startup ecosystem.',
    achievements: [
      'Built community of 50,000+ aspiring entrepreneurs',
      'Published 500+ articles on entrepreneurship and innovation',
      'Partnered with 100+ startups for mentorship programs',
      'Organized 50+ workshops and bootcamps across India',
      'Featured in major business publications',
    ],
    current: true,
  },
  {
    id: 'iec',
    organization: 'IEC (Innovation & Entrepreneurship Cell)',
    role: 'Co-Founder & Director',
    period: '2018 - Present',
    description: 'Co-founded IEC as an NGO focused on youth empowerment through entrepreneurship education. The organization works at the grassroots level, bringing startup culture to tier-2 and tier-3 cities and rural areas.',
    achievements: [
      'Impacted 10,000+ students across Maharashtra',
      'Established entrepreneurship cells in 25+ colleges',
      'Launched rural entrepreneurship program',
      'Conducted 100+ free workshops for underprivileged youth',
      'Created internship opportunities for 500+ students',
    ],
    current: true,
  },
  {
    id: 'shiromani-mart',
    organization: 'Shiromani Mart',
    role: 'Co-Founder',
    period: '2019 - 2021',
    description: 'Ventured into e-commerce with Shiromani Mart, an online marketplace focused on connecting local artisans and small businesses with a broader customer base. The experience taught invaluable lessons about supply chain, customer experience, and the challenges of scaling.',
    achievements: [
      'Onboarded 200+ local vendors and artisans',
      'Processed 5,000+ orders in first year',
      'Developed logistics network for rural delivery',
      'Implemented quality control processes',
      'Exited to focus on education-focused ventures',
    ],
  },
  {
    id: 'creative-guys',
    organization: 'Creative Guys',
    role: 'Founder',
    period: '2017 - 2019',
    description: 'Started Creative Guys as a digital marketing and content agency. This was the first real entrepreneurial venture, learning the ropes of client management, team building, and service delivery.',
    achievements: [
      'Served 50+ clients across industries',
      'Built a team of 10 creative professionals',
      'Specialized in startup branding and marketing',
      'Generated ₹25L+ in revenue',
      'Developed expertise in content strategy',
    ],
  },
  {
    id: 'bijnis',
    organization: 'Bijnis',
    role: 'Growth Intern',
    period: '2016 - 2017',
    description: 'The journey began as an intern at Bijnis, a B2B platform connecting manufacturers with retailers. This experience provided the first taste of the startup ecosystem and planted the seeds for future entrepreneurial ventures.',
    achievements: [
      'Contributed to user acquisition strategies',
      'Learned fundamentals of B2B sales',
      'Understood startup operations firsthand',
      'Mentored by experienced entrepreneurs',
      'Discovered passion for entrepreneurship education',
    ],
  },
];

export const journeyStats = [
  { label: 'Years in Startups', value: '8+' },
  { label: 'Ventures Built', value: '5' },
  { label: 'People Mentored', value: '10K+' },
  { label: 'Workshops Conducted', value: '150+' },
];
