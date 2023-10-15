
import styles from '../../../styles/ProjectPage.module.css'
import NavBar from '../../../components/NavBar';
import { useRouter } from 'next/router';
import HeadComponent from '../../../components/HeadComp';
import projectData from '../../../projecttest.json';

import { useEffect, useState } from 'react';

import {BsGlobe2, BsGithub} from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { SiDevpost } from "react-icons/si";
import CategoryList from '../../../components/CategoryList';

// import { Link, Element } from "react-scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ProjLinks from '../../../components/ProjLinksList';

export default function ProjPage(props) { 
    const [data, setData] = useState({});
    const router = useRouter();
    const { proj } = router.query;
    // const importeddata = projectData.map((data)=> data[proj])[0];

    // var data = {};
    // for (let field in importeddata) {
    //     data[field] = importeddata[field];
    // }
    // console.log(Object.keys(data));
    
    // const bg = data.photo;
    // const bgurl = "url(/" + bg + ")";

    function Component(props) {
        
        return <div> {props.data} </div>
    }

    function goTo(id) {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth'});
    }

    useEffect(
        ()=>setData(projectData[proj])
    )

    return (
        <>
            <HeadComponent/>
            <NavBar/>
            
            {data && data.id != undefined && 
                <div className={styles.page}>
                    <div className={styles.section} id={styles.landingsection} style={{backgroundImage: "linear-gradient(45deg, #D45168, #9F2950)"}}>
                        <div className={styles.contentcontainer}>
                            <div id={styles.landingthumbnail} style={{backgroundImage: "url(/" + data.photo + ")"}}/>
                            <div className={styles.textContainer}>
                                <CategoryList categories={data.categories}/>
                                <h1>{data.title}</h1>
                                <div id={styles.projectorg}>{data.org}</div>
                                <div className={styles.toolList}>
                                    {data.tools.map((tool)=>{return <div key={tool} className={styles.jobTool}>{tool}</div>})}
                                </div>
                                <div id={styles.landingdesc}>{data.desc}</div>

                                <div id={styles.landingresultcontainer}>
                                    <h3>Check out the results:</h3>
                                    <ProjLinks links={data.links}/>
                                </div>
                            </div>
                        </div>
                        
                        <div onClick={()=>goTo(styles.problemSection)} id={styles.landingseenext}>See Design Process</div>
                        {/* <Link to={styles.problemSection} spy={true} smooth={true} id={styles.landingseenext}>See Design Process</Link> */}
                    </div>

                    { data.problem && data.problem.headline && 
                    <div className={styles.section} id={styles.problemSection}>
                        <h1>THE PROBLEM</h1>
                        <div className={styles.contentcontainer}>
                            <h3>{data.problem.headline}</h3>
                        </div>
                    </div>
                    }

                    { data.problem && data.problem.headline && 
                    <div className={styles.section} id={styles.problemSection}>
                        <h1>INITIAL UI/UX</h1>
                        <div className={styles.contentcontainer}>
                            <h3>{data.problem.headline}</h3>
                        </div>
                    </div>
                    }
                </div>
            }
        </>
    );
}