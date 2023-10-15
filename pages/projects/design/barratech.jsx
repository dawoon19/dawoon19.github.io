
import styles from '../../../styles/ProjectPage.module.css'
import NavBar from '../../../components/NavBar';
import router from 'next/router';
import HeadComponent from '../../../components/HeadComp';

import {BsGlobe2, BsHeartFill, BsFillPhoneFill, BsHeadsetVr} from 'react-icons/bs';

export default function BarraTech(props) { 
    const bg = "barratechbg.png";
    const bgurl = "url(/" + bg + ")";

    const tools = ['Figma','CSS'];
    const categories = ['Website', 'AR/VR']
    
    const categoryDict = { 'Website': <BsGlobe2 size={15} style={{marginRight:"5px"}}/>, 
                            'Health':  <BsHeartFill size={15} style={{marginRight:"5px"}}/>,
                            'Mobile': <BsFillPhoneFill size={15} style={{marginRight:"5px"}}/>,
                            'AR/VR': <BsHeadsetVr size={15} style={{marginRight:"5px"}}/>}


    return (
        <>
            <HeadComponent/>
            <NavBar/>
            <div className={styles.page}>
                <div id={styles.landingsection} style={{backgroundImage: "linear-gradient(45deg, #D45168, #9F2950)"}}>
                    <div className={styles.categoryList}>
                        {categories.map((cat)=>{return <div className={styles.category}>{categoryDict[cat]}{cat} <div className={styles.catSeparator}>&nbsp;&nbsp;•&nbsp;&nbsp;</div> </div>})}
                    </div>
                    <div id={styles.projecttitle}>BARRACUDA TECHNOLOGIES</div>
                    <div ></div>
                    <div className={styles.toolList}>
                        {tools.map((tool)=>{return <div className={styles.jobTool}>{tool}</div>})}
                    </div>
                    <div id={styles.landingdesc}>In this project, my role as a <strong>product designer</strong> was revamping the visual style and structure of the website for <strong>Barracuda Technologies</strong>, a company that creates sustainable materials out of agricultural waste</div>
                </div>
            </div>
        </>
    );
}