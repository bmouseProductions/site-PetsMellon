import { Accordion } from "react-bootstrap";
import { Servicos } from "../../components/style";
import { IoPawOutline } from "react-icons/io5";
import { HeaderEN } from "../../components/Header/indexEN";
import { FooterEN } from "../../components/Footer/indexEN";
import { ButtonUp } from "../../components/BtnUp";

export const ServicoEN = () => {
  return (
    <div className="bg-light fade-in">
      <HeaderEN />
      <Servicos className="gap-3">
        <div className="w-100 d-flex gap-3 flex-column">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <IoPawOutline className="text-muted" size={40} />
            <h1 className="ms-3 text-muted">Our Services</h1>
          </div>
          <p className="text-center lh-6 text-dark">
            Pets Mellon has a high standard in technology and development. The
            company aimed to innovate in the development of its services with
            the purpose of providing our clients not only top-quality products,
            but also an outstanding experience with our services.
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
                  Industrialization of complete and incomplete food
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Efficiency and Technology are basic precepts for any Pets Mellon
                industry. We are prepared to produce your product on large scale
                with the maximum standard of quality.
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
                  Complete and incomplete product storage
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                We have a complete structure for product storage in our physical
                infrastructure. The entire company has SIF (Federal Inspection
                Service) and is prepared to better serve you.
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
                  Creation of promotional kits for your brand
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Pets Mellon always seeks innovation and we work suggesting
                promotional kits that can be inserted into the sales proposal of
                each partner brand. We elaborate, create and suggest different
                ways for a distinct performance by the brand within the pet
                market.
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
                  Marketing assistance for product development
                </h4>
              </Accordion.Header>
              <Accordion.Body
                className="w-100 p-0 pt-2 pb-2 text-white"
                style={{ fontSize: "1.1rem" }}
              >
                Marketing assistance for product development
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <ButtonUp />
      </Servicos>
      <FooterEN />
    </div>
  );
};
