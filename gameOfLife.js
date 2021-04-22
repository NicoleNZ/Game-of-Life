//Create 2D array that forms the grid

// const createGrid = (rows) => {
//     const gridArray = [];
//     for (let i = 0; i < rows; i ++) {
//         gridArray[i] = [];
//     };
//     return gridArray;
// };

// const gameOfLight = createGrid(3);
// console.log(gameOfLight);

// const gameOfLifeStructureArray = [
//     [1,2,3],[4,5,6],[7,8,9]];
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],

// // ];

const getRandomInt = (max) => {
    let outcome = Math.floor(Math.random() * max);
    if (outcome === 0) {
        return false;
    } else if (outcome === 1) {
        return true;
    };
};

//Create FOR loop, to loop through each element in the array 
//Create a new object with each iteration, that holds the cell location and randomly assigns dead or alive state.

const gameOfLifeObjectArray = [];

for (let i = 0; i < 3; i ++) {
    for (let j = 0; j < 3; j ++) {
        const cell = {};
        cell['location'] = [i,j];
        cell['state'] = getRandomInt(2);
        gameOfLifeObjectArray.push(cell);
    };
};
console.log(gameOfLifeObjectArray);

//Create a list of all the possible neighbours a cell might have

const findNeighbours = [[0, 1], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1], [1, 0], [-1, 0]];

//Create function to count how many alive neighbours a cell has.
const runGame = () => {
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

runGame();


