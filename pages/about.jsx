
import styles from '../styles/About.module.css'
import NavBar from '../components/NavBar';
import router from 'next/router';
import HeadComponent from '../components/HeadComp';

export default function About(props) { 

    const ResumeEntry = (props) => {
        
        var position = props.position;
        var company = props.company;
        
        var end = props.end;
        if (!('end' in props)) {
            end = 'PRESENT'
        }
        var loc = props.location;
        var years = props.start + " - " + end;
        var tools = props.tools;
        var desc = props.desc;

        if (props.jobtype == 0) {
            var color = "#ff859b";
        } else {
            var color = "#629bf0";
        }

        return (
            <div className={styles.resumeentry}>
                <div className={styles.resumepos} style={{color:color}}>{position}</div>
                <div className={styles.resumecompany}>{company}</div>
                <div className={styles.resumedata}>{years}&nbsp;&nbsp; | &nbsp;&nbsp;{loc}</div> 
                <div className={styles.toolList}>
                    {tools.map((tool)=>{return <div className={styles.jobTool}>{tool}</div>})}
                </div>
                {desc} 
            </div>
        )
    }

    return (
        <>
            <HeadComponent/>
            <NavBar routeFunc={()=>router.push('/')}/>
            <div id="aboutpage" className='page'>
                <div className='container'>
                    <h1>ABOUT ME</h1>
                    <div id='profile-container'>
                        <div id='profilepic-container'>
                            <div id='redprofilebg' className='profilepicframe'/>
                            <div id='blueprofilebg' className='profilepicframe'/>
                            <div id='profilepic' className='profilepicframe'/>
                            <div id='profilepicoverlay' className='profilepicframe'/>
                        </div>
                        <div id='profilesummary'>
                            Hello! My name is Daniel, and I'm a product designer and full-stack software engineer currently pursuing a <a className={styles.devTxt}>Master of Engineering</a> in <a className={styles.devTxt}>Electrical Engineering & Computer Sciences (EECS)</a> at UC Berkeley! 
                            I enjoy building human-centered products with optimal user experiences and visual aesthetics. Nice to meet you!
                        </div>
                    </div>

                    <div className='resume'>
                        <div className='resumetimelabel'>
                            EXPERIENCE
                        </div>
                        <div className={styles.resumedivider}/>
                        <div className={styles.resumejobgroup}>
                            <ResumeEntry position="Full-Stack Software Engineering Intern" company="Bureau of Labor Statistics" start="JUN 2023" end="AUG 2023"
                                        location="Remote" tools={['React','JavaScript','Express']} jobtype={1}/>
                            <ResumeEntry position="Graphic Designer & Administrative Assistant" company="Berkeley Center for Law and Technology" start="OCT 2021" end="JUN 2023"
                                        location="Berkeley, CA" tools={['Adobe Creative Suite','Salesforce','WordPress','Excel']} jobtype={0}/>
                            <ResumeEntry position="Software Engineering Intern" company="Medtronic" start="JUN 2022" end="AUG 2022" 
                                        location="Northridge, CA" tools={['Python','Agile Development']} jobtype={1}/>
                            <ResumeEntry position="Software Engineering Intern" company="Geopogo" start="MAY 2021" end="SEP 2021" 
                                        location="Berkeley, CA" tools={['Unity','Git','React','Figma']} jobtype={1}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}