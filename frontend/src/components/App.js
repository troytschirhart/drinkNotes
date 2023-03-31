import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ShowExamplesPage from "../pages/ShowExamplesPage";
import OneExamplePage from "../pages/OneExamplePage";

function App() {

  return (
      <div className="pageBackground">

        <BrowserRouter>

          <Routes>

            {/* not logged in front page */}
            <Route exact path="/" element={<FrontPage /> } />

            {/* logged in front page */}
            <Route path="/frontpageloggedin" element={<FrontPageLoggedIn />} />  
            <Route path="/homepage" element={<HomePage />} />

            {/* user routes  */}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />

            {/* notes routes  */}
            <Route path="/createnote" element={<CreateNotePage />} />
            <Route path="/notespage" element={<NotesPage /> } />  
            <Route path="/onenote" element={<ViewOneNotePage />} />
            <Route path="/editnote" element={<EditNotePage />} />

            {/* search route */}
            <Route path="/searchpage" element={<SearchPage />} />

            {/* examples routes */}
            <Route path="/allexamples" element={<ShowExamplesPage />} />
            <Route path="/oneexample" element={<OneExamplePage />} />             

          </Routes>

        </BrowserRouter>     

      </div>
  );
}

export default App;
