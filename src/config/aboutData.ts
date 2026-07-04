export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'project' | 'work' | 'achievement';
  icon: string;
}

export interface EducationNode {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  desc: string;
  icon: string;
  branch?: 'main' | 'left' | 'right';
  connections?: string[]; // IDs of child nodes it connects to
}

export const journeyData: JourneyItem[] = [
  {
    year: "2020",
    title: "Started Learning Web Development",
    description: "Began my journey into web development with HTML, CSS, and JavaScript fundamentals.",
    type: "education",
    icon: "📖"
  },
  {
    year: "2021",
    title: "First React Project",
    description: "Built my first React application, a task management system with basic CRUD functionality.",
    type: "project",
    icon: "💻"
  },
  {
    year: "2021",
    title: "Learned Node.js & Express",
    description: "Expanded my skills to backend development with Node.js and Express, building RESTful APIs.",
    type: "education",
    icon: "📖"
  },
  {
    year: "2022",
    title: "First Freelance Project",
    description: "Completed my first paid freelance project, an e-commerce website for a local business.",
    type: "work",
    icon: "💼"
  },
  {
    year: "2022",
    title: "MongoDB Certification",
    description: "Earned MongoDB certification, deepening my knowledge of NoSQL database design and optimization.",
    type: "achievement",
    icon: "🏆"
  },
  {
    year: "2023",
    title: "Full-Stack E-Commerce Platform",
    description: "Developed a complete e-commerce platform with user authentication, payment processing, and admin dashboard.",
    type: "project",
    icon: "💻"
  },
  {
    year: "2023",
    title: "Junior Developer Position",
    description: "Secured a position as a Junior MERN Stack Developer at a tech startup, working on innovative web applications.",
    type: "work",
    icon: "💼"
  },
  {
    year: "Present",
    title: "Continuous Learning & Growth",
    description: "Constantly expanding my skills with new technologies and frameworks while building meaningful projects.",
    type: "education",
    icon: "🚀"
  }
];

export const educationData: EducationNode[] = [
  {
    id: "highschool",
    label: "+2 Computer Science",
    title: "High School Graduation",
    subtitle: "Nepal Kasthamandap SS (Management Faculty)",
    status: "completed",
    desc: "Gained fundamental knowledge in algorithms, database design basics, and programming logic.",
    icon: "🏫",
    branch: "main",
    connections: ["selftaught", "bachelors"]
  },
  {
    id: "selftaught",
    label: "Backend & Systems",
    title: "Self-Taught Specialization",
    subtitle: "Reverse-Engineering & Automation",
    status: "ongoing",
    desc: "Deep-diving into web protocols, server architecture, performance tuning, and scripting systems.",
    icon: "⚙️",
    branch: "left"
  },
  {
    id: "bachelors",
    label: "BSc. (Hons) CS / IT",
    title: "Bachelor's Degree",
    subtitle: "Upcoming / Planned",
    status: "upcoming",
    desc: "Planning to pursue advanced studies to deepen theoretical knowledge in systems engineering and distributed computing.",
    icon: "🎓",
    branch: "right"
  }
];
