import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send the email to your backend for processing.
    console.log('Email submitted:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <div className="Newsletter">
      <h2 className='Cri'>Subscribe to Our Newsletter</h2>
      <>
      <h2 className='Cri2'>Subscribe to our Newsletter!</h2>
      
        <h6 className='Boi'>Subscribe to our Newsletter and stay updated</h6>
      
      </>
      <form onSubmit={handleSubmit}>
        <input className='Putu'
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
        <button className='Utt' type="submit"><h3 className='Be'>Subscribe</h3></button>
      </form>
    </div>
    
  );
};

export default NewsletterSignup;
