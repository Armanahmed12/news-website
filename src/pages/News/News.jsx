import {
  faArrowCircleRight,
  faArrowDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsights from "./EditorInsights/EditorInsights";

const News = () => {
  const expectedNews = useLoaderData();
  const numbers = [0, 1, 2];

  const { category_id, image_url, title, details } = expectedNews;
  console.log(category_id);
  return (
    <div>
      <Card>
        <Card.Img className="img-fluid p-3" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="text-dark fw-bold fs-4">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div>
        <h2 className="fw-bold fs-4 my-4">Editors Insights</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {numbers.map((num) => (
            <EditorInsights num={num} key={num}></EditorInsights>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default News;
