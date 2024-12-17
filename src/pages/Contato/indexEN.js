import { HeaderEN } from "../../components/Header/indexEN";
import { FooterEN } from "../../components/Footer/indexEN";
import { Contatos, Container, ClientesCards } from "../../components/style";
import { Button, Form, Col, Row, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { IoPawOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GiSittingDog } from "react-icons/gi";
import { ButtonUp } from "../../components/BtnUp";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

export const ContatoEN = () => {
  const [loading, setLoading] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true);
    axios
      .post("https://backend-a63h.onrender.com/enviar-email", {
        nome: event.target.nome.value,
        email: event.target.email.value,
        telefone: event.target.telefone.value,
        cidadeUF: event.target.cidadeUF.value,
        empresa: event.target.empresa.value,
        mensagem: event.target.mensagem.value,
      })
      .then(() => {
        setLoading(false);
        toast.success("Mensagem enviada com sucesso!");
        event.target.reset();
      })
      .catch(() => {
        setLoading(false);
        toast.error("Erro ao enviar a mensagem.");
      });
  }

  return (
    <div className="bg-light fade-in">
      <HeaderEN />
      <ToastContainer />
      <Container>
        <div className="d-flex text-center gap-2 mt-2  w-100 justify-content-center">
          <h1 className="mb-2 p-0 m-0 text-left" style={{ color: "#FF9200" }}>
            Our
          </h1>
          <h1 className="mb-2 p-0 m-0 text-muted ">Contacts</h1>
        </div>
        <Contatos className="fade-in">
          <div className="w-100">
            <div
              className="d-flex flex-column align-items-start justify-content-center gap-3"
              style={{ color: "#FF9200" }}
            >
              <p className="text-muted text-left">
                Your questions or suggestions are important to us. To contact
                us, please fill out the fields below and/or contact us by e-mail
                and phone below:
              </p>
              <a href="tel:+553732495000" className="link-especial">
                ITAÚNA (37) 3249-5000
              </a>
              <a href="tel:+551734267400" className="link-especial">
                VOTUPORANGA (17) 3426-7400
              </a>
              <div
                className="d-flex align-items-center justify-content-center gap-2 "
                style={{ color: "#FF9200" }}
              >
                <a href="mailto:cv@petsmellon.com.br" className="link-especial">
                  Send resumes for:cv@petsmellon.com.br
                </a>
              </div>
            </div>
          </div>
          <div className="w-100">
            <Form
              onSubmit={handleFormSubmit}
              method="post"
              className="w-100  mb-3 d-flex flex-column"
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="name"
                  placeholder="Full Name"
                  name="nome"
                  style={{ borderColor: "#FF9200" }}
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 bg-light"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  style={{ borderColor: "#FF9200" }}
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 bg-light"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="telefone"
                  placeholder="Phone"
                  name="telefone"
                  style={{ borderColor: "#FF9200" }}
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 bg-light"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="telefone"
                  placeholder="City/State"
                  name="cidadeUF"
                  style={{ borderColor: "#FF9200" }}
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 bg-light"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="telefone"
                  placeholder="Your Company"
                  name="empresa"
                  style={{ borderColor: "#FF9200" }}
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 bg-light"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message here..."
                  name="mensagem"
                  style={{ borderColor: "#FF9200" }}
                  className="bg-light"
                />
              </Form.Group>
              <Button
                type="submit"
                className="border-0 p-3  align-self-end"
                style={{ backgroundColor: "#FF9200" }}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" className="me-2" />
                ) : null}
                Send your message
              </Button>
            </Form>
          </div>
        </Contatos>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.7221691772975!2d-49.981675285077905!3d-20.39434208634542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bd5854e9541abf%3A0xab3c2c5b6e609ee2!2sAv.%20Em%C3%ADlio%20Arroio%20Hernandes%2C%203299%20-%20Pozzobon%2C%20Votuporanga%20-%20SP%2C%2015503-027!5e0!3m2!1sen!2sbr!4v1620658516072!5m2!1sen!2sbr"
          width="100%"
          height="268"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          className="mb-3"
        ></iframe>
      </Container>
      <ClientesCards className="w-100">
        <div className="text-center mt-5 d-flex flex-row m-auto">
          <h1 className="me-3 text-white">Contact Us</h1>
          <IoPawOutline className="" size={40} color={"#fff"} />
        </div>
        <Row className="w-100 p-2 gap-3">
          <Col
            data-aos="fade-up"
            data-aos-duration="2000"
            sm={10}
            xl={1}
            className="m-auto bg-light rounded-3 p-3  align-items-center justify-content-center shadow-lg"
          >
            <p className="d-flex gap-2 align-items-center">
              <GiSittingDog size={26} style={{ color: "#F58525" }} />
              Guilherme Marra - Sales Manager
            </p>
            <p className="d-flex gap-2 align-items-center">
              <AiOutlineMail size={26} style={{ color: "#F58525" }} />
              guilherme.marra@petsmellon.com.br
            </p>
            <p className="d-flex gap-2 align-items-center">
              <BsTelephone size={26} style={{ color: "#F58525" }} />
              +55 (17) 99718-1586
            </p>
          </Col>
          <Col
            data-aos="fade-up"
            data-aos-duration="2000"
            sm={10}
            xl={1}
            className="m-auto bg-light rounded-3 p-3  align-items-center justify-content-center shadow-lg"
          >
            <p className="d-flex gap-2 align-items-center">
              <GiSittingDog size={26} style={{ color: "#F58525" }} />
              Igor Gambarato - Supply Manager
            </p>
            <p className="d-flex gap-2 align-items-center">
              <AiOutlineMail size={26} style={{ color: "#F58525" }} />
              igor.gambarato@petsmellon.com.br
            </p>
            <p className="d-flex gap-2 align-items-center">
              <BsTelephone size={26} style={{ color: "#F58525" }} />
              +55 (17) 99615-1166
            </p>
          </Col>
          <Col
            data-aos="fade-up"
            data-aos-duration="2000"
            sm={10}
            xl={1}
            className="m-auto bg-light rounded-3 p-3 align-items-center justify-content-center shadow-lg"
          >
            <p className="d-flex gap-2 align-items-center">
              <GiSittingDog size={26} style={{ color: "#F58525" }} />
              Dário França - Sales Director
            </p>
            <p className="d-flex gap-2 align-items-center">
              <AiOutlineMail size={26} style={{ color: "#F58525" }} />
              dario.franca@patense.com.br
            </p>
            <p className="d-flex gap-2 align-items-center">
              <BsTelephone size={26} style={{ color: "#F58525" }} />
              +55 (34) 99687-1502
            </p>
          </Col>
        </Row>
        <div className="w-100" style={{ backgroundColor: "#F58525" }}>
          <h1 style={{ color: "#F58525" }}>.</h1>
        </div>
      </ClientesCards>
      <ButtonUp></ButtonUp>
      <FooterEN />
    </div>
  );
};
