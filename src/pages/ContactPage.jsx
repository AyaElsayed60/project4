import React, { useState } from 'react';
import './ContactPage.css';
import Banner from '../assets/images/banner.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="hero">
        <img src={Banner} className="hero-image" alt="Banner" />
        <div className="hero-text">
          <h1>Contact</h1>
          <p>Home &gt; Contact</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Get In Touch With Us</h2>
        <p className="intro">
          For More Information About Our Product & Services, Please Feel Free To Drop Us <br /> An Email. 
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <div className="contact-details">
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> <strong>Address</strong> <br />236 5th SE Avenue, New  <br />York NY10000, United <br /> States</p>
            <p><i className="fas fa-phone-alt"></i> <strong>Phone</strong><br />Mobile: +(84) 546-6789 <br />Hotline: +(84) 456-6789</p>
           
            <p><i className="fas fa-clock"></i> <strong>Working Time</strong> <br />Monday-Friday: 9:00 - 22:00 <br />Saturday-Sunday: 9:00 - 21:00</p>
          </div>

          <form onSubmit={handleSubmit} className="form-inputs">
            <div>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;