import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/home/logo.png"; 

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <img src={logo} alt='logo' width={80} height={40} style={{borderRadius:"50px"}}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='text-light ms-5'>Home</Nav.Link>
          
          </Nav>
          <Button variant='light text-primary'>NEW !</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;