import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoBlack from '../../assets/image/logoBlack.png'
import Logo from '../../assets/image/logo.png'



export const Header = ()=> {
  return (
    <div className='w-100 bg-light sticky-top'>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="header-container">
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo} alt="Pets Mellon" /></Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
         
              style={{backgroundColor:'#EF2E72'}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='d-flex align-items-center'>
                    <img src={LogoBlack} alt="Pets Mellon" title='Pets Mellon' style={{width:'50%'}}/>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='header-nav text-dark '>
                  <Nav className="flex-grow-1 pe-3 gap-3 fs-5">
                    <Nav.Link href="/" className='text-dark fw-bold'>Home</Nav.Link>
                    <Nav.Link href="/conheca" className='text-dark fw-bold'>Conheça</Nav.Link>
                    <Nav.Link href="/produtos" className='text-dark fw-bold'>Produtos</Nav.Link>
                    <Nav.Link href="/servicos" className='text-dark fw-bold'>Serviços</Nav.Link>
                    <Nav.Link href="/customizacoes" className='text-dark fw-bold'>Customizações</Nav.Link>
                    <Nav.Link href="/parceria" className='text-dark fw-bold'>Parceria</Nav.Link>
                    <Nav.Link href="https://patense.com.br/pt/views/" className='text-dark fw-bold'>A Patense</Nav.Link>
                    <Nav.Link href="/blog" className='text-dark fw-bold'>Blog</Nav.Link>
                    <Nav.Link href="/contato" className='btn text-white' style={{backgroundColor:'#FF9200'}}>Contato</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

