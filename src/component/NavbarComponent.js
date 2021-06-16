import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Nav.Link>
            <Link to="/" className="text-white">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/modal" className="text-white">
              Modal
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/increment" className="text-white">
              Increment
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/quis" className="text-white">
              Quis
            </Link>
          </Nav.Link>
          <NavDropdown title="AkunName" id="collasible-nav-dropdown">
            <NavDropdown.Item href="">Nama Akun Kamu</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
