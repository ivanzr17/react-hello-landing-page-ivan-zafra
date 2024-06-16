import React from "react";
import Boton from "./boton";

export const Card = ({ cardTitle, cardText }) => {
  return (
    <div class="card my-5 mx-0 mx-sm-0 mx-md-4 col-md-2 col-sm-3 py-2">
      <img src="https://placehold.co/500x300" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardText}</p>
        <Boton textButton={"Find out More"} />
      </div>
    </div>
  );
};

export default Card;
