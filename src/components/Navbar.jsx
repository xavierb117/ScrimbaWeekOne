import logo from '../assets/react.svg'

export default function Navbar() {
  return (
    <header>
        <nav>
            <img src = {logo} alt = "React Logo" className = "logo" />
            <span className = "facts">ReactFacts</span>
        </nav>
    </header>
  )
}