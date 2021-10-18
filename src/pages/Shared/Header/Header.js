import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                            <img
                                src="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2018/03/medicare-logo-color.png"
                                width="150"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;