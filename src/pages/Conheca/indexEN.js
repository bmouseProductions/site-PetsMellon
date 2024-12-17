import { Button, Card, Row, Col } from "react-bootstrap";
import { Container, Sobre } from "../../components/style";
import QuemSomos from "../../assets/image/sobrepets.webp";
import { HeaderEN } from "../../components/Header/indexEN";
import { FooterEN } from "../../components/Footer/indexEN";
import { AiOutlineCheck } from "react-icons/ai";
import { ButtonUp } from "../../components/BtnUp";

export const ConhecaEN = () => {
  return (
    <div className="bg-light d-flex flex-column justify-content-between fade-in w-100 ">
      <HeaderEN />
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
                  About
                </h1>
                <h1 className="mb-2 p-0 m-0 text-muted ">us</h1>
              </div>
              <Card.Text className="text-dark lh-6 p-0">
                A new business, but for 50 years with the same quality! Focused
                on products for pets, our new unit brings quality, and
                sustainability already marked in the DNA of the Patense Group.
                We work as Copackers for major brands in Brazil and the world,
                producing numerous products for dogs and cats with excellence.
              </Card.Text>
            </Card.Body>
          </Card>
        </Sobre>
      </Container>
      <div className="p-0 m-0" style={{ backgroundColor: "#f58525" }}>
        <Row className="gap-3 p-3 d-flex justify-content-center w-100 m-0">
          <h1 className="text-white text-center">Pets Mellon Quality</h1>
          <Col
            sm={12}
            lg={5}
            className="d-flex flex-column p-4 gap-3 rounded-5 "
            style={{ backgroundColor: "#4a1976" }}
            data-aos="fade-up"
          >
            <h3 className="text-center" style={{ color: "#f58525" }}>
              Pets Mellon Quality
            </h3>
            <div className="d-flex flex-column gap-2 text-white">
              <span>
                <strong style={{ color: "#f58525" }}>Industrial Area:</strong>{" "}
                7500 m²
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>
                  Number of employees
                </strong>{" "}
                235 employees
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Town:</strong> Votuporanga
                - SP
              </span>
            </div>
            <h3 className="text-center" style={{ color: "#f58525" }}>
              Production Capacity
            </h3>
            <div className="d-flex flex-column gap-2  text-white">
              <span>
                <strong style={{ color: "#f58525" }}>Snacks:</strong> 1500
                tons/years
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>
                  Body Parts (Cattle, Pigs, Poultry and Fish):{" "}
                </strong>{" "}
                2,000 tons/year
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>
                  Wet Foods (Canned/Pouch):{" "}
                </strong>
                4,800 tons/year
              </span>

              <span>
                <strong style={{ color: "#f58525" }}>
                  Wet Foods (Lickable):
                </strong>
                144 ton/year
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
              Production Capacity
            </h3>
            <div className="d-flex flex-column text-white gap-2">
              <span>
                <AiOutlineCheck size={20} />
                Production and marketing of complete and incomplete pet food.
              </span>
              <span>
                <AiOutlineCheck size={20} />
                Production and marketing of ingredients for animal feed.
              </span>
              <span>
                <AiOutlineCheck size={20} />
                Snacks for dogs and cats
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Body Parts:</strong>bovine,
                porcine, fish, femur, shin, rib, kneecap, genitals, trachea,
                esophagus, ears...
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Canned:</strong>100g and
                280g
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Lickable: </strong>
                15gr
              </span>
              <span>
                <strong style={{ color: "#f58525" }}>Pouch: </strong>85g and
                100g
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <ButtonUp></ButtonUp>
      <FooterEN />
    </div>
  );
};
