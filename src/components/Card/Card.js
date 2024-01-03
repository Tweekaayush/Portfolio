import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <div className="card-content">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href={props.link}>visit</a>
        </div>
    </div>
  )
}

export default Card