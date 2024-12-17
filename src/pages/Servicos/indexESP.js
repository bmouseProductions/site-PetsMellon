import { Accordion } from "react-bootstrap";
import { Servicos } from "../../components/style";
import { IoPawOutline } from "react-icons/io5";
import { HeaderESP } from "../../components/Header/indexESP";
import { FooterESP } from "../../components/Footer/indexESP";
import { ButtonUp } from "../../components/BtnUp";

export const ServicoESP = () => {
  return (
    <div className="bg-light fade-in">
      <HeaderESP />
      <Servicos className="gap-3">
        <div className="w-100 d-flex gap-3 flex-column">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <IoPawOutline className="text-muted" size={40} />
            <h1 className="ms-3 text-muted">Nuestros servicios</h1>
          </div>
          <p className="text-center lh-6 text-dark">
            Mascotas Mellón cuenta con el más alto estándar en tecnología y
            desarrollo. La empresa buscó innovar en el desarrollo de sus
            servicios con el propósito de brindar a nuestros clientes no solo un
            producto de excelente calidad, sino también una experiencia de
            servicio diferenciada.
          </p>
        </div>
        <div className="d-flex flex-column gap-3 accordion">
          <Accordion
            alwaysOpen
            className="w-100 ms-0 me-0"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Accordion.Item
              eventKey="0"
              className="w-100 p-2"
              style={{ backgroundColor: "#FF9200" }}
            >
              <Accordion.Header className="">
                <h4
                  className="text-left text-muted"
                  style={{ color: "#491A76", fontSize: "1.2rem" }}
                >
                  Industrialización de alimentos completos e incompletos
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Eficiencia y Tecnología, preceptos básicos para cualquier
                industria de Mascotas Mellón. Estamos preparados para producir
                su producto a gran escala con los más altos estándares de
                calidad.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion
            alwaysOpen
            className="w-100"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Accordion.Item
              eventKey="0"
              className="w-100 p-2"
              style={{ backgroundColor: "#FF9200" }}
            >
              <Accordion.Header className="d-flex flex-column gap-5">
                <h4
                  className="text-left text-muted"
                  style={{ color: "#491A76", fontSize: "1.2rem" }}
                >
                  Almacenamiento de producto completo e incompleto
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Contamos con una estructura completa para el almacenamiento de
                productos en nuestra infraestructura física. Toda la empresa
                cuenta con SIF y está preparada para servirle mejor.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion
            alwaysOpen
            className="w-100"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Accordion.Item
              eventKey="0"
              className="w-100 p-2"
              style={{ backgroundColor: "#FF9200" }}
            >
              <Accordion.Header className="d-flex flex-column gap-5">
                <h4
                  className="text-left text-muted"
                  style={{ color: "#491A76", fontSize: "1.2rem" }}
                >
                  Creación de kits promocionales para tu marca
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Mascotas Mellón siempre está en la búsqueda de la innovación y
                trabajamos sugiriendo kits promocionales que se pueden incluir
                en la propuesta comercial de cada marca colaboradora.
                Elaboramos, creamos y sugerimos diferentes caminos para una
                actuación diferente de la marca dentro del mercado de mascotas
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion
            className="w-100"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Accordion.Item
              eventKey="0"
              className="w-100 p-2"
              style={{ backgroundColor: "#FF9200" }}
            >
              <Accordion.Header className="d-flex flex-column gap-5">
                <h4
                  className="text-left text-muted"
                  style={{ color: "#491A76", fontSize: "1.2rem" }}
                >
                  Consultoría de marketing para el desarrollo de productos
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Consultoría de marketing para el desarrollo de productos.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <ButtonUp />
      </Servicos>
      <FooterESP />
    </div>
  );
};
