import { useMemo, useState } from 'react'
import ComparisonTable from '../components/ComparisonTable'
import SearchBar from '../components/SearchBar'
import tools from '../data/tools'

function Compare() {
  const [query, setQuery] = useState('')
  const [selectedIds, setSelectedIds] = useState(['chatgpt', 'claude', 'gemini'])

  const visibleTools = useMemo(() => {
    return tools.filter((tool) => tool.name.toLowerCase().includes(query.toLowerCase()))
  }, [query])

  const selectedTools = tools.filter((tool) => selectedIds.includes(tool.id))

  const toggleTool = (id) => {
    setSelectedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Compare AI Models</h1>
        <p className="text-muted">Evaluate major platforms side by side across features, pricing, and capabilities.</p>
      </div>

      <div className="card border-0 shadow-sm p-4 mb-4">
        <SearchBar value={query} onChange={setQuery} placeholder="Search tools to compare" />
        <div className="d-flex flex-wrap gap-2 mt-3">
          {visibleTools.slice(0, 8).map((tool) => (
            <button
              key={tool.id}
              className={`btn btn-sm rounded-pill ${selectedIds.includes(tool.id) ? 'btn-primary text-white' : 'btn-outline-secondary'}`}
              onClick={() => toggleTool(tool.id)}
            >
              {tool.name}
            </button>
          ))}
        </div>
      </div>

      <ComparisonTable tools={selectedTools} />
    </div>
  )
}

export default Compare
