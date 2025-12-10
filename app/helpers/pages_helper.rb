module PagesHelper
  def nav_link_class(page)
    current_page = controller_name == 'pages' ? action_name : nil
    base_classes = "nav-link"

    if current_page == page || (page == 'home' && current_page?(root_path))
      "#{base_classes} nav-link-active"
    else
      "#{base_classes} nav-link-inactive"
    end
  end
end
