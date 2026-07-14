import styles from './Menu.module.css'
import React from 'react'
export type MenuProps={
    id:number
    imgLink:string
}

export const MenuCard:React.FC<MenuProps> = ({imgLink}) => {
  return (
   <article className={styles['menu-pic']}>
    <div className={styles['menu-image']}>
    <img className={styles['menu-pictures']} src={imgLink} alt={'product image'}></img>
    </div>
   </article>
  )
}
