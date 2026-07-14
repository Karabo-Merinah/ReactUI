import styles from './Footer.module.css'
import {Text} from '../Text/Text'
import {FaFacebook,FaInstagram,FaPinterest} from 'react-icons/fa'
import footerImg from '../../pictures/footer_img.png'
import cupFooter from '../../pictures/cup_footer.jpg'
export const Footer = () => {
  return (
   <footer>
    <div className={styles['footer-cont']}>
    <img className={styles['img1-footer']} src={cupFooter}></img>
    <div className={styles['card']}>
    <img  src={footerImg}></img>
    </div>
     <div className={styles['social-links']}>
    <Text variant={'h2'} style={{color:'#FFD700',fontSize:25,fontFamily:"Aguafina Script",fontStyle:'italic',textAlign:'left'}} >Palisirie Follow us on this socials</Text>
    <div className={styles['socials-align']}>
     <a className={styles['facebook-icon']} href="#www.facebook.com"><FaFacebook/></a>
     <a className={styles['instagram-icon']} href="#www.instagram.com"><FaInstagram/></a>
     <a className={styles['pinterest-icon']} href="#www.pinterest.com"><FaPinterest/></a>
     </div>
     <Text variant={'h3'} style={{fontFamily:"'Sofia',sans-serif",textAlign:'right',color:'rgb(20,20,20)'}}>Thanks for the support</Text>
      </div>
      </div>
   </footer>
  )
}
