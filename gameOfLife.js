//Create 2D array

const gameOfLifeStructureArray = [[1,2,3],[4,5,6],[7,8,9]]; //plan to expand this to a larger array structure once I have the functionality working
const gameOfLifeObjectArray = [];

function getRandomInt(max) {
    let outcome = Math.floor(Math.random() * max);
    if (outcome === 0) {
        return false;
    } else if (outcome === 1) {
        return true;
    };
};


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
console.log(gameOfLifeObjectArray);

//Create a list of all the possible neighbours a cell might have
// i - 1 && j - 1
// i - 1 && j + 1
// i - 1 && j
// i + 1 && j - 1
// i + 1 && j + 1
// i + 1 && j
// i && j - 1
// i && j + 1

//Create function to count how many alive neighbours a cell has.

let numberOfAliveNeighbours = 0;

for (let i = 0; i < gameOfLifeObjectArray.length; i ++) {
    if (gameOfLifeObjectArray[i].state === true) {
        numberOfAliveNeighbours = numberOfAliveNeighbours + 1;
    };
};

console.log(numberOfAliveNeighbours);

for (let outerArray = 0; outerArray < gameOfLifeObjectArray.length; outerArray ++) {
    for (let innerArray = 0; innerArray < gameOfLifeObjectArray[outerArray].length; innerArray ++) {
        if 
    };
};

//Create IF statements to handle each of the Game of Life rules







