import React from "react";
import { Col } from "react-bootstrap";
import { IoPawOutline, IoPersonOutline } from "react-icons/io5";
import { HiBellAlert } from "react-icons/hi2";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import Separator from "../../assets/image/blog_item_line.png";
import { format, isValid, parse } from "date-fns";
import { pt } from "date-fns/locale";

const BlogItem = ({ blog }) => {
  return (
    <Col sm={12} className="d-flex flex-column gap-3" data-aos="zoom-in">
      <img src={blog.image} alt="" className="w-100 rounded-3" />
      <div className="d-flex gap-3 text-muted ">
        <div className="d-flex gap-1 align-items-start ">
          <BsBookmark size={25} color={"#f52369"} />
          <h5 className="font-blog">{blog.title} /</h5>
        </div>
        <div className="d-flex gap-1 align-items-start ">
          <IoPersonOutline size={25} />
          <h5 className="font-blog">Admin /</h5>
        </div>
        <div className="d-flex gap-1 align-items-center">
          <HiBellAlert size={25} />
          <h5 className="font-blog">
            {isValid(
              parse(blog.post_day, "d 'de' MMMM 'de' yyyy", new Date(), {
                locale: pt,
              })
            )
              ? format(
                  parse(blog.post_day, "d 'de' MMMM 'de' yyyy", new Date(), {
                    locale: pt,
                  }),
                  "MMM dd, yyyy"
                )
              : "Invalid Date"}
          </h5>
        </div>
      </div>
      <h2>{blog.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html:
            blog.conteudo.slice(0, 200) +
            (blog.conteudo.length > 200 ? "..." : ""),
        }}
      ></div>

      <div className="d-flex align-items-center gap-3">
        <Link
          to={`/single-page/${blog.url_amigavel}`}
          style={{ color: "#f52369" }}
        >
          Leia Mais
        </Link>
        <IoPawOutline size={25} color={"#f52369"} />
      </div>
      <img src={Separator} alt="" />
    </Col>
  );
};

export default BlogItem;
