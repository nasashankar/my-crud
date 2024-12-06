import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; // Import the CSS file for styling
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar  key={expand} expand={expand} className="body-tertiary mb-1">
          <Container fluid >
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Media Audition
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content flex-grow-1 pe-3">
                  <Nav.Link href="home">Home</Nav.Link>
                  <Nav.Link href="aboutus">About Us</Nav.Link>
                  <Nav.Link href="services">Services</Nav.Link>
                  <Nav.Link href="contactus">Contacts</Nav.Link>
               
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='Left_navbar'><Link to="/Login">Login</Link> /  <Link to="/Register">Register</Link></div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;