import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const {theme,setTheme}=useContext(ThemeContext);
  return (
    <div className='header'>
      Active Theme: {theme}
      <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Header