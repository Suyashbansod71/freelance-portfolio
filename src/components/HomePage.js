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
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (myWorkRef.current && scrollTop >= myWorkRef.current.offsetTop && scrollTop < (otherWorkRef.current?.offsetTop || Infinity)) {
      setActiveTab('MY WORK');
    } else if (otherWorkRef.current && scrollTop >= otherWorkRef.current.offsetTop && scrollTop < (aboutMeRef.current?.offsetTop || Infinity)) {
      setActiveTab('MY WORK');
    } else if (aboutMeRef.current && scrollTop >= aboutMeRef.current.offsetTop && scrollTop < (contactRef.current?.offsetTop || Infinity)) {
      setActiveTab('ABOUT ME');
    } else if (contactRef.current && scrollTop >= contactRef.current.offsetTop) {
      setActiveTab('REACH OUT');
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
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeroSection />
      <div ref={myWorkRef}><MyWork /></div>
      <div ref={otherWorkRef}><OtherWork /></div>
      <div ref={aboutMeRef}><AboutMe /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default HomePage;
