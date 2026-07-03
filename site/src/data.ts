export const profile = {
  name: "Beckett Dunlavy",
  title: "Computer Science Student",
  university: "University of New Mexico",
  intro: "I'm an incoming SWE Intern at Tesla.",
  bio: "Passionate about High Performance Computing and leveraging parallel computing architectures to solve complex computational problems.",
  tagline: "Building the future of computational science",
  resumePdf: "/resume.pdf",
  photo: "/images/personal3.png",
};

export const socialLinks = [
  {
    platform: "Email",
    url: "mailto:mail@beckettdunlavy.com",
    username: "mail@beckettdunlavy.com",
  },
  {
    platform: "GitHub",
    url: "https://github.com/beckdun",
    username: "@beckdun",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/beckettd/",
    username: "Beckett Dunlavy",
  },
] as const;

export type Job = {
  title: string;
  organization: string;
  /** image path for the org logo */
  logo?: string;
  /** simple-icons slug used when no logo image exists */
  logoSlug?: string;
  logoUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
};

export const experience: Job[] = [
  {
    title: "Incoming Software Engineering Intern",
    organization: "Tesla",
    logoSlug: "tesla",
    logoUrl: "https://www.tesla.com",
    location: "Austin, TX",
    startDate: "Summer 2026",
    endDate: "",
    current: false,
    responsibilities: [],
  },
  {
    title: "Research Assistant",
    organization: "UNM Department of Computer Science",
    logo: "/images/unm_logo.png",
    logoUrl: "https://www.unm.edu",
    location: "Albuquerque, NM",
    startDate: "May 2025",
    endDate: "Present",
    current: true,
    responsibilities: [
      "Benchmarked the Hypre algebraic multigrid (AMG) linear solver on the DeltaAI HPC cluster at UIUC",
      "Extended existing C++ software to optimally leverage CPU and NVIDIA GH200 GPUs in AMG linear solvers",
    ],
  },
  {
    title: "Faculty Assistant / Tutor",
    organization: "UNM Department of Computer Science",
    logo: "/images/unm_logo.png",
    logoUrl: "https://www.unm.edu",
    location: "Albuquerque, NM",
    startDate: "May 2024",
    endDate: "May 2025",
    current: false,
    responsibilities: [
      "Created a curriculum to teach Git/GitLab to incoming and enrolled CS students",
      "Produced educational YouTube videos teaching the curriculum",
      "Tutored undergraduate computer science students in a variety of classes",
    ],
  },
  {
    title: "Teaching Assistant",
    organization: "UNM Department of Computer Science",
    logo: "/images/unm_logo.png",
    logoUrl: "https://www.unm.edu",
    location: "Albuquerque, NM",
    startDate: "Jan. 2024",
    endDate: "May 2024",
    current: false,
    responsibilities: [
      "Assisted in teaching duties for Intermediate Programming (CS 251) section with 18 students",
      "Led weekly lab sessions, helped students with content understanding, graded homework",
      "Hosted weekly office hours, helping students 1-on-1 with homework and programming assignments",
    ],
  },
];

export type Skill = {
  name: string;
  /** simple-icons slug, e.g. "python" */
  slug: string;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "C/C++", slug: "cplusplus" },
      { name: "Python", slug: "python" },
      { name: "Java", slug: "openjdk" },
      { name: "Bash", slug: "gnubash" },
    ],
  },
  {
    label: "AI",
    skills: [
      { name: "Claude Code", slug: "claude" },
      { name: "Codex", slug: "openai" },
      { name: "GitHub Copilot", slug: "githubcopilot" },
    ],
  },
  {
    label: "Platforms",
    skills: [
      { name: "Linux", slug: "linux" },
      { name: "macOS", slug: "apple" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "NVIDIA GPUs", slug: "nvidia" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "GitLab", slug: "gitlab" },
    ],
  },
  {
    label: "Office",
    skills: [
      { name: "Jupyter", slug: "jupyter" },
      { name: "LaTeX", slug: "latex" },
      { name: "Google Workspace", slug: "google" },
    ],
  },
];

export type Event = {
  name: string;
  fullName: string;
  date: string;
  location: string;
  description: string;
  url?: string;
  photos: { url: string; alt: string }[];
};

export const events: Event[] = [
  {
    name: "SC 25",
    fullName:
      "International Conference for High Performance Computing, Networking, Storage and Analysis",
    date: "November 2025",
    location: "St. Louis, MO",
    description: "Indy-SCC cluster competition",
    url: "https://sc25.supercomputing.org/2025/10/from-spark-to-flame-introducing-the-indyscc25-teams/",
    photos: [
      { url: "/images/sc25_1.JPG", alt: "SC25 Competition Photo 1" },
      { url: "/images/sc25_2.png", alt: "SC25 Competition Photo 2" },
      { url: "/images/sc25_3.jpg", alt: "SC25 Competition Photo 3" },
      { url: "/images/sc25_4.JPG", alt: "SC25 Competition Photo 4" },
      { url: "/images/sc25_5.JPEG", alt: "SC25 Competition Photo 5" },
    ],
  },
];

export const personalPhotos = [
  { url: "/images/personal1.jpg", alt: "Beckett Dunlavy" },
  { url: "/images/personal2.jpg", alt: "Beckett Dunlavy" },
  { url: "/images/personal4.JPEG", alt: "Beckett Dunlavy" },
  { url: "/images/photo1.jpg", alt: "Photo" },
  { url: "/images/photo2.jpg", alt: "Photo" },
  { url: "/images/photo3.jpg", alt: "Photo" },
];

export type Course = {
  code: string;
  name: string;
  credits: number;
};

export type Semester = {
  term: string;
  courses: Course[];
};

