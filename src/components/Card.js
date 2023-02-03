import React from 'react'
import Button from './Button'

export default function Card(props) {

  const className = [props.className]
    if (props.main) className.push("w-[450px] h-[315px] m-auto")
    if (props.product) className.push("w-[270]")
    if (props.gray) className.push('bg-gray-100')

    if (props.type === 'view' ){
      return (
        <div className={className.join(' ')}>
          {props.children}
        </div>
      )
    }
    else{
      return(
        <Button className={className.join(' ')}>
          {props.children}
        </Button>
      )
    }
}
