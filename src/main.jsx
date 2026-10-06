import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const games = [
  {
    number: '01',
    title: 'Inside Out',
    subtitle: 'Debug the Mind',
    description:
      'The central control system has malfunctioned. Restore it through memory, logic and pattern recognition.',
    skills: ['Memory', 'Logic', 'Pattern Recognition'],
    phases: [
      ['Memory', 'Decode short-term signals.'],
      ['Logic', 'Resolve broken patterns.'],
      ['Core Memory', 'Rebuild the final sequence.'],
    ],
    meta: ['Skills tested: Memory, logic, pattern recognition', 'Difficulty: Progressive'],
    accent: 'mint',
    glyph: 'IO',
  },
  {
    number: '02',
    title: 'Cars',
    subtitle: 'Pit Stop Protocol',
    description:
      'Identify system faults, debug buggy car systems and race your way to the finish.',
    skills: ['Debugging', 'Logic', 'Basic Programming'],
    phases: [
      ['Qualifying', 'Find the first fault line.'],
      ['Pit Stop', 'Repair system behavior.'],
      ['Final Race', 'Run the fixed logic under pressure.'],
    ],
    meta: ['Systems: Fuel, brake, engine, temperature, speed', 'Skills tested: Debugging, logic, programming basics'],
    accent: 'amber',
    glyph: 'CP',
  },
  {
    number: '03',
    title: 'Finding Nemo',
    subtitle: 'Find the Data',
    description:
      'Search, filter and uncover Nemo hidden inside a large dataset.',
    skills: ['Excel', 'SQL', 'Python', 'Data Filtering'],
    phases: [
      ['Search', 'Locate useful records.'],
      ['Filter', 'Apply the right conditions.'],
      ['Rescue', 'Extract the hidden result.'],
    ],
    meta: ['Example filters: conditions, ranges, matches, missing values', 'Beginner-friendly data challenge'],
    accent: 'blue',
    glyph: 'FN',
  },
  {
    number: '04',
    title: 'How to Train Your Dragon',
    subtitle: 'The Final Battle',
    description:
      'Take on programming challenges and deal damage to the dragon until its health reaches zero.',
    skills: ['Programming', 'Problem Solving', 'Strategy'],
    phases: [
      ['Final Round', 'Enter the programming arena.'],
      ['Damage', 'Solve problems for XP impact.'],
      ['Zero Health', 'Finish with strategy and speed.'],
    ],
    meta: ['Easy: 2 XP, Medium: 5 XP, Hard: 7 XP, Extreme: 10 XP', 'Choose multiple easier problems or harder high-damage challenges'],
    accent: 'red',
    glyph: 'HT',
  },
];

const faqs = [
  ['Eligibility', 'Open eligibility details will be shared by the organizers.'],
  ['Registration', 'Participants can register for any or all of the first three rounds.'],
  ['Team size', 'Team size details will be shared in the official registration instructions.'],
  ['Round structure', 'The first three rounds lead into the final programming battle.'],
  ['Scoring', 'Scoring depends on round performance, accuracy and challenge completion.'],
  ['Qualification', 'Top 10 participants from each of the first three rounds qualify for the final round.'],
  ['Time limits', 'Round-specific time limits will be announced by the organizers.'],
  ['Technical requirements', 'Bring the tools required for logic, debugging, data analysis and programming rounds.'],
  ['Tie-breakers', 'Tie-breakers will be handled through official scoring rules.'],
  ['Disqualification', 'Unfair means or violation of event rules may lead to disqualification.'],
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="logo-box" href="#top" aria-label="IEEE logo placeholder">IEEE LOGO</a>
      <a className="wordmark" href="#top" aria-label="TechFlix home">TECHFLIX</a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#games">Games</a>
        <a href="#how">How It Works</a>
        <a href="#rounds">Rounds</a>
        <a href="#rules">Rules</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="logo-box logo-box-right" href="#top" aria-label="College logo placeholder">COLLEGE LOGO</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-label label-left">GRID 29.30 / MMCOE</span>
        <span className="hero-label label-right">LOGIC DEBUG DATA CODE</span>
        <span className="scan scan-one" />
        <span className="scan scan-two" />
        <span className="node node-a" />
        <span className="node node-b" />
        <span className="node node-c" />
      </div>
      <div className="hero-content reveal">
        <p className="eyebrow">IEEE MMCOE Student Branch Presents</p>
        <h1>TECHFLIX</h1>
        <div className="hero-lines" aria-label="Beyond the screen. Enter. Solve. Escape.">
          <span>BEYOND THE SCREEN</span>
          <span>ENTER. SOLVE. ESCAPE.</span>
        </div>
        <p className="hero-copy">
          A technology-focused competitive event combining logic, debugging, data analysis
          and programming through four interactive challenges.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#games">Explore The Games</a>
          <a className="button button-secondary" href="#how">How It Works</a>
        </div>
      </div>
    </section>
  );
}

