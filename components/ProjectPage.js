
import styles from '../styles/Projects.module.css'
import ProjectCard from './ProjectCard';
import projectData from '../data/projects.json';

export default function ProjectPage() {
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