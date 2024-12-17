import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Contatos, Container, ClientesCards } from "../../components/style";
import { Button, Form, Col, Row, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { IoPawOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { GiSittingDog } from "react-icons/gi";
import { ButtonUp } from "../../components/BtnUp";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

export const Contato = () => {
  const [loading, setLoading] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("nome", event.target.nome.value);
    formData.append("email", event.target.email.value);
    formData.append("telefone", event.target.telefone.value);
    formData.append("cidadeUF", event.target.cidadeUF.value);
    formData.append("empresa", event.target.empresa.value);
    formData.append("mensagem", event.target.mensagem.value);
    formData.append("arquivo", event.target.arquivo.files[0]); // Use event.target.arquivo.files para acessar o arquivo selecionado

    axios
      .post("https://backend-a63h.onrender.com/enviar-email", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Importante definir o tipo de conteúdo como 'multipart/form-data' para envio de arquivo
        },
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
      <Header />
      <ToastContainer />
      <Container>
        <div className="d-flex text-center gap-2 mt-2  w-100 justify-content-center">
          <h1 className="mb-2 p-0 m-0 text-left" style={{ color: "#FF9200" }}>
            Nossos
          </h1>
          <h1 className="mb-2 p-0 m-0 text-muted ">Contatos</h1>
        </div>
        <Contatos className="fade-in">
          <div className="w-100">
            <div
              className="d-flex flex-column align-items-start justify-content-center gap-3"
              style={{ color: "#FF9200" }}
            >
              <p className="text-muted text-left">
                Valorizamos sua opinião e estamos sempre abertos a sugestões e
                dúvidas. Para entrar em contato conosco, por favor, preencha os
                campos abaixo com suas informações ou entre em contato através
                do e-mail e telefone fornecidos abaixo:
              </p>
              <a
                href="tel:+553438181800"
                className="link-especial d-flex gap-2 align-items-center"
              >
                <BsTelephone size={26} style={{ color: "#F58525" }} />
                +55 (34) 3818-1800
              </a>
              <a
                href="tel:+553438181853"
                className="link-especial d-flex gap-2 align-items-center"
              >
                <IoLogoWhatsapp size={26} style={{ color: "#F58525" }} />
                +55 (34) 3818-1853
              </a>
              <div
                className="d-flex align-items-center justify-content-center gap-2 "
                style={{ color: "#FF9200" }}
              >
                <a
                  href="mailto:vendas@patense.com.br"
                  className="link-especial d-flex gap-2 align-items-center"
                >
                  <AiOutlineMail size={26} style={{ color: "#F58525" }} />
                  vendas@patense.com.br
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
                  placeholder="Nome Completo"
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
                controlId="exampleForm.ControlSelect1"
              >
                <Form.Control
                  as="select"
                  name="setor"
                  style={{ borderColor: "#FF9200" }}
                  placeholder="Selecione um setor"
                >
                  <option value="">Selecione um setor</option>
                  <option value="vendas">Vendas</option>
                  <option value="suprimentos">Suprimentos</option>
                  <option value="diretoria">Diretoria</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className="mb-3 bg-light"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="telefone"
                  placeholder="Telefone"
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
                  placeholder="Cidade/ UF"
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
                  placeholder="Sua empresa"
                  name="empresa"
                  style={{ borderColor: "#FF9200" }}
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" name="arquivo" />
              </Form.Group>
              <Form.Group
                className="mb-3 bg-light"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Digite aqui sua mensagem..."
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
                Enviar sua Mensagem
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
      {/* <ClientesCards className="w-100">
        <div className="text-center mt-5 d-flex flex-row m-auto">
          <h1 className="me-3 text-white">Entre em Contato</h1>
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
              Guilherme Marra - Gerente de Vendas
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
              Igor Gambarato - Gerente de suprimentos
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
              Dário França - Diretor de Vendas
            </p>
            <p className="d-flex gap-2 align-items-center">
              <AiOutlineMail size={26} style={{ color: "#F58525" }} />
              dario.franca@patense.com.br
            </p>
            <p className="d-flex gap-2 align-items-center">
              <IoLogoWhatsapp size={26} style={{ color: "#F58525" }} />
              +55 (34) 99687-1502
            </p>
          </Col>
        </Row>
        <div className="w-100" style={{ backgroundColor: "#F58525" }}>
          <h1 style={{ color: "#F58525" }}>.</h1>
        </div>
      </ClientesCards> */}
      <ButtonUp></ButtonUp>
      <Footer />
    </div>
  );
};
