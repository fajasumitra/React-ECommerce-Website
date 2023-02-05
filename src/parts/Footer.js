import React from 'react'
import Button from '../components/Button'
import Text from '../components/Text'

export default function Footer() {
  return (
    <>
    <footer className='w-full h-[300px] bg-gray-200 grid grid-cols-6 absolute px-[10rem] py-[2.5rem]'>
        <div className='col-span-2 '>
            <Text primary>contact us</Text>
            <Text primary>Cell-phone : 085716133008</Text>
            <Text primary>Email      : fajasumitra0@gmail.com</Text>
            <Text primary>Github     : github.com/fajasumitra</Text>
        </div>
        <div>
            <Text>account</Text>
            <Button type='link' isExternal>My Account</Button>
        </div>
        <div className='flex flex-col flex-start'>
            {/* shipping */}
            <Button type='link'>New Product</Button>
            <Button type='link'>Top Seller</Button>
            <Button type='link'>Manufacturers</Button>
            <Button type='link'>Suppliers</Button>
        </div>
        <div className='col-span-2'>
            {/* your choice product */}
        </div>

    </footer>
    </>
  )
}
