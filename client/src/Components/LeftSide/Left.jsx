import React from "react";
import useStyles from "./Styles";
import { Container, Row, Col } from "react-bootstrap";

const Left = () => {
  const classes = useStyles();
  let labelLeft = ["e books", "Movies", "podcasts", "music"];
  let labelRight = ["audiobook", "short film", "TV shows", "software"];
  return (
    <div>
      <Container>
        <h1 className={classes.left}>Itunes search API</h1>
        <input
          className={classes.input}
          type="text"
          placeholder="Search"
          required
        />
        <input type="radio" className={classes.all} name="rad" />
        <label>Search all content</label>
        <Row>
          <Col xl={6}>
            {labelLeft.map((l, i) => (
              <div key={i}>
                <input type="radio" name="rad" className={classes.radio} />
                <label>{l}</label>
              </div>
            ))}
          </Col>
          <Col xl={6}>
            {labelRight.map((l, i) => (
              <div key={i}>
                <input type="radio" name="rad" className={classes.radio} />
                <label>{l}</label>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Left;
