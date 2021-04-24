import React, { useState } from "react";
import { Grid } from "./components/Grid"
import './App.css';

const numRows = 50;
const numColumns = 50;

const App = () => {
  

  //need to use state because the cells will be changing with each generation

  return (
    <div>
      <Grid />
    </div>
  );
}

export default App;
