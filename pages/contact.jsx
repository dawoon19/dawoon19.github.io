
import styles from '../styles/Contact.module.css'
import {useState} from 'react';
import NavBar from '../components/NavBar';
import HeadComponent from '../components/HeadComp';

import { HiMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs'

export default function Contact(props) {
    const [areProjectsVisible, setProjectVisibility] = useState(true);

    const [projectCategory, setProjCategory] = useState(0);
    return (
        <>
            <HeadComponent/>
            <NavBar/>
            <div className={styles.contactpage}>
                <div className={styles.textContainer}>
                    <div className={styles.headline}>CONTACT</div>
                    <div className={styles.boxcontainer}>
                        <a href="mailto:danielwon23@berkeley.edu" className={styles.contactbox} id={styles.email}><HiMail size={60}/>EMAIL</a>
                        <a href="https://www.linkedin.com/in/danielw23/" target="_blank" className={styles.contactbox} id={styles.linkedin}><BsLinkedin size={40} style={{marginBottom:"12px"}}/>LINKEDIN</a>
                    </div>
                </div>
            </div>
        </>
    );
}