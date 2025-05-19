import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles.css";

function ColorSchemesExample() {
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
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
