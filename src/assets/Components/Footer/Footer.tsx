import styles from './Footer.module.css'
import {Text} from '../Text/Text'
import {FaFacebook,FaInstagram,FaPinterest} from 'react-icons/fa'
import footerCard from '../../pictures/footer_card.png'
import footerImg from '../../pictures/footer1.png'

export const Footer = () => {
  return (
   <footer>
    <div className={styles['footer-cont']}>
    <img className={styles['img1-footer']} src={footerImg}></img>
    <div className={styles['card']}>
    <img  src={footerCard}></img>
    </div>
     <div className={styles['social-links']}>
    <Text variant={'h2'} style={{color:'#963949',fontSize:25,fontFamily:"Aguafina Script",fontStyle:'italic',textAlign:'left'}} >Palisirie Follow us on this socials</Text>
    <div className={styles['socials-align']}>
     <a className={styles['facebook-icon']} href="https://www.facebook.com" ><FaFacebook/></a>
     <a className={styles['instagram-icon']} href="https://www.instagram.com"><FaInstagram/></a>
     <a className={styles['pinterest-icon']} href="https://www.pinterest.com"><FaPinterest/></a>
     </div>
     <Text variant={'h3'} style={{fontFamily: "'Cormorant Garamond', serif",textAlign:'right',color:'rgb(20,20,20)',fontSize:10}}>Thanks for the support</Text>
      </div>
      </div>
   </footer>
  )
}
