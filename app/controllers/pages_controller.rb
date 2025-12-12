class PagesController < ApplicationController
  def home
    # Carousel images for left side
    @carousel_images = [
      {
        url: "/images/photo1.jpg",
        alt: "Beckett at HPC Lab",
        caption: "Working on parallel computing research"
      },
      {
        url: "/images/photo2.jpg",
        alt: "Beckett at SC Conference",
        caption: "Presenting at SC25"
      },
      {
        url: "/images/photo3.jpg",
        alt: "Beckett with team",
        caption: "Team collaboration"
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
        url: "mailto:beckett.dunlavy@gmail.com",
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
          { url: "/images/sc25_photo1.jpg", alt: "SC25 Competition Photo 1" },
          { url: "/images/sc25_photo2.jpg", alt: "SC25 Competition Photo 2" },
          { url: "/images/sc25_photo3.jpg", alt: "SC25 Competition Photo 3" },
          { url: "/images/sc25_photo4.jpg", alt: "SC25 Competition Photo 4" },
          { url: "/images/sc25_photo5.jpg", alt: "SC25 Competition Photo 5" }
        ]
      }    
    ]
  end

  def resume
    # Experience section (most recent first)
    @experience = [
      {
        title: "HPC Research Assistant",
        organization: "University Computing Center",
        logo: "/images/unm_logo.png", # Add your UNM logo here
        logo_url: "https://www.unm.edu",
        location: "Albuquerque, NM",
        start_date: "January 2024",
        end_date: "Present",
        current: true,
        responsibilities: [
          "Optimized parallel algorithms for distributed memory systems using MPI",
          "Developed CUDA kernels for GPU-accelerated scientific computing applications",
          "Benchmarked and profiled HPC applications to identify performance bottlenecks",
          "Collaborated with research teams on computational physics simulations"
        ]
      },
      {
        title: "HPC User Support Specialist",
        organization: "Center for Advanced Research Computing (CARC)",
        logo: "/images/carc_logo.png", # Add your CARC logo here
        logo_url: "https://carc.unm.edu",
        location: "Albuquerque, NM",
        start_date: "August 2023",
        end_date: "December 2023",
        current: false,
        responsibilities: [
          "Provided technical support to researchers using HPC cluster resources",
          "Assisted users with job scheduling, optimization, and debugging",
          "Created documentation and tutorials for common HPC workflows",
          "Conducted training sessions on parallel programming techniques"
        ]
      }
    ]

    # Education section
    @education = [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of New Mexico",
        location: "Albuquerque, NM",
        graduation: "Expected May 2026",
        gpa: "3.8/4.0",
        honors: ["Dean's List (Fall 2023, Spring 2024)", "HPC Research Fellowship"],
        focus: "High Performance Computing and Parallel Systems",
        relevant_coursework: [
          "High Performance Computing",
          "Parallel and Distributed Systems",
          "Computer Architecture",
          "Advanced Algorithms"
        ]
      }
    ]

    # Skills section (organized by category)
    @skills = {
      programming_languages: ["C++", "Python", "C", "Fortran", "Java", "Bash"],
      hpc_technologies: ["MPI", "CUDA", "OpenMP", "OpenACC", "Slurm", "PBS"],
      tools_platforms: ["Linux", "Git", "Docker", "CMake", "Valgrind", "GDB"],
      performance_analysis: ["Intel VTune", "NVIDIA Nsight", "TAU", "Scalasca"],
      other: ["Performance Profiling", "Parallel Algorithms", "Scientific Computing", "Cluster Management"]
    }

    # Events & Activities section
    @resume_events = [
      {
        name: "SC25 Student Cluster Competition",
        full_name: "International Conference for High Performance Computing, Networking, Storage and Analysis",
        role: "Team Member",
        date: "November 2025",
        location: "St. Louis, MO",
        description: "Competed in the prestigious Student Cluster Competition, designing and building a high-performance computing cluster. Optimized applications and benchmarked system performance against teams from around the world.",
        url: "https://sc25.supercomputing.org",
        logo: "/images/sc25_logo.png"
      },
      {
        name: "PEARC24 Conference",
        full_name: "Practice and Experience in Advanced Research Computing",
        role: "Attendee",
        date: "July 2024",
        location: "Providence, RI",
        description: "Attended workshops and presentations on advanced research computing topics, networking with HPC professionals and researchers.",
        url: "https://pearc.acm.org/pearc24/",
        logo: "/images/pearc_logo.png"
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
