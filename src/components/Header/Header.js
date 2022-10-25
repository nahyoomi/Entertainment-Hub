import './Header.css';
import ThemeButton from "../ThemeButton"


function Header() {


  return (

    <span 
    onClick={() => window.scroll(0, 0)} className='header'>
      🎥 Entertainment Hub 🎬
      <ThemeButton />
    </span>
  )
}

export default Header