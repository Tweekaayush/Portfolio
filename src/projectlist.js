import todolist from "./assets/images/todolist.png";
import weatherApp from "./assets/images/weatherApp.png";
import patatap from "./assets/images/patatap.png"
import hairday from './assets/images/Hairday.png'

const projects = [
    {
        id: 1,
        img: todolist,
        title:"TodoList",
        link:"https://tweekaayush.github.io/todolist-app-react/",
        type: ['all', 'react']
    },
    {
        id:2,
        img: patatap,
        title:"Patatap Clone",
        link:"https://tweekaayush.github.io/Patatap-Clone/",
        type: ['all', 'vanilla']
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
        link: '',
        type: ['all', 'vanilla']
    }
]

export default projects;