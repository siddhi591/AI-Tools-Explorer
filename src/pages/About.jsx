function About() {
  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <h1 className="fw-bold mb-3">About AIHub</h1>
          <p className="lead text-muted">AIHub is a polished discovery experience for the modern AI stack. It helps users explore, compare, and understand the fastest-growing tools in coding, content, design, research, and media.</p>
          <p className="text-muted">Built as a portfolio-ready React app with Bootstrap styling, router-based navigation, rich tool data, and beautiful reusable components.</p>
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Highlights</h4>
            <ul className="text-muted mb-0">
              <li>40+ curated AI tools</li>
              <li>Responsive and modern SaaS layout</li>
              <li>Real-time search and category filtering</li>
              <li>Detailed comparison and version history</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
