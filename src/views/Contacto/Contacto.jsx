import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const Contacto = () => {
  return (
    <div className="contacto">
      <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
      <p>Correo electrónico:</p>
      <InputGroup className="inputContacto">
        <Form.Control placeholder="Ingrese su email" />
      </InputGroup>
      <Form.Label>Descripción:</Form.Label>
      <Form.Control type="text" className="form" />

      <Button className="boton">Enviar</Button>
    </div>
  );
};

export default Contacto;
