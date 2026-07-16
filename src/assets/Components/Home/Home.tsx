
import styles from './Home.module.css'
import { ContentContainer } from '../Text/ContentContainer'
import {Text} from '../Text/Text'

export const Home = () => {
  return (
   
    <div className={styles['back-img']}>
       <ContentContainer>
      <div className={styles['texts']}>
    <Text variant={'h2'} style={{fontFamily:'"Alex Brush",cursive',fontWeight:'bolder',fontSize:70,color:'black'}}>Delight in</Text>
       <Text variant={'h3'} style={{fontFamily:'sans-serif',color:'rgb(20,20,20)',fontSize:15,fontWeight:'normal'}}>PATIICU IN FUERY BITE!</Text>
 <button className={styles.button}>ORDER NOW</button>
    </div>
      </ContentContainer>
    </div>
    
  
  )
}
