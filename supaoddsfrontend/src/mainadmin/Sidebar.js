import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="sidebar" />
        <Navbar.Collapse id="sidebar">
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#prediction">Prediction</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#accumulator">Accumulator</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#scheduler">Scheduler</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#newsletter">Newsletter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#users">Users</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
