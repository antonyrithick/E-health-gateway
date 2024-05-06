import React from "react";
import img1 from "../images/home/image1.png";
import img2 from "../images/home/image2.png";
import img3 from "../images/home/image3.png";
import { Carousel } from "react-bootstrap";
import img4 from "../images/home/image5.png";
import img5 from "../images/home/image6.png";

import "../css/home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Carousel interval={2000}>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6">
          <div class="text-center mb-4">
            <h1 class=" text-light animate__animated animate__fadeInDown p-3">
              Connecting You to Care, Anytime, Anywhere
            </h1>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 mt-2">
              <img
                src={img5}
                className="img-fluid border-rounded doc-pat"
                alt="Welcome"
              />
            </div>
            <div className="col-md-6 mt-2">
              <img
                src={img4}
                className="img-fluid border-rounded doc-pat"
                alt="Welcome"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-4">
        <div className="col-md-6">
          <div class="">
            <h5 class="text-success animate__animated animate__fadeInLeft">
              Expert Care, Just a Click Away
            </h5>
            <h5 class="animate__animated animate__fadeInLeft">
              Healthcare Without Boundaries
            </h5>
            <h5 class="animate__animated animate__fadeInLeft">
              Empowering Health Through Virtual Consultation
            </h5>
            <div className="container border border-blue-2">
              <h4>Our Address :</h4>
              <div className="text-center bg-light">
                <p>Antony Rithick</p>
                <p>R.S Puram</p>
                <p>Coimbatore</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 card">
          <div className="card-body">
            <h2 className="text-center mb-4">User</h2>
            <div className="d-grid mb-3">
              <a href="/login" className="btn btn-primary">
                User Login
              </a>
            </div>
            <div className="d-grid">
              <a href="/signup" className="btn btn-outline-primary">
                Register as User
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 card">
          <div className="card-body">
            <h2 className="text-center mb-4">Doctor</h2>
            <div className="d-grid mb-3 rounded bg-primary p-2">
              <Link to="/doclogin" className="text-center text-light text-decoration-none">Doctor Login</Link>
            </div>
            <div className="d-grid bg-light text-center">
              <h6 className="text-danger">Doctor's login only</h6>
              <p className="bg-light">if you need register</p>
              <a href="#contact" className="text-decoration-none">
                please Click to contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
