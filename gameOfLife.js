//Create 2D array

const gameOfLife = [[1,2,3],[4,5,6],[7,8,9]];

//Create FOR loop to loop through each element in the array

for (let i = 0; i < gameOfLife.length; i ++) {
    for (let j = 0; j < gameOfLife[i].length; j ++) {
        console.log([i],[j])
    };
};
