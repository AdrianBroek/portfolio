import weatherApp from '../images/projectsBackgrounds/weatherApp.png'
import beatmaker from '../images/projectsBackgrounds/beatmaker.png'
import ToDoList from '../images/projectsBackgrounds/todo.png'
import MusicPlayer from '../images/projectsBackgrounds/musicPlayer.png'
import colorsProject from '../images/projectsBackgrounds/colorsProject.png'
import calculator from '../images/projectsBackgrounds/calculator.png'
import flappyBird from '../images/projectsBackgrounds/flappyBird.png'
import eCommerceApp from '../images/projectsBackgrounds/eCommerceApp.png'
import PriceListApp from '../images/projectsBackgrounds/PriceListApp.png'
import pajokWebsite from '../images/projectsBackgrounds2/pajokWebsite.png'
import krawczykrental from '../images/projectsBackgrounds2/krawczykrental.png'
import namileo from '../images/projectsBackgrounds2/namileo.png'
import iPomocni from '../images/projectsBackgrounds2/ipomocni.png'
import blucar from '../images/projectsBackgrounds2/blucar.png'
import karcher from '../images/projectsBackgrounds2/karcher.png'

const dataProjects = [
    {
        name: 'PriceListApp',
        description: 'Web application for easy matching of products to price lists.',
        link: 'https://adrianbroek.github.io/priceList/',
        image: PriceListApp,
        backgroundColor: '#000',
        tags: [
            "react", 
            "redux", 
            "typescript", 
            "firebase", 
            "styled-components",
            "my-project"
        ]
    },
    {
        name: 'eCommerceApp',
        description: 'Online store, with user account, basket, blog, categories, orders',
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
        description: 'Weather app on react. Used API via Axios. Not 100% finished.',
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
        description: 'Website made for freelance photographer. Used GraphQl - HyGraph for easy website editing. Website deployed on netlify. Website is not 100% done.',
        link: 'https://imaginative-meerkat-7cb380.netlify.app',
        image: pajokWebsite,
        backgroundColor: '#000',
        tags: [
            "react", 
            'graphql', 
            'styled-components', 
            "framer-motion",
            "my-project"
        ]
    },
    {
        name: 'Beatmaker',
        description: 'Project to train javascript vanilla with ES6 classes objects. DJ some sounds',
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
    {
        name: 'MusicPlayerApp',
        description: 'Music player w/ react, sass',
        link: 'https://adrianbroek.github.io/musicPlayer/',
        image: MusicPlayer,
        backgroundColor: '#000',
        tags: [
            "html", 
            'css', 
            'js', 
            "course-project"
        ]
    },
    {
        name: 'Colors',
        description: 'Pick your fav color and keep it with local storage library!',
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
    {
        name: 'Calculator',
        description: 'Simple calculator made in html, css, Js',
        link: 'https://adrianbroek.github.io/Calculator/',
        image: calculator,
        backgroundColor: '#000',
        tags: [
            "html", 
            'css', 
            'js', 
            "my-project"
        ]
    },
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
        description: 'Webstore made in prestashop.',
        link: 'https://krawczykrental.pl/',
        image: krawczykrental,
        backgroundColor: '#000',
        tags: [
            "tpl", 
            'jquery', 
            'smarty', 
            'docker', 
            'scss', 
        ]
    },
    {
        name: 'KarcherCenterKrawczyk',
        description: 'Webstore made in prestashop',
        link: 'https://karchercenter-krawczyk.pl/',
        image: karcher,
        backgroundColor: '#000',
        tags: [
            "tpl", 
            'jquery', 
            'smarty', 
            'docker', 
            'scss', 
        ]
    },
    {
        name: 'Namileo',
        description: 'Webstore made in prestashop.',
        link: 'https://namileo.com/',
        image: namileo,
        backgroundColor: '#000',
        tags: [
            "tpl", 
            'jquery', 
            'smarty', 
            'docker', 
            'scss', 
        ]
    },
    {
        name: 'iPomocni',
        description: 'Webstore made in Wordpress mostly via creative elements.',
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
        description: 'Webstore made in Wordpress.',
        link: 'https://blucar.pl/',
        image: blucar,
        backgroundColor: '#000',
        tags: [
            "wordpress", 
            "ACF", 
            'jquery', 
            'css', 
        ]
    },
]

export default dataProjects