function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h4 className="fw-bold">AIHub</h4>
            <p className="text-white-50 mb-0">The modern directory for discovering, comparing, and learning about the best AI tools.</p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="text-white-50 me-3" href="mailto:hello@aihub.com">hello@aihub.com</a>
            <a className="text-white-50" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
