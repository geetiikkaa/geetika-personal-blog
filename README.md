
# Geetika Pandey - Personal Blog

## Project Overview
Welcome to the personal blog of Geetika Pandey, a BCA student and aspiring web developer. This blog serves as a platform to document learning journeys, share coding experiences, and explore various technologies in the realm of web development. The website is designed with a clean and engaging user interface, allowing visitors to navigate seamlessly through multiple sections including a blog, resume, and contact information.

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/geetika-personal-blog.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd geetika-personal-blog
   ```

3. **Open `index.html` in your browser:**
   You can double-click the `index.html` file or use a local server to view the project.

4. **Optional – Set Up a Local Server:**  
   For better local testing, consider using a local server:
   - Using Python 3:
     ```bash
     python -m http.server
     ```
   - Using Node.js:
     ```bash
     npx http-server
     ```

## Usage
To explore the blog and other sections:

- Navigate to the homepage by opening `index.html`.
- Click on the "Read Blogs" button to view the blog posts.
- Access the resume section and contact form through their respective links in the navigation menu.

### Dark Mode Feature
Toggle dark mode to enhance your reading experience using the "Dark Mode" button in the header.

## Features
- **Responsive Design:** The blog is designed to be mobile-friendly.
- **Dynamic Blog Section:** Blog posts are inserted dynamically through JavaScript, enhancing maintainability.
- **Dark Mode Toggle:** Switch between light and dark modes for user comfort.
- **Contact Information:** Users can reach out via email or LinkedIn directly from the Contact page.

## Dependencies
For functionality, the following external libraries are used:

- **Typed.js:** For dynamic text animations on the homepage.
  - Loaded via CDN:  
    ```html
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    ```

## Project Structure
The project is organized as follows:
```
geetika-personal-blog/
│
├── index.html              # Main homepage
├── blog.html               # Blog listing page
├── blog-post.html          # Individual blog post page
├── resume.html             # Resume section
├── contact.html            # Contact information page
├── blogs.json              # Blog posts data
├── js/
│   └── script.js           # JavaScript file for interactive features
├── css/
│   └── style.css           # CSS file for styling
└── images/
    └── geetikaphoto.jpg    # Profile image for the contact page
```

## Conclusion
This project reflects the personal brand and journey of Geetika Pandey in the field of web development. Feel free to explore, and don't hesitate to reach out through the contact section for any collaborations or opportunities.
