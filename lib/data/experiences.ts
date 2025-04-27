export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Lead the frontend development of the company\'s flagship product, mentoring junior developers, and implementing best practices for code quality and performance.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'exp-2',
    role: 'Fullstack Developer',
    company: 'Digital Solutions Agency',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client websites and web applications, working across the full stack from database design to frontend implementation.',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
  },
  {
    id: 'exp-3',
    role: 'Mobile App Developer',
    company: 'AppCraft Studio',
    period: '2018 - 2020',
    description: 'Developed cross-platform mobile applications for iOS and Android, focusing on performance optimization and clean architecture.',
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
  },
  {
    id: 'exp-4',
    role: 'UI/UX Designer',
    company: 'Creative Design Lab',
    period: '2016 - 2018',
    description: 'Created user interfaces and experiences for web and mobile applications, conducted user research and usability testing to improve product design.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Master of Computer Science',
    institution: 'University of Technology',
    period: '2014 - 2016',
    description: 'Specialized in Human-Computer Interaction and Software Engineering, with a thesis on adaptive user interfaces.',
  },
  {
    id: 'edu-2',
    degree: 'Bachelor of Science in Software Development',
    institution: 'State Technical College',
    period: '2010 - 2014',
    description: 'Graduated with honors. Focused on programming fundamentals, web development, and database management.',
  },
];