import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4099e36', 'template_fguaewg', form.current, 'CwrhmWKb3-CSQv_9R')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className="sections d-flex flex-column align-items-center">
    <h3>Contact Fleshtables</h3>
    <form className="d-flex flex-column w-50" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="mb-3" type="text" name="user_name" />
      <label>Email</label>
      <input className="mb-3" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="mb-4" name="message" />
      <input className="mb-3" type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Contact