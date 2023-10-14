import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./RightNav.css";
import QZone from "../QZone/QZone";
import bgImg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="p-2">
      <h2 className="fw-bold fs-3 mb-3">LogIn with</h2>
      <Button
        className="w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
        variant="outline-primary"
      >
        <FaGoogle /> LogIn with Google
      </Button>
      <Button
        className="w-100 my-2 fw-bold d-flex align-items-center justify-content-center gap-2"
        variant="outline-secondary "
      >
        <FaGithub /> LogIn with Github
      </Button>
      <div className="my-4">
        <h2 className="fw-bold fs-3 mb-3">Find Us On</h2>
        <ListGroup as="ol">
          <ListGroup.Item
            className="d-flex justify-content-left align-items-center gap-2 cursor-pointer"
            as="li"
          >
            <span className="bg-danger-subtle p-2 rounded-circle ">
              <FaFacebook className="text-danger d-flex" />
            </span>
            Facebook
          </ListGroup.Item>
          <ListGroup.Item
            className="d-flex justify-content-left align-items-center gap-2 cursor-pointer"
            as="li"
          >
            <span className="bg-danger-subtle p-2 rounded-circle">
              <FaInstagram className="text-danger d-flex" />
            </span>
            Instagram
          </ListGroup.Item>
          <ListGroup.Item
            className="d-flex justify-content-left align-items-center gap-2 cursor-pointer"
            as="li"
          >
            <span className="bg-danger-subtle p-2 rounded-circle">
              <FaTwitter className="text-danger d-flex" />
            </span>
            Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="text-center position-relative mt-4">
        <img style={{height:'400px'}} className="img-fluid w-100 rounded" src={bgImg} alt="" />
        <div style={{top:'20%'}} className="position-absolute text-white px-1">
          <h2 className="fw-bold fs-4">Create an Amazing Newspaper</h2>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
