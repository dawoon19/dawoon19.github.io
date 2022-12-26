
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

export default function Landing(props) {
    const router = useRouter();

    function setDesignBG() {
        document.getElementById(styles.designBG).style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
    }

    function setNormalBG() {
        document.getElementById(styles.designBG).style.clipPath = 'polygon(0 0, 40% 0, 60% 100%, 0% 100%)';
    }

    function setDevBG() {
        document.getElementById(styles.designBG).style.clipPath = 'polygon(0 0, 0 0, 0% 100%, 0% 100%)';
    }

    return (
        <div id={styles.landing}>
            <div id={styles.landingBGContainer}>
                <div id={styles.devBG}>
                    <div className={styles.rotatingbg} id={styles.scrollingdev}></div>
                    {/* <div id={styles.devBGoverlay}></div> */}
                </div>
                <div id={styles.designBG}>
                    <div className={styles.rotatingbg} id={styles.scrollingdesigns}></div>
                    {/* <div id={styles.designBGoverlay}></div> */}
                </div>
            </div>
            
            <div className={styles.textContainer}>
                <div id={styles.textFirstLine}>Hi there, I'm</div>
                <div id={styles.textSecondLine}>DANIEL!</div>
                <span id={styles.textThirdLine}>
                    <span onMouseEnter={setDesignBG} onMouseLeave={setNormalBG} onClick={()=>router.push('projects/design')} className={styles.landingLink}>DESIGNER</span>
                    <span>&nbsp;\&nbsp;</span>
                    <span onMouseEnter={setDevBG} onMouseLeave={setNormalBG} onClick={()=>router.push('projects/software')} className={styles.landingLink}>DEVELOPER</span>
                </span>
                <p id={styles.textFourthLine}>Click a role to see my work!</p>
            </div>
        </div>
    );
}