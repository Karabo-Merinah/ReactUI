
import styles from './Home.module.css'
import { ContentContainer } from '../Text/ContentContainer'
import {Text} from '../Text/Text'

export const Home = () => {
  return (
    <ContentContainer>
    <div className={styles['back-img']}>
      <div className={styles['texts']}>
    <Text variant={'h2'} style={{fontFamily:'"Yellowtail",cursive',fontWeight:'bolder',fontSize:50,color:'ButtonShadow'}}>Delight in</Text>
       <Text variant={'h3'} style={{fontFamily:'sans-serif',color:'ButtonShadow',fontSize:15}}>PARTICULARLY IN FURY BITE!</Text>
 <button className={styles.button}>ORDER NOW</button>
    </div>
    </div>
    
    </ContentContainer>
  )
}
