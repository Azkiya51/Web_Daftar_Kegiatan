import { useEffect } from 'react'

// Komponen REUSABLE: pop up dengan latar belakang blur
function Modal({ judul, onTutup, children }) {
  useEffect(() => {
    // Tutup dengan tombol Escape
    const handleKey = (e) => {
      if (e.key === 'Escape') onTutup()
    }
    document.addEventListener('keydown', handleKey)
    // Kunci scroll halaman saat pop up terbuka
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onTutup])

  return (
    // Klik area blur untuk menutup
    <div className="modal-overlay" onClick={onTutup}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-judul"
        onClick={(e) => e.stopPropagation()} // klik di dalam kotak tidak menutup
      >
        <div className="modal-head">
          <h2 id="modal-judul">{judul}</h2>
          <button className="modal-tutup" onClick={onTutup} aria-label="Tutup">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
