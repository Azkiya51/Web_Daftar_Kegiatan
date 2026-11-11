function StatCard({ label, nilai }) {
  return (
    <div className="stat-card">
      <span className="stat-nilai">{nilai}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default StatCard
