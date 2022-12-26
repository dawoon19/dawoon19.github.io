import HeadComponent from '../components/HeadComp'
import Image from 'next/image'

import {useState, useEffect} from 'react'

import styles from '../styles/Home.module.css'

import { Link, Element } from "react-scroll";

import NavBar from '../components/NavBar'
import ProjectCard from '../components/ProjectCard'
import Landing from '../components/Landing'
import ProjectPage from '../components/ProjectPage'

// Icons
import { BsGearFill } from 'react-icons/bs'
import {HiPencil} from 'react-icons/hi'

import projectData from '../projects.json';

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
