import React, { useState } from "react";

const numRows = 50;
const numColumns = 50;

const App = () => {
  const [grid, setGrid] = useState(() => {
    // this is the initial state I want to call
    const rows = [];
    for (let i = 0; i < numRows.length; i ++) {
      rows.push();
    }
    console.log(rows);
  });

  //need to use state because the cells will be changing with each generation

  return (
    <div>Hi</div>
  );
}

export default App;
