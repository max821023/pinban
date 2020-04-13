import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
  <div className="homepage">
    <nav className="homepage-navbar">
      <div className="nav-home">
        <Link to="/">
          <i className="fab fa-trello splash"></i>
          Pinban
        </Link>
      </div>
      <div className="login-signup">
        <div className="login-btn">
          <Link to="/login" className="splash-login">
            Log In
          </Link>
        </div>
        <div className="signup-btn">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
    <div className="center-items">
      <div className="left-center">
        <div>
          <h1>Pinban lets you work more collaboratively and get more done.</h1>
        </div>
        <div>
          <p>
            Pinban’s boards, lists, and cards enable you to organize and
            prioritize your projects in a fun, flexible, and rewarding way.
          </p>
        </div>
      </div>
      <div className="right-center">
        <img src={window.pinboard} />
      </div>
    </div>
    <div className="footer">
      <div className="personal-links">
        <a href="https://github.com/max821023">
          <button className="footer-buttons">
            <i class="fab fa-github"></i>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/max-lin-dev/">
          <button className="footer-buttons">
            <i class="fab fa-linkedin-in"></i>
          </button>
        </a>
        <a href="https://angel.co/max-lin-dev">
          <button className="footer-buttons">
            <i class="fab fa-angellist"></i>
          </button>
        </a>
        <a href="http://www.maxlin-dev.com/">
          <button className="footer-buttons">
            <i class="fas fa-archive"></i>
          </button>
        </a>
      </div>
      <div className="copyright">
        <i class="far fa-copyright"></i>
        Max Lin
      </div>
    </div>
  </div>
);

export default Splash;