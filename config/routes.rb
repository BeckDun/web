Rails.application.routes.draw do
  # Set home page as root
  root "pages#home"

  # Clean URL routes for main pages
  get "resume", to: "pages#resume"
  get "courses", to: "pages#courses"
  get "projects", to: "pages#projects"

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
end
