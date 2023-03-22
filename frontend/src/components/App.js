import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import FrontPage from "../pages/FrontPage";
import HomePage from "../pages/HomePage"
import FrontPageLoggedIn from "../pages/FrontPageLoggedIn"
import "../styles/style.css";
import CreateNotePage from "../pages/CreateNotePage";

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

            {/* not logged in front page */}
            <Route index element={<FrontPage /> } />

            {/* user routes  */}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />

            {/* notes routes  */}
            <Route path="/createnote" element={<CreateNotePage />} />
            <Route path="/notespage" element={<RequireAuth> 
                                     <NotesPage /> 
                                   </RequireAuth>}  
            />
            

            <Route path="/homepage" element={<HomePage />} />
            <Route path="/frontpageloggedin" element={<FrontPageLoggedIn />} />

            


          </Routes>
        </BrowserRouter>     
      </div>
  );
}

export default App;
