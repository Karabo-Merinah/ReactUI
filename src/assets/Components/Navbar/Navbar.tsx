
import { ContentContainer } from '../Text/ContentContainer'
import styles from './Navbar.module.css'
import {Text} from '../Text/Text'
import { useState } from 'react'
import hamburgerIcon from '../../pictures/hamburger_icon.png'
export const Navbar = () => {
   const[menuOpen,SetMenuOpen]=useState(false);
   
   const toggleMenu=()=>{
        SetMenuOpen(!menuOpen)
   }
   let links=styles.links;

   if (menuOpen){
    links= styles.links + ' ' +styles.open;
   }
  return (
    <nav className={styles.nav}>
   <ContentContainer className={styles.content}>
    <Text variant={'h2'} style={{fontFamily:"Alex Brush",fontSize:26,fontStyle:'italic',fontWeight:'bolder',paddingLeft:0}}>Paliserie</Text>
    <div className={styles['nav']}>
      <div>
        <button className={styles['toggle']} onClick={toggleMenu}>
          <img src={hamburgerIcon} alt="Hamburger icon" className={styles['hamb-icon']}></img>
        </button>
      </div>
    </div>
     <div className={links}>
        <a href="#HOME" className={styles.link}>HOME</a>
        <a href="#MENU" className={styles.link}>MENU</a>
        <a href="#CAKES" className={styles.link}>CAKES</a>
        <a href="#PASTRIES" className={styles.link}>PASTRIES</a>
        <a href="#CONTACT" className={styles.link}>CONTACT</a>
        <button className={styles['nav-butt']}>0666 ORDER NOW</button>
     </div>
   </ContentContainer>
   </nav>
  )
}
