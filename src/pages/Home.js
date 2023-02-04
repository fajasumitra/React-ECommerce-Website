import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import JumbotronSlider from '../components/JumbotronSlider'
import Text from '../components/Text'
import AsideLeft from '../parts/AsideLeft'
import AsideRight from '../parts/AsideRight'
import FeaturedProduct from '../parts/FeaturedProduct'
import Footer from '../parts/Footer'
import Navbar from '../parts/Navbar'

export default function Home() {
  return (
    <>
        <AsideLeft />
        <AsideRight />
        <Navbar />
        <div className='grid grid-cols-12 mb-10 mt-[70px] mx-[70px]'>
            {/* layer 1 */}
            <div className='grid-rows-1 col-span-4'>
                {/* layer 2 */}
                <div className='w-auto h-auto pt-3 pr-3 grid justify-items-end'>
                    {/* layer 3 */}
                    <Card type='view' size3x4 gray className="mb-6" src='dummy.png' alt='displayed product'/>
                    <Card type='view' size3x4 gray src='dummy.png' alt='displayed product'/>
                </div>
            </div>
            <div className='w-auto h-auto col-span-8 pt-3 pl-3 pr-16'>
                <div className='w-full h-full bg-gray-100'>
                    <JumbotronSlider />
                </div>
            </div>
        </div>

        <Text center primary heading>Featured Product</Text>
        <div className='mx-[250px] my-12 h-[270px] bg-gray-200'>
            <FeaturedProduct />
        </div>
        
        <Text center primary heading>Purchase Online</Text>
        <div className='flex place-content-center justify-between w-[450px] m-auto mt-8'>
            <Button type={'link'} to='#' active>New Arrival</Button>
            <Text>/</Text>
            <Button type={'link'} to='#'>Best Seller</Button>
            <Text>/</Text>
            <Button type={'link'} to='#'>Most View</Button>
            <Text>/</Text>
            <Button type={'link'} to='#'>discount</Button>
        </div>
        <div className='mx-[300px] my-12 w-auto h-[800px] bg-gray-200'>

        </div>

        <Footer />
    </>
  )
}
