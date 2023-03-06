import React from 'react'
import SwitchLanguage from './SwitchLanguage'
import SwitchTheme from './SwitchTheme'

const Header = () => { 
  return (
    <div className='header'>
     <h1>Header</h1>
     <SwitchTheme/>
     <SwitchLanguage/>
    </div>
  )
}

export default Header