import React from 'react';
import firstImg from '../../../assets/editorsInsight1.png';
import secondImg from '../../../assets/editorsInsight2.png';
import thirdImg from '../../../assets/editorsInsight3.png';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const EditorInsights = ({num}) => {

    const perfectImg = () =>{

          if(num == 0){
            return firstImg;
          }
          else if(num == 1){
            return secondImg;
          }
          else{
            return thirdImg;
          }
          
    }
    return (
          <Col>
            <Card>
              <Card.Img variant="top" className="p-2 img-fluid" src={perfectImg()} />
              <Card.Body>
                <Card.Title className="fw-bold">21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                <Card.Text className="d-flex align-items-center gap-2 mt-4">
                  <FontAwesomeIcon className="text-primary" icon={faFile}/>
                  <span>Jan 4, 2022</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default EditorInsights;