import { Link } from 'react-router-dom'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'

function ToolCard({ tool }) {
  return (
    <div className="card h-100 border-0 shadow-sm tool-card">
      <div className="card-body p-4">
        <div className="d-flex align-items-start justify-content-between mb-3">
          <div>
            <div className="display-6 mb-2">{tool.logo}</div>
            <h5 className="card-title mb-1">{tool.name}</h5>
            <p className="text-muted small">{tool.developer}</p>
          </div>
          <span className={`badge rounded-pill ${tool.pricing.includes('Free') ? 'bg-success-subtle text-success' : 'bg-primary-subtle text-primary'}`}>
            {tool.pricing}
          </span>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge bg-light text-dark">{tool.category}</span>
          <span className="badge bg-light text-dark">v{tool.latestVersion}</span>
          <span className="badge bg-warning-subtle text-warning">★ {tool.rating.toFixed(1)}</span>
        </div>

        <p className="text-muted small mb-4">{tool.description}</p>

        <div className="d-flex gap-2 flex-wrap">
          <Link className="btn btn-primary btn-sm rounded-pill" to={`/tool/${tool.id}`}>
            View Details <FiArrowRight className="ms-1" />
          </Link>
          <a className="btn btn-outline-secondary btn-sm rounded-pill" href={tool.website} target="_blank" rel="noreferrer">
            Website <FiExternalLink className="ms-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ToolCard
