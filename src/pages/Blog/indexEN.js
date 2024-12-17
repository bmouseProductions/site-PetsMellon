import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Blogs, Container, Item } from "../../components/style";
import { Batata } from "../../api";
import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { IoPawOutline, IoPersonOutline } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";
import { HiBellAlert } from "react-icons/hi2";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonUp } from "../../components/BtnUp";
import Separator from "../../assets/image/blog_item_line.png";
import { useNavigate, Link } from "react-router-dom";

export const Blog = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await Batata();
      console.log(response.data);
      setBlog(response.data);
    })();
  }, []);

  /*{blog.map((bloged, index) => {
        return(
            <p className='bg-dark'>{bloged.title}</p>
        )
        console.log(bloged.title)
    })}*/

  return (
    <div className="bg-light d-flex flex-column fade-in">
      <Header />
      <div className=" m-auto" style={{ width: "90%" }}>
        <h1 className="text-center mt-2">Noticías</h1>
        <div className="w-100 d-flex flex-column mt-5 blog-lg">
          <div className="blog-post ">
            <Row className="w-100 m-0 gap-5">
              <Col
                sm={12}
                className="d-flex flex-column gap-3"
                data-aos="zoom-in"
              >
                <img
                  src="https://kutto.netlify.app/img/blog/rc_post_thumb01.jpg"
                  alt=""
                  className="w-100 rounded-3"
                />
                <div className="d-flex gap-3 text-muted ">
                  <div className="d-flex gap-1 align-items-start ">
                    <BsBookmark size={25} color={"#f52369"} />
                    <h5 className="font-blog">Siberian Husky, Breed /</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-start ">
                    <IoPersonOutline size={25} />
                    <h5 className="font-blog">Admin /</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <HiBellAlert size={25} />
                    <h5 className="font-blog"> Mar 10, 2021</h5>
                  </div>
                </div>
                <h2>Online pet everything your pet needs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, excepturi nemo blanditiis inventore quis, mollitia
                  dignissimos dolore atque at perferendis laborum natus officia
                  molestiae beatae quod soluta minus, consequuntur sequi.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <Link to="/single-page" style={{ color: "#f52369" }}>
                    Leia Mais
                  </Link>
                  <IoPawOutline size={25} color={"#f52369"} />
                </div>
                <img src={Separator} alt="" />
              </Col>
              <Col
                sm={12}
                className=" d-flex flex-column gap-3"
                data-aos="zoom-in"
              >
                <img
                  src="https://kutto.netlify.app/img/blog/rc_post_thumb01.jpg"
                  alt=""
                  className="w-100 rounded-3"
                />
                <div className="d-flex gap-3 text-muted ">
                  <div className="d-flex gap-1 align-items-start ">
                    <BsBookmark size={25} color={"#f52369"} />
                    <h5 className="font-blog">Siberian Husky, Breed /</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-start ">
                    <IoPersonOutline size={25} />
                    <h5 className="font-blog">Admin /</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <HiBellAlert size={25} />
                    <h5 className="font-blog"> Mar 10, 2021</h5>
                  </div>
                </div>
                <h2>Online pet everything your pet needs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, excepturi nemo blanditiis inventore quis, mollitia
                  dignissimos dolore atque at perferendis laborum natus officia
                  molestiae beatae quod soluta minus, consequuntur sequi.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <a href="" style={{ color: "#f52369" }}>
                    Leia Mais
                  </a>
                  <IoPawOutline size={25} color={"#f52369"} />
                </div>
                <img src={Separator} alt="" />
              </Col>
              <Col
                sm={12}
                className=" d-flex flex-column gap-3"
                data-aos="zoom-in"
              >
                <img
                  src="https://kutto.netlify.app/img/blog/rc_post_thumb01.jpg"
                  alt=""
                  className="w-100 rounded-3"
                />
                <div className="d-flex gap-3 text-muted">
                  <div className="d-flex gap-1 align-items-start ">
                    <BsBookmark size={25} color={"#f52369"} />
                    <h5 className="font-blog">Siberian Husky, Breed /</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-start ">
                    <IoPersonOutline size={25} />
                    <h5 className="font-blog">Admin /</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <HiBellAlert size={25} />
                    <h5 className="font-blog"> Mar 10, 2021</h5>
                  </div>
                </div>
                <h2>Online pet everything your pet needs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, excepturi nemo blanditiis inventore quis, mollitia
                  dignissimos dolore atque at perferendis laborum natus officia
                  molestiae beatae quod soluta minus, consequuntur sequi.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <a href="" style={{ color: "#f52369" }}>
                    Leia Mais
                  </a>
                  <IoPawOutline size={25} color={"#f52369"} />
                </div>
                <img src={Separator} alt="" />
              </Col>
              <Col
                sm={12}
                className=" d-flex flex-column gap-3"
                data-aos="zoom-in"
              >
                <img
                  src="https://kutto.netlify.app/img/blog/rc_post_thumb01.jpg"
                  alt=""
                  className="w-100 rounded-3"
                />
                <div className="d-flex gap-3 text-muted">
                  <div className="d-flex gap-1 align-items-start ">
                    <BsBookmark size={25} color={"#f52369"} />
                    <h5 className="font-blog">Siberian Husky, Breed /</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-start ">
                    <IoPersonOutline size={25} />
                    <h5 className="font-blog">Admin /</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <HiBellAlert size={25} />
                    <h5 className="font-blog"> Mar 10, 2021</h5>
                  </div>
                </div>
                <h2>Online pet everything your pet needs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, excepturi nemo blanditiis inventore quis, mollitia
                  dignissimos dolore atque at perferendis laborum natus officia
                  molestiae beatae quod soluta minus, consequuntur sequi.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <a href="" style={{ color: "#f52369" }}>
                    Leia Mais
                  </a>
                  <IoPawOutline size={25} color={"#f52369"} />
                </div>
                <img src={Separator} alt="" className="mb-5" />
              </Col>
            </Row>
          </div>
          <div className="w-100 blog-width  mb-3" data-aos="fade-left">
            <Row className="w-100 m-0 gap-3">
              <Col
                sm={12}
                className="p-4 rounded-3 "
                style={{ backgroundColor: "#e7e8e5" }}
              >
                <h2 className="" style={{ color: "#f58525" }}>
                  Buscar
                </h2>
                <div className="d-flex align-items-center">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="buscar"
                    className="w-100 p-3 rounded-3 border-0 outline-none"
                  />
                  <Button
                    className="border-0 btn-light p-3 ms-2"
                    style={{ backgroundColor: "#f52369" }}
                  >
                    <AiOutlineSearch size={25} color={"#fff"} />
                  </Button>
                </div>
              </Col>
              <Col
                sm={12}
                className="d-flex flex-column p-4 rounded-3 gap-3"
                style={{ backgroundColor: "#e7e8e5" }}
              >
                <h2 className="" style={{ color: "#f58525" }}>
                  Categoria
                </h2>
                <a href="" style={{ color: "#4a1976" }}>
                  Dog 1
                </a>
                <img src={Separator} alt="" />
                <a href="" style={{ color: "#4a1976" }}>
                  Dog 2
                </a>
                <img src={Separator} alt="" />
                <a href="" style={{ color: "#4a1976" }}>
                  Dog 3
                </a>
                <img src={Separator} alt="" />
                <a href="" style={{ color: "#4a1976" }}>
                  Dog 4
                </a>
                <img src={Separator} alt="" />
              </Col>
              <Col
                sm={12}
                className="d-flex gap-5 flex-column p-4 rounded-3"
                style={{ backgroundColor: "#e7e8e5" }}
              >
                <h2 className="" style={{ color: "#f58525" }}>
                  Posts Recentes
                </h2>
                <div
                  className="rounded-3 d-flex flex-column gap-3"
                  data-aos="fade-up"
                >
                  <img
                    src="https://kutto.netlify.app/img/blog/rc_post_thumb01.jpg"
                    alt=""
                    className="w-100 rounded-3"
                  />
                  <h3 style={{ color: "#4a1976" }}>Lorem ipsum dolor.</h3>
                  <div className="d-flex gap-1 align-items-start">
                    <BiCalendar size={25} color={"#f52369"} />
                    <h5> Mar 10, 2021</h5>
                  </div>
                </div>
                <div
                  className=" rounded-3 d-flex flex-column gap-3"
                  data-aos="fade-up"
                >
                  <img
                    src="https://kutto.netlify.app/img/blog/rc_post_thumb01.jpg"
                    alt=""
                    className="w-100 rounded-3"
                  />
                  <h3 style={{ color: "#4a1976" }}>Lorem ipsum dolor.</h3>
                  <div className="d-flex gap-1 align-items-start">
                    <BiCalendar size={25} color={"#f52369"} />
                    <h5> Mar 10, 2021</h5>
                  </div>
                </div>
                <div
                  className=" rounded-3 d-flex flex-column gap-3"
                  data-aos="fade-up"
                >
                  <img
                    src="https://kutto.netlify.app/img/blog/rc_post_thumb01.jpg"
                    alt=""
                    className="w-100 rounded-3"
                  />
                  <h3 style={{ color: "#4a1976" }}>Lorem ipsum dolor.</h3>
                  <div className="d-flex gap-1 align-items-start ">
                    <BiCalendar size={25} color={"#f52369"} />
                    <h5> Mar 10, 2021</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <ButtonUp />
      </div>
      <Footer />
    </div>
  );
};
