import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import FeatureBadge from '../components/FeatureBadge'
import VersionTimeline from '../components/VersionTimeline'
import tools from '../data/tools'

function ToolDetails() {
  const { id } = useParams()
  const tool = useMemo(() => tools.find((item) => item.id === id), [id])

  if (!tool) {
    return (
      <div className="container py-5 text-center">
        <h2>Tool not found</h2>
        <p className="text-muted">The requested AI tool could not be found.</p>
        <Link className="btn btn-primary rounded-pill" to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <Link className="btn btn-outline-secondary rounded-pill mb-4" to="/">← Back to Home</Link>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-4">
            <div className="d-flex align-items-start justify-content-between flex-wrap gap-3">
              <div>
                <div className="display-4 mb-2">{tool.logo}</div>
                <h1 className="fw-bold mb-1">{tool.name}</h1>
                <p className="text-muted">{tool.developer} • {tool.category}</p>
              </div>
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">{tool.pricing}</span>
            </div>
            <p className="lead text-muted mt-4">{tool.description}</p>
            <div className="row g-3 mt-3">
              <div className="col-sm-6"><strong>Launch Year:</strong> {tool.launchYear}</div>
              <div className="col-sm-6"><strong>Current Version:</strong> {tool.latestVersion}</div>
              <div className="col-sm-6"><strong>Rating:</strong> ★ {tool.rating.toFixed(1)}</div>
              <div className="col-sm-6"><strong>Website:</strong> <a href={tool.website} target="_blank" rel="noreferrer">Visit</a></div>
            </div>
          </div>

          <div className="mt-4 row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h4 className="fw-bold mb-3">Best For</h4>
                <div className="d-flex flex-wrap gap-2">
                  {tool.uses.map((use) => <FeatureBadge key={use} label={use} />)}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h4 className="fw-bold mb-3">Pros</h4>
                <ul className="text-muted mb-0">
                  {tool.pros.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Supported Platforms</h4>
            <div className="d-flex flex-wrap gap-2">
              {tool.supportedPlatforms.map((platform) => <FeatureBadge key={platform} label={platform} />)}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <VersionTimeline versions={tool.versions} />
          <div className="card border-0 shadow-sm p-4 mt-4">
            <h4 className="fw-bold mb-3">Features</h4>
            <div className="d-flex flex-wrap gap-2">
              {tool.features.map((feature) => <FeatureBadge key={feature} label={feature} />)}
            </div>
          </div>
          <div className="card border-0 shadow-sm p-4 mt-4">
            <h4 className="fw-bold mb-3">Cons</h4>
            <ul className="text-muted mb-0">
              {tool.cons.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-5">
        <h3 className="fw-bold mb-3">Similar Tools</h3>
        <div className="row g-3">
          {tool.similarTools.map((similarId) => {
            const similar = tools.find((item) => item.id === similarId)
            return similar ? (
              <div key={similar.id} className="col-md-4 col-lg-3">
                <Link className="card p-3 border-0 shadow-sm text-decoration-none text-dark h-100" to={`/tool/${similar.id}`}>
                  <div className="fw-semibold">{similar.name}</div>
                  <div className="text-muted small">{similar.category}</div>
                </Link>
              </div>
            ) : null
          })}
        </div>
      </section>
    </div>
  )
}

export default ToolDetails
