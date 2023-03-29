import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import FrontPage from "../pages/FrontPage";
import HomePage from "../pages/HomePage"
import FrontPageLoggedIn from "../pages/FrontPageLoggedIn"
import "../styles/style.css";
import CreateNotePage from "../pages/CreateNotePage";
import ViewOneNotePage from "../pages/ViewOneNotePage";
import EditNotePage from "../pages/EditNotePage";
import SearchPage from "../pages/SearchPage";

function App() {

  return (
      <div className="pageBackground">

        <BrowserRouter>


          <Routes>

            {/* not logged in front page */}
            <Route exact path="/" element={<FrontPage /> } />

            {/* user routes  */}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />

            {/* notes routes  */}
            <Route path="/createnote" element={<CreateNotePage />} />
            <Route path="/notespage" element={<NotesPage /> } />  
            <Route path="/onenote" element={<ViewOneNotePage />} />
            <Route path="/editnote" element={<EditNotePage />} />

            <Route path="/searchpage" element={<SearchPage />} />
            

            <Route path="/homepage" element={<HomePage />} />
            <Route path="/frontpageloggedin" element={<FrontPageLoggedIn />} />       


          </Routes>
        </BrowserRouter>     
      </div>
  );
}

export default App;
