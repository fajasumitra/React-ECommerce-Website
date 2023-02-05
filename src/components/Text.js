import classNames from 'classnames'
import React from 'react'

export default function Text({
    primary,
    secondary,
    tertiary,
    active,
    center,
    children,
    red,
    left,
    heading
}){   
    const classes = classNames(' ', {
        "text-textMain" : primary,
        "text-primary" : red,
        "text-textSecondary" : secondary,
        "text-textTertiary" : tertiary,
        "text-secondary" : active,
        "text-center" : center,
        "text-3xl font-semibold" : heading,
        "text-left" : left
    })  
    
    return (
        <p className={classes}>{children}</p>
    )
}