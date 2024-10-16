import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import MyWork from './MyWork';
import OtherWork from './OtherWork';
import AboutMe from './AboutMe';
import Contact from './Contact';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('MY WORK');

  // Create refs for each section
  const myWorkRef = useRef(null);
  const otherWorkRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll event handler
  const handleScroll = () => {
    const sections = [
      { ref: myWorkRef, name: 'MY WORK' },
      { ref: otherWorkRef, name: 'MY WORK' },
      { ref: aboutMeRef, name: 'ABOUT ME' },
      { ref: contactRef, name: 'REACH OUT' },
    ];

    sections.forEach((section) => {
      if (section.ref.current) {
        const { top } = section.ref.current.getBoundingClientRect();
        const isVisible = top >= 0 && top < window.innerHeight;

        if (isVisible) {
          setActiveTab(section.name);
        }
      }
    });
  };

  const scrollToSection = (refName) => {
    const sectionRef = {
      myWorkRef,
      otherWorkRef,
      aboutMeRef,
      contactRef,
    }[refName];

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} scrollToSection={scrollToSection} />
      <HeroSection />
      <div ref={myWorkRef}><MyWork /></div>
      <div ref={otherWorkRef}><OtherWork /></div>
      <div ref={aboutMeRef}><AboutMe /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default HomePage;
