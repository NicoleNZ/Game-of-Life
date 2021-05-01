
export const FirstGeneration = () => {

    const gameOfLifeObjectArray = [];
        //create function to randomly assign dead or alive to each cell
    
        const assignFirstState = (max) => {
            let outcome = Math.floor(Math.random() * max);
            if (outcome < 5) {
                return false;
            } else if (outcome === 6) {
                return true;
            };
        };
        
        //Create FOR loop, to loop through each element in a given-sized grid
        //Create a new object with each iteration, that holds the cell location and randomly assigns dead or alive state via assignFirstState function  
        
        for (let i = 0; i < 50; i ++) {
            for (let j = 0; j < 50; j ++) {
                const cell = {};
                cell['location'] = [i,j];
                cell['state'] = assignFirstState(7);
                gameOfLifeObjectArray.push(cell);
            };
        };
        return gameOfLifeObjectArray;
    };