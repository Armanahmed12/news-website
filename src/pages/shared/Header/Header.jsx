import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container, } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import NavigationPage from "../NavigationPage/NavigationPage";

const Header = () => {

  return (
    <Container className="my-3">
      <div className="text-center">
        <img style={{height:'8vh',width:'50%'}} src={logo} alt="" />
        <br />
        <small className="fw-semibold fs-5 text-danger my-1 d-block">
          Journalism Without Fear or Favour
        </small>
        <p className="fw-medium mb-1">{moment().format("ddd, MMMM Do, YYYY")}</p>
      </div>
      <div className="bg-dark d-flex p-2 mb-2">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-white" pauseOnHover>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure neque, ea consequuntur nam nobis ut possimus doloremque ab voluptatum nesciunt.
        </Marquee>
      </div>
       <NavigationPage></NavigationPage>
    </Container>
  );
};

export default Header;
