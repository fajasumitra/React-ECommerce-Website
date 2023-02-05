import React from 'react'
import CardContent from './CardContent'

export default function FeaturedProduct() {
  return (
    <>
      <div className='flex justify-between'>
        <aside className=' w-14 h-[270px]'>

        </aside>
        <div className='w-auto h-[270px] flex justify-between gap-3 static'>
          <CardContent type='product' src='dummy1.png'/>
          <CardContent type='product'/>
          <CardContent type='product'/>
          <CardContent type='product'/>
        </div>
        <aside className=' w-14 h-[270px]'>

        </aside>

      </div>
    </>
  )
}
