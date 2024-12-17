import React, { useEffect, useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Batata } from "../../api";
import BlogItem from "../../components/Blog/blogItem";
import { ButtonUp } from "../../components/BtnUp";
import Separator from "../../assets/image/blog_item_line.png";
import BlogPost from "../../components/Blog/blogPost";

export const Blog = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Batata();
        console.log(response.data);
        setBlog(response.data);
      } catch (error) {
        // Trate o erro conforme necessário
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-light d-flex flex-column fade-in">
      <Header />
      <div className=" m-auto" style={{ width: "90%" }}>
        <h1 className="text-center mt-2">Notícias</h1>
        <div className="w-100 d-flex flex-column mt-5 blog-lg">
          <div className="blog-post mb-5">
            <Row className="w-100 m-0 gap-5">
              {blog.map((blogItem) => (
                <Col
                  sm={12}
                  className="d-flex flex-column gap-3"
                  data-aos="zoom-in"
                  key={blogItem.uuid}
                >
                  <BlogItem blog={blogItem} />
                </Col>
              ))}
            </Row>
          </div>
          <div className="w-100 blog-width  mb-3" data-aos="fade-left">
            <Row className="w-100 m-0 gap-5">
              <Col
                sm={12}
                className="d-flex gap-5 flex-column p-4 rounded-3"
                style={{ backgroundColor: "#e7e8e5" }}
              >
                <h2 className="" style={{ color: "#f58525" }}>
                  Posts Recentes
                </h2>
              </Col>
              {blog
                .sort((a, b) => new Date(b.post_day) - new Date(a.post_day))
                .map((blogItem) => (
                  <BlogPost key={blogItem.uuid} blog={blogItem} />
                ))}
            </Row>
          </div>
        </div>
        <ButtonUp />
      </div>
      <Footer />

      <Modal show={loading} backdrop="static" keyboard={false}>
        <Modal.Body>
          <h5>Loading...</h5>
        </Modal.Body>
      </Modal>
    </div>
  );
};
