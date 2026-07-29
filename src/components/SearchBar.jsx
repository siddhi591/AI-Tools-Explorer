function SearchBar({ value, onChange, placeholder = 'Search AI tools...' }) {
  return (
    <div className="position-relative">
      <input
        type="text"
        className="form-control form-control-lg rounded-pill px-4 py-3 shadow-sm"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <span className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted">🔎</span>
    </div>
  )
}

export default SearchBar
