class PagesController < ApplicationController
  def home
    # Carousel images for left side
    @carousel_images = [
      {
        url: "/images/personal1.png",
        alt: "",
        caption: ""
      },
      {
        url: "/images/personal2.png",
        alt: "",
        caption: ""
      },
      {
        url: "/images/personal3.png",
        alt: "",
        caption: ""
      }
      
    ]

    @student_intro = {
      name: "Beckett Dunlavy",
      title: "Computer Science Student",
      university: "University of New Mexico",
      bio: "Passionate about High Performance Computing and leveraging parallel computing architectures to solve complex computational problems.",
      tagline: "Building the future of computational science"
    }

    # Social links with Font Awesome icon names
    @social_links = [
      {
        platform: "Email",
        url: "mailto:mail@beckettdunlavy.com",
        icon: "fa-envelope",
        username: "beckett.dunlavy@gmail.com"
      },
      {
        platform: "GitHub",
        url: "https://github.com/beckdun",
        icon: "fa-github",
        username: "@beckdun"
      },
      {
        platform: "LinkedIn",
        url: "http://linkedin.com/in/beckettd/",
        icon: "fa-linkedin",
        username: "Beckett Dunlavy"
      }
    ]

    # Events attended with photo galleries
    @events = [
      {
        name: "SC 25",
        full_name: "International Conference for High Performance Computing, Networking, Storage and Analysis",
        date: "November 2025",
        location: "St. Louis, MO",
        description: "Indy-SCC cluster competition",
        url: "https://sc25.supercomputing.org/2025/10/from-spark-to-flame-introducing-the-indyscc25-teams/",
        photos: [
          { url: "/images/sc25_1.JPG", alt: "SC25 Competition Photo 1" },
          { url: "/images/sc25_2.png", alt: "SC25 Competition Photo 2" },
          { url: "/images/sc25_3.jpg", alt: "SC25 Competition Photo 3" },
          { url: "/images/sc25_4.JPG", alt: "SC25 Competition Photo 4" },
          { url: "/images/sc25_5.JPEG", alt: "SC25 Competition Photo 5" }
        ]
      }    
    ]
  end

  def resume
    # Experience section (most recent first)
    @experience = [
      {
        title: "Research Assistant",
        organization: "UNM Department of Computer Science",
        logo: "/images/unm_logo.png",
        logo_url: "https://www.unm.edu",
        location: "Albuquerque, NM",
        start_date: "May 2025",
        end_date: "Present",
        current: true,
        responsibilities: [
          "Benchmarked the Hypre algebraic multigrid (AMG) linear solver on the DeltaAI HPC cluster at UIUC",
          "Extended existing C++ software to optimally leverage CPU and NVIDIA GH200 GPUs in AMG linear solvers"
        ]
      },
      {
        title: "Faculty Assistant / Tutor",
        organization: "UNM Department of Computer Science",
        logo: "/images/unm_logo.png",
        logo_url: "https://www.unm.edu",
        location: "Albuquerque, NM",
        start_date: "May 2024",
        end_date: "May 2025",
        current: false,
        responsibilities: [
          "Created a curriculum to teach Git/GitLab to incoming and enrolled CS students",
          "Produced educational YouTube videos teaching the curriculum",
          "Tutored undergraduate computer science students in a variety of classes"
        ]
      },
      {
        title: "Teaching Assistant",
        organization: "UNM Department of Computer Science",
        logo: "/images/unm_logo.png",
        logo_url: "https://www.unm.edu",
        location: "Albuquerque, NM",
        start_date: "Jan. 2024",
        end_date: "May 2024",
        current: false,
        responsibilities: [
          "Assisted in teaching duties for Intermediate Programming (CS 251) section with 18 students",
          "Led weekly lab sessions, helped students with content understanding, graded homework",
          "Hosted weekly office hours, helping students 1-on-1 with homework and programming assignments"
        ]
      }
    ]

    # Education section
    @education = [
      {
        degree: "Major: Computer Science (Engineering) | Minor: German Language",
        institution: "University of New Mexico",
        location: "Albuquerque, NM",
        graduation: "Aug. 2022 – Present",
        gpa: "4.14/4.0",
        honors: [
          "Dean's List (5 semesters)",
          "Woodward Scholarship (4 years)"
        ],
        focus: nil,
        relevant_coursework: [
          "High Performance Computing",
          "Parallel Processing",
          "Numerical Computing",
          "Linear Algebra",
          "Algorithms 1",
          "Design of Large Programs",
          "Computer Logic and Design",
          "Mathematical Statistics",
          "Calculus I/II"
        ]
      },
      {
        degree: "European Studies Program, Intensive German Language Program (B2/C1)",
        institution: "Freie University",
        location: "Berlin, Germany",
        graduation: "Aug. 2024 – Dec. 2024",
        gpa: nil,
        honors: [],
        focus: nil,
        relevant_coursework: []
      }
    ]

    # Skills section (organized by category)
    @skills = {
      programming_languages: ["Java", "C/C++", "Python", "Jupyter Notebooks", "MATLAB", "Bash", "Claude Code", "Codex", "Github Copilot"],
      hpc_technologies: ["HPL", "STREAM", "JetStream2", "CARC", "DeltaAI", "MPI", "slurm", "spack"],
      tools_platforms: ["Git/GitHub", "LaTeX/Overleaf", "Linux", "MacOS", "Windows", "Microsoft Office Suite", "Google Workspace"],
      performance_analysis: [],
      other: []
    }

    # Events & Activities section
    @resume_events = [
      {
        name: "Student Cluster Competition",
        full_name: "HPC, Linux, C++",
        role: "Team Member",
        date: "Jul. 2025 – Present",
        location: "Various",
        description: "Collaborated with teammates to optimize applications on VMs ran on the Jetstream2 cloud system. Built and ran climate applications across multiple nodes using slurm.",
        url: nil,
        logo: nil
      }
    ]
  end

  def courses
    # Enhanced courses with date, description, and HPC relevance scoring
    @courses = [
      {
        code: "CS 101",
        name: "Introduction to Computer Science",
        semester: "Fall 2023",
        date: Date.new(2023, 8, 1),
        topics: ["Programming Fundamentals", "Data Structures", "Algorithms"],
        description: "Foundational course covering basic programming concepts, data structures, and algorithm design. Developed strong problem-solving skills and programming proficiency.",
        hpc_relevance: 2
      },
      {
        code: "CS 450",
        name: "High Performance Computing",
        semester: "Spring 2024",
        date: Date.new(2024, 1, 1),
        topics: ["Parallel Programming", "MPI", "CUDA", "Performance Optimization"],
        description: "Advanced course focusing on parallel and distributed computing. Hands-on experience with MPI for distributed memory systems and CUDA for GPU programming. Developed and optimized HPC applications.",
        hpc_relevance: 10
      },
      {
        code: "CS 361",
        name: "Computer Architecture",
        semester: "Fall 2024",
        date: Date.new(2024, 8, 1),
        topics: ["CPU Design", "Memory Hierarchy", "Instruction Pipelining", "Cache Optimization"],
        description: "Deep dive into computer organization and architecture. Studied processor design, memory systems, and performance optimization techniques critical for HPC.",
        hpc_relevance: 7
      },
      {
        code: "CS 357",
        name: "Parallel and Distributed Systems",
        semester: "Spring 2025",
        date: Date.new(2025, 1, 1),
        topics: ["Distributed Computing", "Cloud Computing", "OpenMP", "Thread Programming"],
        description: "Comprehensive study of parallel computing paradigms. Implemented multi-threaded applications using OpenMP and explored distributed system architectures.",
        hpc_relevance: 9
      }
      # Add more courses as needed
    ]

    # Calculate HPC relevance for courses without explicit score
    @courses.each do |course|
      course[:hpc_relevance] ||= calculate_hpc_relevance(course[:topics])
    end
  end

  def projects
    # Projects showcase
    @projects = [
      {
        title: "Hybrid CPU-GPU approach to PCG-AMG",
        description: "This project investigates a hybrid CPU-GPU execution strategy for PCG-AMG within hypre",
        technologies: ["MPI", "C++", "Slurm", "OpenMP"],
        github_url: "https://github.com/beckdun/hypre_testing",
        date: "2025"
      }
    ]
  end

  private

  def calculate_hpc_relevance(topics)
    # HPC-related keywords and their weights
    hpc_keywords = {
      'parallel' => 3,
      'hpc' => 3,
      'mpi' => 3,
      'cuda' => 3,
      'gpu' => 3,
      'distributed' => 2,
      'performance' => 2,
      'optimization' => 2,
      'openmp' => 2,
      'cloud' => 1,
      'architecture' => 1,
      'systems' => 1,
      'memory' => 1
    }

    score = 0
    topics.each do |topic|
      topic_lower = topic.downcase
      hpc_keywords.each do |keyword, weight|
        score += weight if topic_lower.include?(keyword)
      end
    end

    # Normalize to 0-10 scale
    [score, 10].min
  end
end
