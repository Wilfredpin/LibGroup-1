import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles.css';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ColorSchemesExample() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
  };

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Kortext</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Browse</Nav.Link>
            <Nav.Link href="#pricing">Popular</Nav.Link>
            <Nav.Link href="#pricing">Membership</Nav.Link>
          </Nav>

          <div className="nav-buttons">
            <Button
              variant="primary"
              size="lg"
              active
              onClick={() => handleClick('/target')}
            >
              Login
            </Button>
            <Button
              variant="secondary"
              size="lg"
              active
              onClick={() => handleClick('/target')}
            >
              Sign Up
            </Button>
            {/* <button>Login</button>
            <button>Sign Up</button> */}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
