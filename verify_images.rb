#!/usr/bin/env ruby
# Image verification script to check for missing files and case sensitivity issues

require 'pathname'

# Dynamically extract image references from code
referenced_images = []

# Search through controller and view files
Dir.glob("{app/controllers/**/*.rb,app/views/**/*.erb}").each do |file|
  File.readlines(file).each do |line|
    # Skip commented lines
    next if line.strip.start_with?('#')

    # Extract image paths from various patterns
    if line =~ /["']\/images\/[^"']+\.(jpg|jpeg|png|gif|webp)["']/i
      matches = line.scan(/["'](\/images\/[^"']+\.(jpg|jpeg|png|gif|webp))["']/i)
      matches.each { |match| referenced_images << match[0] }
    end
  end
end

referenced_images.uniq!

# Base path (public directory)
base_path = Pathname.new(__dir__) / "public"

puts "=" * 60
puts "IMAGE VERIFICATION REPORT"
puts "=" * 60
puts

# Check each image
missing_images = []
found_images = []

referenced_images.each do |img_path|
  # Remove leading slash and construct full path
  relative_path = img_path.sub(/^\//, '')
  full_path = base_path / relative_path

  if full_path.exist?
    found_images << img_path
    puts "✓ FOUND:   #{img_path}"
  else
    missing_images << img_path
    puts "✗ MISSING: #{img_path}"

    # Check for case-insensitive matches
    dir = full_path.dirname
    if dir.exist?
      similar_files = dir.children.select { |f| f.basename.to_s.downcase == full_path.basename.to_s.downcase }
      unless similar_files.empty?
        puts "  → Possible case mismatch: #{similar_files.map(&:basename).join(', ')}"
      end
    end
  end
end

puts
puts "=" * 60
puts "SUMMARY"
puts "=" * 60
puts "Total referenced: #{referenced_images.count}"
puts "Found:            #{found_images.count}"
puts "Missing:          #{missing_images.count}"
puts

if missing_images.empty?
  puts "✓ All images are present!"
else
  puts "✗ Missing images:"
  missing_images.each { |img| puts "  - #{img}" }
  puts
  puts "ACTION REQUIRED:"
  puts "1. Add the missing SC25 photos to public/images/, OR"
  puts "2. Remove/comment out the SC25 event in app/controllers/pages_controller.rb:53-69"
end

puts "=" * 60
