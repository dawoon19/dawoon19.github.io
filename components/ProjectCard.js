import { useEffect, useRef, createRef} from 'react'

import styles from '../styles/projectcard.module.css';

import { useInViewport } from 'react-in-viewport';
import { useRouter } from "next/router"

// import { Icon } from '@iconify/react';
// import devpostIcon from '@iconify-icons/simple-icons/devpost';

import { AiOutlineLink } from 'react-icons/ai'

function ProjectCard({data, title, photo, category, link, linkType}) {

    let url = "url(../"+data.photo+")";
    const router = useRouter();

    useEffect(()=>{

    },[])

    function CategoryBG() {
        var color;
        if (data.isDesign && data.isDev) {
            color="linear-gradient(135deg, #9F2950,#3B6AB0)";
        } else if (data.isDesign) {
            color="#9F2950";
        } else if (data.isDev) {
            color="#3B6AB0";
        } else {
            color="#FFC700";
        }

        return <div className={styles.designBG} style={{background:color}}/>
    }

    function ThumbnailIcon() {
        return <AiOutlineLink color="white" size="50px"/>
    }

    function GoToProjectPage(projectname) {
        router.push(`/projects/${projectname}`)
    }

    const categoryIsDesignDict = {"Figma":true,"Adobe InDesign":true,"Adobe Photoshop":true,"Adobe XD":true,"ibisPaintX":true,"Illustration":true,
                                    "C++":false,"Java":false,"Python":false,"Unity":false,
                                    "ReactJS":false,"NextJS":false,"CSS":false};

    return (
        <div className={styles.card} >
            <div className={styles.thumbnail}>
                <CategoryBG/>
                <div className={styles.cardBG} 
                    style={{
                        backgroundImage:url,
                    }}/>

                { data.link != "" &&
                    (<div className={styles.overlayBG}>
                            <ThumbnailIcon/>
                            <a href={data.link} title="" target="_blank" className={styles.projectLink}>See Project</a>
                        
                    </div>)
                }
            </div>

            <div className={styles.categories}>
                {data.tools.map((tool) => 
                    {
                        if (categoryIsDesignDict[tool]) {
                            return <p key={data.id+tool} className={styles.designCategory}>{tool}</p>
                        } else {
                            return <p key={data.id+tool} className={styles.devCategory}>{tool}</p>
                        }
                    }
                )}
            </div>
            
            
            {/* <div className={styles.categories}>
                {data.categories.map((category) => 
                    {
                        if (category == "UI/UX" || category == "Publications" || category == "Web Design") {
                            return <p key={data.id+category} className={styles.designCategory}>{category}</p>
                        } else {
                            return <p key={data.id+category} className={styles.devCategory}>{category}</p>
                        }
                    }
                )}
            </div> */}

            <h1 className={styles.cardHeadline}>{data.title}</h1>
            <h1 className={styles.cardSubhead}>{data.org}</h1>


            <p className={styles.description}>{data.desc}</p>
        </div>
    );
}

export default ProjectCard;