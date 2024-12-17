import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Blogs, Container, Item } from "../../components/style";
import { Batata, ListBlogId } from "../../api";
import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { IoPawOutline, IoPersonOutline } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";
import { HiBellAlert } from "react-icons/hi2";
import { useMatch, useParams } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ButtonUp } from "../../components/BtnUp";
import { Link } from "react-router-dom";
import { format, isValid, parse, add } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

import { pt } from "date-fns/locale";

export const SinglePage = () => {
  const { url_amigavel } = useParams();

  const [rows, setRows] = useState({});

  useEffect(() => {
    (async () => {
      const response = await ListBlogId(url_amigavel);
      setRows(response);
    })();
  }, [url_amigavel]);

  console.log(rows.post_day); // ou console.log(blog.post_day) no caso do BlogItem
  const postDayUtc = new Date(rows.post_day);
  const timeZone = "America/Sao_Paulo"; // Substitua pelo fuso horário correto
  const postDayLocal = zonedTimeToUtc(postDayUtc, timeZone);
  const postDayLocalAdjusted = add(postDayLocal, { days: 1 });

  return (
    <div className="bg-light d-flex flex-column fade-in">
      <Header />
      <div className=" m-auto" style={{ width: "90%" }}>
        <h1 className="text-center text-muted mt-2">{rows.title}</h1>
        <Link to="/blog">
          <IoIosArrowRoundBack
            size={55}
            style={{ color: "f58525" }}
          ></IoIosArrowRoundBack>
        </Link>
        <div className="w-100 d-flex aling-items-center justify-content-center flex-column mt-2 blog-lg">
          <div className="blog-post ">
            <Row className="w-100 m-0 gap-5 m-auto mb-5">
              <Col
                sm={12}
                lg={10}
                xl={9}
                className="d-flex flex-column gap-3 m-auto"
                data-aos="zoom-in"
              >
                <img src={rows.image} alt="" className="w-100 rounded-3" />
                <div className="d-flex gap-3 text-muted ">
                  <div className="d-flex gap-1 align-items-center">
                    <HiBellAlert size={25} />
                    <h5 className="font-blog">
                      {isValid(postDayLocalAdjusted)
                        ? format(
                            postDayLocalAdjusted,
                            "d 'de' MMMM 'de' yyyy",
                            { locale: pt }
                          )
                        : "Invalid Date"}
                    </h5>
                  </div>
                </div>
                <h2>{rows.title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: rows.conteudo,
                  }}
                ></p>
              </Col>
            </Row>
          </div>
        </div>
        <ButtonUp></ButtonUp>
      </div>
      <Footer />
    </div>
  );
};
