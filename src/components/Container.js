import {useContext} from 'react'
import '../App.css'
import Header from './Header'
import Button from './Button'
import ThemeContext from '../context/ThemeContext'
const Container = () => {
    const {theme}=useContext(ThemeContext);
  return (
    <div className={`app ${theme==="dark" ? theme : ""}`}>
        <Header/>
        <br/>
        <Button/>
    </div>
  )
}

export default Container