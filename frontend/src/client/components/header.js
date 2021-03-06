import React from "react";
import { render } from "react-dom";
import ".././style/style.css";
import ".././style/icons/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainerCarrito } from "./button";
import jwt_decode from "jwt-decode";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boolean: true };

    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    window.location.href = "/";
  }

  toggleSidenav() {
    this.setState(state => ({
      boolean: !state.boolean
    }));
  }

  render() {
    var decoded = "";
    if (localStorage.usertoken) {
      decoded = jwt_decode(localStorage.usertoken);
    }
    const login = (
      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
    const noLogin = (
      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Perfil
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/manager" className="dropdown-item">
              Gestion
            </Link>
            <Link to="/" onClick={this.logOut} className="dropdown-item">
              Cerrar sesión
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <h5>
            <span class="badge badge-danger">
              Bienvenido, {decoded.NombreCliente}
            </span>{" "}
          </h5>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            PetLocker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Tienda
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/adopt" className="nav-link">
                  Adopción
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">
                  Busqueda
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Acerca de{" "}
                </Link>
              </li>
            </ul>
            <Link to="/cart" className="ml-auto">
              <ButtonContainerCarrito>
                <span className="mr-2">
                  <i className="fas fa-cart-plus"></i>
                </span>
                Mi Carrito
              </ButtonContainerCarrito>
            </Link>
            {localStorage.usertoken ? noLogin : login}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
