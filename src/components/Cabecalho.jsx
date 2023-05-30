import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import'../App.css'

function cabecalho() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand > Cassio Construções </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default cabecalho;