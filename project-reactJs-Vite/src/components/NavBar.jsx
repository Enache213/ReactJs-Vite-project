import React from 'react'
import styles from './NavBar.module.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';

// import Home from '@mui/icons-material/Home';
// import myImg from '../../public/myImg.jpg'


const handleHomeClick = () => {
  window.scrollTo(0, 0); // Du-te la începutul paginii
}

const HomeButton = () => {
  return (
    <Button className={styles.buttonStyle} onClick={handleHomeClick} >
      Home
    </Button>
  );  
}


const handleProfileClick = () => {
  window.scrollTo(0, 0); // Du-te la începutul paginii
}

const Profile = () => {
  return (
    <Button className={styles.buttonStyle} onClick={handleProfileClick} >
      Profile
    </Button>
  );  
}


const NavBar = () => {
  return (

    //LeftSide
    <nav className={styles.navBar}>
      <div className={styles.left}>
    <p className={styles.paragraph}>Linkdin V2</p>
    <div className={styles.socialIco}>
      <a href="https://www.linkedin.com/in/david-enache-09409723b/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className={styles.icons}/>
      </a>
      <a href="https://github.com/Enache213" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className={styles.icons}/>
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dedavid09@gmail.com" target="_blank" rel="noopener noreferrer">
        <EmailIcon className={styles.icons}/>
      </a>
    </div>


  <div className={styles.right}>
            <HomeButton></HomeButton>
            <Profile></Profile>
      </div>
    


  </div>


  
      



    
    </nav>
      
  )
}

export default NavBar
