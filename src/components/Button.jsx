// Komponen REUSABLE: dipakai di banyak tempat dengan props berbeda
function Button({ children, onClick, variant = 'primary', type = 'button', ...rest }) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
