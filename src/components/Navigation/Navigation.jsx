import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Container className="nav">
          <div className="links">
            <Link to="/" className="text-white m-4 text-decoration-none">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4481/4481380.png"
                className="icono"
              />
              Home
            </Link>
            <Link
              to="/contacto"
              className="text-white m-4 text-decoration-none"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/677/677388.png"
                className="icono"
              />
              Contacto
            </Link>
          </div>

          <Navbar.Brand className="text-white">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1064/1064882.png"
              className="icono"
            />
            Happy Cake
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
