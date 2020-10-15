import React from "react"
import emailjs from 'emailjs-com';
import './contact.css'

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('contact', 'template_ms527wk', e.target, 'user_658NrED6VnqUtDdzRlEAn')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  function handleClick() {
    alert("Your message has been sent!")
    }
  return (
    <div>
    <title>Contact</title>

    
    <form className="contact-me-form" onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <div className="contact-me-text">Thoughts, comments, suggestions and questions 
        are all welcome! Don't hesitate to contact me with any question or just 
        want to link up. I would love to hear from you!</div>

        <p>Name</p>
        <input type="text" name="from_name" placeholder="Your name..." />
        <p>Email</p>
        <input type="text" name="from_email" placeholder="Your email..."  />
        <p>Message</p>
        <textarea type="text" name="html_message" placeholder="Your message..."/>
        <input type="submit" value="Submit"  onClick={handleClick}/>
    </form>
    </div>
  );
}