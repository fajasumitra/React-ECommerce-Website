import React from 'react'
import CardContent from './CardContent'

export default function PurchaseOnline() {
  return (
    <>
        <div className='w-auto h-[270px] flex justify-between gap-3 static'>
            <CardContent type='product'/>
            <CardContent type='product'/>
            <CardContent type='product'/>
            <CardContent type='product'/>
        </div>
        <div className='w-auto h-[270px] flex justify-between gap-3 static mt-4'>
            <CardContent type='product'/>
            <CardContent type='product'/>
            <CardContent type='product'/>
            <CardContent type='product'/>
        </div>
    </>
  )
}
