import profilePhoto from './assets/brian-profile.jpg'
import highlandFresh from './assets/highland-fresh.png'
import dotaPredictor from './assets/dota-draft-predictor.png'
import dotaTracker from './assets/dota-tracker.png'
import minecraftGame from './assets/minecraft-game.png'
import capstoneBai from './assets/capstone-bai.png'

export const profile = {
  name: 'Brian Ragasi',
  initials: 'BR',
  role: 'Full-Stack Developer & IT Student',
  location: 'Philippines',
  availability: 'Open to internships and collaborations',
  email: 'ragasibrian2@gmail.com',
  github: 'https://github.com/brianragasi/',
  linkedin: 'https://www.linkedin.com/in/brian-ragasi-08467241b/',
  photo: profilePhoto,
  summary:
    'I build practical web applications and dependable technical systems. My work combines clear interface design, structured data, and reliable infrastructure to solve real workflow problems.',
}

export const projects = [
  {
    title: 'Highland Fresh Management System',
    category: 'Operations Management Platform',
    description: 'An end-to-end dairy operations platform designed to replace fragmented manual workflows with a unified system for staff access, inventory, orders, and reporting.',
    contribution: 'Full-stack application development, interface design, authentication flows, and relational data modeling.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MySQL'],
    image: highlandFresh,
    imageAlt: 'Highland Fresh Dairy Operations System staff authentication page',
    featured: true,
  },
  {
    title: 'Aegis Signal — Dota 2 Match Tracker',
    category: 'Cloud Analytics & Prediction System',
    description: 'A cloud-native Dota 2 platform for live match tracking, schedule ingestion, transparent winner probabilities, roster continuity, trend analysis, and paper-mode evaluation.',
    contribution: 'End-to-end architecture, Cloudflare Worker APIs, D1 data modeling, provider integrations, prediction logic, automated ingestion, testing, and responsive product design.',
    technologies: ['Cloudflare Workers', 'D1', 'JavaScript', 'Vitest'],
    image: dotaTracker,
    imageAlt: 'Aegis Signal live board for professional Dota 2 match tracking and probability analysis',
  },
  {
    title: 'Dota 2 Analytics',
    category: 'Data & Prediction Interface',
    description: 'A match-analysis product that organizes team drafts and dense game data into an accessible prediction and comparison experience.',
    contribution: 'Data-oriented interface design, application logic, API integration, and analytics presentation.',
    technologies: ['React', 'Python', 'API Integration', 'Data Visualization'],
    image: dotaPredictor,
    imageAlt: 'Dota 2 DraftPredictor interface showing Radiant and Dire team drafts',
  },
  {
    title: 'Minecraft Server Infrastructure',
    category: 'Systems & Infrastructure',
    description: 'A performance-minded multiplayer server environment with player systems, service monitoring, access controls, operational tooling, and server metrics.',
    contribution: 'Server administration, performance monitoring, permissions, networking, and operational automation.',
    technologies: ['Linux', 'Docker', 'Networking', 'Automation'],
    image: minecraftGame,
    imageAlt: 'Minecraft multiplayer server with player and performance information',
  },
  {
    title: 'CapstoneBai',
    category: 'Student Productivity Tool',
    description: 'A capstone title generator for students in Cagayan de Oro City, using language and database selections to guide relevant project ideas.',
    contribution: 'Product concept, user interface, input workflow, and title-generation experience.',
    technologies: ['Web Development', 'UI Design', 'Form Logic', 'MySQL'],
    image: capstoneBai,
    imageAlt: 'CapstoneBai title generator interface',
  },
]

export const capabilities = [
  { title: 'Frontend Development', description: 'Responsive, accessible interfaces with React, TypeScript, JavaScript, HTML, and CSS.' },
  { title: 'Backend & Data', description: 'APIs, authentication, business logic, PHP, Node.js, Python, MySQL, and PostgreSQL.' },
  { title: 'Systems & Infrastructure', description: 'Linux administration, Docker, networking, deployment practices, and service monitoring.' },
  { title: 'Delivery & Collaboration', description: 'Git workflows, testing, technical documentation, iterative design, and clear communication.' },
]

export const principles = [
  ['01', 'Understand the problem', 'Clarify the user, workflow, constraints, and measurable outcome before choosing a solution.'],
  ['02', 'Build for reliability', 'Keep the interface simple while giving the implementation a maintainable and dependable foundation.'],
  ['03', 'Improve with evidence', 'Test the result, learn from feedback, and document decisions so the product can continue to improve.'],
] as const
