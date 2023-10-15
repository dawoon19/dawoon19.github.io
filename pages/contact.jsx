
import styles from '../styles/Contact.module.css'
import {useState} from 'react';
import NavBar from '../components/NavBar';
import HeadComponent from '../components/HeadComp';

import { HiMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs'

export default function Contact(props) {
    const [areProjectsVisible, setProjectVisibility] = useState(true);

    const [projectCategory, setProjCategory] = useState(0);

    // const scriptURL = 'https://script.google.com/macros/s/AKfycbyJekf24Ul5OLqzN5p5GuopqYf2eUp6o9h6i4SEISCxOrTU1CEVNbu9Fg66JhN4PiIK/exec'
    // const form = document.forms['submit-to-google-sheet'];
    // const successmsg=document.getElementById('successmsg');
    // const errormsg=document.getElementById('errormsg');
    // form.addEventListener('submit', e => {
    //     e.preventDefault()
    //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //     .then(response => console.log('Success!', response),
    //     //show success message
    //     successmsg.hidden=false
    //     )
    //     .catch(error => errormsg.hidden=false)
    //     //show error message
        
        
    //     form.reset();
    // })

    return (
        <>
            <HeadComponent/>
            <NavBar/>
            <div className={styles.contactpage}>
                <div className={styles.textContainer}>
                    <div className={styles.headline}>CONTACT</div>
                    <div >
                        <form style={{display:'flex', flexDirection:'column'}} name="submit-to-google-sheet">
                            <input type="text" class="field" placeholder="Name" name="name" required/>
                            <input type="text" class="field" placeholder="Email" name="email" required/>
                            <input type="text" class="field" placeholder="Subject" id="sub" name ="subject" required/>
                            <textarea placeholder="Message" class="field" name="message" required></textarea>
                            <input type="submit" class="btn" value="Send"/>
                        </form>
                    </div>
                    <div className={styles.boxcontainer}>
                        {/* <a href="mailto:danielwon23@berkeley.edu" className={styles.contactbox} id={styles.email}><HiMail size={60}/>EMAIL</a> */}

                        <a href="https://www.linkedin.com/in/danielw23/" target="_blank" className={styles.contactbox} id={styles.linkedin}><BsLinkedin size={40} style={{marginBottom:"12px"}}/>LINKEDIN</a>
                    </div>
                </div>
            </div>
        </>
    );
}