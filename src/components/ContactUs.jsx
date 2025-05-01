// src/components/ContactUs.jsx
import React, { useState } from 'react';
import './ContactUs.css';

export default function ContactUs() {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    alert(`Language changed to ${lang}`);
  };

  const quickLinks = [
    'Content Grievances in India',
    'Reset password',
    'Update email',
    'Get help signing in',
    'Update payment method'
  ];

  const footerLinks = [
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Corporate Information'
  ];

  return (
    <>
      <header className="contact-header">
        <div className="header-content container d-flex justify-content-between align-items-center">
          <img
            src="https://www.shutterstock.com/image-vector/binge-watching-square-banner-web-600nw-1843952809.jpg"
            alt="Binge Watch Logo"
            className="logo"
          />
          <button className="btn btn-outline-light signin-btn">Sign in</button>
        </div>
      </header>

      <section className="contact-section">
        <div className="container text-center text-white">
          <h1 className="contact-title text-danger">CONTACT US</h1>
          <h5 className="contact-subtitle mb-4">
            Tell us more and we'll find the best solution for you
          </h5>

          <div className="search-input-wrapper mb-5">
            <input
              type="text"
              className="form-control issue-input mx-auto"
              placeholder="Describe your issue"
            />
          </div>

          <div className="quick-links text-start mx-auto">
            <h3 className="text-white mb-3">Quick links</h3>
            <ul className="list-unstyled">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="link-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="contact-footer text-white">
        <div className="footer-container container d-flex flex-wrap justify-content-between align-items-center py-4">
          <div className="language-select mb-3">
            <label htmlFor="language" className="me-2">Language</label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="form-select d-inline-block w-auto"
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <ul className="list-unstyled d-flex flex-wrap mb-0">
            {footerLinks.map((link, idx) => (
              <li key={idx} className="me-4">
                <a href="#" className="link-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
