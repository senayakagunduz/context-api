import {useContext} from 'react'
import '../App.css'
import Header from './Header'
import Button from './Button'
import ThemeContext from '../context/ThemeContext'
import Profile from './Profile'
const Container = () => {
    const {theme}=useContext(ThemeContext);
  return (
    <div className={`app ${theme==="dark" ? theme : ""}`}>
        <Header/>
        <br/>
        <Button/>
        <br/>
        <Profile/>
    </div>
  )
}

export default Container