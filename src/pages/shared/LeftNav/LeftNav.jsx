import React, { useEffect, useState } from "react";
import "./LeftNav.css";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import EditorInsights from "../../News/EditorInsights/EditorInsights";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  const numbers = [3,4,5];
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="fw-bold">All Categories</h2>
      <h3 className="fw-semibold bg-warning text-white fs-4 p-2 rounded text-center">
        National News
      </h3>
      <ul className="list-unstyled lh-lg">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none fs-5"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
       <Row xs={1} md={2} lg={1} className="g-4">
          {numbers.map((num) => (
            <EditorInsights num={num} key={num}></EditorInsights>
          ))}
       </Row>
    </div>
    </div>
  );
} 

export default LeftNav;
