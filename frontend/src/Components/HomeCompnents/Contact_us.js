import React from 'react';
import './Contact_us.css';

function Contact_us() {
  return (
    <div className="contact-container">
      <form method="POST" className="contact-form-container">
        <h1>Reach out to us!</h1>
        <div>
          <input className="c-form-input" type="text" id="c-form-name" autoComplete="on" required placeholder="Name"/>
        </div>
        <div>
          <input className="c-form-input" type="email" id="c-form-mail" autoComplete="on" required placeholder="Mail" />
        </div>
        <div>
          <h4>Type Your Message Here...</h4>
          <textarea required defaultValue={""} />
        </div>
        <button className="contact-form-button">Send!</button>
      </form>
    </div>
  );
}

export default Contact_us;
