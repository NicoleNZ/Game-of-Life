import { findNeighbours } from "../constants";

export const nextGeneration = (currentGrid) => {

    const gameOfLifeObjectArray = [...currentGrid];
    console.log(gameOfLifeObjectArray);

    for (let a = 0; a < gameOfLifeObjectArray.length; a ++) {
        console.log(gameOfLifeObjectArray[a])
        let i = gameOfLifeObjectArray[a].location[0];
        let j = gameOfLifeObjectArray[a].location[1];
        console.log("[i,j]", [i,j]);
        let numberOfAliveNeighbours = 0;

        findNeighbours.forEach( e => {
            
            const loc1 = i + e[0];
            const loc2 = j + e[1];
            console.log("i", i, "e[0]", e[0], "loc1", loc1);
            console.log("j",j,"e[1]", e[1],"loc2",loc2);
            
            const thisNeighbour = gameOfLifeObjectArray.findIndex(element => element.location[0] === loc1 && element.location[1] === loc2);
            if(gameOfLifeObjectArray[thisNeighbour] !== undefined) {
                if(gameOfLifeObjectArray[thisNeighbour].state === true) {
                    
                    numberOfAliveNeighbours = numberOfAliveNeighbours + 1;
                }
            };
        });
        console.log("number of alive neighbours", numberOfAliveNeighbours);

    //Create IF statements to handle each of the Game of Life rules
        
        console.log(gameOfLifeObjectArray[a].state);

        if(numberOfAliveNeighbours === 3 && gameOfLifeObjectArray[a].state === true) {
            gameOfLifeObjectArray[a].state = true;
        } else if(numberOfAliveNeighbours === 2 && gameOfLifeObjectArray[a].state === true) {
            gameOfLifeObjectArray[a].state = true;
        } else if(numberOfAliveNeighbours < 2) {
            gameOfLifeObjectArray[a].state = false;
        } else if(numberOfAliveNeighbours > 3) {
            gameOfLifeObjectArray[a].state = false;
        } else if(numberOfAliveNeighbours === 3 && gameOfLifeObjectArray[a].state === false) {
            gameOfLifeObjectArray[a].state = true
        };

        

    };
    console.log(gameOfLifeObjectArray);
    return gameOfLifeObjectArray;
    
};