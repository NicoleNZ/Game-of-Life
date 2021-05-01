import React from "react";
import { Grid } from "./components/Grid"
import './App.css';


const App = () => {
  

  return (
    <div>
      <Grid />
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
// import { Grid } from './components/Grid';
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