export const semesters: Semester[] = [
  {
    term: "Spring 2026",
    courses: [
      { code: "CS 341L", name: "Intro to Computer Arch & Organization", credits: 3 },
      { code: "CS 362", name: "Data Structures & Algorithms II", credits: 3 },
      { code: "CS 429", name: "Intro to Machine Learning", credits: 3 },
      { code: "CS 460", name: "Software Engineering", credits: 3 },
      { code: "GRMN 303", name: "Adv German Conversation", credits: 3 },
    ],
  },
  {
    term: "Fall 2025",
    courses: [
      { code: "CS 293", name: "Sem: Social & Ethical Issues in Computing", credits: 1 },
      { code: "CS 357L", name: "Declarative Programming", credits: 3 },
      { code: "CS 361L", name: "Data Structures & Algorithms I", credits: 3 },
      { code: "CS 442", name: "Intro to Parallel Processing", credits: 3 },
      { code: "CS 491", name: "High Perform Computing", credits: 3 },
      { code: "GEOL 2110C", name: "Historical Geology", credits: 4 },
    ],
  },
  {
    term: "Spring 2025",
    courses: [
      { code: "CS 351L", name: "Design of Large Programs", credits: 4 },
      { code: "ENVS 1130", name: "The Blue Planet", credits: 3 },
      { code: "GRMN 302", name: "Advanced German II", credits: 3 },
      { code: "MATH 375", name: "Intro Numerical Computing", credits: 3 },
      { code: "PHED 1210", name: "Basketball", credits: 2 },
      { code: "STAT 345", name: "Elements of Statistics", credits: 3 },
    ],
  },
  {
    term: "Fall 2024 (Study Abroad)",
    courses: [
      { code: "GRMN 1T02", name: "German Language B2/C1 (FU-Berlin)", credits: 12 },
      { code: "HIST 1T03", name: "Pop Culture: European-American (FU-Berlin)", credits: 6 },
      { code: "HIST 1T04", name: "Rebels, Radicals, Revolutionaries (FU-Berlin)", credits: 6 },
    ],
  },
  {
    term: "Summer 2024 (UNM German Summer School)",
    courses: [
      { code: "GRMN 370", name: "German Language Instruction B1", credits: 1 },
      { code: "GRMN 370", name: "German Language Instruction B1+", credits: 1 },
      { code: "GRMN 380", name: "Lecture Series German Studies", credits: 2 },
      { code: "GRMN 385", name: "Wiedervereinigung", credits: 1 },
      { code: "GRMN 385", name: "In neuen Europa", credits: 1 },
      { code: "GRMN 390", name: "Zeitungsworkshop", credits: 1 },
    ],
  },
  {
    term: "Spring 2024",
    courses: [
      { code: "CS 241L", name: "Data Organization", credits: 3 },
      { code: "CS 261", name: "Math Foundations of CS", credits: 3 },
      { code: "ECE 238L", name: "Computer Logic & Design", credits: 4 },
      { code: "MATH 314", name: "Linear Algebra with Apps", credits: 3 },
      { code: "PHED 1710", name: "Jujutsu", credits: 2 },
    ],
  },
  {
    term: "Fall 2023",
    courses: [
      { code: "ANTH 1140", name: "Intro to Cultural Anthropology", credits: 3 },
      { code: "CS 251L", name: "Intermediate Programming", credits: 3 },
      { code: "GEOL 1110", name: "Physical Geology", credits: 3 },
      { code: "GEOL 1110L", name: "Physical Geology Lab", credits: 1 },
      { code: "GRMN 2120", name: "German IV", credits: 3 },
      { code: "MATH 1522", name: "Calculus II (CNM)", credits: 4 },
    ],
  },
  {
    term: "Summer 2023",
    courses: [
      { code: "CS 152L", name: "Intro to Programming (CNM)", credits: 4 },
      { code: "MATH 1512", name: "Calculus I (CNM)", credits: 4 },
    ],
  },
  {
    term: "Spring 2023",
    courses: [
      { code: "ALBS 2110", name: "Business of Being an Artist", credits: 3 },
      { code: "ARTS 1310", name: "Intro to Ceramics", credits: 3 },
      { code: "COMM 1130", name: "Public Speaking", credits: 3 },
      { code: "FDMA 429", name: "Motion Graphics", credits: 3 },
      { code: "GRMN 2110", name: "German III", credits: 3 },
    ],
  },
  {
    term: "Fall 2022",
    courses: [
      { code: "ENGL 1120", name: "Composition II", credits: 3 },
      { code: "FDMA 1210", name: "Digital Video Production", credits: 3 },
      { code: "FDMA 1520", name: "Intro to Digital Media", credits: 3 },
      { code: "GRMN 1120", name: "German II", credits: 3 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  date: string;
};

export const projects: Project[] = [
  {
    title: "Hybrid CPU-GPU approach to PCG-AMG",
    description:
      "This project investigates a hybrid CPU-GPU execution strategy for PCG-AMG within hypre.",
    technologies: ["MPI", "C++", "Slurm", "OpenMP"],
    githubUrl: "https://github.com/beckdun/hypre_testing",
    date: "2025",
  },
];

export const meet = {
  bookingsUrl:
    "https://outlook.office.com/bookwithme/user/7bb42e3f5bfa449e8094d9208d68bfaf@unm.edu/meetingtype/rgieGmhZa0-UAKWry1YL7Q2?anonymous&ismsaljsauthenabled&ep=mlink",
  calendarUrl:
    "https://outlook.office365.com/owa/calendar/7bb42e3f5bfa449e8094d9208d68bfaf@unm.edu/b6e7c3d7619b4d46945eb19f464c7aba13433832270352605996/calendar.html",
};
