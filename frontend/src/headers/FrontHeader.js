import {Link} from 'react-router-dom'

export default function FrontHeader() {
    return (
        <>
            <div className="titleContainer">
                <h1 className="appTitle">Drink Notes</h1>
            </div>


            <div className="navContainer">
                <Link to="/signup" className="navButton leftButton">Signup</Link>
                <Link to="/login" className="navButton rightButton">Login</Link>
            </div>
      </>
    )
}