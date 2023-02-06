import React, { useState } from 'react'
import Button from '../components/Button'
import JumbotronSlider from '../components/JumbotronSlider'
import Text from '../components/Text'
import AsideLeft from '../parts/AsideLeft'
import AsideRight from '../parts/AsideRight'
import CardContent from '../parts/CardContent'
import FeaturedProduct from '../parts/FeaturedProduct'
import Footer from '../parts/Footer'
import Navbar from '../parts/Navbar'
import PurchaseOnline from '../parts/PurchaseOnline'

export default function Home() {
    const [addPurchaseOnline, setPurchaseOnline] = useState('newArrival')

    const PurchaseOnlineHandler = (tab)=>{
        if (tab === 'newArrival') setPurchaseOnline('newArrival')
        if (tab === 'bestSeller') setPurchaseOnline('bestSeller')
        if (tab === 'mostView') setPurchaseOnline('mostView')
        if (tab === 'discount') setPurchaseOnline('discount')
    }


        
  return (
    <>
        <AsideLeft />
        <AsideRight />
        <Navbar />
        {/* banner grid template */}
        <div className='grid grid-cols-12 mb-10 mt-[70px] mx-[70px]'>
            {/* banner column 1*/}
            <div className='grid-rows-1 col-span-4'>
                {/* banner rows 1 */}
                <div className='w-auto h-auto pt-3 pr-3 grid justify-items-end gap-6'>
                    <CardContent type='view' />
                    <CardContent type='view' />
                </div>
            </div>
            <div className='w-auto h-auto col-span-8 pt-3 pl-3 pr-16'>
                <div className='w-full h-full bg-gray-100'>
                    <JumbotronSlider />
                </div>
            </div>
        </div>

        <Text center primary heading>Featured Product</Text>
        <div className='mx-[250px] my-12 h-[270px] '>
            <FeaturedProduct />
        </div>
        
        <Text center primary heading>Purchase Online</Text>
        <div className='flex place-content-center justify-between w-[450px] m-auto mt-8'>
            <Button type={'button'} to='#' active={addPurchaseOnline === 'newArrival'} onClick={()=> PurchaseOnlineHandler('newArrival')}>New Arrival</Button>
            <Text>/</Text>
            <Button type={'button'} to='#' active={addPurchaseOnline === 'bestSeller'} onClick={()=> PurchaseOnlineHandler('bestSeller')}>Best Seller</Button>
            <Text>/</Text>
            <Button type={'button'} to='#' active={addPurchaseOnline === 'mostView'} onClick={()=> PurchaseOnlineHandler('mostView')}>Most View</Button>
            <Text>/</Text>
            <Button type={'button'} to='#' active={addPurchaseOnline === 'discount'} onClick={()=> PurchaseOnlineHandler('discount')}>discount</Button>
        </div>
        <div className='mx-[315px] my-12 w-auto h-[800px] '>
            {addPurchaseOnline === 'newArrival' && <PurchaseOnline type='newArrival'/>}
            {addPurchaseOnline === 'bestSeller' && <PurchaseOnline type='bestseller'/>}
            {addPurchaseOnline === 'mostView' && <PurchaseOnline type='mostView'/>}
            {addPurchaseOnline === 'discount' && <PurchaseOnline type='discount'/>}
        </div>

        <Footer />
    </>
  )
}
