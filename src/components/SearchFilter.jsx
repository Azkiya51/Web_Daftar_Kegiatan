const pilihan = [
  { id: 'semua', label: 'Semua' },
  { id: 'belum', label: 'Belum selesai' },
  { id: 'selesai', label: 'Selesai' },
]

function SearchFilter({ keyword, onKeyword, filter, onFilter }) {
  return (
    <div className="search-filter">
      <input
        type="search"
        className="search"
        value={keyword}
        onChange={(e) => onKeyword(e.target.value)}
        placeholder="Cari kegiatan..."
        aria-label="Cari kegiatan"
      />
      <div className="filter-group">
        {pilihan.map((p) => (
          <button
            key={p.id}
            className={filter === p.id ? 'chip aktif' : 'chip'}
            onClick={() => onFilter(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFilter
