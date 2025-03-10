import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="header">
          <h1>Monevo</h1>
          <div className="nav-outbox">
            <input type="checkbox" name="open navigation" id="open-nav" />
            <label htmlFor="open-nav" id="overlay"></label>
            <label htmlFor="open-nav">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </label>
            <nav>
              <ul className="nav">
                <li>
                  <label htmlFor="open-nav">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
                    </svg>
                  </label>
                </li>
                <li id="register" className="Outlined">
                  <button onClick={() => navigate('/register')}>Register for free</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section id="hero">
          <img src="/assets/hero.svg" alt="Illustration of finance dashboard" />
          <h1>University Finances Made Easy</h1>
          <p>We're here to help you make informed financial decisions, achieve long-term stability and</p>
          <span>take back control of your finances</span>
          <button id="get-started" type="button" onClick={() => navigate('/register')}>
            Get Started
          </button>
        </section>
        {/* Rest of your landing page sections */}
      </main>
    </>
  );
} 