function GameCard({ game }) {
  return (
    <article className={`game-card accent-${game.accent} reveal`}>
      <div className="game-motif" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="card-topline">
        <span className="game-number">{game.number}</span>
        <span className="glyph" aria-hidden="true">{game.glyph}</span>
      </div>
      <h3>{game.title}</h3>
      <p className="game-subtitle">{game.subtitle}</p>
      <p>{game.description}</p>
      <div className="chips" aria-label={`${game.title} skills`}>
        {game.skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
      <a className="card-link" href={`#game-${game.number}`}>Enter <span aria-hidden="true">→</span></a>
    </article>
  );
}

function Challenges() {
  return (
    <section className="section" id="games">
      <div className="section-heading reveal">
        <p className="eyebrow">The Challenges</p>
        <h2>Four worlds. Four challenges. One ultimate showdown.</h2>
      </div>
      <div className="game-grid">
        {games.map((game) => <GameCard key={game.title} game={game} />)}
      </div>
    </section>
  );
}

function GameDetails() {
  return (
    <section className="section details-section" aria-label="Game detail sections">
      {games.map((game) => (
        <article className={`detail-panel accent-${game.accent} reveal`} id={`game-${game.number}`} key={game.title}>
          <div>
            <p className="eyebrow">Game {game.number}</p>
            <h2>{game.title}</h2>
            <p className="detail-subtitle">{game.subtitle}</p>
            <p>{game.description}</p>
          </div>
          <div className="detail-flow">
            <ol className="phase-timeline" aria-label={`${game.title} phases`}>
              {game.phases.map(([phase, copy], index) => (
                <li key={phase}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{phase}</strong>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
            <ul className="detail-meta">
              {game.meta.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['01', 'Register', 'Choose your challenge.'],
    ['02', 'Compete', 'Enter the game worlds.'],
    ['03', 'Qualify', 'Top performers advance.'],
    ['04', 'Final Battle', 'Take on the dragon.'],
  ];

  return (
    <section className="section" id="how">
      <div className="section-heading reveal">
        <p className="eyebrow">How It Works</p>
        <h2>A clean path from entry to final battle.</h2>
      </div>
      <div className="process">
        {steps.map(([number, title, copy]) => (
          <article className="process-step reveal" key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section split-section" id="rounds">
      <div className="section-heading reveal">
        <p className="eyebrow">Event Timeline</p>
        <h2>Two days. Four technical rounds.</h2>
      </div>
      <div className="timeline">
        <article className="day-card reveal">
          <span>Day 01</span>
          <h3>29 October</h3>
          <p>Inside Out <span aria-hidden="true">→</span> Cars</p>
        </article>
        <article className="day-card reveal">
          <span>Day 02</span>
          <h3>30 October</h3>
          <p>Finding Nemo <span aria-hidden="true">→</span> Final Battle</p>
        </article>
      </div>
    </section>
  );
}

function Qualification() {
  return (
    <section className="section qualification">
      <div className="section-heading reveal">
        <p className="eyebrow">Qualification</p>
        <h2>Register flexibly. Advance through performance.</h2>
        <p>Participants can register for any/all of the first three rounds.</p>
        <p>Top 10 participants from each of the first three rounds will be selected for the final round.</p>
      </div>
      <div className="qual-flow reveal" aria-label="Qualification flow from rounds to final">
        <div className="round-stack">
          <span>Round 1</span>
          <span>Round 2</span>
          <span>Round 3</span>
        </div>
        <div className="flow-line" aria-hidden="true" />
        <div className="top-ten">Top 10</div>
        <div className="flow-line" aria-hidden="true" />
        <div className="final-node">Final</div>
      </div>
    </section>
  );
}

function Prizes() {
  const prizes = [
    ['1ST', '₹7K'],
    ['2ND', '₹5K'],
    ['3RD', '₹3K'],
  ];

  return (
    <section className="section prizes">
      <div className="section-heading reveal">
        <p className="eyebrow">Prizes</p>
        <h2>Recognition for the strongest performers.</h2>
      </div>
      <div className="podium">
        {prizes.map(([place, amount]) => (
          <article className="podium-card reveal" key={place}>
            <strong>{amount}</strong>
            <span>{place}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="section-heading reveal">
        <p className="eyebrow" id="rules">Rules / FAQ</p>
        <h2>Official details, kept clear and expandable.</h2>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details className="faq-item reveal" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section final-cta reveal">
      <p className="eyebrow">Ready To Enter?</p>
      <h2>Your challenge awaits.</h2>
      <div className="hero-actions">
        <a className="button button-primary" href="#top">Register Now</a>
        <a className="button button-secondary" href="#games">Explore Games</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>TECHFLIX</h2>
        <p>IEEE MMCOE Student Branch</p>
        <p>College name</p>
      </div>
      <div className="footer-logos" aria-label="Logo placeholders">
        <span>IEEE LOGO</span>
        <span>COLLEGE LOGO</span>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#games">Games</a>
        <a href="#how">How It Works</a>
        <a href="#rounds">Rounds</a>
        <a href="#faq">FAQ</a>
      </nav>
      <p className="contact">Social / Contact placeholders</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <GameDetails />
        <HowItWorks />
        <Timeline />
        <Qualification />
        <Prizes />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
