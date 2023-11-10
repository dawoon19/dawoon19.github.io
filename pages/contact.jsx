
// import styles from '../styles/Contact.module.css'
import NavBar from '../components/NavBar';
import HeadComponent from '../components/HeadComp';
import EmailForm from '../components/Mail';

import { BsLinkedin } from 'react-icons/bs'

export default function Contact(props) {

    return (
        <>
            <HeadComponent/>
            <NavBar/>
            <div id='contactpage' className='page'>
                <div className='container'>
                    <h1>CONTACT</h1>
                    <p>Feel free to message me if you want to chat!</p>
                    <EmailForm />

                    <p style={{transform:'translateY(30px)'}}>...or connect with me on <strong>LinkedIn</strong>!</p>
                    <div className='boxcontainer'>
                        <a href="https://www.linkedin.com/in/danielw23/" target="_blank" className='contactbox' id='linkedin'><BsLinkedin size={40}/>LINKEDIN</a>
                    </div>
                </div>
            </div>
        </>
    );
}