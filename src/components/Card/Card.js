import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <div className="card-content">
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, impedit.</p>
            <a href={props.link}>visit website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </div>
    </div>
  )
}

export default Card