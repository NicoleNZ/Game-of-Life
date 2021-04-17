//Create 2D array

const gameOfLifeStructureArray = [[1,2,3],[4,5,6],[7,8,9]]; //plan to expand this to a larger array structure once I have the functionality working
const gameOfLifeObjectArray = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Create FOR loop, to loop through each element in the array 
//Create a new object with each iteration, that holds the cell location and randomly assigns dead or alive state.

for (let i = 0; i < gameOfLifeStructureArray.length; i ++) {
    for (let j = 0; j < gameOfLifeStructureArray[i].length; j ++) {
        const cell = {};
        cell['location'] = [i,j];
        cell['state'] = getRandomInt(2);
        gameOfLifeObjectArray.push(cell);
    };
};
console.log(gameOfLifeObjectArray[0].state);
//Create function to count how many alive neighbours a cell has

let numberOfAliveNeighbours = 0;

for (let i = 0; i < gameOfLifeObjectArray.length; i ++) {
    if (gameOfLifeObjectArray[i].state === 1) {
        numberOfAliveNeighbours = numberOfAliveNeighbours + 1;
    };
};

console.log(numberOfAliveNeighbours);

//Create IF statements to handle each of the Game of Life rules







