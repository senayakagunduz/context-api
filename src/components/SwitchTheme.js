import React from 'react'
import {useContext} from "react"
import SiteContext,{Context} from "../context/SiteContext"

const SwitchTheme = () => {
    const {theme,setTheme}=useContext(Context);
    //theme ve setTheme app.js e yazdığımız data yerine geçiyor
  return (
    <div>
        
        <p>Mevcut tema: {theme}</p>
        <button onClick={()=>{setTheme(theme==="light" ? "dark" :"light")}}>Temayı değiştir</button>
    </div>
  )
}

export default SwitchTheme