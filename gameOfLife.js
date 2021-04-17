//Create 2D array

const gameOfLifeStructureArray = [
    [1,2,3],[4,5,6],[7,8,9]];
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],

// ];



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
const gameOfLifeObjectArray = [];

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



//Create function to count how many alive neighbours a cell has.
const findNeighbours = [[0, 1], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1], [1, 0], [-1, 0]];

let numberOfAliveNeighbours = 0;

for (let a = 0; a < gameOfLifeObjectArray.length; a ++) {
    
    let i = gameOfLifeObjectArray[a].location[0];
    let j = gameOfLifeObjectArray[a].location[1];

    findNeighbours.forEach(([x,y]) => {
        const loc1 = i + x;
        const loc2 = j + y;

        if(gameOfLifeObjectArray[a].location[loc1,loc2] && gameOfLifeObjectArray[a].location[loc1,loc2]) {
            if (gameOfLifeObjectArray[a].state === true) {
                numberOfAliveNeighbours = numberOfAliveNeighbours + 1
            };
        };
});
};
console.log(numberOfAliveNeighbours);
//Create IF statements to handle each of the Game of Life rules

