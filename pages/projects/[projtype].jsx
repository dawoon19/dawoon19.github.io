import ProjectCard from '../../components/ProjectCard';
import projectData from '../../data/projects.json';
import NavBar from '../../components/NavBar';
import HeadComponent from '../../components/HeadComp';
import { useRouter } from 'next/router';
import Error from '../../components/Error';

export async function getStaticPaths() {
    return {
        paths: [
            {params: { projtype: 'design', }},
            {params: { projtype: 'software', }},
            {params: { projtype: 'visualart', }},
            {params: { projtype: 'engineering',}},
        ],
        fallback:false
    }
}

export async function getStaticProps({params}) {
    return { props: { projtype: params.projtype } }
}

export default function ProjectTypePage({projtype}) {
    const router = useRouter();
    // const { projtype } = router.query;
    // const { projtype } = params;

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
    const projtypeheadline = {'design': 'PRODUCT DESIGN', 'engineering': 'ENGINEERING',
                                'software': 'SOFTWARE', 'visualart': 'VISUAL ART'}

    function Projects(props) {
        if (props.type == -1) {
            return <Error projtype={projtype}/>
        } else if (props.type == -2) {
            return <></>
        }
        
        return (
            <div className='projectpage'>
                <div className='container'>
                    <h1> {projtypeheadline[projtype]} </h1>
                </div>
                <div className='cardContainer'>
                    {projectData[props.type].map((project) => <ProjectCard key={project.id} id={project.id} data={project}/>)}
                </div>
            </div>
        )
    }
    return (
        <>
            <HeadComponent/>
            <NavBar/>
            <Projects type={typenum}/>
        </>
    );
}