import React from 'react'
import Button from '../components/Button'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Navbar() {
  return (
    <div className='flex justify-between bg-gray-200 p-5 items-center px-8'>
      <div>
        <Button primary type='link' to='#'><GiHamburgerMenu className='text-[28px]'/></Button>
      </div>
      <div>
        <Button primary type='link' to='#' ><img src='/logo.png' alt='Logo' className='h-8' /></Button>
      </div>
      <div>
        <Button primary type='link' to='#' ><AiOutlineShoppingCart className='text-[28px]'/></Button>
      </div>
    </div>
  )
}
