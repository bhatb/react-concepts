import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
 
const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar Navigation */}
        <Col md={3} className="bg-light vh-100 p-3">
          <h4>Menu</h4>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/dom">Virtual DOM</Nav.Link>
            <Nav.Link as={Link} to="/layout">Layout</Nav.Link>
            <Nav.Link as={Link} to="/communication">Communication</Nav.Link>
            <Nav.Link as={Link} to="/reducer">useReducer</Nav.Link>
            <Nav.Link as={Link} to="/forms">Forms</Nav.Link>
            <Nav.Link as={Link} to="/routing">Routing</Nav.Link>
            <Nav.Link as={Link} to="/eventhandling">Event Handling</Nav.Link>
            <Nav.Link as={Link} to="/hooks">React Hooks</Nav.Link>
            <Nav.Link as={Link} to="/state">State Management</Nav.Link>
            <Nav.Link as={Link} to="/performance">Memoization</Nav.Link>
            <Nav.Link as={Link} to="/customhook">Custom Hook</Nav.Link>
            <Nav.Link as={Link} to="/context">Context API</Nav.Link>
            <Nav.Link as={Link} to="/lazyloading">Lazy Loading and Suspense</Nav.Link>
          </Nav>
        </Col>

        {/* Main Content Area */}
        <Col md={9} className="p-4">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
