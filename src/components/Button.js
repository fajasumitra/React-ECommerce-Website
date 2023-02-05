import React from 'react'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'


Button.propTypes = {
    type : propTypes.oneOf(['button', 'link']),
    onClick : propTypes.func,
    target : propTypes.string,
    className : propTypes.string,
    href : propTypes.string,
}

export default function Button(props) {
    const className = [props.className]
    if (props.borderedEmpty) className.push("border border-isGray border-2 px-3 py-1 w-auto")
    if (props.tertiary) className.push("text-textTertiary")
    if (props.primary) className.push("text-textMain")
    if (props.secondary) className.push("text-textSecondary")
    if (props.active) className.push("text-secondary")
    if (props.white) className.push('text-white')
    if (props.Bright) className.push('px-3 py-[1px] bg-secondary')
    if (props.radius) className.push ('')
    
    const navigate = useNavigate()
        

    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (props.type === 'link'){
        if (props.isExternal){
            return(
                <a href={props.href} className={className.join(' ')}  target={props.target === "_blank" ? "noopener noreferer" : undefined }>
                    {props.children}    
                </a>
            )
        }
        else {
            return (
                <button onClick={()=> navigate(props.to)} className={className.join(' ')}>{props.children}</button>
            )
        }
    }
        
    if (props.type === 'button'){
        return (
            <button className={className.join(" ")} onClick= {onClick}>
                {props.children}
            </button>
    )
    }
}