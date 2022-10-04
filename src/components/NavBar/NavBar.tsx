import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {NavbarStyled} from './NavBar.styles';

function NavBar() {
  return (
    <NavbarStyled bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarStyled>
  );
}

export default NavBar;
