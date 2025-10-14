import { useRef, useEffect } from 'react';
import useCardVisibiliity from '../hooks/renderOnScroll';
import CategoryList from './CategoryList';

import { BsChevronDown } from "react-icons/bs";
import { SiSocketdotio, SiMaterialui, SiReact, SiTypescript, SiJavascript, SiFlask, SiPython, SiOpenai, SiFigma, SiAmazonaws} from "react-icons/si";

function Skills(props) {

    const Icon = ({skill}) => {
        if (skill == "Socket.IO") {
            return <SiSocketdotio size={30}/>
        } else if (skill == "Material UI") {
            return <SiMaterialui size={30}/>
        } else if (skill == "React.js") {
            return <SiReact size={30}/>
        } else if (skill == "TypeScript") {
            return <SiTypescript size={30}/>
        } else if (skill == "JavaScript") {
            return <SiJavascript size={30}/>
        } else if (skill == "Python") {
            return <SiPython size={30}/>
        } else if (skill == "Flask") {
            return <SiFlask size={30}/>
        } else if (skill == "OpenAI") {
            return <SiOpenai size={30}/>
        } else if (skill == "Figma") {
            return <SiFigma size={30}/>
        } else if (skill == "AWS") {
            return <SiAmazonaws size={30}/>
        }

    }

    return <div className='casestudyskills'>
    {
        props.stacks.map((stack) => {
            return <div className='casestudyskill-stack'>
                <h4>{stack.name}</h4>
                <div className='casestudyskillsctr'>
                    {
                        stack.skills.map((skill) => 
                            <div className='casestudyskillitem'>
                                <Icon skill={skill}/>
                                <p>{skill}</p>
                            </div>
                            
                        )
                    }
                </div>
            </div>
        })
    }
    
    </div>
}

export default function CaseStudySection(props) { 
    const ref = useRef(null);
    const isVisible = useCardVisibiliity(ref);

    function goTo(id) {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth'});
    }

    useEffect(()=> {
        
        if (props.type == 'landing') {
            const introTexts = document.getElementById('casestudyctr-intro').children;
            for (let i = 0; i < introTexts.length; i++) {
                const anim = introTexts[i].animate([
                    {
                        opacity:0,
                        transform:'translateY(50px)', 
                        filter:'blur(25px)'
                    },
                    {
                        opacity:1,
                        transform:'translateY(0px)',
                        filter:'blur(0)'
                    }
                    ], {
                        duration: 500,
                        delay: i * 100,
                        easing: 'ease-in-out',
                        // fill: 'both' 
                    });
                anim.finished.then(() => {
                    introTexts[i].style.opacity = '1';
                })
            }
        } else if (isVisible) {

            const texts = document.getElementById(props.containerId).children;
            for (let i = 0; i < texts.length; i++) {
                const anim = texts[i].animate([
                    {
                        opacity:0,
                        transform:'translateY(50px)', 
                        filter:'blur(25px)'
                    },
                    {
                        opacity:1,
                        transform:'translateY(0px)',
                        filter:'blur(0)'
                    }
                    ], {
                        duration: 500,
                        delay: i * 100,
                        easing: 'ease-in-out',
                        // fill: 'both' 
                    });
                anim.finished.then(() => {
                    texts[i].style.opacity = '1';
                })
            }
            // const texts = document.getElementById(props.containerId).children;
            // for (let i = 0; i < texts.length; i++) {
            //     // texts[i].style.animationDelay = `${0.1*i}s`
            //     texts[i].style.transition = `opacity 0.5s ease-in-out ${0.1*i}s, transform 0.5s ease-in-out ${0.1*i}s, filter 0.5s ease-in-out ${0.1*i}s`;
            // }
        }
        
        
    })
    const Output = () => {
        if (!props.type || props.type == 'landing') {
            return <>
                    <div ref={ref} className='casestudy-thumbnail' style={{backgroundImage:props.thumbnail}}/>
                    <CategoryList categories={props.categories}/>
                    
                    <h1>{props.title}</h1>
                    <h3>{props.org}</h3>
                    <p>{props.desc}</p>
                    
                    <span className='casestudyskill-section'>
                        <p>Built with:</p>
                        <Skills stacks={props.skills}/>
                    </span>
                    <div className='casestudy-nav1' onClick={()=>goTo(props.nextId)}>
                        <p>READ MORE</p>
                        <BsChevronDown size={50}/>
                    </div>
                    
                </>
        } else if (props.type == 'problem') {
            return <>
                    <h2 ref={ref} >PROBLEMS</h2>
                    <p>{props.desc}</p>
                    {
                        props.data.map((prob, idx) => {
                            return <div key={"problem-"+idx} className='problem'>
                                <h3><b>PROBLEM {idx + 1}:</b> {prob.name}</h3>
                                <p>{prob.desc}</p>
                                <ul>
                                {prob.notes.map((note, i) =>
                                    <li key={"note_" + i}>
                                        {note}
                                    </li>
                                )}
                                </ul>
                            </div>
                        })
                    }
                </>
        } else if (props.type == 'context') {
            return <>
                <h2 ref={ref}>CONTEXT</h2>
                <p>{props.desc}</p>
                {props.children}
            </>
        } else if (props.type == 'solution') {
            return <>
                <h2 ref={ref}>SOLUTION</h2>
                <p>{props.desc}</p>
                {
                    props.data.map((sol, idx) => {
                        return <div key={"solution-"+idx} className='solution'>
                            <h3>{sol.name}</h3>
                            <h4>{sol.subhead}</h4>
                            <p>{sol.desc}</p>
                            
                        </div>
                    })
                }
            </>
        }
    }

    return <section id={props.id}> 
            <div className={isVisible ? 'casestudy-container visible' : 'casestudy-container invisible'} id={props.containerId}>
                <Output/>
            </div>
                
        </section>
}