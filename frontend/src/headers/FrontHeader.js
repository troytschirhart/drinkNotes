import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="titleContainer">
                <h2 className="appTitle">Drink Notes</h2>
            </div>


            <div className="navContainer">
                <Link to="/signup" className="navButton leftButton">Signup</Link>
                <Link to="/login" className="navButton rightButton">Login</Link>
            </div>
      </>
    )
}