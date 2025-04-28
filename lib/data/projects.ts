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
    title: 'Sparkline',
    description: 'Un landing page pour la startup Sparkline.',
    tags: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://res.cloudinary.com/drxouwbms/image/upload/v1742057927/Screenshot_2025-03-15_at_16.58.17_iy8fsq.png',
    link: 'https://www.sparkline.sn',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Threadline',
    description: "Réseau social pour les tailleurs et vendeurs d'articles de couture.",
    tags: ['ReactJS', 'TypeScript', 'NodeJs', 'Tailwind CSS', 'postgreSQL', 'Prisma', 'express'],
    image: 'https://res.cloudinary.com/drxouwbms/image/upload/v1732391039/n42nbuhcpizq32ajjua8.png',
    link: '#',
    featured: true,
  },
  
];