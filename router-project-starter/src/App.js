import "./App.css";
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="absolute w-screen h-full overflow-scroll bg-richblack-900 flex flex-col bg-contain">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}></Home>}></Route>
        {/* react based on spa so server will load html file only once ..thats why if we write in url /dashboard it loads html file again hence we go to login page instead of dashboard so we have to dynamically change the components inside single load in file */}
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        <Route path="dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }></Route>
      </Routes>
    </div> 
  );
}

export default App;
