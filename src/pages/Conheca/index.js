import { Button, Card, Row, Col } from "react-bootstrap";
import { Container, Sobre } from "../../components/style";
import QuemSomos from "../../assets/image/sobrepets.webp";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AiOutlineCheck } from "react-icons/ai";
import { ButtonUp } from "../../components/BtnUp";

export const Conheca = () => {
  return (
    <div className="bg-light d-flex flex-column justify-content-between fade-in w-100 ">
      <Header />
      <Container className="">
        <Sobre className="w-100" data-aos="fade-up" data-aos-duration="2000">
          <img
            src={QuemSomos}
            alt=""
            className="rounded-1"
            style={{ width: "100%" }}
          />
          <Card
            style={{ width: "100%" }}
            className="text-left border-0 mt-4 p-0 m-0 mb-4"
          >
            <Card.Body className="w-100 p-0">
              <div className="d-flex text-center gap-2">
                <h1
                  className="mb-2 p-0 m-0 text-left"
                  style={{ color: "#FF9200" }}
                >
                  Sobre
                </h1>
                <h1 className="mb-2 p-0 m-0 text-muted ">Nós</h1>
              </div>
              <Card.Text className="text-dark lh-6 p-0">
                Um novo negócio, mas há 50 anos com a mesma qualidade! Voltada
                para os produtos pet, nossa nova unidade traz a qualidade,
                inovação e sustentabilidade já marcados no DNA do Grupo Patense.
                Trabalhamos como co-packers para grandes marcas do Brasil e do
                mundo, produzindo inúmeros produtos para cães e gatos com
                excelência.
              </Card.Text>
            </Card.Body>
          </Card>
        </Sobre>
      </Container>
      <div className="p-0 m-0" style={{ backgroundColor: "#f58525" }}>
        <Row className="gap-3 p-3 d-flex justify-content-center w-100 m-0">
          <h1 className="text-white text-center">Qualidade Pets Mellon</h1>
          <Col
            sm={12}
            lg={5}
            className="d-flex flex-column p-4 gap-3 rounded-5 "
            style={{ backgroundColor: "#4a1976" }}
            data-aos="fade-up"
          >
            <h3 className="text-center" style={{ color: "#f58525" }}>
              Qualidade Pets Mellon
            </h3>
            <div className="d-flex flex-column gap-2 text-white">
              <span>
                <strong style={{ color: "#f58525" }}>Área Industrial:</strong>{" "}
                7500 m
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>
                  Número de Colaboradores:
                </strong>{" "}
                235 colaboradores
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Cidade:</strong>{" "}
                Votuporanga - SP
              </span>
            </div>
            <h3 className="text-center" style={{ color: "#f58525" }}>
              Capacidade de Produção
            </h3>
            <div className="d-flex flex-column gap-2  text-white">
              <span>
                <strong style={{ color: "#f58525" }}>Snacks (Petiscos):</strong>{" "}
                1500 ton/ano
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>
                  Body Parts (Bovinos, Suínos, Aves e Peixes):
                </strong>{" "}
                2.000 ton/ano
              </span>

              <span>
                <strong style={{ color: "#f58525" }}>
                  Alimentos Úmidos (Enlatados / Pouch):
                </strong>{" "}
                4.800 ton/ano
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>
                  Alimentos Úmidos (Lickable):
                </strong>{" "}
                144 ton/ano
              </span>
            </div>
          </Col>

          <Col
            sm={12}
            lg={5}
            className="d-flex flex-column p-4 gap-3 rounded-5"
            style={{ backgroundColor: "#4a1976" }}
            data-aos="fade-up"
          >
            <h3 className="text-center" style={{ color: "#f58525" }}>
              Capacidade de Produção
            </h3>
            <div className="d-flex flex-column text-white gap-2">
              <span>
                <AiOutlineCheck size={20} /> Produção e comercialização de
                alimentos completos e incompletos para animais de companhia.
              </span>
              <span>
                <AiOutlineCheck size={20} /> Produção e comercialização de
                ingredientes para alimentação animal.
              </span>
              <span>
                <AiOutlineCheck size={20} /> Petiscos para cães e gatos.
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Body Parts:</strong>Body
                Parts: bovinos, suínos, peixes, fêmur, canela, costela, rótula,
                vergalho, traqueia, esôfago, orelhas...
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Enlatados:</strong> 100g e
                280g
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Lickable: </strong>
                15gr
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Pouch: </strong>85g e 100g
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <ButtonUp></ButtonUp>
      <Footer />
    </div>
  );
};
