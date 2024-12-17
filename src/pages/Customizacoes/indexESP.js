import { Card, Row, Col } from "react-bootstrap";
import { HeaderESP } from "../../components/Header/indexESP";
import { FooterESP } from "../../components/Footer/indexESP";
import { Customizacao } from "./style";
import { ButtonUp } from "../../components/BtnUp";

export const CustomizacoesESP = () => {
  return (
    <div className="bg-light fade-in">
      <HeaderESP />
      <Customizacao className="bg-light">
        <div
          className="text-center mt-3 d-flex flex-column align-items-center justify-content-center"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="d-flex flex-row align-items-center justify-content-center">
            <h1 className="text-muted">Fórmulas personalizadas</h1>
          </div>
          <p className="text-dark">
            Ofrecemos un servicio personalizado. Esto significa que cada
            producto se modifica o adapta según las especificaciones de cada
            cliente. Participamos plenamente en sus proyectos, desde los
            ingredientes hasta las tecnologías a utilizar, aportando soluciones
            rápidas y eficaces y manteniendo absoluta confidencialidad en cada
            proyecto.
          </p>
        </div>
        <Row className=" w-100">
          <Col>
            <Card
              style={{ width: "100%", backgroundColor: "#491A76" }}
              className="text-center border-0 mt-4 p-3"
            >
              <Card.Body className="d-flex align-items-start flex-column justify-content-start w-100 p-2">
                <h3 className="text-white">Línea Económica</h3>
                <h5 className="text-white">Ejemplos:</h5>
                <div className="mt-3 d-flex flex-column gap-3 text-white text-left align-items-start w-100">
                  <li>√ 65% de Carne</li>
                  <li>√ Tinte artificial</li>
                  <li>√ Conservante Artificial</li>
                  <li>√ Sabor a Cerdo</li>
                  <li># paquetes de 65g a 1,0kg</li>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={"4"}>
            <Card
              style={{ width: "100%", backgroundColor: "#491A76" }}
              className="text-center border-0 mt-4 p-3"
            >
              <Card.Body className="d-flex flex-column align-items-start justify-content-start w-100 p-2">
                <h3 className="text-white">Línea principal</h3>
                <h5 className="text-white">Ejemplos:</h5>
                <div className="mt-3 d-flex flex-column gap-3 text-white text-left align-items-start  w-100">
                  <li>√ 70% de Carne</li>
                  <li>√ Conservante Artificial</li>
                  <li>√ Tinte artificial</li>
                  <li>√ Sabor a Cerdo</li>
                  <li># paquetes de 65g a 1,0kg</li>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={"4"}>
            <Card
              style={{ width: "100%", backgroundColor: "#491A76" }}
              className="text-center border-0 mt-4 p-3"
            >
              <Card.Body className="d-flex flex-column align-items-start justify-content-start  w-100 p-2">
                <h3 className="text-white">Línea Premium</h3>
                <h5 className="text-white">Ejemplos:</h5>
                <div className="mt-3 d-flex flex-column gap-3 text-white text-left align-items-start w-100">
                  <li>√ 75% de Carne</li>
                  <li>√ Conservante Artificial</li>
                  <li>√ Tinte artificial</li>
                  <li>√ sabor a Pollo</li>
                  <li># paquetes de 50g à 1,0kg</li>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="w-100">
          <Col>
            <Card
              style={{
                width: "100%",
                height: "22rem",
                backgroundColor: "#491A76",
              }}
              className="text-center border-0 mt-4 p-3"
            >
              <Card.Body className="d-flex flex-column align-items-start justify-content-start w-100 p-2">
                <h3 className="text-white">Línea Premium Alta</h3>
                <h5 className="text-white">Ejemplos:</h5>
                <div className="mt-3 d-flex flex-column gap-3 text-white align-items-start w-100">
                  <li>√ 78% de Carne</li>
                  <li>√ Conservante Natural</li>
                  <li>√ Tinte artificial</li>
                  <li>√ Sabor natural (sin aditivos ni conservantes)</li>
                  <li>√ Con Prebióticos y Probióticos añadidos.</li>
                  <li># paquetes de 30g a 1,0kg</li>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              style={{
                width: "100%",
                height: "22rem",
                backgroundColor: "#491A76",
              }}
              className="text-center border-0 mt-4 p-3"
            >
              <Card.Body className="d-flex flex-column align-items-start justify-content-start w-100 p-2">
                <h3 className="text-white">Línea Súper Premium</h3>
                <h5 className="text-white">Ejemplos:</h5>
                <div className="mt-3 d-flex flex-column gap-2 text-white align-items-start w-100">
                  <li>√ 80% de Carne</li>
                  <li>√ Conservante Natural</li>
                  <li>√ Tinte Natural</li>
                  <li>
                    √ Selección de sabores (sin cereales añadidos, sin azúcar,
                    sin pesticidas, sin soja)
                  </li>
                  <li>√ Con Prebióticos y Probióticos añadidos.</li>
                  <li># paquetes de 30g a 1,0kg</li>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Customizacao>
      <ButtonUp></ButtonUp>
      <FooterESP />
    </div>
  );
};
