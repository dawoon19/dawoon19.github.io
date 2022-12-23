import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'

import {useState, useEffect} from 'react'

import styles from '../styles/Home.module.css'

import { Link, Element } from "react-scroll";

import ProjectCard from '../components/ProjectCard'

import { BsGearFill } from 'react-icons/bs'
import {HiPencil} from 'react-icons/hi'

import projectData from '../projects.json';

export default function Home() {
  const [currProjectTab, setProjectTab] = useState("0");
  const [areProjectsVisible, setProjectVisibility] = useState(true);

  function goTo(id) {
    const section = document.querySelector(id)
    section.scrollIntoView({ behavior: 'smooth'})
  }

  function tabClick(type) {
    setProjectTab(type);
    // setProjectVisibility(false);
    // setProjectVisibility(true);
  }

  function Projects() {
    if (!areProjectsVisible) {
      return <></>;
    }
    return (
      projectData[currProjectTab].map((project) => <ProjectCard id={project.id} data={project}/>)
    )
  }

  function ProjectTab({type}) {

    var label, className, logo;
    switch (type) {
      case "0":
        label="Software";
        className=styles.projectTabSoftware;
        logo=<svg width="33px" height="16px" viewBox="0 0 322 162" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M-2.38553e-06 78.7019C-2.60964e-06 73.5748 2.76525 68.8438 7.23941 66.3161L78.6358 25.9803C85.497 22.104 94.211 24.507 98.099 31.3475C101.987 38.188 99.5767 46.8756 92.7155 50.7519L43.2426 78.7019L92.7155 106.652C99.5767 110.528 101.987 119.216 98.099 126.056C94.211 132.897 85.497 135.3 78.6358 131.423L7.23941 91.0877C2.76525 88.56 -2.16141e-06 83.829 -2.38553e-06 78.7019Z" fill="#FFFFFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M321.787 78.7019C321.787 73.5748 319.022 68.8438 314.548 66.3161L243.152 25.9803C236.29 22.104 227.576 24.507 223.688 31.3475C219.8 38.188 222.211 46.8756 229.072 50.7519L278.545 78.7019L229.072 106.652C222.211 110.528 219.8 119.216 223.688 126.056C227.576 132.897 236.29 135.3 243.152 131.423L314.548 91.0877C319.022 88.56 321.787 83.829 321.787 78.7019Z" fill="#FFFFFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M193.911 1.07548C201.256 4.07458 204.765 12.4254 201.748 19.7276L146.637 153.133C143.62 160.435 135.221 163.924 127.876 160.925C120.531 157.925 117.023 149.575 120.039 142.272L175.15 8.86686C178.167 1.5647 186.567 -1.92362 193.911 1.07548Z" fill="#FFFFFF"/>
            </svg>;
        break;
      case "1":
        label="Graphic Design";
        className=styles.projectTabGraphic;
        logo=<svg width="21px" height="26.5px" viewBox="0 0 315 336" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M161.276 202.868C162.616 200.82 162.905 198.179 161.677 196.052L84.7059 62.7335C81.5872 57.3319 73.3359 59.9933 73.9804 66.193L94.8203 266.671C95.0844 269.211 96.9799 271.283 99.4832 271.767L206.31 292.414C211.162 293.351 214.849 288.148 212.373 283.859L195.252 254.204C194.024 252.078 191.592 251.007 189.148 251.144C177.678 251.784 166.331 246.168 160.254 235.642C154.176 225.116 154.987 212.482 161.276 202.868ZM213.714 243.545C212.486 241.418 212.775 238.778 214.115 236.729C220.404 227.115 221.215 214.481 215.137 203.955C209.06 193.429 197.714 187.814 186.243 188.454C183.799 188.59 181.368 187.52 180.14 185.393L103.168 52.0743C100.05 46.6727 106.48 40.8575 111.527 44.5155L274.726 162.803C276.794 164.301 277.64 166.979 276.807 169.388L241.275 272.227C239.661 276.897 233.311 277.489 230.835 273.2L213.714 243.545Z" fill="#FFFFFF"/>
            </svg>;
        break;
      case "2":
        label="Hardware";
        className=styles.projectTabEngine;
        logo=<BsGearFill color="white"/>
        break;
      default:
        label="Illustrations";
        className=styles.projectTabDraw;
        logo=<HiPencil color="white"/>
        break;
    }

    if (currProjectTab==type) {
      return (
        <div
          onClick={()=>tabClick(type)}
          className={className}
        >
          {logo}
          <p className={styles.tabLabel}>{label}</p>
        </div>)
    }
    return (
      <div 
        onClick={()=>tabClick(type)}
        className={styles.projectTabInactive}
      >
        {logo}
        <p className={styles.tabLabel}>{label}</p>
      </div>)
  }
  
  function isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  return (
    <div className={styles.body}>
      <Head>
        <title>Daniel Won | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar/>
      <div id="home" className={styles.landing}>
        <div id={styles.landingContent}>
          <div className={styles.textContainer}>
            {/* <div id={styles.landingIcons}>
              <div id={styles.landingDesignIcon}></div> <div id={styles.landingDevIcon}></div>
            </div> */}
            <div id={styles.textFirstLine}>Hi there! I'm</div>
            <div id={styles.textSecondLine}>DANIEL!</div>
            <div id={styles.textThirdLine}>DESIGNER \ DEVELOPER</div>
          </div>
          <div id={styles.downArrow} onClick={()=>goTo("#projects")}/>  
        </div>   
      </div>

      <div id="projects" className={styles.projectSection}>
        <p className={styles.sectionHeading}>MY WORK</p>
          
        <div id={styles.tabContainer}>
          <ProjectTab type="0"/>
          <ProjectTab type="1"/>
          {/* <ProjectTab type="2"/> */}
          <ProjectTab type="3"/>
        </div>

        <div className={styles.cardContainer}>
          <Projects></Projects>
        </div>
      </div>

      {/* <div id="about" className={styles.aboutSection}>
        <p className={styles.sectionHeading}>ABOUT ME</p>
        Hello
      </div> */}
    </div>
  )
}
