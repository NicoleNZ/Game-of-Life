import { useState } from "react";

const testGrid = [
    { location: [ 0, 0 ], state: false },
    { location: [ 0, 1 ], state: false },
    { location: [ 0, 2 ], state: true },
    { location: [ 1, 0 ], state: false },
    { location: [ 1, 1 ], state: false },
    { location: [ 1, 2 ], state: true },
    { location: [ 2, 0 ], state: false },
    { location: [ 2, 1 ], state: false },
    { location: [ 2, 2 ], state: true }
];

export const Grid = () => {
    const [grid, setGrid] = useState(testGrid);
    
    const createGrid = [];

    let currentRow = -1;
    let columns = []; 

    for (let i = 0; i < grid.length; i++) {
        console.log({i});
        console.log(grid[i]);
        if(grid[i].location[0] > currentRow) {
            console.log("add row");
                createGrid.push(columns);

            currentRow = grid[i].location[0];

            if(grid[i].location[0] === currentRow) {
                columns.push(<div className="cell" style={{ width: "100px", height: "100px" }}>hi</div>)
            }
        };

    };
    console.log({createGrid});

    const renderGrid = createGrid.map((el) => {
        return <li>{el}</li>
    });

    return (
        <div> 
        <ul className="grid">{renderGrid}</ul>
        </div>
    );

}




