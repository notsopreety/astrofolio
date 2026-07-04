export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  status: 'completed' | 'upcoming' | 'ongoing';
  faculty?: string;
  description: string;
  connections: string[]; // IDs of other entries or milestones this connects to
  skills: string[];
}

export interface JourneyEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'project' | 'work' | 'achievement';
  icon: string;
  connections: string[]; // Graph connectivity
}

export const personalInfo = {
  name: "Samir Badaila",
  birthdate: "2006-08-11",
  location: "Kathmandu, Nepal",
  email: "itssamir444@gmail.com",
  bio: "I am a passionate MERN stack developer with a strong focus on backend development. My journey in programming began with a curiosity about how web applications work behind the scenes, which led me to specialize in creating efficient, scalable backend solutions. I enjoy solving complex problems, reverse-engineering web systems, and continuously learning new technologies to enhance my skills."
};

export const educationList: EducationEntry[] = [
  {
    id: "edu-highschool",
    degree: "+2 Computer Science",
    institution: "High School Graduation",
    duration: "Completed",
    status: "completed",
    faculty: "Management Faculty",
    description: "Gained fundamental knowledge in algorithms, database design basics, and programming logic.",
    connections: ["journey-started"],
    skills: ["C", "SQL", "Algorithms"]
  },
  {
    id: "edu-bachelors",
    degree: "BSc. (Hons) in Computer Science / IT",
    institution: "University level",
    duration: "Upcoming / Planned",
    status: "upcoming",
    description: "Planning to pursue advanced studies to deepen theoretical knowledge in systems engineering, security, and distributed computing architectures.",
    connections: ["edu-highschool", "journey-present"],
    skills: ["Systems Design", "Security", "Distributed Computing"]
  }
];

export const journeyList: JourneyEntry[] = [
  {
    id: "journey-started",
    year: "2020",
    title: "Started Learning Web Development",
    description: "Began my journey into web development with HTML, CSS, and JavaScript fundamentals.",
    type: "education",
    icon: "📖",
    connections: ["journey-react"]
  },
  {
    id: "journey-react",
    year: "2021",
    title: "First React Project",
    description: "Built my first React application, a task management system with basic CRUD functionality.",
    type: "project",
    icon: "💻",
    connections: ["journey-node"]
  },
  {
    id: "journey-node",
    year: "2021",
    title: "Learned Node.js & Express",
    description: "Expanded my skills to backend development with Node.js and Express, building RESTful APIs.",
    type: "education",
    icon: "📖",
    connections: ["journey-freelance"]
  },
  {
    id: "journey-freelance",
    year: "2022",
    title: "First Freelance Project",
    description: "Completed my first paid freelance project, an e-commerce website for a local business.",
    type: "work",
    icon: "💼",
    connections: ["journey-mongodb"]
  },
  {
    id: "journey-mongodb",
    year: "2022",
    title: "MongoDB Certification",
    description: "Earned MongoDB certification, deepening my knowledge of NoSQL database design and optimization.",
    type: "achievement",
    icon: "🏆",
    connections: ["journey-ecommerce"]
  },
  {
    id: "journey-ecommerce",
    year: "2023",
    title: "Full-Stack E-Commerce Platform",
    description: "Developed a complete e-commerce platform with user authentication, payment processing, and admin dashboard.",
    type: "project",
    icon: "💻",
    connections: ["journey-startup"]
  },
  {
    id: "journey-startup",
    year: "2023",
    title: "Junior Developer Position",
    description: "Secured a position as a Junior MERN Stack Developer at a tech startup, working on innovative web applications.",
    type: "work",
    icon: "💼",
    connections: ["journey-present"]
  },
  {
    id: "journey-present",
    year: "Present",
    title: "Continuous Learning & Growth",
    description: "Constantly expanding my skills with new technologies and frameworks while building meaningful projects.",
    type: "education",
    icon: "🚀",
    connections: []
  }
];
