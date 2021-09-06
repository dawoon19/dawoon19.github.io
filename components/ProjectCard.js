import { useEffect, useRef, createRef} from 'react'

import styles from '../styles/projectcard.module.css';

import { useInViewport } from 'react-in-viewport';

// import { Icon } from '@iconify/react';
// import devpostIcon from '@iconify-icons/simple-icons/devpost';

import { AiOutlineLink } from 'react-icons/ai'

function ProjectCard({data, title, photo, category, link, linkType}) {

    console.log("This is the data again:");
    console.log(data);

    const ref = createRef();

    let url = "url("+data.photo+")";

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
        switch (data.linkType) {
            case "devpost":
                // return <Icon icon={devpostIcon} width="35px" color="white" />;
                return <AiOutlineLink color="white" size="50px"/>;
            default:
                return <AiOutlineLink color="white" size="50px"/>
        }
    }

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
                {data.categories.map((category) => 
                    {
                        if (category == "UI/UX" || category == "Publications") {
                            return <p className={styles.designCategory}>{category}</p>
                        } else {
                            return <p className={styles.devCategory}>{category}</p>
                        }
                    }
                )}
            </div>

            <h1 className={styles.cardHeadline}>{data.title}</h1>
            <h1 className={styles.cardSubhead}>{data.org}</h1>


            <p className={styles.description}>{data.desc}</p>

            {/* <a>See More</a> */}
        </div>
    );
}

export default ProjectCard;