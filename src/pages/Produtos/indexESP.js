import { HeaderESP } from "../../components/Header/indexESP";
import { FooterESP } from "../../components/Footer/indexESP";
import { Container, Produtos, ProdutoDescricao } from "../../components/style";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import { IoPawOutline } from "react-icons/io5";
import ProdutoImg from "../../assets/image/Femur Bovino.webp";
import ProdutoImg2 from "../../assets/image/Bifinho Peito de Peru.webp";
import ProdutoImg3 from "../../assets/image/racaoUmida.webp";
import BififnhoCarne from "../../assets/image/Bifinho Carne.png";
import BififnhoChurrasco from "../../assets/image/Bifinho Churrasco.png";
import BififnhoGalinha from "../../assets/image/Bifinho Galinha Caipira.png";
import Costela from "../../assets/image/Costela.png";
import Cut from "../../assets/image/Cut03.png";
import Esofago from "../../assets/image/Esofago.png";
import FemurSuino from "../../assets/image/FemurSuino.png";
import MixDeRecorte from "../../assets/image/Mix de Recorte.png";
import OrelhaBovina from "../../assets/image/Orelha Bovina.png";
import OrelhaSuina from "../../assets/image/OrelhaSuina.png";
import Sassame from "../../assets/image/Sassame.png";

import { ButtonUp } from "../../components/BtnUp";

export const ProdutoESP = () => {
  return (
    <div className="bg-light fade-in">
      <HeaderESP />
      <Produtos>
        <Carousel
          className="mt-3 carousel-md"
          style={{ width: "100%" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={ProdutoImg3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={ProdutoImg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={ProdutoImg2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={BififnhoCarne}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={BififnhoChurrasco}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={BififnhoGalinha}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={Costela}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={Cut}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={Esofago}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={FemurSuino}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={Sassame}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={OrelhaBovina}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src={OrelhaSuina}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <ProdutoDescricao data-aos="fade-up" data-aos-duration="2000">
          <div className="text-center mt-5 d-flex flex-row m-auto">
            <h1 className="me-3 text-white">Nuestros productos</h1>
            <IoPawOutline className="" size={40} color={"#fff"} />
          </div>
          <p className="text-white">
            Actuando como copacker en la fabricación de alimentos para animales,
            ofrecemos soluciones de alta calidad para nuestros socios, todos
            nuestros productos son balanceados y cumplen con los requisitos de
            los organismos de control. Contamos con alta tecnología en procesos
            industriales y nuestro portafolio incluye toda la línea de alimentos
            completos, alimentos específicos y productos masticables para
            mascotas.
          </p>
        </ProdutoDescricao>
      </Produtos>
      <Container>
        <Row className="mt-2 mb-5 ">
          <div className="text-center mt-5 d-flex flex-row justify-content-center mb-5">
            <h1 className="me-3 text-muted">Tipos de productos</h1>
            <IoPawOutline className="" size={40} color={"#f58525"} />
          </div>
          <Col sm={12} lg={4} data-aos="zoom-in-up">
            <Card className="p-0 m-0 border-0 ">
              <Card.Img variant="top" src={ProdutoImg} />
              <Card.Body className="">
                <h3>Partes naturales del cuerpo</h3>
                <p className="fs-5">
                  Clasificados como productos masticables, Body Parts son
                  productos a base de subproductos de origen animal, y pueden
                  incluir ingredientes de origen vegetal. Están destinados
                  exclusivamente a animales de compañía, con fines de diversión
                  o placer, con un valor nutricional insignificante. Como
                  ejemplo tenemos las orejas naturales y los huesos pequeños,
                  medianos y grandes de bovinos y porcinos.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} data-aos="zoom-in-up">
            <Card className="p-0 m-0 border-0">
              <Card.Img variant="top" src={ProdutoImg2} />
              <Card.Body className="">
                <h3>Aperitivos</h3>
                <p className="fs-5">
                  Los bocadillos se identifican como alimentos específicos. Son
                  productos compuestos por ingredientes, materias primas o
                  aditivos destinados exclusivamente a la alimentación de
                  animales de compañía con fines de placer, premio o recompensa,
                  y pueden tener propiedades específicas. Tenemos bistecs y
                  snacks en general como ejemplo
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} data-aos="zoom-in-up">
            <Card className="p-0 m-0 border-0">
              <Card.Img variant="top" src={ProdutoImg3} />
              <Card.Body className="">
                <h3>Comida húmeda</h3>
                <p className="fs-5">
                  Se clasifican en alimentos completos e incompletos, los
                  alimentos Enlatados y Pouch generalmente se diferencian solo
                  en el empaque que presentan. Son alimentos capaces de cubrir
                  plenamente los requerimientos nutricionales, pudiendo tener
                  propiedades específicas o funcionales, compuestos por
                  ingredientes o materias primas y aditivos destinados
                  exclusivamente a la alimentación de animales de compañía.
                  Además de estos, estamos comenzando con la producción de
                  Lickables, que tiene como objetivo acercar un nuevo concepto
                  de snacks a los felinos y que es muy demandado por nuestros
                  socios y clientes.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ButtonUp></ButtonUp>
      <FooterESP />
    </div>
  );
};
