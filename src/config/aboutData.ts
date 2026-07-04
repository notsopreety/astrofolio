export interface PersonalInfo {
  name: string;
  birthdate: string; // "YYYY-MM-DD"
  location: string;
  email: string;
  bio: string;
}

export const personalInfo: PersonalInfo = {
  name: "Samir Badaila",
  birthdate: "2006-08-11",
  location: "Kathmandu, Nepal",
  email: "itssamir444@gmail.com",
  bio: "I am a passionate MERN stack developer with a strong focus on backend development. My journey in programming began with a curiosity about how web applications work behind the scenes, which led me to specialize in creating efficient, scalable backend solutions. I enjoy solving complex problems, reverse-engineering web systems, and continuously learning new technologies to enhance my skills."
};

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'project' | 'work' | 'achievement';
}

export interface EducationNode {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  desc: string;
  year?: string;
  branch?: 'main' | 'left' | 'right';
  connections?: string[]; // IDs of child nodes it connects to
}

export const journeyData: JourneyItem[] = [
  {
    year: "2020",
    title: "Started Learning Web Development",
    description: "Began my journey into web development with HTML, CSS, and JavaScript fundamentals.",
    type: "education"
  },
  {
    year: "2021",
    title: "First React Project",
    description: "Built my first React application, a task management system with basic CRUD functionality.",
    type: "project"
  },
  {
    year: "2021",
    title: "Learned Node.js & Express",
    description: "Expanded my skills to backend development with Node.js and Express, building RESTful APIs.",
    type: "education"
  },
  {
    year: "2022",
    title: "MongoDB Certification",
    description: "Earned MongoDB certification, deepening my knowledge of NoSQL database design and optimization.",
    type: "achievement"
  },
  {
    year: "2023",
    title: "Worked on Autonomous Bot Project",
    description: "Developed some cool Chatbot project on Node.js for telegram, discord and other platforms.",
    type: "project"
  },
  {
    year: "Present",
    title: "Continuous Learning & Growth",
    description: "Constantly expanding my skills with new technologies and frameworks while building meaningful projects.",
    type: "education"
  }
];

export const educationData: EducationNode[] = [
  {
    id: "highschool",
    label: "+2 Computer Science",
    title: "High School Graduation",
    subtitle: "Nepal Kasthamandap SS (Management Faculty)",
    status: "completed",
    desc: "Gained fundamental knowledge in algorithms, database design basics, programming logic and management related concepts.",
    year: "2025",
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
    year: "2025 - Present",
    branch: "left"
  },
  {
    id: "bachelors",
    label: "BSc. (Hons) CS / IT",
    title: "Bachelor's Degree",
    subtitle: "Upcoming / Planned",
    status: "upcoming",
    desc: "Planning to pursue advanced studies to deepen theoretical knowledge in systems engineering and distributed computing.",
    year: "Future",
    branch: "right"
  }
];
