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


const dataProjects = [
    {
        name: 'PriceListApp',
        description: 'Web application for easy matching of products to price lists.',
        link: 'https://adrianbroek.github.io/priceList/',
        image: PriceListApp,
        backgroundColor: '#000',
        tags: [
            "React", 
            "redux toolkit", 
            "typescript", 
            "firebase", 
            "styledComponents"
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
        'redux(old)', 
        'redux-thunk', 
        'applyMiddleware', 
        'js', 
        'localStorage', 
        'scss', 
        'axios', 
        'picsum.photos api', 
        'framer-motion', 
        'slick-slider'
        ]
    },
    {
        name: 'WeatherApp',
        description: 'Weather app on react.js. Used API via Axios. Not 100% finished.',
        link: 'https://adrianbroek.github.io/weatherApp/',
        image: weatherApp,
        backgroundColor: '#000',
        tags: [
            "react", 
            'js', 
            'context-api', 
            'axios', 
            'scss'
        ]
    },
    {
        name: 'Pajok - website',
        description: 'Website made for freelance photographer. Used GraphQl - HyGraph for easy website editing. Website deployed on netlify. Website is not 100% done.',
        link: 'https://imaginative-meerkat-7cb380.netlify.app',
        image: pajokWebsite,
        backgroundColor: '#000',
        tags: [
            "react.js", 
            'graphql', 
            'styled-components', 
            "framer-motion"
        ]
    },
    {
        name: 'Beatmaker',
        description: 'Project to train javascript vanilla with ES6 classes objects. DJ some sounds',
        link: 'https://adrianbroek.github.io/beatmaker/beatmaker%20done/',
        image: beatmaker,
        backgroundColor: '#000',
        tags: [
            "HTML", 
            'CSS', 
            'JS(w/ classess)', 
        ]
    },
    {
        name: 'ToDo List ',
        description: 'Simple ToDo list with some animations, local storage saving',
        link: 'https://adrianbroek.github.io/ToDoList/TodoList%20project/',
        image: ToDoList,
        backgroundColor: '#000',
        tags: [
            "HTML", 
            'CSS', 
            'JS(local storage))', 
        ]
    },
    {
        name: 'MusicPlayerApp',
        description: 'Music player w/ react, sass',
        link: 'https://adrianbroek.github.io/musicPlayer/',
        image: MusicPlayer,
        backgroundColor: '#000',
        tags: [
            "HTML", 
            'CSS', 
            'JS (local storage)', 
        ]
    },
    {
        name: 'Colors',
        description: 'Pick your fav color and keep it with local storage library!',
        link: 'https://adrianbroek.github.io/Colors/',
        image: colorsProject,
        backgroundColor: '#000',
        tags: [
            "HTML", 
            'CSS', 
            'JS (local storage)', 
        ]
    },
    {
        name: 'Calculator',
        description: 'Simple calculator made in Html, Css, Js',
        link: 'https://adrianbroek.github.io/Calculator/',
        image: calculator,
        backgroundColor: '#000',
        tags: [
            "HTML", 
            'CSS', 
            'JS', 
        ]
    },
    {
        name: 'FlappyBird game',
        description: 'Made in javascript canvas',
        link: 'https://adrianbroek.github.io/flappyBird/',
        image: flappyBird,
        backgroundColor: '#000',
        tags: [
            "HTML", 
            'CSS', 
            'JS (canvas)', 
        ]
    }
]

export default dataProjects