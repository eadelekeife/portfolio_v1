import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';

import { gsap, TweenMax, Power3, Power0, Power1 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Headshot from './assets/images/_1.JPG';
import Menu from './assets/images/menu.svg';
import { ReactComponent as User } from './assets/images/user.svg';
import Times from './assets/images/times.svg';
import Hand from './assets/images/hand.webp';
import { Tabs } from 'antd';
import ManSmiling from './assets/images/HERO.jpg';
import Me from './assets/images/me.png';
import ProjectImg from './assets/images/project.webp';
import GreetingImage from './assets/images/greeting.png';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const Homepage = () => {

    const { TabPane } = Tabs;
    const [showNav, setShowNav] = useState(false);
    const [contentToShow, setContentToShow] = useState('greeting');
    const [greeting] = useState(['Hallå', 'Ciao', 'Hello', 'Olá', 'Bonjour', 'स्वागत हे', 'Hola', 'Guten tag', 'おい', 'Salve', 'Hallo']);
    const [currentGreeting, setCurrentGreeting] = useState('How far?');
    const [currentLevel, setCurrentLevel] = useState(15);
    const [spinLoader, setSpinLoader] = useState(15);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fixedNav, setFixed] = useState(false);

    gsap.registerPlugin(ScrollTrigger);
    const blackHalf = useRef();
    const redHalf = useRef();
    const blockdisplay = useRef();
    const elementPage = useRef();

    const items = [
        {
            label: 'Konnect', key: 'item-1', children: <div>
                <div className="grid_flex">
                    {/* <h5>Obade</h5> */}
                    {/* <div>
                        <a
                            target={'_blank'}
                            href="https://app.obade.org"><ion-icon name="open-outline"></ion-icon></a>
                    </div> */}
                </div>
                <img src={ProjectImg} alt="ProjectImg" />
                <p>Obade is an app where users can buy airtime and subscribe for data at a reduced fee
                    while also enjoying massive cashbacks. It is available on web and mobile app.
                </p>
                <ul>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>React Context</li>
                    <li>CSS</li>
                    <li>Materialize</li>
                    <li>React-hook-form</li>
                    <li>Yup</li>
                </ul>
            </div>
        }, // remember to pass the key prop
        {
            label: 'Lagos Theatre Igando', key: 'item-2', children: <div>
                <div className="grid_flex">
                    {/* <h5>Obade</h5> */}
                    {/* <div>
                        <a
                            target={'_blank'}
                            href="https://app.obade.org"><ion-icon name="open-outline"></ion-icon></a>
                    </div> */}
                </div>
                <img src={ProjectImg} alt="ProjectImg" />
                <p>Obade is an app where users can buy airtime and subscribe for data at a reduced fee
                    while also enjoying massive cashbacks. It is available on web and mobile app.
                </p>
                <ul>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>React Context</li>
                    <li>CSS</li>
                    <li>Materialize</li>
                    <li>React-hook-form</li>
                    <li>Yup</li>
                </ul>
            </div>
        }, // remember to pass the key prop
        {
            label: 'Vo3 Designs', key: 'item-3', children: <div>
                <div className="grid_flex">
                    {/* <h5>Obade</h5> */}
                    {/* <div>
                        <a
                            target={'_blank'}
                            href="https://app.obade.org"><ion-icon name="open-outline"></ion-icon></a>
                    </div> */}
                </div>
                <img src={ProjectImg} alt="ProjectImg" />
                <p>Obade is an app where users can buy airtime and subscribe for data at a reduced fee
                    while also enjoying massive cashbacks. It is available on web and mobile app.
                </p>
                <ul>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>React Context</li>
                    <li>CSS</li>
                    <li>Materialize</li>
                    <li>React-hook-form</li>
                    <li>Yup</li>
                </ul>
            </div>
        }
    ];
    const secItems = [
        {
            label: 'Thumbvids', key: 'item-1', children: <div>
                <div className="grid_flex">
                    {/* <h5>Obade</h5> */}
                    {/* <div>
                        <a
                            target={'_blank'}
                            href="https://app.obade.org"><ion-icon name="open-outline"></ion-icon></a>
                    </div> */}
                </div>
                <img src={ProjectImg} alt="ProjectImg" />
                <p>Obade is an app where users can buy airtime and subscribe for data at a reduced fee
                    while also enjoying massive cashbacks. It is available on web and mobile app.
                </p>
                <ul>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>React Context</li>
                    <li>CSS</li>
                    <li>Materialize</li>
                    <li>React-hook-form</li>
                    <li>Yup</li>
                </ul>
            </div>
        }, // remember to pass the key prop
        {
            label: 'Dancerapy', key: 'item-2', children: <div>
                <div className="grid_flex">
                    {/* <h5>Obade</h5> */}
                    {/* <div>
                        <a
                            target={'_blank'}
                            href="https://app.obade.org"><ion-icon name="open-outline"></ion-icon></a>
                    </div> */}
                </div>
                <img src={ProjectImg} alt="ProjectImg" />
                <p>Obade is an app where users can buy airtime and subscribe for data at a reduced fee
                    while also enjoying massive cashbacks. It is available on web and mobile app.
                </p>
                <ul>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>React Context</li>
                    <li>CSS</li>
                    <li>Materialize</li>
                    <li>React-hook-form</li>
                    <li>Yup</li>
                </ul>
            </div>
        }, // remember to pass the key prop
        {
            label: 'World Country Data', key: 'item-3', children: <div>
                <div className="grid_flex">
                    {/* <h5>Obade</h5> */}
                    {/* <div>
                        <a
                            target={'_blank'}
                            href="https://app.obade.org"><ion-icon name="open-outline"></ion-icon></a>
                    </div> */}
                </div>
                <img src={ProjectImg} alt="ProjectImg" />
                <p>Obade is an app where users can buy airtime and subscribe for data at a reduced fee
                    while also enjoying massive cashbacks. It is available on web and mobile app.
                </p>
                <ul>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>React Context</li>
                    <li>CSS</li>
                    <li>Materialize</li>
                    <li>React-hook-form</li>
                    <li>Yup</li>
                </ul>
            </div>
        }, // remember to pass the key prop
    ];

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    useEffect(() => {
        // let intervalId = null;
        // let currentId = 0;
        // let greetingLength = greeting.length;
        // let greetingFunction = () => {
        //     if (currentId === greetingLength) {
        //         setContentToShow('greetin');
        //         clearInterval(intervalId);
        //     } else {
        //         setCurrentGreeting(greeting[currentId]);
        //         currentId++;
        //     }
        // }
        // intervalId = setInterval(greetingFunction, 300);
        let currentLevelHolder = currentLevel;
        let intervalWatch = null;
        let counterFunction = () => {
            currentLevelHolder = currentLevelHolder + 1;
            setCurrentLevel(+currentLevelHolder);
            if (currentLevelHolder < 101) {
                setSpinLoader(currentLevelHolder);
            }
            if (currentLevelHolder === 101) {
                clearInterval(intervalWatch);
                setContentToShow('greetin');
            }
        }
        intervalWatch = setInterval(counterFunction, 50)
    }, [])

    useLayoutEffect(() => {
        TweenMax.to(blackHalf.current, {
            height: 0,
            ease: Power3.easeInOut,
            duration: 4,
            delay: 0,
        })

        // TweenMax.from(elementPage?.current?.querySelectorAll('.dev-page .dev-greeting h1.first'), {
        //     y: 80,
        //     opacity: 0,
        //     ease: Power3.easeInOut,
        //     duration: 3,
        //     delay: 1,
        // })
        // TweenMax.from(elementPage?.current?.querySelectorAll('.dev-page .dev-greeting h1.second'), {
        //     y: -80,
        //     opacity: 0,
        //     ease: Power3.easeInOut,
        //     duration: 3,
        //     delay: 1,
        // })
        // TweenMax.from(elementPage?.current?.querySelectorAll('.about-me-details'), {
        //     y: -100,
        //     opacity: 0,
        //     duration: 8,
        //     delay: 4,
        //     scrollTrigger: {
        //         trigger: elementPage?.current?.querySelectorAll('.about-me-details'),
        //         scrub: true,
        //         start: "top bottom"
        //     }
        // })
    }, [contentToShow, currentLevel])

    const showNavigation = () => {
        setShowNav(true);
        TweenMax.staggerFrom(blockdisplay?.current?.querySelectorAll(".blockdisplay"), .8, {
            width: '0%',
            ease: Power1.easeIn,
            duration: 4,
            delay: 0,
        }, .04);
    }

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Ifeoluwase_Adeleke-software_developer.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'adeleke-ife-resume.pdf';
                alink.click();
            })
        })
    }
    return (
        // <div>
        // {
        contentToShow === "greeting" ?
            <div className="greeting">
                <div>
                    {/* <h2>&bull; <span className="single">{currentGreeting}</span> 👋</h2> */}
                    <h2><span className="single">{currentLevel}%</span></h2>
                    <div className="level-loader">
                        <div
                            style={{ width: `${spinLoader}%` }}
                            className="level-loader-counter"></div>
                    </div>
                </div>
            </div>
            :
            <React.Fragment>
                <BrowserRouter>
                    <div ref={elementPage}>
                        <div className="half-width" ref={blackHalf}>
                            <div className="black-half">
                            </div>
                            <div className="red-half" ref={redHalf}>
                            </div>
                        </div>
                        <div className={`nav ${fixedNav ? 'fixed' : ''}`}>
                            <div>
                                <h3 style={{ display: 'flex', alignItems: 'center' }}><User /> ieadeleke</h3>
                            </div>
                            <div>
                                <img src={Menu} alt="menu"
                                    onClick={() => showNavigation()}
                                />
                            </div>
                        </div>
                        <div className="padding-block">
                            <div className="header first_display">
                                <div>
                                    <div className="dev-page">
                                        {/* <img src={Me} alt="me" className="me" /> */}
                                        <div className="dev-greeting">
                                            <h1 className="first">Full-Stack Engineer</h1>
                                            <div className="line"></div>
                                            <h1 className="second">Adeleke Ifeoluwase</h1>
                                        </div>
                                        <p>I am a full-stack engineer with about 3 years work experience able to build responsive and scalable web
                                            applications from the ground up. In my free time, I write technical articles on different programming topics on Medium.
                                        </p>
                                        <button
                                            onClick={onButtonClick}
                                        >Download my resume</button>
                                    </div>
                                    {/* <div className="overflow-black">
        
                            </div> */}
                                    <div>
                                        {/* <img src={ManSmiling} alt="ManSmiling" /> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="hand">
                                        <img src={Hand} alt="hand" className="han" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-cover">
                            <div className="padding-block">
                                <div
                                    id="aboutMe"
                                    className="about_me second_display about-me-details">
                                    <svg className="section_header">
                                        <text y="40">01 &mdash; About Me</text>
                                    </svg>
                                    <div>
                                        <div className="grid_2">
                                            <div>
                                                <div>
                                                    <p className="space_under">Hi there! My name is Adeleke Ifeoluwase Ebenezer. I am a full-stack engineer
                                                        from Lagos, Nigeria. The idea that I could sit behind a computer and create something
                                                        that can impact millions of people endeared me to this field. I enjoy building apps that
                                                        not only work well but also look good.</p>
                                                    <p className="space_under">
                                                        I also write
                                                        technical articles and have a great deal of interest in building technologies
                                                        for other developers to use. I’m eager to meet and network with a lot of people, so feel
                                                        free to connect with me!
                                                    </p>
                                                    <p className="space_under">Here are a few technologies I have been working with recently:</p>
                                                    <ul>
                                                        <span>
                                                            <li>Vanilla JavaScript</li>
                                                            <li>Typescript</li>
                                                            <li>React.js</li>
                                                        </span>
                                                        <span>
                                                            <li>Nodejs</li>
                                                            <li>NextJs</li>
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
                            </div>
                            <div className="separating-line"></div>
                            <div id="recentProjects">
                                <div className="desktop-only">
                                    <div className="padding-block">
                                        <div
                                            className="second_display space_to_top portfolio_sect">
                                            <svg className="section_header">
                                                <text y="40">02 &mdash; My Projects</text>
                                            </svg>
                                            <div>
                                                <div className="desktop-only">
                                                    <div className="grid_3">
                                                        <div className="data_block">
                                                            <div className="data-block-content">
                                                                <div className="data-block-content-display">
                                                                    <div className="grid_flex">
                                                                        <h5>Konnect</h5>
                                                                        <div>
                                                                            <a
                                                                                target={'_blank'}
                                                                                href="https://konnect.ws"><ion-icon name="open-outline"></ion-icon></a>
                                                                        </div>
                                                                    </div>
                                                                    <p>
                                                                        An ecommerce website where users buy groceries at a cheap price and pay in
                                                                        installments. Konnect users can also earn monthly cash rewards and pay their daily bills.
                                                                    </p>
                                                                    <ul>
                                                                        <li>React.js</li>
                                                                        <li>Redux</li>
                                                                        <li>Node.js</li>
                                                                        <li>Ant Design</li>
                                                                        <li>CSS</li>
                                                                        <li>MySQL</li>
                                                                        <li>Sequelize</li>
                                                                        <li>JWT</li>
                                                                        <li>AWS</li>
                                                                        <li>HJS</li>
                                                                        <li>Flutterwave</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="data_block">
                                                            <div className="data-block-content">
                                                                <div className="data-block-content-display">
                                                                    <div className="grid_flex">
                                                                        <h5>Thumbvids</h5>
                                                                        <div>
                                                                            <a
                                                                                target={'_blank'}
                                                                                href="https://thumbvids.onrender.com"><ion-icon name="open-outline"></ion-icon></a>
                                                                        </div>
                                                                    </div>
                                                                    <p>
                                                                        Having always wondered how Canva was built, I decided to build my own app where users can edit
                                                                        graphics and download them to their local devices as png.
                                                                    </p>
                                                                    <ul>
                                                                        <li>Vanilla Javascript</li>
                                                                        <li>EJS</li>
                                                                        <li>Node.js</li>
                                                                        <li>HTML / CSS</li>
                                                                        <li>MongoDB</li>
                                                                        <li>Mongoose</li>
                                                                        <li>HTML5 Canvas</li>
                                                                        <li>Fibre.js</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="data_block">
                                                            <div className="data-block-content">
                                                                <div className="data-block-content-display">
                                                                    <div className="grid_flex">
                                                                        <h5>Lagos Theatre Igando</h5>
                                                                        <div>
                                                                            <a
                                                                                target={'_blank'}
                                                                                href="https://lagostheatreigando.com"><ion-icon name="open-outline"></ion-icon></a>
                                                                        </div>
                                                                    </div>
                                                                    <p>Unveiled in 2019, the Lagos Theatre Igando hosts entertainment events including plays, community
                                                                        celebrations, and activities for children.</p>
                                                                    <ul>
                                                                        <li>React.js</li>
                                                                        <li>Node.js</li>
                                                                        <li>Express.js</li>
                                                                        <li>CSS</li>
                                                                        <li>AWS</li>
                                                                        <li>MySQL</li>
                                                                        <li>Sequelize</li>
                                                                        <li>Flutterwave</li>
                                                                        <li>HJS</li>
                                                                        <li>Redux</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="data_block">
                                                            <div className="data-block-content">
                                                                <div className="data-block-content-display">
                                                                    <div className="grid_flex">
                                                                        <h5>Vo3 Designs</h5>
                                                                        <div>
                                                                            <a
                                                                                target={'_blank'}
                                                                                href="https://vo3designs.com"><ion-icon name="open-outline"></ion-icon></a>
                                                                        </div>
                                                                    </div>
                                                                    <p>An online storehouse for indoor and outdoor furniture. This app caters to both
                                                                        users who are trying to learn about the company and users looking to buy furniture.
                                                                    </p>
                                                                    <ul>
                                                                        <li>React.js</li>
                                                                        <li>Redux</li>
                                                                        <li>Node.js</li>
                                                                        <li>Ant Design</li>
                                                                        <li>CSS</li>
                                                                        <li>MySQL</li>
                                                                        <li>Sequelize</li>
                                                                        <li>JWT</li>
                                                                        <li>AWS</li>
                                                                        <li>HJS</li>
                                                                        <li>Paystack</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="data_block">
                                                            <div className="data-block-content">
                                                                <div className="data-block-content-display">
                                                                    <div className="grid_flex">
                                                                        <h5>Dancerapy</h5>
                                                                        <div>
                                                                            <a
                                                                                target={'_blank'}
                                                                                href="https://dancerapy.org"><ion-icon name="open-outline"></ion-icon></a>
                                                                        </div>
                                                                    </div>
                                                                    <p>With this app, users can subscribe yearly and watch fitness workout videos from the
                                                                        comfort of their homes. They can also buy dance merch and other dance plans.
                                                                    </p>
                                                                    <ul>
                                                                        <li>React.js</li>
                                                                        <li>Redux</li>
                                                                        <li>Node.js</li>
                                                                        <li>Ant Design</li>
                                                                        <li>CSS</li>
                                                                        <li>MySQL</li>
                                                                        <li>Sequelize</li>
                                                                        <li>JWT</li>
                                                                        <li>AWS</li>
                                                                        <li>HJS</li>
                                                                        <li>Paystack</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="data_block">
                                                            <div className="data-block-content">
                                                                <div className="data-block-content-display">
                                                                    <div className="grid_flex">
                                                                        <h5>World Records Data</h5>
                                                                        <div>
                                                                            <a
                                                                                target={'_blank'}
                                                                                href="https://github.com/eadelekeife/country_code_api"><ion-icon name="open-outline"></ion-icon></a>
                                                                        </div>
                                                                    </div>
                                                                    <p>This is a free API service for developers to fetch data for every country around the
                                                                        world - flag, currency symbol and name, continent, dial code, emoji and unicode.</p>
                                                                    <ul>
                                                                        <li>Nodejs</li>
                                                                        <li>Express.js</li>
                                                                        <li>JSON</li>
                                                                        <li>REST API</li>
                                                                        <li>Cli Colors</li>
                                                                        <li>util</li>
                                                                        <li>scrypt</li>
                                                                        <li>dotenv</li>
                                                                        <li>Heroku</li>
                                                                        <li>Postman</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mobile-only">
                                                    <div className="small_space"></div>
                                                    <Tabs type="card" items={items} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="horizontal-line"></div>
                                    <div className="padding-block">
                                        <div className="second_display space_to_top portfolio_sect sec-projects">
                                            <div className="mobile-only">
                                                <Tabs type="card" items={secItems} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-only">
                                    <div className="projects-mobile-display">
                                        <div className="padding-block">
                                            <svg className="section_header">
                                                <text y="40">02 &mdash; My Projects</text>
                                            </svg>
                                            <div className="grid_2">
                                                <div className="project-display project-1">
                                                    <div>
                                                        <a
                                                            target={'_blank'}
                                                            href="https://konnect.ws"><ion-icon name="open-outline"></ion-icon></a>
                                                    </div>
                                                    <h2>Konnect</h2>
                                                    <ul>
                                                        <li>React.js</li>
                                                        <li>Redux</li>
                                                        <li>Node.js</li>
                                                        <li>CSS</li>
                                                        <li>Ant Design</li>
                                                        <li>MySQL</li>
                                                        <li>Sequelize</li>
                                                        <li>JWT</li>
                                                        <li>AWS</li>
                                                        <li>hjs</li>
                                                    </ul>
                                                </div>
                                                <div className="project-display project-2">
                                                    <div>
                                                        <a
                                                            target={'_blank'}
                                                            href="https://lagostheatreigando.com"><ion-icon name="open-outline"></ion-icon></a>
                                                    </div>
                                                    <h2>Lagos Theatre Igando</h2>
                                                    <ul>
                                                        <li>React.js</li>
                                                        <li>Node.js</li>
                                                        <li>Express.js</li>
                                                        <li>CSS</li>
                                                        <li>AWS</li>
                                                        <li>Redux</li>
                                                        <li>MySQL</li>
                                                        <li>Sequelize</li>
                                                    </ul>
                                                </div>
                                                <div className="project-display project-3">
                                                    <div>
                                                        <a
                                                            target={'_blank'}
                                                            href="https://vo3designs.com"><ion-icon name="open-outline"></ion-icon></a>
                                                    </div>
                                                    <h2>Vo3 Designs</h2>
                                                    <ul>
                                                        <li>React.js</li>
                                                        <li>Redux</li>
                                                        <li>Node.js</li>
                                                        <li>CSS</li>
                                                        <li>Ant Design</li>
                                                        <li>MySQL</li>
                                                        <li>Sequelize</li>
                                                        <li>JWT</li>
                                                        <li>AWS</li>
                                                        <li>hjs</li>
                                                    </ul>
                                                </div>
                                                <div className="project-display project-4">
                                                    <div>
                                                        <a
                                                            target={'_blank'}
                                                            href="https://thumbvids.onrender.com/"><ion-icon name="open-outline"></ion-icon></a>
                                                    </div>
                                                    <h2>Thumbvids</h2>
                                                    <ul>
                                                        <li>Ejs</li>
                                                        <li>Node.js</li>
                                                        <li>CSS</li>
                                                        <li>MongoDB</li>
                                                        <li>Mongoose</li>
                                                        <li>Express</li>
                                                    </ul>
                                                </div>
                                                <div className="project-display project-5">
                                                    <div>
                                                        <a
                                                            target={'_blank'}
                                                            href="https://dancerapy.com"><ion-icon name="open-outline"></ion-icon></a>
                                                    </div>
                                                    <h2>Dancerapy</h2>
                                                    <ul>
                                                        <li>React.js</li>
                                                        <li>Redux</li>
                                                        <li>Node.js</li>
                                                        <li>CSS</li>
                                                        <li>Ant Design</li>
                                                        <li>MySQL</li>
                                                        <li>Sequelize</li>
                                                        <li>JWT</li>
                                                        <li>AWS</li>
                                                    </ul>
                                                </div>
                                                <div className="project-display project-6">
                                                    <div>
                                                        <a
                                                            target={'_blank'}
                                                            href="https://github.com/eadelekeife/country_code_api"><ion-icon name="open-outline"></ion-icon></a>
                                                    </div>
                                                    <h2>World Data</h2>
                                                    <p>A rest API for fetching data of countries around the world - currency, continent, flag, unicode, call codes etc</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="separating-line"></div>
                            <div
                                id="technicalArticles"
                                className="padding-block">
                                <div className="second_display small_space_to_top portfolio_sect stories">
                                    <svg className="section_header">
                                        <text y="40">03 &mdash; I write Technical Articles</text>
                                    </svg>
                                    <div>
                                        <div className="grid_3">
                                            <div className="data_block">
                                                <div className="data-block-content">
                                                    <div className="data-block-content-display">
                                                        <div className="grid_flex">
                                                            <a
                                                                target="_blank"
                                                                href="https://medium.com/dev-genius/validating-user-inputs-on-your-express-js-application-with-express-validator-4d82b995f524">
                                                                <ion-icon name="logo-medium"></ion-icon>
                                                            </a>
                                                            <a
                                                                target="_blank"
                                                                href="https://medium.com/dev-genius/validating-user-inputs-on-your-express-js-application-with-express-validator-4d82b995f524">
                                                                <ion-icon name="open-outline"></ion-icon>
                                                            </a>
                                                        </div>
                                                        <h5>Validating form inputs on your Express.js application with express-validator</h5>
                                                        <p>Forms are everywhere. Whether on a simple blog or the most complex
                                                            application, receiving user input is one of the most common features of every modern web application today...</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="data_block">
                                                <div className="data-block-content">
                                                    <div className="data-block-content-display">
                                                        <div className="grid_flex">
                                                            <a
                                                                target="_blank"
                                                                href="https://medium.com/dev-genius/understanding-and-working-with-middleware-in-express-js-ed19255237b">
                                                                <ion-icon name="logo-medium"></ion-icon>
                                                            </a>
                                                            <a
                                                                target="_blank"
                                                                href="https://medium.com/dev-genius/understanding-and-working-with-middleware-in-express-js-ed19255237b">
                                                                <ion-icon name="open-outline"></ion-icon>
                                                            </a>
                                                        </div>
                                                        <h5>Understanding and Working with Middleware in Express.js</h5>
                                                        <p>A middleware is a function or program that runs between the time a request
                                                            is made to a server and the time a response is sent back. They are the bedrock of the Express...</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="data_block">
                                                <div className="data-block-content">
                                                    <div className="data-block-content-display">
                                                        <div className="grid_flex">
                                                            <a
                                                                target="_blank"
                                                                href="https://medium.com/p/2b3ba155bd4f/edit">
                                                                <ion-icon name="logo-medium"></ion-icon>
                                                            </a>
                                                            <a
                                                                target="_blank"
                                                                href="https://medium.com/p/2b3ba155bd4f/edit">
                                                                <ion-icon name="open-outline"></ion-icon>
                                                            </a>
                                                        </div>
                                                        <h5>How to set up a Payment Gateway in React.js with Flutterwave</h5>
                                                        <p>Let’s face it, payments are everything. Almost every app around requires
                                                            one form of payment or the other — ecommerce, subscription-based apps, donations website etc...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="separating-line-footer"></div>
                        <div
                            id="contactMe"
                            className="padding-block">
                            <div className="footer-cover space_to_top">
                                <div className="second_display contact">
                                    <svg className="section_header">
                                        <text y="40">05 &mdash; I would love to hear from you</text>
                                    </svg>
                                    <div>
                                        <div className="mobile-only">
                                            {/* <img src={GreetingImage} alt="greeting img" className="last-greeting" /> */}
                                            <img src={Me} alt="me" className="me" />
                                        </div>
                                        <p className="mobile-only">Thank you for checking out my portfolio. I am currently looking to join a new team
                                            of creatives to build amazing stuffs. I am also available for
                                            freelance gigs. Please reach out to me if you think we can work well together.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="desktop-only">
                                            <div className="grid_3">
                                                <div className="contact_display">
                                                    <div>
                                                        <ion-icon name="logo-github"></ion-icon>
                                                    </div>
                                                    <div>
                                                        <h3>Github</h3>
                                                        <a
                                                            target="_blank"
                                                            href="https://github.com/eadelekeife">/eadelekeife</a>
                                                    </div>
                                                </div>
                                                <div className="contact_display">
                                                    <div>
                                                        <ion-icon name="logo-twitter"></ion-icon>
                                                    </div>
                                                    <div>
                                                        <h3>Twitter</h3>
                                                        <a
                                                            target="_blank"
                                                            href="https://twitter.com/eadelekeife">/eadelekeife</a>
                                                    </div>
                                                </div>
                                                <div className="contact_display">
                                                    <div>
                                                        <ion-icon name="logo-linkedin"></ion-icon>
                                                    </div>
                                                    <div>
                                                        <h3>LinkedIn</h3>
                                                        <a
                                                            target="_blank"
                                                            href="https://linkedin.com/in/ifeoluwase-adeleke-b3b75323a">/Ifeoluwase Adeleke</a>
                                                    </div>
                                                </div>
                                                <div className="contact_display">
                                                    <div>
                                                        <ion-icon name="logo-medium"></ion-icon>
                                                    </div>
                                                    <div>
                                                        <h3>Medium</h3>
                                                        <a
                                                            target="_blank"
                                                            href="https://medium.com/@eadelekeife">/eadelekeife</a>
                                                    </div>
                                                </div>
                                                <div className="contact_display">
                                                    <div>
                                                        <ion-icon name="mail-open-outline"></ion-icon>
                                                    </div>
                                                    <div>
                                                        <h3>Gmail</h3>
                                                        <a
                                                            target="_blank"
                                                            href="mailTo:eadelekeife@gmail.com">/eadelekeife@gmail.com</a>
                                                    </div>
                                                </div>
                                                <div className="contact_display">
                                                    <div>
                                                        <ion-icon name="logo-whatsapp"></ion-icon>
                                                    </div>
                                                    <div>
                                                        <h3>WhatsApp</h3>
                                                        <a href="tel:+2348132277316">+234 813 227 7316</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mobile-only">
                                            <div>
                                                <a href="https://github.com/eadelekeife" target="_blank">
                                                    <ion-icon name="logo-github"></ion-icon>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="https://twitter.com/eadelekeife" target="_blank">
                                                    <ion-icon name="logo-twitter"></ion-icon>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="https://linkedin.com/in/ifeoluwase-adeleke-b3b75323a" target="_blank">
                                                    <ion-icon name="logo-linkedin"></ion-icon>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="https://medium.com/@eadelekeife" target="_blank">
                                                    <ion-icon name="logo-medium"></ion-icon>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="mailTo:eadelekeife@gmail.com" target="_blank">
                                                    <ion-icon name="mail-open-outline"></ion-icon>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="tel:+2348132277316" target="_blank">
                                                    <ion-icon name="logo-whatsapp"></ion-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="small_space"></div>
                        <div className="horizontal-line"></div>
                        <div className="padding-block">
                            <div className="footer">
                                <div className="grid_2">
                                    <p>&copy; Adeleke Ifeoluwase Ebenezer</p>
                                    <div>
                                        <a href="tel:+2348132277316">+234 813 227 7316</a>
                                        <a href="mailTo:eadelekeife@gmail.com">eadelekeife@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`nav_data ${showNav ? 'showNav' : 'hideNav'}`}>
                            <ul>
                                <li>
                                    <Link
                                        smooth
                                        onClick={() => setShowNav(false)}
                                        to="#aboutMe">
                                        <svg className="nav_data_content">
                                            <text y="40">01 &mdash; About Me</text>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        smooth
                                        onClick={() => setShowNav(false)}
                                        to="#recentProjects">
                                        <svg className="nav_data_content">
                                            <text y="40">02 &mdash; Recent Projects</text>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        smooth
                                        onClick={() => setShowNav(false)}
                                        to="#technicalArticles">
                                        <svg className="nav_data_content">
                                            <text y="40">03 &mdash; Technical Articles</text>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        smooth
                                        onClick={() => setShowNav(false)}
                                        to="#contactMe">
                                        <svg className="nav_data_content">
                                            <text y="40">04 &mdash; Contact Me</text>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                            <div className="nav_links">
                                <a target="_blank" href="https://github.com/eadelekeife">GitHub</a>
                                <a target="_blank" href="https://linkedin.com/in/ifeoluwase-adeleke-b3b75323a">LinkedIn</a>
                                <a target="_blank" href="https://twitter.com/eadelekeife">Twitter</a>
                                <a target="_blank" href="https://medium.com/@eadelekeife">Medium</a>
                            </div>
                            <div>
                                <img
                                    onClick={() => setShowNav(false)}
                                    src={Times} alt="close nav" className="closeNav" />
                            </div>
                            <div>
                                <div ref={blockdisplay} className="block-box-display">
                                    <div className="blockdisplay block-box block5">

                                    </div>
                                    <div className="blockdisplay block-box block1">

                                    </div>
                                    <div className="blockdisplay block-box block2">

                                    </div>
                                    <div className="blockdisplay block-box block3">

                                    </div>
                                    <div className="blockdisplay block-box block4">

                                    </div>
                                </div>
                                <div className="color-cover">

                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </React.Fragment>
        // }
        // {/* </div> */ }
    )
}

export default Homepage;