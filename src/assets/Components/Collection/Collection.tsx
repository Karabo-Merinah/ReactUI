import logo from '../../pictures/logo-picture.png'
import HolidayLogo from '../../pictures/holiday.png'
import styles from './Collection.module.css'
import { Text } from '../Text/Text'
import { ContentContainer } from '../Text/ContentContainer'
import collection from '../../pictures/holiday-collection.png'

export const Collection = () => {
  return (
    <>
     <div className={styles['logo-img']}>
    <ContentContainer className={styles['content']}>
        <img src={logo}></img>
        </ContentContainer>
      </div>
      <div className={styles['collection-wrapper']}>
      <div className={styles['collection']}>
        <div className={styles['collection-card']}>
          <div className={styles['holiday-con']}>
            <Text variant={'h2'} style={{ fontFamily: "Alex Brush", fontSize: 35,fontWeight:'bold' }}>Holiday</Text>
            <img className={styles['holiday-logo']} src={HolidayLogo}></img>
            <Text variant={'h2'} style={{fontStyle:"'Dancing Script',cursive"}}>-20% OFF</Text>
            <button className={styles['butt-style']}>ORDER TODAY</button>
          </div>
        </div>
        <div className={styles['collection-card']}>
          <div className={styles['collection-img']}  >
            <div className={styles['button-div']}>
              <Text variant={'span'}>
                <button className={styles['cupcake-button']}>Order today</button>
              </Text>
            </div>
          </div>
        </div>        
        <div className={styles['collection-card']}>
         <div className={styles['third-collect']} style={{backgroundImage:`url(${collection})`}}>
            <div className={styles['collection-back']}>
              <Text variant={'h3'} className={styles['collection-title']} style={{ fontFamily: "Alex Brush", color: 'white' }}>Holiday Collection</Text>
              <Text variant={'h2'} className={styles['collection-subtitle']} style={{ fontFamily: "Alex Brush", color: 'white'}}>Most loved product</Text>
              <Text variant={'h2'} className={styles['points']} style={{ fontFamily:"'Satisfy', cursive", color: 'white' }}>30 PTS</Text>
              <div className={styles['butt-div']}>
                 <button className={styles['butt-cup']}>Order now </button>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    </>
  )
}

