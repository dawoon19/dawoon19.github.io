
import styles from '../styles/navbar.module.css'
import {useRouter} from 'next/router'
import { useState } from 'react';


export default function NavBar(props) {
    const router = useRouter();
    // const [isSidebarOn, toggleSidebar] = useState(false);

    function goTo(id) {
        const section = document.querySelector(id)
        section.scrollIntoView({ behavior: 'smooth'})
    }

    const Bar = () => {
        return <div className={styles.menuiconbar}></div>
    }
    var isSidebarOn = false;
    function showSidebar() {
        const elem = document.getElementById(styles.sidebar);
        const menicon = document.getElementById(styles.menuicon);
        const bar1 = menicon.children[0];
        const bar2 = menicon.children[1];
        const bar3 = menicon.children[2];
        if (!isSidebarOn) {
            elem.style.transform = "translateX(0vw)";
            elem.style.opacity = "1";
            bar1.style.transform = "rotate(-45deg)";
            bar3.style.transform = "rotate(45deg)";
            bar2.style.opacity = "0";

            isSidebarOn = true;
        } else {
            elem.style.transform = "translateX(100vw)";
            elem.style.opacity = "1";
            bar1.style.transform = "rotate(0deg)";
            bar3.style.transform = "rotate(0deg)";
            bar2.style.opacity = "1";

            isSidebarOn = false;
        }
    }

    const MenuIcon = () => {
        return <a id={styles.menuicon} onClick={showSidebar}>
            <Bar id={styles.bar1}/><Bar id={styles.bar1}/><Bar id={styles.bar1}/>
        </a>
    }

    const Tabs = (props) => {
        switch (props.tabNum) {
            case 0:
                return <a className={props.style} onClick={()=>router.push('/')}> HOME </a>;
            case 1:
                return <a className={props.style} onClick={()=>router.push('/projects')}> PORTFOLIO </a>;
            case 2:
                return <div className={props.style} onClick={()=>router.push('/about')}> ABOUT </div>
            default:
                return <div className={props.style} onClick={()=>router.push('/contact')}> CONTACT </div>
        }
    }

    const MobileSidebar = () => {
        return <div id={styles.sidebar}>
            <Tabs tabNum={0} style={styles.menuitemmobile}/>
            <Tabs tabNum={1} style={styles.menuitemmobile}/>
            <Tabs tabNum={2} style={styles.menuitemmobile}/>
            <Tabs tabNum={3} style={styles.menuitemmobile}/>
        </div>
    }

    return (<>
        <div className={props.isHome==true ? styles.navbarstart : styles.navbar}>
            <div className={styles.navMask}></div>

            <Tabs tabNum={0} style={styles.menuitem}/>
            <Tabs tabNum={1} style={styles.menuitem}/>
            <div className={styles.logo} onClick={()=>router.push("/")}/>
            <Tabs tabNum={2} style={styles.menuitem}/>
            <Tabs tabNum={3} style={styles.menuitem}/>
            <MenuIcon/>
        </div>
        <MobileSidebar/>
        </>
    );
}