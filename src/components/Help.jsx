import React, { useState } from 'react';
import './Help.css';

const faqData = [
  { question: 'How do I create an account?', answer: 'Click the “Sign Up” button at the top‑right, fill in your details, and verify via email.' },
  { question: 'How can I reset my password?', answer: 'On the login page, click “Forgot Password?”, enter your email, and follow the reset link.' },
  { question: 'Why isn’t the movie playing?', answer: 'Check your internet connection, update your browser, or clear cache and cookies.' },
  { question: 'Can I download movies for offline viewing?', answer: 'Yes—look for the download icon next to titles in our mobile app for offline access.' },
  { question: 'How do I cancel my subscription?', answer: 'Go to My Account → Subscription → Cancel Plan. Your access remains until the billing cycle ends.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit/debit cards, PayPal, Google Pay, and Apple Pay (availability varies by region).' },
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="help-page">
      <div className="overlay" />
      <div className="help-container">
        <header>
          <h1>Help Center</h1>
          <p className="subheading">Find answers to common questions below.</p>
        </header>
        <main>
          {faqData.map((item, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                {item.question}
                <span className={`arrow ${openIndex === i ? 'open' : ''}`} />
              </button>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>  {/* Always render */}
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </main>
        <footer><p>&copy; 2024 MovieZone. All Rights Reserved.</p></footer>
      </div>
    </div>
  );
}