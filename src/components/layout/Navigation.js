import React from 'react';
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (

    <div>
      <br />

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav-bar">
        <Navbar.Brand href="/" id="react-bar">GLORY |</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav-two" className="basic-collapse">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><NavLink exact activeClassName="active" to="/home">Home</NavLink></Nav.Link>
            <Nav.Link href="#about"><NavLink exact activeClassName="active" to="/about">About</NavLink></Nav.Link>
            <NavDropdown title="More." id="basic-nav" className="drop-nav">
              <NavDropdown.Item id="drop-bar"><NavLink to="/contact">Contact</NavLink></NavDropdown.Item>
              <NavDropdown.Item id="drop-bar" className="drop-links" href="/components/account"><NavLink activeClassName="active" to="/account">Account</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="drop-bar" className="drop-links" href="/components/userwire"><NavLink activeClassName="active" to="/userwire">Requirements</NavLink></NavDropdown.Item>
              <NavDropdown.Item id="drop-bar" className="drop-links" href="/components/searchuser"><NavLink activeClassName="active" to="/searchuser">Thank You</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="drop-bar" className="drop-links" href="/components/home"><NavLink activeClassName="active" to="/home">Home</NavLink></NavDropdown.Item>
              <NavDropdown.Item id="drop-bar" className="drop-links" href="/components/about"><NavLink activeClassName="active" to="/about">About</NavLink></NavDropdown.Item>
              <Nav.Link href="#app"><NavLink exact activeClassName="active" to="/"><p>✩✩✩Todo</p></NavLink></Nav.Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form inline >
              <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                  <div className="searchbar">
                    <input className="search-input" id="input-bar" type="text" name="" placeholder="" style={{ fontWeight: 'bold', WebkitTextFillColor: 'blue', boxShadow: 'none', borderColor: 'black', }} />
                    <a href="./contact" id="submit-bar" className="search-bar-icon"><FontAwesomeIcon className="faicons" icon={faSearch} /></a>
                  </div>
                </div>
              </div>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </div>
  );
}


export default Navigation;