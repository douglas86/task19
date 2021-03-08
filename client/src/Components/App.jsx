import Left from "./LeftSide/Left";
import Right from "./RightSide/Right";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          <Left />
        </Col>
        <Col xl={6}>
          <Right />
        </Col>
      </Row>
    </div>
  );
};

export default App;
