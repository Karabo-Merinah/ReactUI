import logo from '../../pictures/logo-picture.png'
import cupCollection from '../../pictures/cup-collection.jpg'
import styles from './Collection.module.css'
import { Text } from '../Text/Text'
import { ContentContainer } from '../Text/ContentContainer'


export const Collection = () => {
  return (
    <ContentContainer className={styles['content']}>
      <div className={styles['logo-img']}>
        <img src={logo}></img>
      </div>
      <div className={styles['collection-wrapper']}>
      <div className={styles['collection']}>
        <div className={styles['collection-card']}>
          <div className={styles['holiday-con']}>
            <Text variant={'h2'} style={{ fontFamily: 'Brush Script MT', fontSize: 20 }}>Holiday</Text>
            <Text variant={'h2'}>-20% OFF</Text>
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
          <div className={styles['third-collect']}>
            <img className={styles['img-coll']} src={cupCollection}></img>
            <div className={styles['collection-back']}>
              <Text variant={'span'} style={{ fontFamily: 'cursive', color: 'white' }}>Holiday Collection</Text>
              <Text variant={'h2'} style={{ fontFamily: 'monospace', color: 'white' }}>30 PTS</Text>
              <button className={styles['butt-cup']}>Order now </button>
            </div>
          </div>
        </div>
      </div>
      </div>

    </ContentContainer>
  )
}

