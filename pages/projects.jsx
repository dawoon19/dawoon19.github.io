import styles from '../styles/Projects.module.css'
import ProjectCard from '../components/ProjectCard';
import projectData from '../projects.json';
import {useState} from 'react';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';

import { BsFillCursorFill, BsFillFileEarmarkCodeFill, BsPaletteFill, BsWrench } from 'react-icons/bs';
import HeadComponent from '../components/HeadComp';



export default function GeneralProjects() {
    const router = useRouter();
    const Box = (props) => {
        switch (props.projtype) {
            case 0:
                var bgcolor = "#D45168";
                var typetitle = "PRODUCT DESIGNS";
                var pagelink = "projects/design";
                var caption = "User interface, experience, and interaction designs for web/mobile products";
                var icon = <BsFillCursorFill color="white" size={30}/>;
                break;
            case 1: 
                var bgcolor = "#4374BE";
                var typetitle = "SOFTWARE PROJECTS";
                var pagelink = "projects/software";
                var caption = "Programming and software work for academic, industrial, or personal projects";
                var icon = <BsFillFileEarmarkCodeFill color="white" size={30}/>;
                break;
            case 2:
                var bgcolor = "#D45168";
                var typetitle = "GRAPHIC DESIGN & VISUAL ART";
                var pagelink = "projects/visualart";
                var caption = "Illustrations, publication, marketing, or other visual art/designs I have made";
                var icon = <BsPaletteFill color="white" size={30}/>;
                break;
            default:
                var bgcolor = "#4374BE";
                var typetitle = "ENGINEERING PROJECTS";
                var pagelink = "projects/engineering";
                var caption = "Mechanical/electrical engineering or industrial design projects I have worked on";
                var icon = <BsWrench color="white" size={30}/>;
                break;
        }
    
        return (
            <div className={styles.boxContainer}>
                <div className={styles.projecttypebox} style={{backgroundColor:bgcolor}} onClick={()=>router.push(pagelink)}>
                    {icon}
                    <a>{typetitle}</a>
                </div>
                <p>{caption}</p>
            </div>
        )
    }

    return (
        <>
            <HeadComponent/>
            <NavBar/>
            <div className={styles.projecthome}>
                <div className={styles.textContainer}>
                    <h4>
                        PORTFOLIO
                    </h4>
                </div>
                <div className={styles.projectportalcontainer}>
                    <Box projtype={0}/>
                    <Box projtype={1}/>
                    <Box projtype={2}/>
                    <Box projtype={3}/>
                </div>
            </div>
        </>
    );
}