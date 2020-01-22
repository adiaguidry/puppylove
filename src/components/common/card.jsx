import React from "react";
import { Link } from "react-router-dom";

const Card = ({ _id, image, title, text, button }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {button && <Link to={`/blogFullPage/${_id}`} className="btn btn-primary">
          {button}
        </Link>}
      </div>
    </div>
  );
};

export default Card;
