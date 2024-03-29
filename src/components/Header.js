import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Navbar expand="lg" variant="light" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/red-and-white-gingham-tablecloth-seamless-pattern-vector-18513990.jpeg'})`, backgroundSize: '35em'
    }}>
      <Container>
        <Navbar.Brand><img src={process.env.PUBLIC_URL + '/images/sandwich.png'}></img></Navbar.Brand>
        <Nav>
          <h1>Make A Sandwich</h1>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header