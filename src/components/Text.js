import classNames from 'classnames'
import React from 'react'

export default function Text({
    primary,
    secondary,
    tertiary,
    active,
    center,
    children,
    heading,
    ...rest
}){   
    const classes = classNames(' ', {
        "text-textMain" : primary,
        "text-textSecondary" : secondary,
        "text-textTertiary" : tertiary,
        "text-secondary" : active,
        "text-center" : center,
        "text-3xl font-semibold" : heading,        
    })  
    
    return (
        <p {...rest} className={classes}>{children}</p>
    )
}