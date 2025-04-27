export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Mobile App',
    description: 'A complete e-commerce solution with React Native and Node.js backend. Features include user authentication, product browsing, cart management, payments, and order tracking.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Financial Dashboard',
    description: 'Data visualization dashboard for financial analytics with real-time updates, interactive charts, and customizable widgets. Built with Next.js and D3.js.',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Travel Planner Web App',
    description: 'Travel itinerary planner that helps users organize trips with interactive maps, destination recommendations, and weather forecasts.',
    tags: ['Vue.js', 'Firebase', 'Google Maps API', 'Node.js'],
    image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: 'project-4',
    title: 'Social Media Platform',
    description: 'Full-stack social networking platform with features like user profiles, posts, comments, likes, and direct messaging.',
    tags: ['React', 'GraphQL', 'Apollo', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: 'project-5',
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts, nutrition, and progress with customizable fitness plans and analytics.',
    tags: ['Flutter', 'Firebase', 'Charts', 'Health API'],
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: 'project-6',
    title: 'Portfolio Website Design',
    description: 'Custom portfolio website design for a photographer with gallery features, animations, and contact form.',
    tags: ['Figma', 'UI Design', 'Prototyping', 'Design System'],
    image: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
];