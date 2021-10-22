
import styles from '../styles/navbar.module.css'
import {useRouter} from 'next/router'


export default function NavBar() {
    const router = useRouter();

    function goTo(id) {
        const section = document.querySelector(id)
        section.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className={styles.navbar}>
            <mask className={styles.navMask}>
            </mask>

            <a
                className={styles.menuitem}
                onClick={()=>goTo('#home')}
            >
                HOME
            </a>
            <a
                className={styles.menuitem}
                onClick={()=>goTo('#projects')}
            >
                PROJECTS
            </a>
            <div className={styles.logo} onClick={()=>router.push("/")}/>

            {/* <div className={styles.menuitem} onClick={()=>goTo('#about')}> */}
            <div className={styles.menuitem}>
                ABOUT
            </div>
            <div className={styles.menuitem}>
                CONTACT
            </div>
        </div>
    );
}