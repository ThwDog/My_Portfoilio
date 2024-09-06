import './Header.css';
import React, { useEffect, useState ,useRef } from 'react';
import { Box, Tooltip, WrapItem } from '@chakra-ui/react';
import AboutMe from './section/AboutMe';
import MyWork from './section/MyWork';
import Contract from './section/Contract';
import GitHubCalendar from 'react-github-calendar';

function Header() {
  // ref from other jsx file
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
              <h1>HI , I'm<span> Mean</span> from Thailand
              <br/>I'm current study on <span>Game Development</span> and interesting in <span>VFX</span></h1>

              <div className='github-Calender'>
                  <div className='calender-BG' />
                  <GitHubCalendar username="thwdog" />
              </div>
            </div>
          </div>
          <div class="header-bottom-link">
            <WrapItem>
              <Tooltip hasArrow  label='GITHUB' bg="0" fontSize='15'  placement='top' color='white' height='15'>
                  <a href="https://github.com/ThwDog" target="_blank">
                    <img src="https://avatars.githubusercontent.com/u/93073193?v=4"></img>
                  </a>
              </Tooltip>
              <Tooltip hasArrow  label='LEETCODE' bg="0" fontSize='15'  placement='top' color='white'>
                  <a href="https://leetcode.com/u/ThwDog/" target="_blank">
                    <img src="https://miro.medium.com/v2/resize:fit:1020/0*xJCLQQRZv3XFMUd1"></img>
                  </a>
              </Tooltip>
              <Tooltip hasArrow  label='YT01' bg="0" fontSize='15'  placement='top' color='white'>
                <a href="https://www.youtube.com/@td_gd2765/videos" target="_blank">
                  <img src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg"></img>
                </a>
              </Tooltip>    
              <Tooltip hasArrow  label='YT02' bg="0" fontSize='15'  placement='top' color='white'>
                <a href="https://www.youtube.com/@ThwDog_Work" target="_blank">
                  <img src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg"></img>
                </a>
              </Tooltip>  
            </WrapItem>     
          </div>
        </div>
        
      </div>

      <section id="about-me" ref={aboutMeRef} style={{height:"auto", backgroundColor:"#1E201E"}}>
        <AboutMe />
      </section>

      <section id="my-work" ref={myWorkRef} style={{height:"auto", backgroundColor:"#1E201E"}}>
        <MyWork />
      </section>
      
      <section id="contact" ref={contactRef} style={{height:"auto", backgroundColor:"#1E201E"}}>
        <Contract />
      </section>
      </>
  );
}

export default Header;
