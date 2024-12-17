import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoWhite from "../../assets/image/petsmellonWhite.svg";
import Logo from "../../assets/image/logo.png";
import brazil from "../../assets/image/Brazil.png";
import spain from "../../assets/image/spain.png";
import unite from "../../assets/image/united-states.png";
import { Link, useNavigate } from "react-router-dom";

export const HeaderESP = (props) => {
  return (
    <>
      <div
        className="d-flex p-2 align-items-center justify-content-end gap-3"
        style={{ backgroundColor: "#f52369" }}
      >
        <Link to="/" className="link-white text-white">
          <img src={brazil} alt="BR" style={{ width: "25px" }} />
        </Link>
        <Link to="/en" className="link-white text-white">
          <img src={unite} alt="EN" style={{ width: "25px" }} />
        </Link>
        <Link to="/esp" className="link-white text-white">
          <img src={spain} alt="ES" style={{ width: "25px" }} />
        </Link>
      </div>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-light sticky-top">
          <Container fluid className="">
            <Navbar.Brand href="/">
              <img
                src={Logo}
                alt="Pets Mellon"
                className="img-xxl"
                style={{ width: "60%" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="border-0"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ backgroundColor: "#EF2E72" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={LogoWhite} alt="Pets Mellon" className="w-50" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex  menu-xxl">
                <Nav className="menu">
                  <Link to="/esp" className="link-white text-muted">
                    Inicio
                  </Link>
                  <Link to="/conheca-esp" className="link-white">
                    Conozca
                  </Link>
                  <Link to="/produtos-esp" className="link-white">
                    Productos
                  </Link>
                  <Link to="/servicos-esp" className="link-white">
                    Servicios
                  </Link>
                  <Link to="/customizacoes-esp" className="link-white">
                    Personalizaciones
                  </Link>
                  <Link to="/parceria-esp" className="link-white">
                    Socios
                  </Link>
                  <a
                    href="https://patense.com.br/"
                    target={"_blank"}
                    className="link-white"
                  >
                    Patentar
                  </a>
                  {/* <Link to="/blog" className='link-white'>Blog</Link> */}
                  <NavDropdown
                    title="Sostenibilidad"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="link-white"
                    style={{ fontSize: "17.6px" }}
                  >
                    <NavDropdown.Item>
                      <Link to="/pdf-ambiental">Política Ambiental</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/pdf-sustentabilidade">
                        Plano de Sustentabilidade
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link
                    to="/contato-esp"
                    className="text-white rounded-1 text-center p-2 ps-3 pe-3"
                    style={{ backgroundColor: "#F58525" }}
                  >
                    Contacto
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
