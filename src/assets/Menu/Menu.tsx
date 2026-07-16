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
    <>
    <div className={styles['menu-cont']}>
     <ContentContainer >
    <Text variant={'h2'} style={{fontFamily:"Exo,sans-serif",fontSize:30,textAlign:'center',paddingTop:20,paddingBottom:20}}>Delight in every Bite!</Text>
     <div className={styles['image-grid']}>
        {
            pictures.map(product=>{
               return <MenuCard key={product.id} id={product.id} imgLink={product.imgLink}></MenuCard>
            }
            )
        }
     </div>
     </ContentContainer>
     </div>

     <div className={styles['text-section']}>
      <ContentContainer>
     <div className={styles['text-grid']}>
        {
          desc.map(item=>{
                    return (
                  <div className={styles['menu-text']} key={item.id}>
                    <Text variant={'h2'} style={{fontFamily:"'Kotta One',serif",fontSize:20}}>{item.name}</Text>
                    <Text variant={'h3'} style={{fontWeight:'lighter',fontSize:10,color:'black'}}>{item.description}</Text>
                    <button className={styles['buttons']}>Order now</button>
                  </div>
                )
            })
        }
     </div>
     </ContentContainer>
     </div>
</>
  )
}
