import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

export default function Welcome() {
  const navigate = useNavigate();

  const handleNext = () => {
    // Optional: Add animation or loading effect here
    navigate('/main');
  };

  return (
    <div className="welcome-page">
      <div className="welcome-overlay" />
      <div className="welcome-content">
        <img
          src="https://cdn.pixabay.com/photo/2020/09/17/17/11/netflix-5579839_640.png"
          alt="Binge Watch Logo"
          className="logo"
        />
        <h1 className="welcome-message">Welcome to BingeWatch !!!</h1>
        <h2 className="tagline-title">Your Next Movie Marathon Awaits!!!</h2>
        <p className="tagline-text">
          Binge Watch is your ultimate destination for discovering the latest and greatest movies.
          Dive into a world of cinematic adventures, from thrilling blockbusters to hidden gems,
          all tailored to enhance your movie-watching experience. Get ready to binge like never before!
        </p>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
