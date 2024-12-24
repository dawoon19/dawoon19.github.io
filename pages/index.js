import HeadComponent from '../components/HeadComp'
import {useState } from 'react'

import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import ProjectPage from '../components/ProjectPage'

export default function Home() {

  const [currTabNum, setTab] = useState("home");
  const [isDarkMode, setDarkMode] = useState(true);

  // const land = <Landing routeFunc={setTab}/>
  const CurrentTab = () => {
    switch (currTabNum) {
      case "home":
        return <Landing/>
      case "about":
        return <></>
      case "contact":
        return <></>
      default:
        return <ProjectPage/>
    }
  }

  return (
    <div className={styles.body}>
      <HeadComponent/>
      <NavBar isHome={true}/>
      <Landing/>
      {/* <CurrentTab/> */}
    </div>
  )
}
