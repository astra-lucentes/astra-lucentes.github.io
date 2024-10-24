import './Buttons.css'

export const ToggleButton = ({selected, onClick, className, children}) => {
  return (
    <button
      className={`toggle ${className} ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}