import React from 'react'
import styles from './LeftSide.module.scss'
import myImg from '../../assets/myImg.jpg'
import backgroundImg from '../../assets/backgroundImg.jpg'

const LeftSide = () => {
  return (
    <div className={styles.leftSide}>
      <div className={styles.side}>
      <img src={backgroundImg} className={styles.backgroundImg}  alt="" />
       <img src={myImg} className={styles.myImg} alt="" />
    </div>
    <br></br><br></br>
    <div className={styles.details}>
        <h2 className={styles.myName}>Enache David</h2> 
        <p className={styles.paragraph}>Junior Frontend Developer</p>
        <hr></hr>
    </div>
    <div className={styles.groups}>
<ul className={styles.ulList}>
  <li>Groups</li>
  <li>Events</li>
  <li>Hastag</li>
</ul>
    </div>







    </div>
  )
}

export default LeftSide
