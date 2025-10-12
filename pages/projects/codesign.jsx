
import NavBar from '../../components/NavBar';
import { useRouter } from 'next/router';
import HeadComponent from '../../components/HeadComp';

import { useEffect, useState } from 'react';
import CategoryList from '../../components/CategoryList';
import ProjLinks from '../../components/ProjLinksList';

import CaseStudySection from '../../components/CaseStudySection';

import { AiFillRobot, AiFillAudio, AiFillMessage } from "react-icons/ai";



export default function CodesignPage() { 
    const [data, setData] = useState({
        title:'AI Teammate for Collaborative Design',
        org: 'UC Berkeley Co-Design Lab',
        desc: 'Building AI web application that listens to and guides product designers',
        categories:['AI/ML', 'Research'],
        url:'url(../aidesignthumbnail.png)'
    });
    const router = useRouter();
    const { proj } = router.query;

    const problemData = {
        desc: 'With initial usability studies, we discovered key problems in our system:',
        problems: [
            {
                name:'Latency',
                desc:'Users noted that AI agent takes too long to respond.',
                notes: [
                    "Diarization requires ~1 minute of calibration to identify user voices",
                    "Visual prompting is costly time-wise"
                ]
            },
            {
                name: 'UX',
                desc:'Users felt a lack of consistency in the responsivenss of the AI, noting they did not know whether the agent heard their comments or questions or not.',
                notes:[
                    'No indication of whether AI heard user or how much time is left for processing',
                    'hi'
                ]
            },
            {
                name: 'Quality',
                desc:'Visual feedback felt random, and AI often seemed to ignore direct requests or questions with overly long statements.',
                notes:[
                    'Prompt engineering pipeline consisted of many passes and branching prompts for visual generation',
                    'By the end of prompting, AI may have lost context of original question',
                    'AI responses also were quite lengthy'
                ]
            }
        ]
    }

    function goTo(id) {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth'});
    }


    // useEffect(() => {
    //     const texts = document.getElementById('casestudyctr-intro').children;
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
    //             fill: 'both' 
    //         })
    //         // texts[i].classList.add('visible');
    //     }
    // });
    

    return (
        <>
            <HeadComponent/>
            <NavBar/>
            
            <div className='page casestudy-page'>
                <CaseStudySection 
                    type='landing'
                    desc={data.desc}
                    org={data.org}
                    categories={data.categories}
                    title={data.title}
                    containerId='casestudyctr-intro'
                    id='casestudy-intro'
                    thumbnail={data.url}
                    nextId='casestudy-context'
                />

                <CaseStudySection 
                    type='context'
                    desc={
                        <>
                        Our team investigated how autonomous AI agents can be leveraged in <b className='devTxt'>collaborative design workflows</b> and 
                        how they impact <b className='desTxt'>team communication</b> or <b className='desTxt'>ideation processes</b>.
                        </>
                    }
                    containerId='casestudyctr-context'
                    id='casestudy-context'
                    children={
                        <div className='flex-center-col'>
                            <p>Preliminary system design involved:</p>
                            <span className='flex-center'>
                                <AiFillRobot size={25} />
                                <h3>GENAI FOR VISUAL & TEXT FEEDBACK</h3>
                            </span>

                            <span className='flex-center' >
                                <AiFillAudio size={25} />
                                <h3>VOICE-ONLY HUMAN-AI INTERACTION</h3>
                            </span>

                            <span className='flex-center' >
                                <AiFillMessage size={25} />
                                <h3>DIARIZATION FOR USER VOICE RECOGNITION</h3>
                            </span>
                        </div>
                    }
                />

                <CaseStudySection 
                    type='problem'
                    desc={problemData.desc}
                    problems={problemData.problems}
                    containerId='casestudyctr-problems'
                    id='casestudy-problems'
                />
                
                
            </div>
        </>
    );
}