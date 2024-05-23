import React from "react";

const Card = ({ cliente }) => {
  return (
    <div className="card">
      <p>
        <strong>Hola: </strong> {cliente.nombre}
      </p>
      <p>
        <strong>Sabemos que tu color Favorito es: </strong> {cliente.color}
      </p>
    </div>
  );
};

export default Card;
