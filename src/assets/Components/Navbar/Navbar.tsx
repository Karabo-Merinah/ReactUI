
import { ContentContainer } from '../Text/ContentContainer'
import styles from './Navbar.module.css'
import {Text} from '../Text/Text'
export const Navbar = () => {
  return (
    <nav>
   <ContentContainer className={styles.content}>
    <Text variant={'h2'} style={{fontFamily:"Alex Brush",fontSize:25,fontStyle:'italic',fontWeight:'bolder',paddingLeft:20}}>Paliserie</Text>
     <div className={styles.links}>
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
