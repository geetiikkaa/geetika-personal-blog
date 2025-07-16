// Dark/Light Mode Toggle with Persistence
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Load saved mode from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Determine which page we are on and call appropriate functions
  if (document.getElementById('blog-cards')) {
    loadBlogs();
  } else if (document.getElementById('blog-post-content')) {
    loadBlogPost();
  }
});

// Load all blogs and display on blog.html
async function loadBlogs() {
  const blogCardsContainer = document.getElementById('blog-cards');
  const blogError = document.getElementById('blog-error');

  try {
    const response = await fetch('blogs.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const blogs = await response.json();
    
    blogCardsContainer.innerHTML = '';

    blogs.forEach(blog => {
      // Show only snippet on blog cards
      const snippet = blog.snippet;
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.innerHTML = `
        <h3 class="blog-card-title">${blog.title}</h3>
        <p class="blog-card-date">${new Date(blog.date).toLocaleDateString()}</p>
        <p class="blog-card-snippet">${snippet}</p>
        <a href="blog-post.html?id=${blog.id}" class="blog-card-link">Read More</a>
      `;
      blogCardsContainer.appendChild(card);
    });
  } catch (error) {
    blogError.style.display = 'block';
    blogCardsContainer.style.display = 'none';
    console.error('Failed to load blogs:', error);
  }
}

async function loadBlogPost() {
  const blogPostContent = document.getElementById('blog-post-content');
  const blogPostError = document.getElementById('blog-post-error');

  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');

  if (!blogId) {
    blogPostContent.style.display = 'none';
    blogPostError.style.display = 'block';
    return;
  }

  try {
    const response = await fetch('blogs.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const blogs = await response.json();

    // Convert blogId to number for comparison
    const blog = blogs.find(b => b.id === parseInt(blogId));
    if (!blog) {
      blogPostContent.style.display = 'none';
      blogPostError.style.display = 'block';
      return;
    }

    blogPostContent.innerHTML = `
      <h2 class="blog-post-title">${blog.title}</h2>
      <p class="blog-post-date">${new Date(blog.date).toLocaleDateString()}</p>
      <div class="blog-post-text">${blog.content.split('\n').map(p => `<p>${p}</p>`).join('')}</div>
    `;
  } catch (error) {
    blogPostContent.style.display = 'none';
    blogPostError.style.display = 'block';
    console.error('Failed to load blog post:', error);
  }
}
