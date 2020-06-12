import React from "react";
import store from "../img/bgstore.png";
import blog from "../img/bgblog.png";

export default function Featured() {
  return (
    <div className="feautured">
      <div className="featured-store">
        <div className="featured-image-wrap">
          <a
            href="https://to-store.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="featured-image-store"
              src={store}
              alt="featured-img"
            />
          </a>
        </div>
        <div className="featured-desciption">
          <h4 className="featured-title">E-STORE</h4>
          <ul className="featured-list">
            <li>made with React ver 16.8</li>
            <li>fully responsive, error 404 handling </li>
            <li>hooks, API Context, browser routing</li>
            <li>modals, CSS grids and animations</li>
            <li>Paypal payment and cart management</li>
          </ul>
        </div>
      </div>
      <div className="featured-blog">
        <div className="featured-image-wrap">
          <a
            href="https://to-myblog.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="featured-image-blog"
              src={blog}
              alt="featured-img"
            />
          </a>
        </div>
        <div className="featured-desciption">
          <h4 className="featured-title">BLOG</h4>
          <ul className="featured-list">
            <li>made with Gatsby</li>
            <li>React Helmet and site meta tags</li>
            <li>optimization of images in Markdown</li>
            <li>fully responsive, error 404 handling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
