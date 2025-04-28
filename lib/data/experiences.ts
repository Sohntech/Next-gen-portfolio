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
    role: 'Stagiaire Consultant IT Junior',
    company: 'INENI',
    period: '2 Mai 2025 - Present',
    description: 'Stage et formation en ITSM',
    technologies: ['ServiceNow', 'ITIL', 'Agile', 'Scrum', 'Kanban'],
  },
  {
    id: 'exp-2',
    role: 'Stagiaire Sonatel DCIRE/ODC',
    company: 'Orange Digital Center',
    period: '2 fevrier 2025 - 2 Mai 2025 ',
    description: 'Conception et développement d\'applications web et mobiles pour des projets internes et externes, en mettant l\'accent sur l\'expérience utilisateur et la performance.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'NestJS', 'Prisma'],
  },
  {
    id: 'exp-3',
    role: 'Développeur Full Stack',
    company: 'Sparkline',
    period: '2024 - 2025',
    description: 'Réalisation de solutions digitales pour des clients variés, en utilisant des technologies modernes pour le développement d\'applications web et mobiles.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
  },
  {
    id: 'exp-4',
    role: 'UI/UX Designer',
    company: 'Sparkline',
    period: '2024 - 2025',
    description: 'Conception d\'interfaces utilisateur et d\'expériences utilisateur pour des applications web et mobiles, en collaborant étroitement avec les équipes de développement.',
    technologies: ['Figma', 'Canva','Prototyping',  'User Research', 'Wireframing'],
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
    degree: 'Certificat professionnel de Spécialisation (Dev web mobile)',
    institution: 'ECSA (Ecole du Code Sonatel Academy)',
    period: '2024 - 2025',
    description: 'Obtention du certificat professionnel de spécialisation en programmation web et mobile. Formation intensive sur les technologies modernes de développement.',
  },
  {
    id: 'edu-2',
    degree: 'Licence 2 de Droit Privé',
    institution: 'UGB (Université Gaston Berger)',
    period: '2019 - 2021',
    description: 'Formation en droit privé, avec une spécialisation en droit des affaires',
  },
  {
    id: 'edu-3',
    degree: 'Baccalauréat',
    institution: 'Lycée Cheikh Omar Foutiyou Tall',
    period: '2016 - 2017',
    description: 'Obtention du baccalauréat L2 avec mention Assez Bien.',
  },
];