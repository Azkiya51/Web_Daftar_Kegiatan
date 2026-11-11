import logo from '../assets/logo-icon.svg'

const menu = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'kegiatan', label: 'Kegiatan' },
]

function Navbar({ halaman, onPindah, nama, nim }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <img src={logo} alt="Logo Daftar Kegiatan" className="brand-logo" />
          <div className="brand-teks">
            <strong>Daftar Kegiatan</strong>
            <span>{nama} • {nim}</span>
          </div>
        </div>
        <ul className="menu">
          {/* LIST RENDERING dengan map() dan key */}
          {menu.map((item) => (
            <li key={item.id}>
              <button
                className={halaman === item.id ? 'menu-link aktif' : 'menu-link'}
                onClick={() => onPindah(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
