import React, { useState } from 'react'
import Button from '../components/Button'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
  <>
      <nav className='flex justify-between bg-white p-5 items-center px-8 fixed top-0 left-0 right-0 h-[70px] z-10'>
        <div>
          <Button primary type={'button'} onClick={() => setDropdownOpen(!dropdownOpen)}><GiHamburgerMenu className='text-[28px]'/></Button>
        </div>
        <div>
          <Button primary type='link' isInternal><img src='/logo.png' alt='Logo' className='h-8' /></Button>
        </div>
        <div>
          <Button primary type='link'><AiOutlineShoppingCart className='text-[28px]'/></Button>
        </div>
      </nav>
      {dropdownOpen && (
        <div className='fixed top-0 left-0 right-0 mt-12'>
          <Button primary type='link' to='/'>Home</Button>
          <Button primary type='link' to='/about'>About</Button>
        </div>
      )}
  </>
  )
}