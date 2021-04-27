import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FirstGeneration } from "./FirstGeneration";
import { NextGeneration } from "./NextGeneration";

export const Grid = () => {
    
    const [grid, setGrid] = useState(FirstGeneration);
    
    const createGrid = [];

    let currentRow = -1;
    let columns = []; 

    for (let i = 0; i < grid.length; i++) {
        if(grid[i].location[0] > currentRow) {
            
            createGrid.push(columns);
            currentRow = grid[i].location[0];

            if(grid[i].location[0] === currentRow && grid[i].state === true) {
                columns.push(<div className="liveCell" style={{ display: "inline-flex" }}></div>)
            } 
            
            else if (grid[i].location[0] === currentRow && grid[i].state === false) {
                columns.push(<div className="deadCell" style={{ display: "inline-flex" }}></div>)
            }
        };
    };
    console.log({createGrid});

    return (
        <Container className="container">
        <Row>
            <Col>
                <Button onClick={() => setGrid(NextGeneration)}></Button>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className="grid"> 
                {createGrid.map((el) => {
                return el
                })}
            </div>
            </Col>
        </Row>
        </Container>
    );

}




