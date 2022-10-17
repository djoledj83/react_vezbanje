import React from "react";
import { Article } from "../../components";
import { cover01, cover02, cover03, cover04, cover05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          There is some of my work, different kind of tasks during the time.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={cover01}
            date="oct 23, 2019"
            title="Projekat izrade logoa za restoran Rob Roy u Beogradu, Savski Trg."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={cover02}
            date="oct 23, 2019"
            title="Projekat izrade logoa za restoran Rob Roy u Beogradu, Savski Trg."
          />
          <Article
            imgUrl={cover03}
            date="oct 23, 2019"
            title="Projekat izrade logoa za restoran Rob Roy u Beogradu, Savski Trg."
          />
          <Article
            imgUrl={cover04}
            date="oct 23, 2019"
            title="Projekat izrade logoa za restoran Rob Roy u Beogradu, Savski Trg."
          />
          <Article
            imgUrl={cover05}
            date="oct 23, 2019"
            title="Projekat izrade logoa za restoran Rob Roy u Beogradu, Savski Trg."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
