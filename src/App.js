import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Signin from "./Signin";
import Signup from "./Signup";

function App(){
  return(
  <div>

<Router>
<Link to='/Home'>Home</Link> |
<Link to='/About'>About</Link> |
<Link to='/Signin'>Sign In</Link> |
<Link to='/Signup'>Sign Up</Link>

<Routes>
<Route path="/Home" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Signin" element={<Signin/>}/>
<Route path="/Signup" element={<Signup/>}/>
</Routes>
</Router>

</div>
)}

export default App;