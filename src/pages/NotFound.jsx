import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-3">Page not found</h2>
      <p className="text-muted">The page you’re looking for does not exist.</p>
      <Link className="btn btn-primary rounded-pill mt-3" to="/">Back to Home</Link>
    </div>
  )
}

export default NotFound
