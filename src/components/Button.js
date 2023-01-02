import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Button = () => {
    const data=useContext({ThemeContext});
    console.log(data);
  return (
    <div>Button ({data})</div>
  )
}

export default Button