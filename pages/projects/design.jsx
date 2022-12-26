
import styles from '../../styles/Projects.module.css'
import ProjectCard from '../../components/ProjectCard';
import projectData from '../../projects.json';
import {useState} from 'react';
import NavBar from '../../components/NavBar';
import HeadComponent from '../../components/HeadComp';

export default function DesignProjects() {
    const [areProjectsVisible, setProjectVisibility] = useState(true);

    function Projects() {
        return (
            projectData[0].map((project) => <ProjectCard key={project.id} id={project.id} data={project}/>)
        )
    }
    return (
        <>
            <HeadComponent/>
            <NavBar/>
            <div className={styles.projectpage}>
                <div className={styles.textContainer}>
                    <div>
                        MY <a>DESIGN</a> WORK
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <Projects/>
                </div>
            </div>
        </>
    );
}