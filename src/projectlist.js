import weatherApp from "./assets/images/weatherApp.png";
import disney from './assets/images/disney.png'
import cryptoverse from './assets/images/cryptoverse.png'
import ecommerce from './assets/images/ecommerce.png'
import dashboard from './assets/images/dashboard.png'
import chatApp from './assets/images/chatApp.png'

const projects = [
    {
        id: 1,
        img: ecommerce,
        title:"Ecommerce",
        description: 'A fully interactive and responsive MERN Stack Ecommerce web application providing CRUD operations and payment gateway using Stripe.',
        link:"https://ecommerce-1-81ln.onrender.com",
        tech: ['MongoDb', 'ExpressJs', 'React', 'NodeJs', 'Redux Toolkit', 'Tailwind']
    },
    {
        id: 6,
        img: chatApp,
        title: 'Realtime Chat App',
        description: 'A fully interactive Realtime MERN Stack Chat App with realtime chat feature using Socket IO.',
        link: 'https://chat-app-n9t6.onrender.com',
        tech: ['MongoDb', 'ExpressJs', 'React', 'NodeJs', 'Redux Toolkit', 'Tailwind', 'SocketIO']
    },
    {
        id: 2,
        img: cryptoverse,
        title: 'Cryptoverse',
        description: 'A cryptocurrency tracking app that provides the current rates of all known cryptocurrencies using REST API.',
        link: 'https://cryptoversead.vercel.app',
        tech: ['React', 'Redux Toolkit']
    },
    {
        id:3,
        img: weatherApp,
        title:"Weather App",
        description: 'A weather app that displays the weather conditions of the desired location using REST API.',
        link:"https://weather-app-2-0-eta.vercel.app",
        tech: ['React', 'Redux Toolkit', 'Tailwind']
    },
    {
        id: 5,
        img: dashboard,
        title: 'Admin Dashboard',
        description: 'A fully interactive and responsive Admin Dashboard using ReactJs, Redux Toolkit.',
        link: 'https://dashboard-react-ad.vercel.app',
        tech: ['React', 'Redux Toolkit']
    },
]

export default projects;