import React from 'react'
import Button from './Button'

export default function Card(props) {
  
  const className = [props.className]
  if (props.size3x4) className.push("w-[376px] h-[282px]")
  if (props.product) className.push("w-[210px] h-[270px]")
  if (props.gray) className.push('bg-gray-300')
  if (props.center) className.push('mx-auto')
  
  if (props.type === 'view' ){
    return (
      <div className={className.join(' ')}>
          <img className='w-[376px] h-[282px] object-fill' src={props.src} alt={props.alt}>
          {props.children}
          </img>
        </div>
      )
    }
    else if (props.type === 'product'){
      return(
        <Button type='button' className='w-[210px] h-[270px] bg-gray-400'>
          <div className='w-[210px] h-[210px] bg-gray-100 relative bottom-[30px]'>
            <img src={props.src} alt='' className='object-fill w-[210px] h-[210px]'></img>
          </div>
        </Button>
      )
    }
  }
  