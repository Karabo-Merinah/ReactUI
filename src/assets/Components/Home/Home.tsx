
import styles from './Home.module.css'
import { ContentContainer } from '../Text/ContentContainer'
import {Text} from '../Text/Text'

export const Home = () => {
  return (
    <ContentContainer>
    <div className={styles['back-img']}>
      <div className={styles['texts']}>
    <Text variant={'h2'} style={{fontFamily:'"Alex Brush",cursive',fontWeight:'bolder',fontSize:70,color:'black'}}>Delight in</Text>
       <Text variant={'h3'} style={{fontFamily:'sans-serif',color:'black',fontSize:15}}>PATIICU IN FUERY BITE!</Text>
 <button className={styles.button}>ORDER NOW</button>
    </div>
    </div>
    
    </ContentContainer>
  )
}
