import {Link} from 'react-router-dom'

export default function FrontHeaderLoggedIn() {
    return (
        <>
            <div className="titleContainer">
                <h1 className="appTitle">Drink Notes</h1>
            </div>


            <div className="navContainer">
                <Link to="/homepage" className="navButton leftButton">Menu</Link>
                <Link to="/logout" className="navButton rightButton">Logout</Link>
            </div>
      </>
    )
}