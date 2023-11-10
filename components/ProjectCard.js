import { useRef} from 'react'

import { useRouter } from "next/router"

import CategoryList from './CategoryList';

// import { Icon } from '@iconify/react';
// import devpostIcon from '@iconify-icons/simple-icons/devpost';
import useCardVisibiliity from '../hooks/renderOnScroll';
import { AiOutlineLink } from 'react-icons/ai'

function ProjectCard({data}) {
    const ref = useRef(null);
    const isVisible = useCardVisibiliity(ref);

    let url = "url(../"+data.photo+")";
    const router = useRouter();

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

        return <div className='designBG' style={{background:color}}/>
    }

    function ThumbnailIcon() {
        return <AiOutlineLink color="white" size="50px"/>
    }

    function GoToProjectPage(projectname) {
        router.push(`/projects/${projectname}`)
    }

    const categoryIsDesignDict = {"Figma":true,"Adobe InDesign":true,"Adobe Photoshop":true,"Adobe XD":true,"ibisPaintX":true,"Illustration":true,
                                    "User Research":true,
                                    "C++":false,"Java":false,"Python":false,"Unity":false,
                                    "ReactJS":false,"NextJS":false,"CSS":false};

    return <div ref={ref} className={isVisible ? 'card' : 'card invisible'}>
        <div className='thumbnail'>
            <CategoryBG/>
            <div className='cardBG' style={{ backgroundImage:url }}/>
                { data.link != "" &&
                    (<div className='overlayBG'>
                        <ThumbnailIcon/>
                        <a href={data.link} title="" target="_blank" className='projectLink'>See Project</a>
                    </div>)
                }
            </div>

        <div className='metadata'>
            <CategoryList categories={data.categories}/>

            <h1>{data.title}</h1>
            <h2>{data.org}</h2>
            <div className='categories'>
                {data.tools.map((tool) => {
                    if (categoryIsDesignDict[tool]) {
                        return <p key={data.id+tool} className='darkredbg projtool'>{tool}</p>
                    } else {
                        return <p key={data.id+tool} className='darkbluebg projtool'>{tool}</p>
                    }
                })}
            </div>
            <p className='description'>{data.desc}</p>

        </div>
    </div>
}

export default ProjectCard;