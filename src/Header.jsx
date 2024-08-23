import './Header.css';
import React, { useEffect, useState ,useRef } from 'react';
import AboutMe from './section/AboutMe';
import MyWork from './section/MyWork';
import Contract from './section/Contract';

function Header() {

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const myWorkRef = useRef(null);
  const contactRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
  };
  }, []);

  return (
      <><div id='header'>
        <div className='container'>
          <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about-me" onClick={() => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}>About me</a></li>
              <li><a href="#my-work" onClick={() => myWorkRef.current.scrollIntoView({ behavior: 'smooth' })}>My work</a></li>
              <li><a href="#contact" onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</a></li>
            </ul>
          </nav>
          <div class="header-text">
            <div>
              <br></br>
              <p> Game Developer</p>
              <h1>HI , I'm<span> Mean</span> from Thailand</h1>
            </div>
          </div>
          <div class="header-bottom-link">
            <a href="https://github.com/ThwDog" target="_blank">
              <img src="https://static.vecteezy.com/system/resources/previews/016/833/872/original/github-logo-git-hub-icon-on-white-background-free-vector.jpg"></img>
            </a>
            <a href="https://leetcode.com/u/ThwDog/" target="_blank">
              <img src="https://miro.medium.com/v2/resize:fit:1020/0*xJCLQQRZv3XFMUd1"></img>
            </a>
            <a href="https://www.youtube.com/@td_gd2765/videos" target="_blank">
              <img src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg"></img>
            </a>
          </div>
        </div>
      </div>

      <section id="about-me" ref={aboutMeRef} style={{height:"1050px"}}>
        <AboutMe />
      </section>

      <section id="my-work" ref={myWorkRef} style={{height:"1050px"}}>
        <MyWork />
      </section>
      
      <section id="contact" ref={contactRef} style={{height:"1050px"}}>
        <Contract />
      </section>
      </>
  );
}

export default Header;
