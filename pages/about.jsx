
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
            var color = "#D45168";
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
            <div id={styles.aboutpage}>
                <div id={styles.aboutContainer}>
                    <div className={styles.headline}>ABOUT ME</div>
                    <div id={styles.profileContainer}>
                        <div id={styles.profilepicContainer}>
                            <div className={styles.redprofilebg}/>
                            <div className={styles.blueprofilebg}/>
                            <div id={styles.profilepic}/>
                            <div id={styles.profilepicoverlay}/>
                        </div>
                        <div id={styles.profilesummary}>
                            Hello! My name is Daniel, and I'm a designer and software engineer studying <a className={styles.devTxt}>Electrical Engineering & Computer Science</a> and <a className={styles.desTxt}>Cognitive Science</a> at UC Berkeley! 
                            I enjoy building human-centered products that involve creating beautiful visuals and optimized user experiences. Nice to meet you!
                        </div>
                    </div>

                    {/* <div className={styles.headline}>RESUME</div> */}
                    <div className={styles.resume}>
                        <div className={styles.resumetimelabel}>
                            CURRENTLY
                        </div>
                        <div className={styles.resumedivider}/>
                        <div className={styles.resumejobgroup}>
                            <ResumeEntry position="Undergraduate Researcher" company="UC Berkeley: Barsky Lab" start="SEP 2022" 
                                        location="Berkeley, CA" tools={['Research','VR','C++','Unity']} jobtype={1}/>
                            <ResumeEntry position="Graphic Designer & Administrative Assistant" company="Berkeley Center for Law and Technology" start="OCT 2021" 
                                        location="Berkeley, CA" tools={['Adobe InDesign','Adobe Illustrator','Salesforce','WordPress']} jobtype={0}/>

                        </div>
                        <div className={styles.resumetimelabel}>
                            PREVIOUSLY
                        </div>
                        <div className={styles.resumedivider}/>
                        <div className={styles.resumejobgroup}>
                            <ResumeEntry position="Software Engineering Intern" company="Medtronic" start="JUN 2022" end="AUG 2022" 
                                        location="Northridge, CA" tools={['Python','Agile Development']} jobtype={1}/>
                            <ResumeEntry position="Software Engineering Intern" company="Geopogo" start="MAY 2021" end="SEP 2021" 
                                        location="Berkeley, CA" tools={['Unity','Git','ReactJS','Figma']} jobtype={1}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}