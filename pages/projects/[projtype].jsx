
import styles from '../../styles/Projects.module.css'
import ProjectCard from '../../components/ProjectCard';
import projectData from '../../projects.json';
import {useState} from 'react';
import NavBar from '../../components/NavBar';
import HeadComponent from '../../components/HeadComp';
import { useRouter } from 'next/router';
import Error from '../../components/Error';

export default function ProjectTypePage() {
    const [areProjectsVisible, setProjectVisibility] = useState(true);
    const router = useRouter();
    const { projtype } = router.query;

    switch (projtype) {
        case 'design':
            var typenum = 0;
            break;
        case 'software':
            var typenum = 1;
            break;
        case 'visualart':
            var typenum = 2;
            break;
        case 'engineering':
            var typenum = 3;
            break;
        case undefined:
            var typenum = -2;
            break;
        default:
            var typenum = -1;
            break;
    }
    const projtypeheadline = {'design': 'DESIGN', 'engineering': 'ENGINEERING',
                                'software': 'SOFTWARE', 'visualart': 'VISUAL ART'}

    function Projects(props) {
        if (props.type == -1) {
            return <Error projtype={projtype}/>
        } else if (props.type == -2) {
            return <></>
        }
        
        return (
            <div className={styles.projectpage}>
                <div className={styles.textContainer}>
                    <div>
                        MY <a>{projtypeheadline[projtype]}</a> WORK
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    {/* <Projects type={typenum}/> */}
                    {projectData[props.type].map((project) => <ProjectCard key={project.id} id={project.id} data={project}/>)}
                </div>
            </div>
        )
    }
    return (
        <>
            <HeadComponent/>
            <NavBar/>
            {/* <div className={styles.projectpage}>
                <div className={styles.textContainer}>
                    <div>
                        MY <a>{projtypeheadline[projtype]}</a> WORK
                    </div>
                </div>
                <div className={styles.cardContainer}> */}
            <Projects type={typenum}/>
                {/* </div>
            </div> */}
        </>
    );
}