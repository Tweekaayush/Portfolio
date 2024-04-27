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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, impedit.',
        link:"https://ecommercead.vercel.app",
        type: ['all', 'react']
    },{
        id: 2,
        img: cryptoverse,
        title: 'Cryptoverse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, impedit.',
        link: 'https://cryptoversead.vercel.app',
        type: ['all', 'react'],
    },
    {
        id:3,
        img: weatherApp,
        title:"Weather App",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, impedit.',
        link:"https://weatherly-zeta.vercel.app",
        type: ['all', 'react']
    },
    {
        id: 4,
        img: hairday,
        title: 'Hair Day',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, impedit.',
        link: 'https://tweekaayush.github.io/StartUp-Landing-Page-Hair-Day-/',
        type: ['all', 'vanilla']
    }
]

export default projects;