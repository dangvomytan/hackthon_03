import { Button, Container, Navbar } from "react-bootstrap";

function Header(props)
{
     return(
          <Container>
          <Navbar expand="lg" variant="light" bg="warning">
            <Container>
              <Navbar.Brand href="#">Note App</Navbar.Brand>
              <Button variant="secondary" onClick={props.handleShow}>Add</Button>{' '}
            </Container>
          </Navbar>
        </Container>
     )
}
export default Header;