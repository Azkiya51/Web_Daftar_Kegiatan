function About({ nama, nim }) {
  const fitur = [
    'Menambah kegiatan baru lewat formulir',
    'Menghapus kegiatan',
    'Menandai kegiatan selesai atau belum',
    'Mencari kegiatan berdasarkan judul',
    'Memfilter berdasarkan status',
    'Menampilkan atau menyembunyikan detail',
  ]

  return (
    <section className="card about">
      <h2>Tentang aplikasi</h2>
      <p>
        Aplikasi ini dibuat oleh <strong>{nama}</strong> (NIM {nim}) untuk tugas Component-Based UI
        Development menggunakan React dan Vite.
      </p>
      <h3>Fitur</h3>
      <ul>
        {fitur.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  )
}

export default About
