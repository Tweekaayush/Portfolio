import weatherApp from "./assets/images/weatherApp.png";
import disney from './assets/images/disney.png'
import cryptoverse from './assets/images/cryptoverse.png'
import ecommerce from './assets/images/ecommerce.png'

const projects = [
    {
        id: 1,
        img: ecommerce,
        title:"Ecommerce",
        description: 'A fully interactive and responsive Ecommerce web application providing CRUD operations using ReactJs, Redux Toolkit and Firebase.',
        link:"https://ecommercead.vercel.app",
        type: ['all', 'react']
    },{
        id: 2,
        img: cryptoverse,
        title: 'Cryptoverse',
        description: 'A cryptocurrency tracking app that provides the current rates of all known cryptocurrencies.',
        link: 'https://cryptoversead.vercel.app',
        type: ['all', 'react'],
    },
    {
        id:3,
        img: weatherApp,
        title:"Weather App",
        description: 'A weather app that displays the weather conditions of the desired location using REST API.',
        link:"https://weatherly-zeta.vercel.app",
        type: ['all', 'react']
    },
    {
        id: 4,
        img: disney,
        title: 'Disney+ Clone',
        description: 'A fully interactive and responsive multi-page Disney-plus clone using ReactJs, Redux Toolkit and Firebase.',
        link: 'https://disneyplusclonead.vercel.app/home',
        type: ['all', 'react']
    }
]

export default projects;