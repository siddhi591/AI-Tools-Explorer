import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ToolCard from '../components/ToolCard'
import FeatureBadge from '../components/FeatureBadge'
import tools from '../data/tools'

function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesQuery = `${tool.name} ${tool.description} ${tool.category}`.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || tool.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  const highlighted = filteredTools.slice(0, 6)
  const featured = tools.filter((tool) => ['chatgpt', 'claude', 'midjourney', 'cursor', 'runway', 'notion-ai'].includes(tool.id))

  return (
    <div>
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="d-inline-flex align-items-center gap-2 rounded-pill bg-primary-subtle px-3 py-2 mb-4 text-primary fw-semibold">
              <span>✨</span> AIHub • The Ultimate AI Tools Directory
            </div>
            <h1 className="display-3 fw-bold mb-4">Discover the Best AI Tools</h1>
            <p className="lead text-muted mb-4">Explore AI tools for coding, image generation, writing, research, music, video creation, productivity, and more.</p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-primary btn-lg rounded-pill px-4" to="/">Browse Tools</Link>
              <Link className="btn btn-outline-primary btn-lg rounded-pill px-4" to="/compare">Compare Models</Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-glass p-4 rounded-4 shadow-lg">
              <div className="d-flex flex-wrap gap-2 mb-3">
                {['Chatbots', 'Coding', 'Image', 'Video'].map((label) => (
                  <span key={label} className="badge rounded-pill bg-white text-dark px-3 py-2">{label}</span>
                ))}
              </div>
              <div className="row g-3 mt-2">
                {featured.slice(0, 4).map((tool) => (
                  <div key={tool.id} className="col-6">
                    <div className="bg-white rounded-3 p-3 shadow-sm border h-100">
                      <div className="fw-bold">{tool.name}</div>
                      <div className="text-muted small">{tool.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4">
            <h3 className="fw-bold">Search & Filter</h3>
            <p className="text-muted">Find tools by name, category, description, and capability.</p>
          </div>
          <div className="col-lg-8">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </div>
        <div className="mt-4">
          <CategoryFilter activeCategory={category} onChange={setCategory} />
        </div>
      </section>

      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <p className="text-primary fw-semibold mb-1">Featured AI Tools</p>
            <h3 className="fw-bold">Trending & Top Rated</h3>
          </div>
          <Link className="text-primary fw-semibold" to="/compare">Compare all tools</Link>
        </div>
        <div className="row g-4">
          {highlighted.map((tool) => (
            <div key={tool.id} className="col-md-6 col-xl-4">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <h3 className="fw-bold mb-4">Popular Capabilities</h3>
        <div className="d-flex flex-wrap gap-2">
          {['Writing', 'Coding', 'Debugging', 'Image Generation', 'Video Editing', 'Research', 'Voice Cloning', 'Automation'].map((item) => (
            <FeatureBadge key={item} label={item} />
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h4 className="fw-bold mb-3">Why teams love AIHub</h4>
              <ul className="text-muted">
                <li>Modern product experience inspired by top SaaS brands</li>
                <li>Fast filtering and comparison for AI tools</li>
                <li>Detailed product pages with version history and use cases</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h4 className="fw-bold mb-3">Recently Updated</h4>
              <div className="d-flex flex-column gap-2">
                {['ChatGPT', 'Claude', 'Cursor', 'Runway'].map((item) => (
                  <div key={item} className="d-flex justify-content-between align-items-center bg-light rounded-3 px-3 py-2">
                    <span>{item}</span>
                    <span className="badge text-bg-success">Updated</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
