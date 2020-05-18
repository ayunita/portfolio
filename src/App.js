import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Projects from './components/Projects/Projects';
import HexName from './components/Hex/HexName';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Loading from './components/Loading/Loading';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, []);

  const loader = (
      <Loading>Loading...</Loading>
  )

  let app = (
    <React.Fragment>
      <header>
        <Nav />
      </header>
      <main className={styles.Container}>
        <section id='banner' className={styles.Section}>
          <HexName />
        </section>
        <section id='about' className={styles.Section}>
          <svg xmlns='http://www.w3.org/2000/svg' className={styles.SvgTop} viewBox='0 0 100 100' preserveAspectRatio='none'>
            <polygon fill='white' points='0,0 100,0 100,100'/>
          </svg>
          <svg xmlns='http://www.w3.org/2000/svg' className={styles.SvgBottom} viewBox='0 0 100 100' preserveAspectRatio='none'>
            <polygon fill='white' points='0,100 100,0 100,100'/>        
          </svg>
          <div className={styles.Content}>
            <h1 className={styles.Heading}>About Me</h1>
            <About />
          </div>
        </section>      
        <section id='projects' className={styles.Section}>
          <div className={styles.Content}>
            <h1 className={styles.Heading}>Projects</h1>
            <Projects />
          </div>
        </section>
        <section id='contact' className={styles.Section}>
          <svg xmlns='http://www.w3.org/2000/svg' className={styles.SvgTop} viewBox='0 0 100 100' preserveAspectRatio='none'>
            <polygon fill='white' points='0,0 100,0 0,100'/>
          </svg>
          <div className={styles.Content}>
            <h1 className={styles.Heading}>Let's talk!</h1>
            <Contact />
          </div>
        </section> 
      </main>
      <footer className={styles.Footer}>
        <div className={styles.Content}>
          <p>This website powered by React and imagination. Icons by <a href='https://icons8.com/icon/45490/c-sharp-logo-2' target='_blank' rel="noopener noreferrer">Icons8</a> and <a href='https://fontawesome.com/' target='_blank' rel="noopener noreferrer">fontawesome</a>.</p>
        </div>
      </footer>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {isLoading ? loader : app}
    </React.Fragment>
  );
}

export default App;
