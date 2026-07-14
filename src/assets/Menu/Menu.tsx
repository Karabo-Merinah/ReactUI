import React from 'react'
import {Text} from '../Components/Text/Text'
import styles from './Menu.module.css'
import { MenuCard, type MenuProps } from './MenuCard'
import { ContentContainer } from '../Components/Text/ContentContainer'
type MenuItemCardProps={
    pictures:MenuProps[]
    desc:DescProps[]
}

type DescProps={
    name:string
    description:string
    id:number
}
export const Menu:React.FC<MenuItemCardProps> = ({pictures,desc}) => {
  return (
    <ContentContainer >
    <div className={styles['menu-cont']}>
    <Text variant={'h2'} style={{fontWeight:'bold',fontFamily:'Trebuchet MS',fontSize:20,textAlign:'center',paddingTop:20,paddingBottom:20}}>Delight in every Bite!</Text>
     <div className={styles['image-grid']}>
        {
            pictures.map(product=>{
               return <MenuCard key={product.id} id={product.id} imgLink={product.imgLink}></MenuCard>
            }
            )
        }
     </div>
     </div>
     <div className={styles['text-grid']}>
        {
          desc.map(item=>{
                    return (
                  <div className={styles['menu-text']} key={item.id}>
                    <Text variant={'h2'} style={{fontFamily:"'Kotta One',serif",fontSize:20}}>{item.name}</Text>
                    <Text variant={'h3'} style={{fontWeight:'lighter',fontSize:15}}>{item.description}</Text>
                    <button className={styles['buttons']}>Order now</button>
                  </div>
                )
            })
        }
     </div>
 </ContentContainer>

  )
}
