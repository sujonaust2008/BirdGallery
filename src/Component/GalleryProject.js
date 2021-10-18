import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Bird1 from "../Asset/Image/Bird1.jpg";
import Bird2 from "../Asset/Image/Bird2.jpg";
import Bird3 from "../Asset/Image/Bird3.jpg";
import "../Asset/css/coustom.css";
import "../Asset/css/bootstrap.min.css";

class GalleryProject extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h2 className="text-primary text-uppercase mt-5">
            My Recent Porject
          </h2>
          <h4 className="text-danger mt-4 mb-4">Bird Gallery</h4>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="img-wapper">
                <img variant="top" src={Bird1} className="hover-zoom" alt="" />
                <div className="card-content">
                  <h3 className="birdTitle">Card Title</h3>
                  <p className="birdSubTitle">
                    Some quick example text to build on the card title and make
                    up the bulk of the card.
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="img-wapper">
                <img variant="top" src={Bird2} className="hover-zoom" alt="" />
                <div className="card-content">
                  <h3>Card Title</h3>
                  <p className="">
                    Some quick example text to build on the card title and make
                    up the bulk of the card.
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="img-wapper">
                <img variant="top" src={Bird3} className="hover-zoom" alt="" />
                <div className="card-content">
                  <h3>Card Title</h3>
                  <p className="">
                    Some quick example text to build on the card title and make
                    up the bulk of the card.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col lg={4} md={6} sm={12}>
              <div className="birdCard">
                <div className="birdBg1"></div>
                <div className="birdBg-content">
                  <h3>Card Title</h3>
                  <p className="">
                    Some quick example text to build on the card title and make
                    up the bulk of the card.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="birdCard">
                <div className="birdBg1"></div>
                <div className="birdBg-content">
                  <h3>Card Title</h3>
                  <p className="">
                    Some quick example text to build on the card title and make
                    up the bulk of the card.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="birdCard">
                <div className="birdBg1"></div>
                <div className="birdBg-content">
                  <h3>Card Title</h3>
                  <p className="">
                    Some quick example text to build on the card title and make
                    up the bulk of the card.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default GalleryProject;
