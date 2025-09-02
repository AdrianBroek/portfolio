import weatherApp from '../images/projectsBackgrounds/weatherApp.png'
import beatmaker from '../images/projectsBackgrounds/beatmaker.png'
import ToDoList from '../images/projectsBackgrounds/todo.png'
import MusicPlayer from '../images/projectsBackgrounds/musicPlayer.png'
import scandiwebscr from '../images/projectsBackgrounds/ScandiWebScr.webp'
import colorsProject from '../images/projectsBackgrounds/colorsProject.png'
import calculator from '../images/projectsBackgrounds/calculator.png'
import flappyBird from '../images/projectsBackgrounds/flappyBird.png'
import eCommerceApp from '../images/projectsBackgrounds/eCommerceApp.png'
import PriceListApp from '../images/projectsBackgrounds/pricelistapp.webp'
import pajokWebsite from '../images/projectsBackgrounds2/pajokWebsite.png'
import krawczykrental from '../images/projectsBackgrounds2/krawczykrental.png'
import namileo from '../images/projectsBackgrounds2/namileo.png'
import iPomocni from '../images/projectsBackgrounds2/ipomocni.png'
import blucar from '../images/projectsBackgrounds2/blucar.png'
import karcher from '../images/projectsBackgrounds2/karcher.png'
import nabthat from '../images/projectsBackgrounds2/Nabthat.png'

