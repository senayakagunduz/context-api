import React,{createContext,useState} from 'react'
import { useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
    //local storageda ki varsayılan değeri useState e ekledik
    //artık sayfayı yenilesek de değiştirdiğimiz mode aynı kalacak.
    const [theme, setTheme]=useState(localStorage.getItem("theme") || "light");
    const values={
        theme,setTheme
    }
    useEffect(()=>{
        localStorage.setItem('theme',theme);
    },[theme])
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export default ThemeContext