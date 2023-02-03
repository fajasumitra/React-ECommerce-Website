import classNames from 'classnames'
import React from 'react'

export default function Text({
    primary,
    secondary,
    tertiary,
    active,
    children
}){   
    const classes = classNames('', {
        "text-textMain" : primary,
        "text-textSecondary" : secondary,
        "text-textTertiary" : tertiary,
        "text-secondary" : active,
    })  
    
    return (
        <p className={classes}>{children}</p>
    )
}