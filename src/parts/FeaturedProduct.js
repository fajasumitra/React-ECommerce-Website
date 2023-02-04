import React from 'react'
import Card from '../components/Card'

export default function FeaturedProduct(props) {
  return (
    <>
      <div className='flex justify-between'>
        <aside className='bg-gray-100 w-14 h-[270px]'>

        </aside>
        <div className='w-auto h-[270px] bg-gray-500 flex justify-between gap-3 static'>
          <Card type='product'/>
          <Card type='product'/>
          <Card type='product'/>
          <Card type='product'/>
        </div>
        <aside className='bg-gray-100 w-14 h-[270px]'>

        </aside>

      </div>
    </>
  )
}
