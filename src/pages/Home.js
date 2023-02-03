import React from 'react'
import Card from '../components/Card'
import JumbotronSlider from '../components/JumbotronSlider'
import Text from '../components/Text'
import AsideLeft from '../parts/AsideLeft'
import AsideRight from '../parts/AsideRight'
import Footer from '../parts/Footer'
import Navbar from '../parts/Navbar'

export default function Home() {
  return (
    <>
        <AsideLeft />
        <AsideRight />
        <Navbar />
        <div className='grid grid-cols-10 mb-10 mt-[100px] mx-[90px]'>
            {/* layer 1 */}
            <div className='grid-rows-1 col-span-3'>
                {/* layer 2 */}
                <div className='w-[90px] h-auto bg-white py-7 px-3'>
                    {/* layer 3 */}
                    <Card type='view' main gray className="mb-6" />
                    <Card type='view' main gray />
                </div>
            </div>
            <div className='w-auto h-auto bg-white col-span-7 py-7 px-3'>
                <div className='w-full h-full bg-gray-300'>
                    <JumbotronSlider />
                </div>
            </div>
        </div>

        <Text center primary heading>Featured Product</Text>
        <div className='mx-[300px] my-12 w-auto h-[400px] bg-gray-200'>

        </div>
        
        <Text center primary heading>Purchase Online</Text>
        <div className='mx-[300px] my-12 w-auto h-[400px] bg-gray-200'>

        </div>

        <Footer />
    </>
  )
}
