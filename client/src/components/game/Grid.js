import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FirstGeneration } from "./FirstGeneration";
import { nextGeneration } from "./NextGeneration";
import { transFormGridIntoHtml } from "./transFormGridIntoHtml";

export const Grid = () => {
  // grid datastructure
  const [grid, setGrid] = useState([]);
  // const [sameNewGridCount, setSameNewGridCount] = useState(0);

  // grid formed into html
  const [gridHtml, setGridHtml] = useState([]);

  // set grid for the first time on load
  useEffect(() => {
    const firstGen = FirstGeneration();
    const gridWithHtml = transFormGridIntoHtml(firstGen);

    setGrid(firstGen);
    setGridHtml(gridWithHtml);
  }, []);

  // get next generation of grid and set it
  const processNextGeneration = () => {
    const newGrid = nextGeneration(grid);

    const gridWithHtml = transFormGridIntoHtml(newGrid);

    setGrid(newGrid);
    setGridHtml(gridWithHtml);
  };

  return (
    <Container className="grid-container">
      <Row>
          <Button className="go-button" onClick={processNextGeneration}>Next Generation</Button>
      </Row>
      <Row>
        <Col>
          <div className="grid">{gridHtml}</div>
        </Col>
      </Row>
    </Container>
  );
};
