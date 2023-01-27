import React, { useEffect, useState } from 'react';

import { gsap } from 'gsap';

import Headshot from './assets/images/_1.JPG';
import Menu from './assets/images/menu.svg';
import { ReactComponent as User } from './assets/images/user.svg';
import Times from './assets/images/times.svg';
import Hand from './assets/images/hand.webp';
import { Tabs } from 'antd';
import ManSmiling from './assets/images/HERO.jpg';
import Me from './assets/images/me.png';
import ProjectImg from './assets/images/project.webp';


const Homepage = () => {

    const { TabPane } = Tabs;
    const [showNav, setShowNav] = useState(false);
    const [contentToShow, setContentToShow] = useState('greetin');
    const [greeting] = useState(['How fan bobo?', 'Ciao', 'Hello', 'Ola', 'Bonjour', 'Hola', 'Guten tag', 'Salve']);
    const [currentGreeting, setCurrentGreeting] = useState('How far?');
    const [currentIndex, setCurrentIndex] = useState(0);

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
        }, // remember to pass the key prop
    ];

    // useEffect(() => {
    //     const t1 = gsap.timeline();
    //     t1.from(".single", {
    //         y: 50,
    //         opacity: 0,
    //         ease: "power4.out",
    //         delay: 1,
    //         duration: 1.8,
    //         stagger: {
    //             amount: 0.4
    //         }
    //     })
    //     let index = 0;
    //     // setInterval(() => {
    //     //     let thisindex = +index;
    //     //     console.log(thisindex)
    //     //     setCurrentGreeting(greeting[thisindex]);
    //     //     let newIndex = 0;
    //     //     thisindex === 7 ? newIndex = 0 : newIndex = thisindex + 1;
    //     //     index = newIndex;
    //     //     // setCurrentIndex(+newIndex);
    //     //     console.log(newIndex)
    //     // }, 500)
    // }, [])

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
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
                    <h2>&bull; Hey! <span className="single">{currentGreeting}</span></h2>
                </div>
            </div>
            :
            <React.Fragment>
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
                <div>
                    <div className="header first_display">
                        <div>
                            <div className="header-content">
                                <img src={Me} alt="me" className="me" />
                                <h3 className="single">Hello there, my name is</h3>
                                <svg className="myName">
                                    <text className="authorText" y="40">Adeleke Ifeoluwase.</text>
                                </svg>
                                <p>I’m a software engineer specializing in building (and occasionally designing) exceptional
                                    digital experiences. Currently, I’m focused on building accessible, human-centered products at
                                    Upstatement.</p>
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
                                <img src={Hand} alt="hand" className="hand" />
                            </div>
                        </div>
                    </div>
                    <div className="projects-cover">
                        <div className="about_me second_display">
                            <svg className="section_header">
                                <text y="40">01 &mdash; About Me</text>
                            </svg>
                            <div>
                                <div className="grid_2">
                                    <div>
                                        <div>
                                            <p className="space_under">Hi there! My name is Adeleke Ifeoluwase. I am a junior fullstack web
                                                developer from Lagos, Nigeria. The idea that I could sit behind a computer and create something
                                                that can impact millions of people endeared me to this field. I enjoy building apps that
                                                not only work well but also look good.</p>
                                            <p className="space_under">
                                                I also write
                                                technical articles and have a great deal of interest in building technologies
                                                for other developers to use. I’m eager to meet and network with a lot of people, so feel
                                                free to connect with me!
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
                                <text y="40">02 &mdash; A few of the Apps I have built</text>
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
                                                        installments. Konnect users earn monthly cash rewards and can pay their daily bills.
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
                                                                href="https://thumbvids.herokuapp.com"><ion-icon name="open-outline"></ion-icon></a>
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
                                                    <p>Unveiled in 2019, the Lagos Theatre Igando hosts art-themed and
                                                        entertainment events including plays, shows, community
                                                        celebrations, and activities for children.</p>
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
                                                                href="https://lagostheatreigando.com"><ion-icon name="open-outline"></ion-icon></a>
                                                        </div>
                                                    </div>
                                                    <p>This app tells the story of one of the most prominent leaders in the civil rights
                                                        movement from when he was born to the time he was assasinated in 1968.</p>
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
                                        <div className="data_block">
                                            <div className="data-block-content">
                                                <div className="data-block-content-display">
                                                    <div className="grid_flex">
                                                        <h5>Obade</h5>
                                                        <div>
                                                            <a
                                                                target={'_blank'}
                                                                href="https://app.obade.org"><ion-icon name="open-outline"></ion-icon></a>
                                                        </div>
                                                    </div>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-only">
                                    <Tabs items={items} />
                                </div>
                            </div>
                        </div>
                        <div className="second_display space_to_top portfolio_sect">
                            <div>
                                <Tabs items={secItems} />
                            </div>
                        </div>
                        <div>
                            <div className="second_display small_space_to_top portfolio_sect stories">
                                <svg className="section_header">
                                    <text y="40">04 &mdash; I write technical articles</text>
                                </svg>
                                <div>
                                    <div className="grid_3">
                                        <div className="data_block">
                                            <div className="data-block-content">
                                                <div className="data-block-content-display">
                                                    <a
                                                        target="_blank"
                                                        href="https://medium.com/dev-genius/validating-user-inputs-on-your-express-js-application-with-express-validator-4d82b995f524">
                                                        <ion-icon name="logo-medium"></ion-icon>
                                                    </a>
                                                    <h5>Validating user inputs on your Express.js application with express-validator</h5>
                                                    <p>An online storehouse for all things crypto, with in-depth data about all
                                                        cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="data_block">
                                            <div className="data-block-content">
                                                <div className="data-block-content-display">
                                                    <ion-icon name="logo-medium"></ion-icon>
                                                    <h5>Handling Forms in Reactjs with React-hook-form and Ant Design with Yup as Validation</h5>
                                                    <p>An online storehouse for all things crypto, with in-depth data about all
                                                        cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="data_block">
                                            <div className="data-block-content">
                                                <div className="data-block-content-display">
                                                    <ion-icon name="logo-medium"></ion-icon>
                                                    <h5>Validating user inputs on your Express.js application with express-validator</h5>
                                                    <p>An online storehouse for all things crypto, with in-depth data about all
                                                        cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="second_display small_space_to_top portfolio_sect stories">
                        <svg className="section_header">
                            <text y="40">03 &mdash; I contribute to open source projects</text>
                        </svg>
                        <div>
                            <div className="grid_3">
                                <div className="data_block">
                                <div>
                                    <div>
                                        <ion-icon name="logo-github"></ion-icon>
                                    </div>
                                    <h5>Country data API</h5>
                                    <p>An online storehouse for all things crypto, with in-depth data about all
                                        cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                                </div>
                                <div className="data_block">
                                <div>
                                    <div>
                                        <ion-icon name="logo-github"></ion-icon>
                                    </div>
                                    <h5>React-Native On-Screen Keyboard</h5>
                                    <p>An online storehouse for all things crypto, with in-depth data about all
                                        cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                                </div>
                                <div className="data_block">
                                <div>
                                    <div>
                                        <ion-icon name="logo-github"></ion-icon>
                                    </div>
                                    <h5>Country Data Select Box</h5>
                                    <p>An online storehouse for all things crypto, with in-depth data about all
                                        cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                <div className="footer-cover space_to_top">
                    <div className="second_display contact">
                        <svg className="section_header">
                            <text y="40">05 &mdash; I would love to hear from you</text>
                        </svg>
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
                                    <ion-icon name="logo-github"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="logo-medium"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="mail-open-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="logo-whatsapp"></ion-icon>
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
                </div>
            </React.Fragment>
        // }
        // {/* </div> */ }
    )
}

export default Homepage;