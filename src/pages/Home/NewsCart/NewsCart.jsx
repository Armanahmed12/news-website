/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEye,
  faShareAlt,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
    
  const { _id, author, image_url, total_view, title, details, rating } = news;

  return (
    <Card className="text-center">
      <Card.Header className="d-flex justify-content-left py-0 align-items-center gap-2 py-2">
        <Card.Img
          style={{ width: "3rem", height: "3rem" }}
          className="rounded-circle"
          src={author.img}
        />
        <Card.Text className="d-flex flex-column m-0 text-start flex-grow-1">
          <span className="mb-0 fw-bold fs-5">
            {author.name ? author.name : "No Name"}
          </span>
          <span>
            {moment(author?.published_date).format("yyy-MM-Do")}
          </span>
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faBookmark} />
          <FontAwesomeIcon className="ms-2" icon={faShareAlt} />
        </Card.Text>
      </Card.Header>
      <Card.Body className="text-start">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Img className="img-fluid rounded" src={image_url} />
        <Card.Text className="py-3">
          {details.length < 250 ? (
            details
          ) : (
            <>
              {details.slice(0, 250)}....
              <Link to={`/news/${_id}`}
                style={{ cursor: "pointer" }}
                className="text-danger fw-bold fs-5 d-block"
              >
                Read more
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
          {/* <FontAwesomeIcon className="" icon={faStar}/>
         <FontAwesomeIcon icon={faStarHalfStroke}/> */}
         
         <div className="flex-grow-1 text-start text-secondary">
         <Rating
            placeholderRating={rating.number}
            emptySymbol={

                <FontAwesomeIcon icon={faStarHalfStroke}/>
              
            }
            placeholderSymbol={
              
                <FontAwesomeIcon className="text-warning" icon={faStar}/>

            }
            fullSymbol={
                <FontAwesomeIcon className="" icon={faStar}/>
            }
            readonly
          />
          <span className="text-dark fw-bold">{rating?.number}</span>
         </div>
          <div className="d-flex align-items-center gap-2">
          
                <FontAwesomeIcon icon={faEye}/>
                 <span className="fw-bold">{total_view}</span>
            
          </div>
       
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
