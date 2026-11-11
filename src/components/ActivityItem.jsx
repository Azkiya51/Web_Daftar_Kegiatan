import { useState } from 'react'
import Button from './Button'

function formatTanggal(iso) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function ActivityItem({ kegiatan, onHapus, onUbahStatus }) {
  const [detail, setDetail] = useState(false)
  const { id, judul, kategori, tanggal, catatan, selesai } = kegiatan

  return (
    <li className={selesai ? 'item selesai' : 'item'}>
      <div className="item-utama">
        <input
          type="checkbox"
          checked={selesai}
          onChange={() => onUbahStatus(id)}
          aria-label={`Tandai ${judul} selesai`}
        />
        <div className="item-teks">
          <h3>{judul}</h3>
          <p className="meta">
            <span className={`badge badge-${kategori.toLowerCase()}`}>{kategori}</span>
            {formatTanggal(tanggal)}
          </p>
        </div>
        <div className="item-aksi">
          <Button variant="ghost" onClick={() => setDetail(!detail)}>
            {detail ? 'Sembunyikan' : 'Detail'}
          </Button>
          <Button variant="danger" onClick={() => onHapus(id)}>
            Hapus
          </Button>
        </div>
      </div>

      {/* CONDITIONAL RENDERING: detail hanya tampil saat diklik */}
      {detail && (
        <p className="catatan">{catatan || 'Tidak ada catatan.'}</p>
      )}
    </li>
  )
}

export default ActivityItem
