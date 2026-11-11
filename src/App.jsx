import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Stats from './components/Stats'
import ActivityForm from './components/ActivityForm'
import SearchFilter from './components/SearchFilter'
import ActivityList from './components/ActivityList'
import Button from './components/Button'
import Modal from './components/Modal'
import Footer from './components/Footer'


const NAMA = 'Azkiya Fauzan Sri Hidayat'
const NIM = '1247050102'


const dataAwal = [
  { id: 1, judul: 'Belajar React Hooks', kategori: 'Kuliah', tanggal: '2026-11-12', catatan: 'Latihan useState dan useEffect.', selesai: false },
  { id: 2, judul: 'Kerja kelompok Basis Data', kategori: 'Kuliah', tanggal: '2026-11-14', catatan: 'Bahas rancangan ERD bersama tim.', selesai: false },
  { id: 3, judul: 'Olahraga pagi', kategori: 'Pribadi', tanggal: '2026-11-10', catatan: 'Jogging 30 menit.', selesai: true },
]

function App() {
  const [halaman, setHalaman] = useState('beranda')
  const [kegiatan, setKegiatan] = useState(() => {
    const tersimpan = localStorage.getItem('kegiatan')
    return tersimpan ? JSON.parse(tersimpan) : dataAwal
  })
  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = useState('semua')
  const [formTerbuka, setFormTerbuka] = useState(false)

  
  useEffect(() => {
    localStorage.setItem('kegiatan', JSON.stringify(kegiatan))
  }, [kegiatan])

  
  const tambahKegiatan = (itemBaru) => {
    setKegiatan([{ ...itemBaru, id: Date.now(), selesai: false }, ...kegiatan])
    setFormTerbuka(false) 
  }

  const hapusKegiatan = (id) => {
    setKegiatan(kegiatan.filter((k) => k.id !== id))
  }

  const ubahStatus = (id) => {
    setKegiatan(kegiatan.map((k) => (k.id === id ? { ...k, selesai: !k.selesai } : k)))
  }

  
  const kegiatanTampil = kegiatan.filter((k) => {
    const cocokKeyword = k.judul.toLowerCase().includes(keyword.toLowerCase())
    const cocokFilter =
      filter === 'semua' ||
      (filter === 'selesai' && k.selesai) ||
      (filter === 'belum' && !k.selesai)
    return cocokKeyword && cocokFilter
  })

  const jumlahSelesai = kegiatan.filter((k) => k.selesai).length

  return (
    <>
      <Navbar halaman={halaman} onPindah={setHalaman} nama={NAMA} nim={NIM} />

      <main className="container">
        {/* CONDITIONAL RENDERING: tampilkan konten sesuai halaman */}
        {halaman === 'beranda' && (
          <>
            <Header nama={NAMA} nim={NIM} onMulai={() => setHalaman('kegiatan')} />
            <Stats total={kegiatan.length} selesai={jumlahSelesai} />
          </>
        )}

        {halaman === 'kegiatan' && (
          <>
            <div className="page-bar">
              <h2>Kegiatan saya</h2>
              <Button onClick={() => setFormTerbuka(true)}>+ Tambah kegiatan</Button>
            </div>

            {/* CONDITIONAL RENDERING: pop up hanya tampil saat tombol diklik */}
            {formTerbuka && (
              <Modal judul="Tambah kegiatan" onTutup={() => setFormTerbuka(false)}>
                <ActivityForm
                  onTambah={tambahKegiatan}
                  onBatal={() => setFormTerbuka(false)}
                />
              </Modal>
            )}

            <SearchFilter
              keyword={keyword}
              onKeyword={setKeyword}
              filter={filter}
              onFilter={setFilter}
            />
            <ActivityList
              daftar={kegiatanTampil}
              onHapus={hapusKegiatan}
              onUbahStatus={ubahStatus}
            />
          </>
        )}
      </main>

      <Footer nama={NAMA} nim={NIM} />
    </>
  )
}

export default App
