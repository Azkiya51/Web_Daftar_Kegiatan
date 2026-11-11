import { useState } from 'react'
import Button from './Button'

function ActivityForm({ onTambah, onBatal }) {
  const [judul, setJudul] = useState('')
  const [kategori, setKategori] = useState('Kuliah')
  const [tanggal, setTanggal] = useState('')
  const [catatan, setCatatan] = useState('')
  const [error, setError] = useState('')

  // EVENT HANDLING: submit formulir
  const handleSubmit = (e) => {
    e.preventDefault()
    if (judul.trim() === '' || tanggal === '') {
      setError('Judul dan tanggal wajib diisi.')
      return
    }
    onTambah({ judul: judul.trim(), kategori, tanggal, catatan: catatan.trim() })
    setJudul('')
    setTanggal('')
    setCatatan('')
    setError('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Judul kegiatan
        <input
          type="text"
          autoFocus
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          placeholder="Contoh: Mengerjakan tugas React"
        />
      </label>

      <div className="form-row">
        <label>
          Kategori
          <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
            <option>Kuliah</option>
            <option>Pribadi</option>
            <option>Organisasi</option>
          </select>
        </label>
        <label>
          Tanggal
          <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
        </label>
      </div>

      <label>
        Catatan (opsional)
        <textarea
          rows="2"
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
          placeholder="Tulis detail kegiatan"
        />
      </label>

      {/* CONDITIONAL RENDERING: pesan error hanya muncul bila ada */}
      {error && <p className="error" role="alert">{error}</p>}

      <div className="form-aksi">
        <Button type="submit">Simpan kegiatan</Button>
        <Button variant="ghost" onClick={onBatal}>Batal</Button>
      </div>
    </form>
  )
}

export default ActivityForm
