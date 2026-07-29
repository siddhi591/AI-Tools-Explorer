function ComparisonTable({ tools }) {
  const columns = ['Tool', 'Developer', 'Latest Version', 'Chat', 'Coding', 'Image', 'Video', 'Voice', 'Vision', 'Free Plan', 'API', 'Pricing']

  return (
    <div className="table-responsive rounded-4 border shadow-sm">
      <table className="table table-hover align-middle mb-0">
        <thead className="table-light">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="text-nowrap">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.id}>
              <td className="fw-semibold">{tool.name}</td>
              <td>{tool.developer}</td>
              <td>{tool.latestVersion}</td>
              <td>{tool.category === 'Chatbots' ? '✓' : '—'}</td>
              <td>{['Coding', 'Productivity'].includes(tool.category) ? '✓' : '—'}</td>
              <td>{['Image Generation', 'Design'].includes(tool.category) ? '✓' : '—'}</td>
              <td>{['Video'].includes(tool.category) ? '✓' : '—'}</td>
              <td>{['Voice'].includes(tool.category) ? '✓' : '—'}</td>
              <td>{tool.features.includes('Vision') ? '✓' : '—'}</td>
              <td>{tool.pricing.includes('Free') ? '✓' : '—'}</td>
              <td>{tool.features.includes('API') ? '✓' : '—'}</td>
              <td>{tool.pricing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
