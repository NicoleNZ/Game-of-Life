import { findNeighbours } from "../constants";

export const nextGeneration = (currentGrid) => {

    const runNextGeneration = [...currentGrid];
    console.log(runNextGeneration);

    for (let a = 0; a < runNextGeneration.length; a ++) {
        console.log(runNextGeneration[a])
        let i = runNextGeneration[a].location[0];
        let j = runNextGeneration[a].location[1];
        console.log("[i,j]", [i,j]);
        let numberOfAliveNeighbours = 0;

        findNeighbours.forEach( e => {
            
            const loc1 = i + e[0];
            const loc2 = j + e[1];
            console.log("i", i, "e[0]", e[0], "loc1", loc1);
            console.log("j",j,"e[1]", e[1],"loc2",loc2);
            
            const thisNeighbour = runNextGeneration.findIndex(element => element.location[0] === loc1 && element.location[1] === loc2);
            if(runNextGeneration[thisNeighbour] !== undefined) {
                if(runNextGeneration[thisNeighbour].state === true) {
                    
                    numberOfAliveNeighbours = numberOfAliveNeighbours + 1;
                }
            };
        });
        console.log("number of alive neighbours", numberOfAliveNeighbours);

    //Create IF statements to handle each of the Game of Life rules
        
        console.log(runNextGeneration[a].state);

        if(numberOfAliveNeighbours === 3 && runNextGeneration[a].state === true) {
            runNextGeneration[a].state = true;
        } else if(numberOfAliveNeighbours === 2 && runNextGeneration[a].state === true) {
            runNextGeneration[a].state = true;
        } else if(numberOfAliveNeighbours < 2) {
            runNextGeneration[a].state = false;
        } else if(numberOfAliveNeighbours > 3) {
            runNextGeneration[a].state = false;
        } else if(numberOfAliveNeighbours === 3 && runNextGeneration[a].state === false) {
            runNextGeneration[a].state = true
        };

        

    };
    console.log(runNextGeneration);
    return runNextGeneration;
    
};