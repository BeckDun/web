import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["course", "container"]
  static values = {
    currentSort: { type: String, default: "newest" }
  }

  connect() {
    console.log("Course sort controller connected")
  }

  sort(event) {
    const sortType = event.target.value
    this.currentSortValue = sortType

    const courses = Array.from(this.courseTargets)
    const container = this.containerTarget

    let sortedCourses

    switch(sortType) {
      case "newest":
        sortedCourses = courses.sort((a, b) => {
          const dateA = new Date(a.dataset.date)
          const dateB = new Date(b.dataset.date)
          return dateB - dateA // Newest first
        })
        break

      case "oldest":
        sortedCourses = courses.sort((a, b) => {
          const dateA = new Date(a.dataset.date)
          const dateB = new Date(b.dataset.date)
          return dateA - dateB // Oldest first
        })
        break

      case "hpc":
        sortedCourses = courses.sort((a, b) => {
          const scoreA = parseInt(a.dataset.hpcRelevance) || 0
          const scoreB = parseInt(b.dataset.hpcRelevance) || 0
          return scoreB - scoreA // Highest relevance first
        })
        break

      default:
        sortedCourses = courses
    }

    // Clear container and re-append in sorted order
    container.innerHTML = ''
    sortedCourses.forEach(course => {
      container.appendChild(course)
    })

    // Add animation
    this.animateCourses()
  }

  animateCourses() {
    this.courseTargets.forEach((course, index) => {
      course.style.opacity = '0'
      course.style.transform = 'translateY(20px)'

      setTimeout(() => {
        course.style.transition = 'all 0.3s ease'
        course.style.opacity = '1'
        course.style.transform = 'translateY(0)'
      }, index * 50)
    })
  }
}
