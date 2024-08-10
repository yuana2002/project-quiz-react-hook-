import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (

        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* <Navbar.Brand href="#home">React</Navbar.Brand> */}
                    <NavLink className='navbar-brand' to='/'>React</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                            <NavLink className='nav-link' to='/user'>User</NavLink>
                            <NavLink className='nav-link' to='/admin'>Admin</NavLink>

                            {/* <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/user">User</Nav.Link>
                            <Nav.Link href="/admin">Admin</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <button className='btn-login'>Log in</button>
                            <button className='btn-signup'>Sign up</button>
                            {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavDropdown.Item>Log in</NavDropdown.Item>
                                <NavDropdown.Item>Log out</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;