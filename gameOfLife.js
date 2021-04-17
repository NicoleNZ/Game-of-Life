//Create 2D array

const gameOfLifeStructureArray = [[1,2,3],[4,5,6],[7,8,9]];
const gameOfLifeObjectArray = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Create FOR loop, to loop through each element in the array 
//Create a new object with each iteration which holds the cell location and randomly assigns dead or alive state.

for (let i = 0; i < gameOfLifeStructureArray.length; i ++) {
    for (let j = 0; j < gameOfLifeStructureArray[i].length; j ++) {
        const cell = {};
        cell['location'] = [i,j];
        cell['state'] = getRandomInt(2);
        gameOfLifeObjectArray.push(cell);
    };
};
console.log(gameOfLifeObjectArray);




