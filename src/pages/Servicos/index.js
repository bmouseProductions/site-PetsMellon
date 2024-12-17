import { Accordion } from "react-bootstrap";
import { Servicos } from "../../components/style";
import { IoPawOutline } from "react-icons/io5";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonUp } from "../../components/BtnUp";

export const Servico = () => {
  return (
    <div className="bg-light fade-in">
      <Header />
      <Servicos className="gap-3">
        <div className="w-100 d-flex gap-3 flex-column">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <IoPawOutline className="text-muted" size={40} />
            <h1 className="ms-3 text-muted">Nossos Serviços</h1>
          </div>
          <p className="text-center lh-6 text-dark">
            A Pets Mellon tem o padrão alto em tecnologia e desenvolvimento. A
            empresa buscou inovar no desenvolvimento dos seus serviços com o
            propósito de fornecer aos nossos clientes não só um produto de
            excelente qualidade, mas também uma experiência de serviço
            diferenciada.
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
                  Industrialização de alimento completo e incompleto
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Eficiência e Tecnologia, preceitos básicos para qualquer
                indústria Pets Mellon. Estamos preparados para produzir o seu
                produto em grande escala com o padrão máximo de qualidade.
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
                  Armazenamento de produto completo e incompleto
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Temos estrutura completa para armazenamento de produtos em nossa
                infraestrutura física. Toda a empresa possui SIF e está
                preparada para melhor te atender.
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
                  Criação de kits promocionais para a sua marca
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                A Pets Mellon busca sempre inovação e trabalhamos sugerindo kits
                promocionais que podem ser inseridos dentro da proposta de venda
                de cada marca parceira. Elaboramos, criamos e sugerimos formas
                diferentes para uma atuação distinta por parte da marca dentro
                do mercado pet
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
                  Assessoria de marketing para desenvolvimento de produto
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Assessoria de marketing para desenvolvimento de produto.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <ButtonUp />
      </Servicos>
      <Footer />
    </div>
  );
};
