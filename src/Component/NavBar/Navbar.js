
import React from 'react';
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import './Navbar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../Images/Logo.png'
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div className='container'>
      <Navbar bg="transparrent" color="white"expand="lg">
      <Link to="/">
        <Navbar.Brand href="#home">
          
        <img
          src={logo}
          width="150"
          height="70"
          className="d-inline-block align-top"
          alt="Logo"
        />
       
      </Navbar.Brand>
      </Link>

    <Form inline >
      <input className="searchControl  ml-5"
           type="text" placeholder="Search Your Destination......."></input>
     
    </Form>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   
    <Nav className="ml-auto">
      <Nav.Link className="ml-4 white" href="#home"><p className="linkText">Destination</p></Nav.Link>
      <Nav.Link className="ml-4" href="#link"><p className="linkText">Blog</p></Nav.Link>
      <Nav.Link className="ml-4" href="#home"><p className="linkText">Contact</p></Nav.Link>
      <Nav.Link className="ml-4" href="#link"><p className="linkText">News</p></Nav.Link>
      
      <Form inline>
    <Button className="ml-5 " variant="warning" type="submit">Login</Button>
     </Form>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

    </div>
  );
};

export default Navbars;


