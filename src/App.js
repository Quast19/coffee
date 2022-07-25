import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import shri_logo from './shri_logo.png'
import linkedin_logo from './linkedin_logo.png'
import Github_logo from './github_logo.png'
import IG_logo from './ig_logo.png'
function App() {
  let a = 50;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={shri_logo} width={4*a} height={2*a}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{width:"100%"}} >
            <Nav.Link href="#home"><img src={linkedin_logo} width={a} height={a}></img></Nav.Link>
            <Nav.Link href="#link"><img src={IG_logo} width={a} height={a}></img></Nav.Link>
            <Nav.Link href="#link"><img src={Github_logo} width={2*a} height={a}></img></Nav.Link>
            {/*
            code  (drop-down Menu) <- (boostrap nav bar)
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;