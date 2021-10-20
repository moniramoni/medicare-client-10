import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user , logOut } = useAuth();
    return (
        <>
            <Navbar bg="" variant="light" collapseOnSelect expand="lg" className="w-100 container">
                <Container>
                    <Navbar.Brand href="/home">
                            <Link to="/home"><img
                                src="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2018/03/medicare-logo-color.png"
                                width="150"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            /></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <NavLink 
                                className="menu-text"
                                activeStyle={{fontWeight: "bold", color: "#0cb8b6"}} to="/home">Home
                            </NavLink>
                            <NavLink
                            className="menu-text"
                            activeStyle={{fontWeight: "bold", color: "#0cb8b6"}}
                             as={Link}to="/blogs" className="menu-text">Blogs</NavLink>
                            <NavLink
                            className="menu-text"
                            activeStyle={{fontWeight: "bold", color: "#0cb8b66"}}
                             as={Link}to="/contact" className="menu-text">Contact</NavLink>
                            {user?.email? 
                            <Button className="logout-btn mx-2" onClick={logOut} variant="">LogOut</Button>:
                                <Nav.Link
                                className="menu-text"
                                activeStyle={{fontWeight: "bold", color: "#0cb8b6"}} as={Link}to="/signIn">Login</Nav.Link>}
                        <Navbar.Text className="menu-text">
                            <img className="profile-img" src={user?.photoURL} alt="" />
                            <a href="/login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;