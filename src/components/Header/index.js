import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoWhite from "../../assets/image/petsmellonWhite.svg";
import Logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import brazil from "../../assets/image/Brazil.png";
import spain from "../../assets/image/spain.png";
import unite from "../../assets/image/united-states.png";

export const Header = (props) => {
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
                  <Link to="/" className="link-white text-muted">
                    Home
                  </Link>
                  <NavDropdown
                    title="Conheça"
                    id={`offcanvasNavbarDropdown-conheca`}
                    className="link-white"
                    style={{ fontSize: "17.6px" }}
                  >
                    <NavDropdown.Item>
                      <Link
                        to="/conheca"
                        style={{ color: "rgb(245, 133, 37)" }}
                      >
                        Conheça
                      </Link>{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/codigo-de-etica"
                        style={{ color: "rgb(245, 133, 37)" }}
                      >
                        Código de Ética
                      </Link>{" "}
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Link to="/produtos" className="link-white">
                    Produtos
                  </Link>
                  <Link to="/servicos" className="link-white">
                    Serviços
                  </Link>
                  <Link to="/customizacoes" className="link-white">
                    Customizações
                  </Link>
                  <Link to="/parceria" className="link-white">
                    Parceria
                  </Link>
                  <a
                    href="https://patense.com.br/"
                    target={"_blank"}
                    className="link-white"
                  >
                    A Patense
                  </a>
                  {/* <Link to="/blog" className='link-white'>Blog</Link> */}
                  <NavDropdown
                    title="Sustentabilidade"
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
                    to="/contato"
                    className="text-white rounded-1 text-center p-2 ps-3 pe-3"
                    style={{ backgroundColor: "#F58525" }}
                  >
                    Contato
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
