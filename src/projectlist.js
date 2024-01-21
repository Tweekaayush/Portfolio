import todolist from "./assets/images/todolist.png";
import weatherApp from "./assets/images/weatherApp.png";
import hairday from './assets/images/Hairday.png'
import cryptoverse from './assets/images/cryptoverse.png'
import ecommerce from './assets/images/ecommerce.png'

const projects = [
    {
        id: 1,
        img: ecommerce,
        title:"Ecommerce",
        link:"https://ecommercead.vercel.app",
        type: ['all', 'react']
    },{
        id: 2,
        img: cryptoverse,
        title: 'Cryptoverse',
        link: 'https://cryptoversead.vercel.app',
        type: ['all', 'react'],
    },
    {
        id:3,
        img: weatherApp,
        title:"Weather App",
        link:"https://tweekaayush.github.io/weather-app-react/",
        type: ['all', 'react']
    },
    {
        id: 4,
        img: hairday,
        title: 'Hair Day',
        link: 'https://tweekaayush.github.io/StartUp-Landing-Page-Hair-Day-/',
        type: ['all', 'vanilla']
    }
]

export default projects;