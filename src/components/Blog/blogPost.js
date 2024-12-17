import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Separator from "../../assets/image/blog_item_line.png";

const BlogPost = ({ blog }) => {
  return (
    <Col sm={12} className="d-flex flex-column gap-3" data-aos="zoom-in">
      <img src={blog.image} alt="" className="w-100 rounded-3" />
      <div className="d-flex gap-3 text-muted "></div>
      <Link to={`/single-page/${blog.url_amigavel}`} style={{ color: "#000" }}>
        <h2>{blog.title}</h2>
      </Link>

      <img src={Separator} alt="" />
    </Col>
  );
};

export default BlogPost;
