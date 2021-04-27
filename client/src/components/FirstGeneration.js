
export const FirstGeneration = () => {

    const gameOfLifeObjectArray = [];
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
        
        for (let i = 0; i < 10; i ++) {
            for (let j = 0; j < 10; j ++) {
                const cell = {};
                cell['location'] = [i,j];
                cell['state'] = assignFirstState(2);
                gameOfLifeObjectArray.push(cell);
            };
        };
        return gameOfLifeObjectArray;
    };