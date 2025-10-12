import emailjs from '@emailjs/browser'
import useWeb3Forms from "@web3forms/react";
import { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { HiMail } from 'react-icons/hi';

export default function EmailForm(props) {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  });

  const {register, reset, handleSubmit} = useForm();

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    let button = document.querySelector('button')
    button.classList.remove('enabled');
    button.textContent = 'SENDING';

    let dot1 = document.createElement('div');
    dot1.classList.add('loading-dot');
    dot1.textContent = '.';
    
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
      // e.preventDefault();

      // let valid = true;
      // let emailValid = formData['email'] !== '' && formData['email'].toLowerCase().match(
      //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      // );
      
      // if (formData['name'].length === 0 || !emailValid || formData['subject'].length === 0 || formData['message'].length === 0) {
      //     valid = false;
      // }
      // console.log(emailValid)
      
      // if (valid) {
      //   let button = document.querySelector('button')
      //   button.classList.remove('enabled');
      //   button.textContent = 'SENDING';

      //   let dot1 = document.createElement('div');
      //   dot1.classList.add('loading-dot');
      //   dot1.textContent = '.';
        
      //   dot1.style.animationDelay = '0s';
      //   let dot2 = document.createElement('div');
      //   dot2.classList.add('loading-dot');
      //   dot2.textContent = '.'
      //   dot2.style.animationDelay = '0.25s';
      //   let dot3 = document.createElement('div');
      //   dot3.classList.add('loading-dot');
      //   dot3.textContent = '.'
      //   dot3.style.animationDelay = '0.5s';
      //   button.appendChild(dot1);
      //   button.appendChild(dot2);
      //   button.appendChild(dot3);

      //   sendEmail();
      // } else {
      //   let msg = 'Failed to send message. Here\'s why:\n';
      //   msg += formData['name'].length === 0 ? '• Name is invalid.\n' : '';
      //   msg += emailValid ? '' : '• Email is invalid.\n';
      //   msg += formData['subject'].length === 0 ? '• Subject is empty.\n' : '';
      //   msg += formData['message'].length === 0 ? '• Message is empty.\n' : '';
      //   alert(msg);
      //   console.log(formData)
      // }
  }
  const sendEmail = () => {
    const { submit: onSubmit } = useWeb3Forms({
      access_key: 'b31ad7a0-559c-43a2-8b3f-7b4b7f4d5b28',
      settings: {
        from_name: "Portfolio Site", subject: "New message"
        // ... other settings
      },
      onSuccess: (msg, data) => {
        let form = document.querySelector('form').elements;
        for (let i = 0; i < form.length; i++) {
          form[i].readOnly = true;
          form[i].style = 'cursor:default'
        }
        let button = document.querySelector('button')
        button.style = 'background-color: #D45168';
        button.textContent = 'SENT'
        document.querySelectorAll('loading-dot').forEach((el) => button.removeChild(el))
        console.log("Message:", msg);
        // reset();
      },
      onError: (msg, data) => {
        alert('Failed to send message. Here\'s why: ', error);
        console.log("Message:", msg);
        let button = document.querySelector('button')
        button.classList.add('enabled');
        button.textContent = ' SEND';
      },
    });
    handleSubmit(onSubmit)();
  }

  // const { submit } = useWeb3Forms({
  //   access_key: 'b31ad7a0-559c-43a2-8b3f-7b4b7f4d5b28',
  //   settings: {
  //     from_name: formData['name'],
  //     subject: formData['subject'],
  //     // ... other settings
  //   },
  //   onSuccess: (msg, data) => {
  //     let form = document.querySelector('form').elements;
  //     for (let i = 0; i < form.length; i++) {
  //       form[i].readOnly = true;
  //       form[i].style = 'cursor:default'
  //     }
  //     let button = document.querySelector('button')
  //     button.style = 'background-color: #D45168';
  //     button.textContent = 'SENT'
  //     document.querySelectorAll('loading-dot').forEach((el) => button.removeChild(el))
  //     console.log("Message:", msg);
  //     // reset();
  //   },
  //   onError: (msg, data) => {
  //     alert('Failed to send message. Here\'s why: ', error);
  //     console.log("Message:", msg);
  //     let button = document.querySelector('button')
  //     button.classList.add('enabled');
  //     button.textContent = ' SEND';
  //   },
  // });

  return <form ref={form} style={{display:'flex', flexDirection:'column'}} onSubmit={submit}>
    {/* <input type="text" placeholder="Name" {...register("name", { required: true })}/>
    <input type="text" placeholder="Email" {...register("email", { required: true })}/>
    <input type="text" placeholder="Subject" {...register("subject", { required: true })}/>
    <textarea placeholder="Message" {...register("message", { required: true })}></textarea> */}
    <input onChange={handleChange} type="text" placeholder="Name" name="name" required/>
    <input onChange={handleChange} type="text" placeholder="Email"   name="email" required/>
    <input onChange={handleChange} type="text" placeholder="Subject" name ="subject" required/>
    <textarea onChange={handleChange} placeholder="Message" name="message" required></textarea>
    <button onClick={submit} className='submit enabled' type="submit"><HiMail size={30}/>&nbsp;SEND</button>
  </form>
}