// src/App.jsx

const projects = [
  {
    title: "Project One",
    description: "Build a Private Blog Network for a Casino Niche that list all of the best slot sites and bonuses.",
    link: "https://slotfree100.com",
  },
  {
    title: "Project Two",
    description: "Another project that shows my frontend skills.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A project I'm especially proud of.",
    link: "#",
  },
];

const blogPosts = [
  {
    title: "Getting Started With My Dev Journey",
    date: "Dec 10, 2025",
    excerpt: "How I started learning web development and what I'm focusing on...",
    link: "https://sg8.fun/sbobet",
  },
  {
    title: "What I Learned Building This Portfolio",
    date: "Dec 12, 2025",
    excerpt: "Some lessons from building my first React + Vite portfolio site.",
    link: "#",
  },
];

function App() {
  return (
    <div className="app">
      <header className="top-nav">
        <h1 className="logo">Rara.dev</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div>
            <p className="tagline">Hi, I&apos;m John Israel Datuin 👋</p>
            <h2>SEO Specialist &amp; with experience in HTML, CSS and React </h2>
            <p>
          I help businesses rank their websites at the top of search engines, especially Google through effective SEO strategies and optimization techniques.

            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="#blog" className="btn secondary">Read Blog</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
          I&apos;m an SEO specialist with 2 years of experience in the casino industry,
  and a self-taught developer with skills in HTML, CSS, and front-end
  development. I enjoy optimizing content, improving website visibility, and
  turning ideas into clean, user-friendly interfaces. This portfolio is where I
  share my projects and document my growth in both SEO and web development.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="card-link">
                  View project →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="section">
          <h2>Article Writing</h2>
          <div className="grid">
            {blogPosts.map((post) => (
              <article key={post.title} className="card">
                <p className="muted">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.link} className="card-link">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Want to work together or say hi? Reach me at{" "}
            <a href="mailto:you@example.com">johndatuin05@gmail.com</a>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Rara. Built with React &amp; Vite.</p>
      </footer>
    </div>
  );
}

export default App;
