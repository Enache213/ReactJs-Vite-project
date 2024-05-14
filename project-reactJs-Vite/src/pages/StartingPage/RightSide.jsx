import React from 'react'
import styles from './RightSide.module.scss'
import imagePerson1 from '../../assets/imagePerson1.jpg'
import imagePerson2 from '../../assets/imagePerson2.jpg'
import imagePerson3 from '../../assets/imagePerson3.jpg'
import imagePerson5 from '../../assets/imagePerson5.jpg'
import imagePerson6 from '../../assets/imagePerson6.jpg'
import Button from '@mui/material/Button';

const friendWithImage = [

  { name: "Enache David", imageUrl: imagePerson1, paragraph: "Frontend Developer"},
  { name: "Cosmin Andrei", imageUrl: imagePerson2,paragraph: " Consultant IT "},
  { name: "John Smith", imageUrl: imagePerson3, paragraph: "FullStack Developer" },
  { name: "Radu Lungu", imageUrl: imagePerson5, paragraph: "Backend Developer"},
  { name: "Radu Lungu", imageUrl: imagePerson6, paragraph: "Automative Tester"},
]


const RightSide = () => {
  return (  
    <div className={styles.RightSide}>
    <div className={styles.feed}>
      <h1 className={styles.header}>Add to your feed</h1>
      
      <div className={styles.friendList}>
        
        {friendWithImage.map((friend, index) => (
          <div className={styles.friend} key={index}>
            
            <img
              src={friend.imageUrl}
              alt={friend.name}
            />
                <div className={styles.friendInfo}>
                <h3>{friend.name}</h3>
                <p>{friend.paragraph}</p>
              </div>
              <Button className={styles.button} variant="">Follow</Button>
          </div>
          
        ))}
      </div>
  
    </div>
  </div>
  )
}

export default RightSide
