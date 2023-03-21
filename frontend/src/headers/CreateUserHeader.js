import {Link} from 'react-router-dom'

export default function CreateUserHeader() {
    return (
        <>
            <div className="titleContainer">
                <h2 className="appTitle">Drink Notes</h2>
            </div>


            <div className="navContainer">
                <Link to="/" className="navButton leftButton">Front Page</Link>
                <Link to="/login" className="navButton rightButton">Login</Link>
            </div>
      </>
    )
}