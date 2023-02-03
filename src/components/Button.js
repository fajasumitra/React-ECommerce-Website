import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

Button.propTypes = {
    type : propTypes.oneOf(['button', 'link']),
    onClick : propTypes.func,
    target : propTypes.string,
    className : propTypes.string,
    href : propTypes.string,
}

export default function Button(props) {
    const className = [props.className]
    if (props.tertiary) className.push("text-textTertiary")
    if (props.bordered) className.push("border border-isGray border-2 px-3 py-1")
    if (props.primary) className.push("text-textMain")
    if (props.secondary) className.push("text-textSecondary")
    if (props.active) className.push("text-secondary")
    
    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (props.type === 'link'){
        if (props.isExternal){
            return (
                <a href= {props.link} className={className.join(' ')} target={props.target === "_blank" ? "noopener noreferer" : undefined }>
                    {props.children}
                </a>
            )
        }
    }
        else {
            return (
                <Link to={props.link} className={className.join(' ')}>
                    {props.children}
                </Link>
            )
            
        }
        
    return (
        <button className={className.join(" ")} onClick= {onClick}>
            {props.children}
        </button>
    )
}