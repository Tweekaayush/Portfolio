import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Card = ({ img, title, description, link, tech }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <ul className="project-tech-stack">
          {tech.map((t) => {
            return <li key={t}>{t}</li>;
          })}
        </ul>
        <a href={link} target="_blank" className="button-1">
          visit website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </div>
  );
};

export default Card;
