import React, { useState } from 'react';

import Headshot from './assets/images/_1.JPG';
import Menu from './assets/images/menu.svg';
import { ReactComponent as User } from './assets/images/user.svg';
import Times from './assets/images/times.svg';
import Hand from './assets/images/hand.webp';


const Homepage = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div>
            <div className="nav">
                <div>
                    <h3 style={{ display: 'flex', alignItems: 'center' }}><User /> ieadeleke</h3>
                </div>
                <div>
                    <img src={Menu} alt="menu"
                        onClick={() => setShowNav(true)}
                    />
                </div>
            </div>
            <div className="header first_display">
                <div>
                    <h3>Hello there, my name is</h3>
                    <svg className="myName">
                        <text className="authorText" y="40">Adeleke Ifeoluwase Ebenezer.</text>
                    </svg>
                    <p>I’m a software engineer specializing in building (and occasionally designing) exceptional
                        digital experiences. Currently, I’m focused on building accessible, human-centered products at
                        Upstatement.</p>
                    <button>Download my resume</button>
                </div>
                <div>
                    <div className="hand">
                        <img src={Hand} alt="hand" />
                    </div>
                </div>
            </div>
            <div className="about_me second_display">
                <svg className="section_header">
                    <text y="40">01 &mdash; About Me</text>
                </svg>
                <div>
                    <div className="grid_2">
                        <div>
                            <div>
                                <p className="space_under">Hello! My name is Brittany and I enjoy creating things that live on the internet. My
                                    interest in web development started back in 2012 when I decided to try editing custom
                                    Tumblr themes — turns out hacking together a custom reblog button taught me a lot about
                                    HTML & CSS!</p>
                                <p className="space_under">
                                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                                    a start-up, a huge corporation, and a student-led design studio. My main focus these days
                                    is building accessible, inclusive products and digital experiences at Upstatement for a
                                    variety of clients.
                                </p>
                                <p className="space_under">Here are a few technologies I’ve been working with recently:</p>
                                <ul>
                                    <span>
                                        <li>Vanilla JavaScript</li>
                                        <li>React.js</li>
                                        <li>Nodejs</li>
                                    </span>
                                    <span>
                                        <li>EJS</li>
                                        <li>ReactNative</li>
                                        <li>Express.js</li>
                                    </span>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="style_me">
                                    <img src={Headshot} alt="Headshot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_display space_to_top portfolio_sect">
                <svg className="section_header">
                    <text y="40">02 &mdash; A few of the Projects I have worked on</text>
                </svg>
                <div>
                    <div className="grid_3">
                        <div className="data_block">
                            <div className="grid_flex">
                                <h5>Konnect</h5>
                                <div>
                                    <ion-icon name="logo-github"></ion-icon>
                                    <ion-icon name="open-outline"></ion-icon>
                                </div>
                            </div>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                            <ul>
                                <li>React.js</li>
                                <li>Redux</li>
                                <li>Node.js</li>
                                <li>Ant Design</li>
                                <li>CSS</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>JWT</li>
                            </ul>
                        </div>
                        <div className="data_block">
                            <div className="grid_flex">
                                <h5>Thumbvids</h5>
                                <div>
                                    <ion-icon name="logo-github"></ion-icon>
                                    <ion-icon name="open-outline"></ion-icon>
                                </div>
                            </div>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                            <ul>
                                <li>Vanilla Javascript</li>
                                <li>EJS</li>
                                <li>Node.js</li>
                                <li>HTML / CSS</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                            </ul>
                        </div>
                        <div className="data_block">
                            <div className="grid_flex">
                                <h5>Lagos Theatre</h5>
                                <div>
                                    <ion-icon name="logo-github"></ion-icon>
                                    <ion-icon name="open-outline"></ion-icon>
                                </div>
                            </div>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>CSS</li>
                                <li>Express-Validator</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                            </ul>
                        </div>
                        <div className="data_block">
                            <div className="grid_flex">
                                <h5>SabiBook</h5>
                                <div>
                                    <ion-icon name="logo-github"></ion-icon>
                                    <ion-icon name="open-outline"></ion-icon>
                                </div>
                            </div>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>CSS</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div className="data_block">
                            <div className="grid_flex">
                                <h5>DanceRapy</h5>
                                <div>
                                    <ion-icon name="logo-github"></ion-icon>
                                    <ion-icon name="open-outline"></ion-icon>
                                </div>
                            </div>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>CSS</li>
                                <li>Express-Validator</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                            </ul>
                        </div>
                        <div className="data_block">
                            <div className="grid_flex">
                                <h5>Vetro Pay</h5>
                                <div>
                                    <ion-icon name="logo-github"></ion-icon>
                                    <ion-icon name="open-outline"></ion-icon>
                                </div>
                            </div>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                            <ul>
                                <li>React Native</li>
                                <li>Node.js</li>
                                <li>React.js</li>
                                <li>CSS</li>
                                <li>Express.js</li>
                                <li>Expo</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_display small_space_to_top portfolio_sect stories">
                <svg className="section_header">
                    <text y="40">03 &mdash; I contribute to open source projects</text>
                </svg>
                <div>
                    <div className="grid_3">
                        <div className="data_block">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <h5>Country data API</h5>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                        </div>
                        <div className="data_block">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <h5>React-Native On-Screen Keyboard</h5>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                        </div>
                        <div className="data_block">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <h5>Country Data Select Box</h5>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_display small_space_to_top portfolio_sect stories">
                <svg className="section_header">
                    <text y="40">04 &mdash; I write technical articles on Medium as well</text>
                </svg>
                <div>
                    <div className="grid_3">
                        <div className="data_block">
                            <ion-icon name="logo-medium"></ion-icon>
                            <h5>Validating user inputs on your Express.js application with express-validator</h5>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                        </div>
                        <div className="data_block">
                            <ion-icon name="logo-medium"></ion-icon>
                            <h5>Handling Forms in Reactjs with React-hook-form and Ant Design with Yup as Validation</h5>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                        </div>
                        <div className="data_block">
                            <ion-icon name="logo-medium"></ion-icon>
                            <h5>Validating user inputs on your Express.js application with express-validator</h5>
                            <p>An online storehouse for all things crypto, with in-depth data about all
                                cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_display space_to_top contact">
                <svg className="section_header">
                    <text y="40">05 &mdash; I would love to hear from you</text>
                </svg>
                <div>
                    <div className="grid_3">
                        <div className="contact_display">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <div>
                                <h3>Github</h3>
                                <p>/ieadeleke</p>
                            </div>
                        </div>
                        <div className="contact_display">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <div>
                                <h3>Github</h3>
                                <p>/ieadeleke</p>
                            </div>
                        </div>
                        <div className="contact_display">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <div>
                                <h3>Github</h3>
                                <p>/ieadeleke</p>
                            </div>
                        </div>
                        <div className="contact_display">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <div>
                                <h3>Github</h3>
                                <p>/ieadeleke</p>
                            </div>
                        </div>
                        <div className="contact_display">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <div>
                                <h3>Github</h3>
                                <p>/ieadeleke</p>
                            </div>
                        </div>
                        <div className="contact_display">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <div>
                                <h3>Github</h3>
                                <p>/ieadeleke</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="grid_2">
                    <p>&copy; Adeleke Ifeoluwase Ebenezer</p>
                    <div>
                        <a href="tel:+2348132277316">+234 813 227 7316</a>
                        <a href="mailTo:eadelekeife@gmail.com">eadelekeife@gmail.com</a>
                    </div>
                </div>
            </div>
            <div
                className={`nav_data ${showNav ? 'showNav' : 'hideNav'}`}>
                <ul>
                    <li>
                        <svg className="nav_data_content">
                            <text y="40">01 &mdash; About Me</text>
                        </svg>
                    </li>
                    <li>
                        <svg className="nav_data_content">
                            <text y="40">02 &mdash; Recent Projects</text>
                        </svg>
                    </li>
                    <li>
                        <svg className="nav_data_content">
                            <text y="40">03 &mdash; Open-source Projects</text>
                        </svg>
                    </li>
                    <li>
                        <svg className="nav_data_content">
                            <text y="40">04 &mdash; Technical Articles</text>
                        </svg>
                    </li>
                    <li>
                        <svg className="nav_data_content">
                            <text y="40">05 &mdash; Contact Me</text>
                        </svg>
                    </li>
                </ul>
                <div className="nav_links">
                    <a href="">GitHub</a>
                    <a href="">LinkedIn</a>
                    <a href="">Twitter</a>
                    <a href="">Medium</a>
                </div>
                <div>
                    <img
                        onClick={() => setShowNav(false)}
                        src={Times} alt="close nav" className="closeNav" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;