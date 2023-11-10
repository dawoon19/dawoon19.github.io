import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react';
import { HiMail } from 'react-icons/hi';

export default function EmailForm(props) {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
      e.preventDefault();

      let service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
      console.log(service_id);

      let valid = true;
      let emailValid = formData['email'] !== '' && formData['email'].toLowerCase().match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      
      if (formData['name'].length === 0 || !emailValid || formData['subject'].length === 0 || formData['message'].length === 0) {
          valid = false;
      }
      console.log(emailValid)
      
      if (valid) {
        let button = document.querySelector('button')
        button.classList.remove('enabled');
        button.textContent = 'SENDING'
        let dot1 = document.createElement('div');
        dot1.classList.add('loading-dot');
        dot1.textContent = '.'
        dot1.style.animationDelay = '0s';
        let dot2 = document.createElement('div');
        dot2.classList.add('loading-dot');
        dot2.textContent = '.'
        dot2.style.animationDelay = '0.25s';
        let dot3 = document.createElement('div');
        dot3.classList.add('loading-dot');
        dot3.textContent = '.'
        dot3.style.animationDelay = '0.5s';
        button.appendChild(dot1);
        button.appendChild(dot2);
        button.appendChild(dot3);

        sendEmail();
      } else {
        let msg = 'Failed to send message. Here\'s why:\n';
        msg += formData['name'].length === 0 ? '• Name is invalid.\n' : '';
        msg += emailValid ? '' : '• Email is invalid.\n';
        msg += formData['subject'].length === 0 ? '• Subject is empty.\n' : '';
        msg += formData['message'].length === 0 ? '• Message is empty.\n' : '';
        alert(msg);
      }
  }
  const sendEmail = () => {
    let service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
    let template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    let key = process.env.NEXT_PUBLIC_PUBLIC_ID;
    
    const templateparams = {
      from_name: formData['name'] + " - " + formData['email'],
      to_name: "You",
      message: "Subject: " + formData['subject'] + ' - \n' + formData['message']
    }
    
    emailjs.send(service_id, template_id, templateparams, key)
    .then((res) => {
      let form = document.querySelector('form').elements;
      for (let i = 0; i < form.length; i++) {
        form[i].readOnly = true;
        form[i].style = 'cursor:default'
      }
      let button = document.querySelector('button')
      button.style = 'background-color: #D45168';
      button.textContent = 'SENT'
      document.querySelectorAll('loading-dot').forEach((el) => button.removeChild(el))
    }, (error) => {
      alert('Failed to send message. Here\'s why: ', error);
      let button = document.querySelector('button')
      button.classList.add('enabled');
      button.textContent = ' SEND';
    });
  }

  return <form ref={form} style={{display:'flex', flexDirection:'column'}} onSubmit={submit}>
    <input onChange={handleChange} type="text" placeholder="Name" name="name" required/>
    <input onChange={handleChange} type="text" placeholder="Email"   name="email" required/>
    <input onChange={handleChange} type="text" placeholder="Subject" name ="subject" required/>
    <textarea onChange={handleChange} placeholder="Message" name="message" required></textarea>
    <button onClick={submit} className='submit enabled' type="submit"><HiMail size={30}/>&nbsp;SEND</button>
  </form>
}