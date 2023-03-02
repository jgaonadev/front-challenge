import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <Navbar collapseOnSelect bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React Test App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            By Jaime Gaona - Software Developer
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;