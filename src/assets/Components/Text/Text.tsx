import React from 'react'

type TextProps={
    variant?:string,
    style?:React.CSSProperties,
    className?:string,
    children:React.ReactNode
}


export const Text:React.FC<TextProps> = ({variant,style,className,children}) => {

    if(variant === 'h1')
      return <h1 className={className} style={style}>{children}</h1>
    if(variant === 'h2')
        return <h2 className={className}  style={style}>{children}</h2>
    if(variant === 'h3')
        return <h3 className={className} style={style}>{children}</h3>
    if(variant === 'span')
        return <span className={className} style={style}>{children}</span>
    if(variant ==='p')
        return <p className={className} style={style}>{children}</p>
      return(
   <div className={className}  style={style}>{children}</div>
  )
}
