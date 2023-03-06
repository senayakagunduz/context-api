import React from 'react'
import { useContext } from 'react'
import SiteContext,{Context} from "../context/SiteContext"

const SwitchLanguage = () => {
    const {lang,setLang}=useContext(Context)
  return (
    <div>
        <p>Mevcut dil: {lang}</p>
        <button onClick={()=>{setLang(lang==="tr" ? "eng" :"tr")}}>Dili değiştir</button>
    </div>
  )
}

export default SwitchLanguage