const dataProjects = [
    {
        name: 'Nabthat',
        description: 'A recruitment project prepared for NabThat as part of a junior frontend developer application. The base task required handling sentence modifications depending on selected options. On top of that, I extended the project with my own features: adding, deleting, and editing sentences, as well as interactive alerts that display contextual messages and icons for each user action.',
        link: 'https://nabthat-frontend-test-adrian-brozek.netlify.app/',
        image: nabthat,
        backgroundColor: '#000',
        tags: [
            "react", 
            "redux", 
            'scss', 
            "my-project"
        ]
    },
        {
        name: 'ScandiWeb',
        description: 'The app is hosted on Render.com, so it may require a few refreshes to fully load. A fullstack recruitment project for a Junior React Developer position at Scandiweb, built entirely according to the provided Figma design. In addition to the core requirements, I implemented custom features such as skeleton loaders, modals, and tooltips to improve user experience. Built with React Class, Redux, GraphQL (Apollo), and styled-components.',
        link: 'https://adrian-brozek-scandiwebprojectecommerce-1.onrender.com/',
        image: scandiwebscr,
        backgroundColor: '#000',
        tags: [
            "html", 
            'scss', 
            'react',
            'redux', 
            'graphql',
            "apollo",
            "styled-components",
            "my-project",
            "figma",
            "fullstack"
        ]
    },
    {
        name: 'PriceListApp',
        description: 'Web application for selecting products to the appropriate price list. I did it for my job, we needed to setup pricelists to multiple products in short period of time. Project helped in this case with success. Project is not 100% done',
        link: 'https://adrianbroek.github.io/priceList/',
        image: PriceListApp,
        backgroundColor: '#000',
        tags: [
            "react", 
            "redux", 
            "typescript", 
            "firebase", 
            "styled-components",
            "my-project",
            "fullstack"
        ]
    },
    {
        name: 'eCommerceApp',
        description: 'Online store, with user account, basket, blog, categories, orders. I made it to learn redux with react.',
        link: 'https://adrianbroek.github.io/eCommerceApp/',
        image: eCommerceApp,
        backgroundColor: '#000',
        tags: [
            'react', 
            'redux', 
            'js', 
            'scss', 
            'axios', 
            'picsum.photos api', 
            'framer-motion', 
            'slick-slider',
            "my-project"
        ]
    },
    {
        name: 'WeatherApp',
        description: 'A 3-day weather forecast application built with React Hooks and Context API. It features a city search covering worldwide locations, a data-driven weather slider, and an interactive Leaflet map. The app integrates external weather APIs via Axios, styled with SCSS, and was created to strengthen my skills in state management, API integration, and modern frontend development.',
        link: 'https://adrianbroek.github.io/weatherApp/',
        image: weatherApp,
        backgroundColor: '#000',
        tags: [
            "react", 
            'js', 
            'context-api', 
            'axios', 
            'scss',
            "my-project"
        ]
    },
    {
        name: 'Pajok - website',
        description: 'A portfolio website built for a freelance photographer, designed with React and styled-components. The site uses Hygraph (GraphQL CMS) for easy content management, with queries and mutations handled through Apollo. It also supports Google OAuth authentication and is deployed on Netlify. This project helped me gain hands-on experience with GraphQL, headless CMS integration, and modern frontend development practices.',
        link: 'https://pajok.netlify.app/',
        image: pajokWebsite,
        backgroundColor: '#000',
        tags: [
            "react", 
            'js', 
            'graphql', 
            'styled-components', 
            "framer-motion",
            "google OAuth",
            "netlify",
            "apollo",
            "my-project",
            "fullstack"
        ]
    },
    {
        name: 'Beatmaker',
        description: 'Course project to master OOP javascript vanilla with ES6 classes objects. DJ some sounds',
        link: 'https://adrianbroek.github.io/beatmaker/beatmaker%20done/',
        image: beatmaker,
        backgroundColor: '#000',
        tags: [
            "html", 
            'css', 
            'js', 
            "course-project"
        ]
    },
    {
        name: 'ToDo List ',
        description: 'Simple ToDo list with some animations, local storage saving',
        link: 'https://adrianbroek.github.io/ToDoList/TodoList%20project/',
        image: ToDoList,
        backgroundColor: '#000',
        tags: [
            "html", 
            'css', 
            'js', 
            "course-project"
        ]
    },
    // {
    //     name: 'MusicPlayerApp',
    //     description: 'Music player w/ react, sass',
    //     link: 'https://adrianbroek.github.io/musicPlayer/',
    //     image: MusicPlayer,
    //     backgroundColor: '#000',
    //     tags: [
    //         "html", 
    //         'css', 
    //         'js', 
    //         "course-project"
    //     ]
    // },

    {
        name: 'Colors',
        description: 'A simple web app that allows users to pick their favorite colors and save them to a personal library using Local Storage. Built with vanilla JavaScript, HTML, and CSS, this project helped me practice DOM manipulation, state persistence, and working without external frameworks.',
        link: 'https://adrianbroek.github.io/Colors/',
        image: colorsProject,
        backgroundColor: '#000',
        tags: [
            "html", 
            'css', 
            'js', 
            "course-project"
        ]
    },
    // {
    //     name: 'Calculator',
    //     description: 'Simple calculator made in html, css, Js',
    //     link: 'https://adrianbroek.github.io/Calculator/',
    //     image: calculator,
    //     backgroundColor: '#000',
    //     tags: [
    //         "html", 
    //         'css', 
    //         'js', 
    //         "my-project"
    //     ]
    // },
    {
        name: 'FlappyBird game',
        description: 'Made in javascript canvas',
        link: 'https://adrianbroek.github.io/flappyBird/',
        image: flappyBird,
        backgroundColor: '#000',
        tags: [
            "html", 
            'css', 
            'js', 
            "course-project"
        ]
    },
    {
        name: 'KrawczykRental',
        description: 'An e-commerce store built with PrestaShop. As a junior frontend developer, I worked on customizing templates, editing and optimizing code, implementing interactive events, and ensuring responsive design (RWD). The project also involved working with Smarty templates, SCSS, and Docker for local development.',
        link: 'https://krawczykrental.pl/',
        image: krawczykrental,
        backgroundColor: '#000',
        tags: [
            "tpl", 
            'jquery', 
            'smarty', 
            'docker', 
            'scss', 
            'my-project',
            'prestashop'
        ]
    },
    {
        name: 'KarcherCenterKrawczyk',
        description: 'An online store developed with PrestaShop. My responsibilities included template customization, code editing and optimization, adding custom events, and improving responsiveness across devices. This role strengthened my skills in frontend development within an e-commerce environment.',
        link: 'https://karchercenter-krawczyk.pl/',
        image: karcher,
        backgroundColor: '#000',
        tags: [
            "tpl", 
            'jquery', 
            'smarty', 
            'docker', 
            'scss',
            'prestashop'
        ]
    },
    {
        name: 'Namileo',
        description: 'A PrestaShop-based e-commerce store where I contributed as a junior frontend developer. I was responsible for editing and optimizing templates, improving site responsiveness (RWD), and adding interactive features to enhance user experience.',
        link: 'https://namileo.com/',
        image: namileo,
        backgroundColor: '#000',
        tags: [
            "tpl", 
            'jquery', 
            'smarty', 
            'docker', 
            'scss', 
            'prestashop'
        ]
    },
    {
        name: 'iPomocni',
        description: 'Webstore made in Wordpress mostly via creative elements. I recreated this website in wordpress, during my junior frontend job.',
        link: 'https://ipomocni.pl/',
        image: iPomocni,
        backgroundColor: '#000',
        tags: [
            "wordpress", 
            'jquery', 
            'css', 
        ]
    },
    {
        name: 'Blucar',
        description: 'A WordPress-based website I contributed to during my junior frontend role. My work focused on implementing changes and updates, including building a landing page with ACF, and customizing layouts using HTML, CSS, JavaScript, and PHP tags.',
        link: 'https://blucar.pl/slub/',
        image: blucar,
        backgroundColor: '#000',
        tags: [
            "wordpress", 
            "acf", 
            'jquery', 
            'css', 
        ]
    },
    
]

export default dataProjects