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
  [x: string]: {};
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  color: string;
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Développement Web',
    description: 'Création de sites web et d\'applications web sur mesure avec des technologies modernes comme React, Next.js, et Node.js.',
    icon: Globe,
    color: 'text-blue-500',
  },
  {
    id: 'service-2',
    title: 'Développement Mobile',
    description: 'Applications mobiles natives et hybrides pour iOS et Android, optimisées pour la performance et l\'expérience utilisateur.',
    icon: Smartphone,
    color: 'text-green-500',
  },
  {
    id: 'service-3',
    title: 'UI/UX Design',
    description: 'Conception d\'interfaces utilisateur intuitives et esthétiques, centrées sur l\'expérience utilisateur.',
    icon: Paintbrush,
    color: 'text-purple-500',
  },
  
  {
    id: 'service-4',
    title: 'CMS sur mesure',
    description: 'Développement de systèmes de gestion de contenu personnalisés pour une gestion facile et efficace de votre contenu.',
    icon: Code,
    color: 'text-red-500',
  },
  {
    id: 'service-5',
    title: 'Prompt Engineering',
    description: 'Optimiser les interactions avec les modèles de langage pour des résultats plus précis et pertinents.',
    icon: Bot,
    color: 'text-indigo-500',
  },
  
];