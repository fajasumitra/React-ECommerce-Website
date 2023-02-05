import React from 'react'
import Button from '../components/Button'
import Text from '../components/Text'
import Card from '../components/Card'

export default function CardContent(props) {

    if (props.type === 'view'){
        return (   
              <Card type='view' size3x4 gray src='dummy.png' alt='displayed product'>
                  {/* content grid template*/}
                  <div className='h-full w-full absolute top-0 grid grid-cols-2 p-3 px-4'>
                      {/* content 1 column 1 */}
                      <div className='h-full w-full grid-rows-1'>
                          {/* content column 1 rows 1 */}
                          <div className='h-1/2 w-full'>
                              <div>
                                  <Button type='button' Bright white>New</Button>
                              </div>
                          </div>
                          {/* content column 1 rows 2 */}
                          <div className='h-1/2 w-full grid content-end'>
                                  <Text primary>Lorem Ipsum</Text>
                                  <Text primary>Lorem Ipsum</Text>
                          </div>
                      </div>
                          {/* content column 2 */}
                      <div>
                          {/* content column 2 rows 1 */}
                          <div className='h-1/2 w-full grid justify-items-end'>
                              <Text primary>$</Text>
                          </div>
                          {/* content column 2 rows 2 */}
                          <div className='h-1/2 w-full grid content-end justify-items-end'>
                              <Button type='button' borderedEmpty secondary>Buy Now</Button>
                          </div>                
                      </div>
                  </div>
              </Card>
        )
    }

    else if(props.type === 'product'){
        return (
            <Card type='product' src={props.src}>
                <div className='h-[60px] w-full absolute bottom-0 grid grid-rows-2'>
                    <div className='h-[60px] w-full grid grid-cols-2 py-1 px-2'>
                        {/* content 1 column 1 */}
                        <div className='h-full w-full grid-rows-1'>
                            {/* content column 1 rows 1 */}
                            <div className='h-1/2 w-full'>
                                <Text primary left>Lorem</Text>
                            </div>
                            {/* content column 1 rows 2 */}
                            <div className='h-1/2 w-full grid content-end'>
                                <Text red left>$</Text>
                            </div>
                        </div>
                            {/* content column 2 */}
                        <div>
                            {/* content column 2 rows 1 */}
                            <div className='h-1/2 w-full grid justify-items-end'>
                                <Text primary>furniture</Text>
                            </div>
                            {/* content column 2 rows 2 */}
                            <div className='h-1/2 w-full grid content-end justify-items-end'>
                                <Text>lorem</Text>
                            </div>                
                        </div>
                    </div>

                </div>
            </Card>
        )
    }
}
