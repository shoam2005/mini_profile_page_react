import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Footer from './components/Footer.jsx'
import styles from './app.module.css'

import Header from './components/Header.jsx'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className={styles.cardsContainer}>
      <ProfileCard name='shoam harel'description='Teacher' type='Teacher' ></ProfileCard>
      <ProfileCard name='shoam harel'description='student' type='Student' ></ProfileCard>
      <ProfileCard name='shoam harel'description='Friend' type='Friend' ></ProfileCard>
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
