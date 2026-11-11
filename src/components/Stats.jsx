import StatCard from './StatCard'

function Stats({ total, selesai }) {
  const belum = total - selesai
  const data = [
    { label: 'Total kegiatan', nilai: total },
    { label: 'Sudah selesai', nilai: selesai },
    { label: 'Belum selesai', nilai: belum },
  ]

  return (
    <section className="stats">
      {data.map((d) => (
        <StatCard key={d.label} label={d.label} nilai={d.nilai} />
      ))}
    </section>
  )
}

export default Stats
