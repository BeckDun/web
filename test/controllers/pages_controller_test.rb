require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get resume" do
    get pages_resume_url
    assert_response :success
  end

  test "should get courses" do
    get pages_courses_url
    assert_response :success
  end

  test "should get projects" do
    get pages_projects_url
    assert_response :success
  end
end
