import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import logo64 from '../../assets/logo64.png'


const navbar = () => {
  return (
    <div className='navbar'>
    <img src={assets.logo64} alt="logo64"/>
    </div>
  )
}

export default navbar