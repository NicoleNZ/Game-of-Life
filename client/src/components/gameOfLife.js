
// const createGrid = (rows) => {
//     const gridArray = [];
//     for (let i = 0; i < rows; i ++) {
//         gridArray[i] = [];
//     };
//     return gridArray;
// };

// console.log(createGrid(3));

//Create 2D array to form the grid

const gameOfLifeObjectArray = [];

//Create a list of all the possible neighbours a cell might have

const findNeighbours = [[0, 1], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1], [1, 0], [-1, 0]];

//Create function to generate first generation

const firstGeneration = () => {

    //create function to randomly assign dead or alive to each cell

    const assignFirstState = (max) => {
        let outcome = Math.floor(Math.random() * max);
        if (outcome === 0) {
            return false;
        } else if (outcome === 1) {
            return true;
        };
    };
    
    //Create FOR loop, to loop through each element in a given-sized grid
    //Create a new object with each iteration, that holds the cell location and randomly assigns dead or alive state via assignFirstState function  
    
    for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j ++) {
            const cell = {};
            cell['location'] = [i,j];
            cell['state'] = assignFirstState(2);
            gameOfLifeObjectArray.push(cell);
        };
    };
    console.log({gameOfLifeObjectArray});
    return gameOfLifeObjectArray;
};

firstGeneration();


const nextGeneration = () => {
    
    console.log(gameOfLifeObjectArray);
    
    for (let a = 0; a < gameOfLifeObjectArray.length; a ++) {
        
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

        console.log(gameOfLifeObjectArray[a].state);

    };
};

nextGeneration();

