const categories = ['All', 'Chatbots', 'Coding', 'Image Generation', 'Video', 'Research', 'Voice', 'Music', 'Productivity', 'Design', 'Presentation', 'Marketing']

function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`btn rounded-pill px-3 ${activeCategory === category ? 'btn-primary text-white' : 'btn-outline-primary'}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
