class PagesController < ApplicationController
  def home
    # Events attended
    @events = [
      {
        name: "SC 25",
        full_name: "International Conference for High Performance Computing, Networking, Storage and Analysis",
        date: "November 2025",
        location: "St. Louis, MO",
        description: "Indy-SCC cluster competition",
        url: "https://sc25.supercomputing.org/2025/10/from-spark-to-flame-introducing-the-indyscc25-teams/"
      }
      # Add more events as needed
    ]
  end

  def resume
    # Resume page - content will be in view
  end

  def courses
    # Courses listing
    @courses = [
      {
        code: "CS 101",
        name: "Introduction to Computer Science",
        semester: "Fall 2023",
        topics: ["Programming Fundamentals", "Data Structures", "Algorithms"]
      },
      {
        code: "CS 450",
        name: "High Performance Computing",
        semester: "Spring 2024",
        topics: ["Parallel Programming", "MPI", "CUDA", "Performance Optimization"]
      }
      # Add more courses as needed
    ]
  end

  def projects
    # Projects showcase
    @projects = [
      {
        title: "HPC Cluster Monitoring Dashboard",
        description: "Real-time monitoring dashboard for tracking HPC cluster performance and resource utilization",
        technologies: ["Python", "Flask", "Grafana", "Prometheus"],
        github_url: "https://github.com/yourusername/hpc-dashboard",
        date: "2024"
      },
      {
        title: "Parallel Matrix Multiplication",
        description: "Implementation of parallel matrix multiplication using MPI and CUDA",
        technologies: ["C++", "MPI", "CUDA"],
        github_url: "https://github.com/yourusername/parallel-matrix",
        date: "2024"
      }
      # Add more projects as needed
    ]
  end
end
