import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FirstGeneration } from "./FirstGeneration";
import { nextGeneration } from "./NextGeneration";

export const Grid = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    let currentRow = -1;
    let columns = [];
    const createGrid = [];
    const firstGen = FirstGeneration();
    for (let i = 0; i < firstGen.length; i++) {
        
        if (firstGen[i].location[0] === currentRow && firstGen[i].state === true) {
            columns.push(
                <div className="liveCell" style={{ display: "inline-flex" }}></div>
            )
        };
        
        if (firstGen[i].location[0] === currentRow && firstGen[i].state === false) {
            columns.push(
                <div className="deadCell" style={{ display: "inline-flex" }}></div>
            )
        } else if (firstGen[i].location[0] > currentRow) {
            createGrid.push(columns);
            currentRow = firstGen[i].location[0];
            columns = [];
        };
    };
    console.log("this is createGrid", createGrid);
    setGrid(createGrid);
    console.log("this is grid:", grid);
}, []);

  const setNextGeneration = () => {
    const newGrid = nextGeneration(grid);
    setGrid(newGrid);
  };

  return (
    <Container className="container">
      <Row>
        <Col>
          <Button onClick={setNextGeneration}>Button</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="grid">
            {grid.map((el, i) => {
              return <span key={i}>{el}</span>;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
