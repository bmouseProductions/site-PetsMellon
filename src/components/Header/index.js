import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoWhite from '../../assets/image/petsmellonWhite.svg'
import Logo from '../../assets/image/logo.png'
import { Link, useNavigate } from 'react-router-dom';

export const Header = (props)=> {

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="bg-light sticky-top">
          <Container fluid  className=''>
            <Navbar.Brand href="/site"><img src={Logo} alt="Pets Mellon" className='img-xxl' style={{width:'60%'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='border-0' />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end"  style={{backgroundColor:'#EF2E72'}}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={LogoWhite} alt="Pets Mellon" className='w-50'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='d-flex  menu-xxl'>
                <Nav className="menu">
                  <Link to="/site/" className='link-white text-muted'>Home</Link >
                  <Link to="/site/conheca" className='link-white'>Conheça</Link>
                  <Link to="/site/produtos" className='link-white'>Produtos</Link>
                  <Link to="/site/servicos" className='link-white'>Serviços</Link>
                  <Link to="/site/customizacoes" className='link-white'>Customizações</Link>
                  <Link to="/site/parceria" className='link-white'>Parceria</Link>
                  <a href='https://patense.com.br/' target={'_blank'} className='link-white'>A Patense</a>
                   {/* <Link to="/blog" className='link-white'>Blog</Link> */}
                  <NavDropdown title="Sustentabilidade" id={`offcanvasNavbarDropdown-expand-${expand}`} className='link-white' style={{fontSize:'17.6px'}}>
                    <NavDropdown.Item>
                        <Link to ="/site/pdf-ambiental" >Política Ambiental</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to='/site/pdf-sustentabilidade' >Plano de Sustentabilidade</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link to="/site/contato" className='text-white rounded-1 text-center p-2 ps-3 pe-3' style={{backgroundColor:"#F58525"}}>Contato</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

