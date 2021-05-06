import React from "react";
import { Navigation } from "./components/Navigation";
import { Grid } from "./components/game/Grid"
import './App.css';
import { GalaxyContainer } from "./components/galaxy/GalaxyContainer";


const App = () => {
  

  return (
    <div>
      <Navigation />
      <div className="parent-container">
          <Grid />
      </div>
      <GalaxyContainer />
    </div>
  );
}

export default App;

// import React from 'react';

// import {
//   BrowserRouter,
//   Switch,
//   Route
// } from 'react-router-dom';
// import { Grid } from './components/game/Grid';
// import { SignIn } from "./components/user/SignIn"; 
// import { SignUp } from "./components/user/SignUp";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>

//           <Route exact path="/">
//             <SignIn /> 
//           </Route>
//           <Route exact path="/signup">
//             <SignUp /> 
//           </Route>
//           <Route exact path="/grid">
//           <Grid />
//           </Route>

//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// };
// export default App;