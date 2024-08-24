import './AboutMe.css'
import photo from "../Image/MyPhoto.jpg";
import React,{useEffect,useState} from 'react';


function AboutMe() {
    const [activeTab, setActiveTab] = useState('skill');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
        <section class="aboutme">
            <div id="about">
                <div class="container">
                    <div class="row">
                        {/* Left col */}
                        <div class="about_col_1">
                            <img src={photo}></img>
                            
                        </div>
                        <div class="about_col_2">
                            <h1 class="sub-title">About me</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            </p>

                            <div class="tab-title">
                                <p className={`tab-links ${activeTab === 'skill' ? 'active-link' : ''}`}        onClick={() => handleTabClick('skill')}>Skill</p>
                                <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}   onClick={() => handleTabClick('experience')}>Experience</p>
                                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}    onClick={() => handleTabClick('education')}>Education</p>
                            </div>
                            {/* content */}
                             <div className={`tab-con ${activeTab === 'skill' ? 'active-tab' : ''}`} id="skill"> {/*skill */}
                                <ul>
                                    <li><span>Skill</span><br /> Skill</li>
                                </ul>
                            </div>
                            <div className={`tab-con ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience"> {/*Experience */}
                                <ul>
                                    <li><span>Experience</span><br /> Experience</li>
                                </ul>
                            </div>
                            <div className={`tab-con ${activeTab === 'education' ? 'active-tab' : ''}`} id="education"> {/*Education */}
                                <ul>
                                    <li><span>Education</span><br /> Education</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default AboutMe;