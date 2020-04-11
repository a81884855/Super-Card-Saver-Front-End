import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/apple-touch-icon.png"
            style={{ width: "30px", margin: "-5px 5px" }}
          />
          Super Card Saver
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-main-menu ">
            <Link to="/">Home</Link>
            <Link to="/card-advisor">Card Advisor</Link>
            <Link to="/category">Category</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/cards">All Cards</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
