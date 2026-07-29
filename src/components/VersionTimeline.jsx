function VersionTimeline({ versions }) {
  return (
    <div className="border rounded-4 p-4 bg-white shadow-sm">
      <h4 className="mb-4">Version History</h4>
      <div className="position-relative">
        <div className="position-absolute start-3 top-0 bottom-0 border-start" style={{ borderColor: '#dbeafe' }} />
        {versions.map((version, index) => (
          <div key={version} className="d-flex gap-3 mb-3 position-relative">
            <span className="badge rounded-circle bg-primary mt-1" style={{ width: '12px', height: '12px', display: 'inline-block' }} />
            <div>
              <div className="fw-semibold">{version}</div>
              <div className="text-muted small">Release {index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VersionTimeline
