import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';

const sectionsData = [
    { 
        id: 1, content: 
        <div className='section1'>
            <h1>Find the best AI Tools for your workplace</h1>
            <p>Turn to SHRM for all things AI in the workplace.</p>
        </div>
    },
    { id: 2, content: <div>Секция 2</div> },
    { id: 3, content: <div>Секция 3</div> },
    { id: 4, content: <div>Секция 4</div> },
    { id: 5, content: <div>Секция 5</div> },
    { 
        id: 6, content: 
        <div className='section6'>
            <div>
                <h2>Bringing AI to life in the workplace will cause disruption.</h2>
                <p>That’s why SHRM is working together with business leaders and decision makers to understand a human-centered approach to workplace AI adoption to maximize investment, foster innovation and transform the workforce.</p>
                <button>Join SHRM</button>
            </div>
            <Footer />
        </div> 
    }
];

const Home = () => {
    const [currentSection, setCurrentSection] = useState(0);
  
    useEffect(() => {
      const handleScroll = (event) => {
        const deltaY = event.deltaY;
        if ((deltaY > 0 && currentSection < sectionsData.length - 1) || (deltaY < 0 && currentSection > 0)) {
          setCurrentSection(currentSection + (deltaY > 0 ? 1 : -1));
        }
      };
  
      window.addEventListener('wheel', handleScroll);
      return () => window.removeEventListener('wheel', handleScroll);
    }, [currentSection]);
  
    const scrollToSection = (sectionIndex) => {
      const section = document.getElementById(`section-${sectionIndex + 1}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="home">
        <div className="sections">
          {sectionsData.map((section, index) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className={`section ${index === currentSection ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
            >
              {section.content}
            </div>
          ))}
        </div>
      </div>
    );
  };

export {Home};