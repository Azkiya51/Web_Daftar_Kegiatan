import ActivityItem from './ActivityItem'

function ActivityList({ daftar, onHapus, onUbahStatus }) {
  // CONDITIONAL RENDERING: tampilan kosong bila tidak ada data
  if (daftar.length === 0) {
    return (
      <div className="card kosong">
        <p>Belum ada kegiatan yang cocok. Tambahkan kegiatan baru atau ubah pencarian.</p>
      </div>
    )
  }

  return (
    <ul className="list">
      {/* LIST RENDERING: map() dengan key unik */}
      {daftar.map((k) => (
        <ActivityItem
          key={k.id}
          kegiatan={k}
          onHapus={onHapus}
          onUbahStatus={onUbahStatus}
        />
      ))}
    </ul>
  )
}

export default ActivityList
