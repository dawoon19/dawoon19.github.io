import { useRef, useEffect } from 'react';
import useCardVisibiliity from '../hooks/renderOnScroll';
import CategoryList from './CategoryList';

import { BsChevronDown } from "react-icons/bs";

export default function CaseStudySection(props) { 
    const ref = useRef(null);
    const isVisible = useCardVisibiliity(ref);

    function goTo(id) {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth'});
    }

    // if (isVisible) {
    //     console.log('here')
        
    // }
    useEffect(()=> {
        // if (isVisible) {
        //     const texts = document.getElementById(props.containerId).children;
        //     for (let i = 0; i < texts.length; i++) {
        //         texts[i].animate([
        //             {
        //                 opacity:0,
        //                 transform:'translateY(50px)', 
        //                 filter:'blur(25px)'
        //             },
        //             {
        //                 opacity:1,
        //                 transform:'translateY(0px)',
        //                 filter:'blur(0)'
        //             }
        //         ], {
        //             duration: 500,
        //             delay: i * 100,
        //             easing: 'ease-in-out',
        //             // fill: 'both' 
        //         })
        //         // texts[i].classList.add('visible');
        //     }
        // }

        
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
        } else {
            const texts = document.getElementById(props.containerId).children;
            for (let i = 0; i < texts.length; i++) {
                // texts[i].style.animationDelay = `${0.1*i}s`
                texts[i].style.transition = `opacity 0.5s ease-in-out ${0.1*i}s, transform 0.5s ease-in-out ${0.1*i}s, filter 0.5s ease-in-out ${0.1*i}s`;
            }
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
                        props.problems.map((prob, idx) => {
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
        }
    }

    return <section id={props.id}> 
            <div className={isVisible ? 'casestudy-container' : 'casestudy-container invisible'} id={props.containerId}>
                <Output/>
            </div>
                
        </section>
}