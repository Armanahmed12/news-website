import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/shared/RightNav/RightNav";
import Home from "../pages/Home/Home/Home";

const NewsLayout = () => {
    return (
        <div>
        <Header></Header>
        <Container>
          <Row>
            <Col lg={9}><Home></Home></Col>
            <Col lg={3}>
               <RightNav></RightNav>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default NewsLayout;