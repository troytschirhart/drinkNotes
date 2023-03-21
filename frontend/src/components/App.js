import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import FrontPage from "../pages/FrontPage";
import "../styles/style.css";

function App() {

  return (
      <div className="pageBackground">

        <BrowserRouter>

        

        {/* <div className="titleContainer">
          <h2 className="appTitle">Drink Notes</h2>
        </div>

        <div className="navContainer">
          <Link to="/signup" className="navButton leftButton">Signup</Link>
          <Link to="/login" className="navButton rightButton">Login</Link>
        </div> */}



          {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/logout">Logout</Link>
          </nav> */}

          <Routes>

          <Route index element={<FrontPage /> } 

            // {/* <Route index element={<RequireAuth> 
            //                         <NotesPage /> 
            //                       </RequireAuth>}  */}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/logout" element={<LogoutPage />} />


          </Routes>
        </BrowserRouter>     
      </div>
  );
}

export default App;
