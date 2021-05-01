import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FirstGeneration } from "./FirstGeneration";
import { nextGeneration } from "./NextGeneration";

export const Grid = () => {
  const [grid, setGrid] = useState([]);
  const [gridHtml, setGridHtml] = useState([]);

  useEffect(() => {
    const firstGen = FirstGeneration();
    setGrid(firstGen);
    transFormGridIntoHtml(firstGen);

    // let currentRow = -1;
    // let columns = [];
    // const createGrid = [];
    // for (let i = 0; i < firstGen.length; i++) {
        
    //     if (firstGen[i].location[0] === currentRow && firstGen[i].state === true) {
    //         columns.push(
    //             <div className="liveCell" style={{ display: "inline-flex" }}></div>
    //         )
    //     };
        
    //     if (firstGen[i].location[0] === currentRow && firstGen[i].state === false) {
    //         columns.push(
    //             <div className="deadCell" style={{ display: "inline-flex" }}></div>
    //         )
    //     } else if (firstGen[i].location[0] > currentRow) {
    //         createGrid.push(columns);
    //         currentRow = firstGen[i].location[0];
    //         columns = [];
    //     };
    // };
    // console.log("this is createGrid", createGrid);
    // setGrid(createGrid);
    // console.log("this is grid:", grid);
}, []);

  const transFormGridIntoHtml = (currentGrid) => {
    // console.log('currentGrid',currentGrid);
    let currentRow = 0;
    let columns = [];
    const createGridHtml = [];
    for (let i = 0; i < currentGrid.length; i++) {
        // console.log('check this: ', currentGrid[i].location[0]);
      if (currentGrid[i].location[0] === currentRow && currentGrid[i].state === true) {
          columns.push(<div className="liveCell" style={{ display: "inline-flex" }}></div>          
          )
      };
      
      if (currentGrid[i].location[0] === currentRow && currentGrid[i].state === false) {
        columns.push(
              <div className="deadCell" style={{ display: "inline-flex" }}></div>
          )
      } 
      else if (currentGrid[i].location[0] > currentRow && currentGrid[i + 1] !== undefined) {
        createGridHtml.push(columns);
        // console.log("hi columns: ", columns);
          currentRow = currentGrid[i].location[0];
          columns = [];
          if (currentGrid[i].location[0] === currentRow && currentGrid[i].state === true) {
            columns.push(<div className="liveCell" style={{ display: "inline-flex" }}></div>          
            )
          };
        
          if (currentGrid[i].location[0] === currentRow && currentGrid[i].state === false) {
            columns.push(
                <div className="deadCell" style={{ display: "inline-flex" }}></div>
            );
          }
      }
      else if (currentGrid[i + 1] === undefined) {
        createGridHtml.push(columns);
        // console.log("undefined columns", columns);
          currentRow = currentGrid[i].location[0];
          columns = [];
          if (currentGrid[i].location[0] === currentRow && currentGrid[i].state === true) {
            columns.push(<div className="liveCell" style={{ display: "inline-flex" }}></div>          
            )
          };
        
          if (currentGrid[i].location[0] === currentRow && currentGrid[i].state === false) {
            columns.push(
                <div className="deadCell" style={{ display: "inline-flex" }}></div>
            );
          }
          createGridHtml.push(columns);
      };
  };
  // console.log("this is createGridHtml", createGridHtml);
  setGridHtml(createGridHtml);
  };

  const processNextGeneration = () => {
    const newGrid = nextGeneration(grid);
    setGrid(newGrid);
    transFormGridIntoHtml(grid);
  };

  return (
    <Container className="grid-container">
      <Row>
        <Col>
          <Button onClick={processNextGeneration}>Button</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="grid">
            {gridHtml.map((el, i) => {
              return <span key={i}>{el}</span>;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

