import { 
  Globe, 
  Smartphone, 
  Paintbrush, 
  Database, 
  Code, 
  Bot,
  Cloud,
  LineChart,
  Search,
  Megaphone,
  Users,
  ShieldCheck
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  color: string;
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Web Development',
    description: 'From interactive websites to complex web applications with modern frameworks like React, Next.js, and Vue.',
    icon: Globe,
    color: 'text-blue-500',
  },
  {
    id: 'service-2',
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile apps for iOS and Android using React Native, Flutter, and Swift.',
    icon: Smartphone,
    color: 'text-green-500',
  },
  {
    id: 'service-3',
    title: 'UI/UX Design',
    description: 'User-centered design process from wireframes to high-fidelity prototypes with focus on usability and aesthetics.',
    icon: Paintbrush,
    color: 'text-purple-500',
  },
  {
    id: 'service-4',
    title: 'Backend Development',
    description: 'Scalable server architectures, APIs, and database solutions using Node.js, Express, MongoDB, and PostgreSQL.',
    icon: Database,
    color: 'text-yellow-500',
  },
  {
    id: 'service-5',
    title: 'Custom CMS Solutions',
    description: 'Tailor-made content management systems that fit your specific workflow and content needs.',
    icon: Code,
    color: 'text-red-500',
  },
  {
    id: 'service-6',
    title: 'AI Integration',
    description: 'Implementing artificial intelligence and machine learning features into your applications for enhanced functionality.',
    icon: Bot,
    color: 'text-indigo-500',
  },
  {
    id: 'service-7',
    title: 'Cloud Services',
    description: 'Deployment, hosting, and management of applications on cloud platforms like AWS, Google Cloud, and Azure.',
    icon: Cloud,
    color: 'text-blue-300',
  },
  {
    id: 'service-8',
    title: 'Analytics & SEO',
    description: 'Implementation of analytics tracking and search engine optimization for your digital products.',
    icon: LineChart,
    color: 'text-green-400',
  },
];