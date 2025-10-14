
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
        url:'url(../aidesignthumbnail.png)',
        skills:[
            {
                name:'frontend',
                skills: [
                    "React.js",
                    "TypeScript",
                    "Material UI",
                    // "Figma"
                ]
            },
            {
                name:'backend',
                skills:[
                    "Python",
                    "Flask",
                    "OpenAI"
                ]
            },
            {
                name:'full-stack',
                skills:[
                    "Socket.IO",
                    "AWS"
                ]
            }
        ]
    });
    const router = useRouter();
    const { proj } = router.query;

    const problemData = {
        desc: 'Initial usability studies revealed key UX problems in our system:',
        problems: [
            {
                name:'Latency',
                desc:'Long delays in AI responses',
                notes: [
                    "High latencies from visual prompting + diarization"
                ]
            },
            {
                name: 'Interaction',
                desc:'Low AI responsiveness',
                notes:[
                    'No indication of whether AI heard user or how much time is left for processing'
                ]
            },
            {
                name: 'Quality',
                desc:'Randomness of feedback + lengthy text response',
                notes:[
                    'Many passes and branches in prompting, losing context of user question in final output',
                ]
            }
        ]
    }

    const solutionData = {
        desc:'',
        data: [
            {
                name: 'Button instead of voice',
                subhead: '>> Solves Problems 1 & 2',
                desc:`Voice-only interaction takes an extended amount of time due to the number of passes required: 
                    (1) AI receives audio -> (2) AI uses Whisper to transcribe audio -> (3) AI is prompted to search for instances of user summoning AI 
                    -> (4) AI proceeds with feedback processing. Per user suggestions, I dropped the voice-only interaction and created a button that 
                    sends a direct socket signal to the AI to begin processing upon the trigger. The button also shows a timer that displays the timeframe
                    for which AI is listening to the user's feedback.`
            }, 
            {
                name:'NO VISUAL PROMPTING + CONDENSE PROMPT ENGINEERING PIPELINE',
                subhead: '>> Solves Problems 1 & 3',
                desc:`The original pipeline consisted of multiple passes each dedicated to a specific function 
                    (i.e. identifying the user summoning AI) with outputs being passed to the next prompt, but
                    this caused the output to the final pass to lose the context of the user's original question.
                    With iterations of prompts, we consolidated several passes into one prompt, and we also decided
                    to remove the visual feedback feature (which contributed to extra prompting layers) due to users
                    not feeling like the visuals were relevant or useful to the task even through iterations of the
                    generative prompts. These decisions also reduced the processing time due to the removal of the visual
                    prompting layers.`
            },
            {
                name:'VISUAL CUES FOR AI PROCESSING',
                subhead: '>> Solves Problem 2',
                desc:`I introduced a progress bar that 
                    displays the stage of processing once the AI has begun to process the audio, using 
                    backend signals for progress to UI via Web Sockets. Additionally, a countdown timer
                    was added that tells user how much time is left before the AI begins automated feedback,
                    addressing issues where users did not know if/when the AI heard them and whether the AI
                    was actually processing.`
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
                    skills={data.skills}
                />

                <CaseStudySection 
                    type='context'
                    desc={
                        <>
                        Our team investigated how autonomous AI agents can be leveraged in <b className='devTxt'>collaborative design workflows</b> and 
                        how they impact <b className='desTxt'>team communication</b> or <b className='desTxt'>ideation processes</b>. 
                        <br/><br/>
                        We studied this using 
                        a <b className='devTxt'>Chrome extension sidebar interface</b> that takes in real-time conversational audio and screenshots of whiteboards between product designers
                        working on an ideation task together, and users can either (1) <b className='desTxt'>directly ask AI</b> to provide guidance or feedback or (2) <b className='desTxt'>wait for automated responses</b> from the AI based
                        on the present context of the design conversation.
                        </>
                    }
                    containerId='casestudyctr-context'
                    id='casestudy-context'
                    children={
                        <div className='flex-center-col'>
                            <p>Preliminary system design involved:</p>
                            <span className='flex-center'>
                                <AiFillRobot size={25} />
                                <h3 style={{textAlign:'left'}}>GENAI FOR VISUAL & TEXT FEEDBACK</h3>
                            </span>

                            <span className='flex-center' >
                                <AiFillAudio size={25} />
                                <h3 style={{textAlign:'left'}}>VOICE-ONLY HUMAN-AI INTERACTION</h3>
                            </span>

                            <span className='flex-center' >
                                <AiFillMessage size={25} />
                                <h3 style={{textAlign:'left'}}>DIARIZATION FOR USER VOICE RECOGNITION</h3>
                            </span>
                        </div>
                    }
                />

                <CaseStudySection 
                    type='problem'
                    desc={problemData.desc}
                    data={problemData.problems}
                    containerId='casestudyctr-problems'
                    id='casestudy-problems'
                />

                <CaseStudySection 
                    type='solution'
                    desc={solutionData.desc}
                    data={solutionData.data}
                    containerId='casestudyctr-solutions'
                    id='casestudy-solutions'
                />
                
                
            </div>
        </>
    );
}