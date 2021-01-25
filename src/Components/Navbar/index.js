import React from 'react';
import './style.css';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Logo from '../../images/EOL.jpeg';


const Navigation = () => {
    return (
        <div>
            <Navbar className='navBar' collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home"><img src={ Logo } alt='' height='105px' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" id='navbar'>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Nav className='nav__menu'>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        </div>
    )
}

export default Navigation;
