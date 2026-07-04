export const profile = {
  name: "Beckett Dunlavy",
  title: "SWE Intern @ Tesla",
  university: "University of New Mexico",
  bio: "High Performance Computing",
  resumePdf: "/Beckett_Dunlavy_Resume.pdf",
  photo: "/images/personal3.jpg",
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
    title: "Software Engineering Intern",
    organization: "Tesla",
    logoSlug: "tesla",
    logoUrl: "https://www.tesla.com",
    location: "Palo Alto, CA",
    startDate: "May 2026",
    endDate: "",
    current: true,
    responsibilities: ["HPC Infrastructure for Tesla Autopilot", "Kubernetes"],
  },
  {
    title: "HPC System and User Support",
    organization: "Center for Advanced Research Computing (CARC) at UNM",
    logo: "/images/unm_logo.png",
    logoUrl: "https://carc.unm.edu",
    location: "Albuquerque, NM",
    startDate: "January 2026",
    endDate: "May 2026",
    current: false,
    responsibilities: [
      "Support HPC research and development",
      "System support on clusters",
    ],
  },
  {
    title: "Research Assistant",
    organization: "UNM Department of Computer Science",
    logo: "/images/unm_logo.png",
    logoUrl: "https://www.unm.edu",
    location: "Albuquerque, NM",
    startDate: "May 2025",
    endDate: "May 2026",
    current: false,
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
      "Led weekly lab sessions, helped students with content understanding, graded homework"
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
      { url: "/images/sc25_2.jpg", alt: "SC25 Competition Photo 2" },
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
  /** internal route for projects with their own page */
  link?: string;
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

export type Sc26Member = {
  name: string;
  role: string;
  bio?: string;
  photo: string;
  url?: string;
};

export type Sc26TimelineItem = {
  date: string;
  labels: string[];
  done?: boolean;
};

export const sc26 = {
  logo: "/images/sc26/SC26-01.png",
  title: "Team UNM · SC26",
  subtitle: "SCC Connect",
  meta: "Chicago, IL · June – November 2026",
  overviewUrl: "https://sc26.supercomputing.org/students/scc-connect/",
  timeline: [
    { date: "May 15", labels: ["Application Deadline"], done: true },
    {
      date: "Jun 19",
      labels: ["SC26 Teams Announced"],
      done: true,
    },
    { date: "Jun-Nov", labels: ["Prepare with team"] },
    { date: "TBA", labels: ["Benchmarking"] },
    { date: "Nov 16–18", labels: ["Competition"] },
  ] as Sc26TimelineItem[],
  manager: [
    {
      name: "Beckett Dunlavy",
      role: "Team Manager",
      bio: "Senior - Computer Science, incoming Software Engineer Intern at Tesla (ML & HPC Infra). Competed in indy-SC25 last year.",
      photo: "/images/sc26/SC26-beckett-dunlavy-headshot.jpeg",
      url: "https://www.linkedin.com/in/beckettd/",
    },
  ] as Sc26Member[],
  team: [
    {
      name: "Kiana Tarter",
      role: "Team Member",
      photo: "/images/sc26/SC26-kianara-tarter.JPG",
      url: "https://www.linkedin.com/in/kiana-m-t/",
    },
    {
      name: "Ethan Hoover",
      role: "Team Member",
      photo: "/images/sc26/SC26-ethan-hoover-headshot.jpg",
      url: "https://www.linkedin.com/in/ethanhoover15/",
    },
    {
      name: "Nevaeh Martinez",
      role: "Team Member",
      photo: "/images/sc26/SC26-nevaeh-martinez-headshot.jpg",
      url: "https://www.linkedin.com/in/nevaeh-martinez-4400b9380/",
    },
    {
      name: "Amber Smith",
      role: "Team Member",
      photo: "/images/sc26/SC26-amber-smith-headshot.jpg",
      url: "https://www.linkedin.com/in/amber-smith-51875838b/",
    },
    {
      name: "Abdullah Ismail",
      role: "Team Member",
      photo: "/images/sc26/SC26-abdullah-ismail-headshot.jpeg",
      url: "https://www.linkedin.com/in/abdullah-ismail-7046342ab/",
    },
  ] as Sc26Member[],
  coaches: [
    {
      name: "Ryan Scherbarth",
      role: "Coach",
      bio: "Sr. Software Engineer at Tesla (ML & HPC Infra). Led UNM's team at SC23 and SC24, and multiple other HPC competitions.",
      photo: "/images/sc26/Profile-05.jpg",
      url: "https://ryanscherbarth.com",
    },
    {
      name: "Alex Knigge",
      role: "Coach",
      bio: "Software Engineer at Sandia National Laboratories (HPC monitoring & perf). Led UNM's team at SC25 and multiple other HPC competitions.",
      photo: "/images/sc26/SC26-alex-knigge-headshot.jpg",
      url: "https://alexknigge.com",
    },
    {
      name: "Dr. Matthew Fricke",
      role: "Faculty Advisor",
      bio: "Research Associate Professor at the University of New Mexico, and faculty sponsor of UNM's HPC team since it's founding in 2023.",
      photo: "/images/sc26/SC26-matthew-fricke-headshot.jpeg",
      url: "https://fricke.uk/",
    },
  ] as Sc26Member[],
};

export type Slide = {
  /** small mono label above the title */
  eyebrow?: string;
  title: string;
  body?: string;
  bullets?: string[];
  image?: { url: string; alt: string };
};

export type SlideDeck = {
  id: string;
  title: string;
  date: string;
  description: string;
  slides: Slide[];
};

export const sccConnect = {
  intro:
    "SCC Connect brings the Student Cluster Competition community together — connecting teams, sharing what we learned competing at IndySCC, and helping new teams get started with high performance computing. More details coming soon.",
  decks: [
    {
      id: "demo",
      title: "Demo Deck",
      date: "July 2026",
      description: "A test slide show to preview the in-browser format.",
      slides: [
        {
          eyebrow: "SCC Connect",
          title: "Demo Deck",
          body: "A quick tour of the slide format — arrow keys or the buttons below to navigate.",
        },
        {
          eyebrow: "01 · About",
          title: "What is SCC Connect?",
          bullets: [
            "Connecting Student Cluster Competition teams and mentors",
            "Sharing lessons learned from IndySCC 25",
            "Helping new teams get started with HPC",
          ],
        },
        {
          eyebrow: "02 · Format",
          title: "Slides live in the browser",
          body: "Each deck is written in TypeScript and rendered in the same style as the rest of the site — no PDFs, no external embeds, light and dark mode included.",
        },
        {
          eyebrow: "03 · Media",
          title: "Slides can hold photos too",
          image: { url: "/images/sc25_1.JPG", alt: "IndySCC 25 team photo" },
        },
        {
          eyebrow: "Fin",
          title: "Thanks!",
          body: "Feedback welcome — this is a demo deck, real content coming soon.",
        },
      ],
    },
  ] satisfies SlideDeck[],
};

export const meet = {
  bookingsUrl:
    "https://outlook.office.com/bookwithme/user/7bb42e3f5bfa449e8094d9208d68bfaf@unm.edu/meetingtype/rgieGmhZa0-UAKWry1YL7Q2?anonymous&ismsaljsauthenabled&ep=mlink",
  calendarUrl:
    "https://outlook.office365.com/owa/calendar/7bb42e3f5bfa449e8094d9208d68bfaf@unm.edu/b6e7c3d7619b4d46945eb19f464c7aba13433832270352605996/calendar.html",
};
