import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    color: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) =>
    setCliente({ ...cliente, nombre: event.target.value });
  const handleColor = (e) =>
    setCliente({ ...cliente, color: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cliente.nombre.trim().length > 3 &&
      cliente.color.trim().length > 5
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder="Nombre"
        type="text" 
        value={cliente.nombre} 
        onChange={handleName} />
        <input
        placeholder="Color Favorito"
          type="text"
          value={cliente.color}
          onChange={handleColor}
        />
        <button type="submit">Enviar</button>
      </form>
      {show && <Card cliente={cliente} />}
      {error && (
        <p style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </p>
      )}
    </>
  );
};

export default Form;

