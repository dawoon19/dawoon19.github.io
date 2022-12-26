
import styles from '../styles/Projects.module.css'
import ProjectCard from './ProjectCard';
import projectData from '../projects.json';
import {useState} from 'react';

export default function ProjectPage() {
    const [areProjectsVisible, setProjectVisibility] = useState(true);

    const [projectCategory, setProjCategory] = useState(0);

    function Projects() {
        if (areProjectsVisible) {
            console.log('here');
            return (
                projectData[0].map((project) => <ProjectCard key={project.id} id={project.id} data={project}/>)
            )
        }
        return <></>;
    }
    return (
        <div className={styles.projectpage}>
            <div className={styles.textContainer}>
                <span>
                    MY <a>DESIGN</a> WORK
                </span>
            </div>
            <div className={styles.cardContainer}>
                <Projects/>
            </div>
        </div>
    );
}