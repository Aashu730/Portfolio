import heroImage from '../assets/hero.png'

export const profile = {
  name: 'Aashutosh Ramkrushna Sabat',
  title: 'Software Developer',
  summary:
    'Software developer focused on backend engineering, Python and Java solutions, SQL-driven systems, cloud concepts, and AI-driven product thinking.',
  location: 'Mumbai, India',
  email: 'aashutosh.sabat@example.com',
  phone: '+91 98765 43210',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  photo: '/profile.jpg',
  resume: '/resume.pdf',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:aashutosh.sabat@example.com', icon: 'mail' },
]

export const skills = {
  languages: ['Python', 'Java', 'PHP', 'JavaScript', 'SQL', 'C++'],
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
  backend: ['PHP', 'REST API', 'Django', 'Node.js'],
  database: ['MySQL', 'SQL'],
  cloud: ['Google Cloud', 'Cloud Computing'],
  tools: ['GitHub', 'VS Code', 'Postman', 'Git'],
}

export const services = [
  {
    title: 'Web Development',
    description: 'Crafting polished, responsive web experiences with modern front-end architecture and thoughtful UX.',
    icon: 'development',
  },
  {
    title: 'Software Development',
    description: 'Building reliable software solutions with problem-solving, structured design, and clean implementation.',
    icon: 'architecture',
  },
  {
    title: 'Backend Development',
    description: 'Creating APIs, business logic, and server-side systems that are stable, scalable, and maintainable.',
    icon: 'backend',
  },
  {
    title: 'Database Design',
    description: 'Designing data models and query logic that support real-world performance and maintainability.',
    icon: 'database',
  },
  {
    title: 'Machine Learning',
    description: 'Exploring AI workflows, predictive systems, and intelligent solutions shaped around practical use cases.',
    icon: 'machineLearning',
  },
  {
    title: 'API Development',
    description: 'Delivering clean REST-based integrations with secure, documented interfaces for modern applications.',
    icon: 'api',
  },
]

export const education = [
  {
    year: '2024',
    title: 'M.Sc. Information Technology',
    institution: 'University of Mumbai',
    description: 'Result Awaited',
    detail: 'Final university result is pending, and this section reflects that status clearly.',
  },
  {
    year: '2021',
    title: 'B.Sc. Information Technology',
    institution: 'University of Mumbai',
    description: 'Completed academic foundation in IT and software development.',
    detail: 'Built strong fundamentals in programming, databases, networking, and systems thinking.',
  },
]

export const projects = [
  {
    title: 'Inventory Management Platform',
    summary: 'A modern operations dashboard for tracking inventory, analytics, and product movement in real time.',
    stack: ['React', 'PHP', 'MySQL', 'REST API'],
    features: ['Live analytics', 'Role-based views', 'Inventory forecasting'],
    github: '#',
    demo: '#contact',
  },
  {
    title: 'Movie Ticket Booking System',
    summary: 'A premium cinema-style booking experience with seat selection, scheduling, and streamlined reservations.',
    stack: ['Java', 'SQL', 'Bootstrap', 'JavaScript'],
    features: ['Seat selection', 'Booking flow', 'Interactive UI'],
    github: '#',
    demo: '#contact',
  },
  {
    title: 'AI Research Insight Platform',
    summary: 'A polished project showcase for research-driven AI work with visualization and intelligent data storytelling.',
    stack: ['Python', 'React', 'Machine Learning', 'Cloud'],
    features: ['Research dashboard', 'Data visualization', 'Cloud-ready architecture'],
    github: '#',
    demo: '#research',
  },
]

export const research = [
  {
    title: 'Published Research',
    journal: 'International Journal of Emerging Computing',
    date: '2024',
    summary:
      'Published research work reflects an interest in intelligent systems, practical AI solutions, and scalable problem solving.',
    highlights: ['AI-focused research', 'Practical application', 'Software-driven insights'],
  },
  {
    title: 'Applied AI Systems',
    journal: 'Conference Proceedings on Intelligent Software',
    date: '2025',
    summary:
      'A second research contribution focused on applied AI workflows, modern software systems, and problem-driven implementation.',
    highlights: ['Applied AI', 'Software architecture', 'Data-informed design'],
  },
]

export const certifications = [
  { title: 'Google Cloud', issuer: 'Google Cloud', status: 'Credential available' },
  { title: 'Google Data Science', issuer: 'Google', status: 'Credential available' },
  { title: 'Cloud & AI Foundations', issuer: 'Professional learning', status: 'In progress' },
]

export const achievements = [
  { title: 'Published Research', description: 'Contributed to research work rooted in intelligent systems and applied computing.' },
  { title: 'Google Certifications', description: 'Developed a strong technical signal through cloud and data science-focused learning.' },
  { title: 'Academic Projects', description: 'Built projects that connect software engineering with analytics, design, and problem solving.' },
]

export const github = {
  stats: [
    { label: 'Repositories', value: '10+' },
    { label: 'Top Languages', value: 'Python · Java · JavaScript' },
    { label: 'Pinned Projects', value: '3+' },
  ],
  pinned: [
    { title: 'Portfolio Website', description: 'A premium React portfolio built with Vite, Tailwind, and motion-driven experience design.' },
    { title: 'API Learning Hub', description: 'A practical backend project focused on REST interfaces, CRUD logic, and clean architecture.' },
  ],
}

export const initialPortfolioData = {
  profile,
  skills: [
    { name: 'Python', icon: '' },
    { name: 'Java', icon: '' },
    { name: 'React', icon: '' },
    { name: 'SQL', icon: '' },
  ],
  projects,
  research,
  education,
  certifications,
  achievements,
  github,
  appearance: {
    primaryColor: '#2563EB',
    background: '#050816',
    animationsEnabled: true,
    darkMode: true,
  },
}
