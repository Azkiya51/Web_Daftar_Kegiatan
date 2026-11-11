import Button from './Button'
import ilustrasi from '../assets/ilustrasi-hero.svg'

function Header({ nama, nim, onMulai }) {
  return (
    <header className="hero">
      <div className="hero-teks">
        <p className="hero-sub">Halo, saya {nama} (NIM {nim})</p>
        <h1>Atur kegiatanmu, selesaikan satu per satu.</h1>
        <p className="hero-desc">
          Catat tugas kuliah dan agenda harianmu, tandai yang sudah selesai, lalu cari kapan saja dibutuhkan.
        </p>
        <Button onClick={onMulai}>Lihat daftar kegiatan</Button>
      </div>
      <img src={ilustrasi} alt="" className="hero-gambar" />
    </header>
  )
}

export default Header
