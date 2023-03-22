import {Link} from 'react-router-dom'

export default function LogoutHeader() {
    return (
        <>
            <div className="titleContainer">
                <h1 className="appTitle">Drink Notes</h1>
            </div>


            <div className="navContainer">
                <Link to="/" className="navButton leftButton">Front</Link>
                <Link to="/login" className="navButton rightButton">Login</Link>
            </div>
      </>
    )
}