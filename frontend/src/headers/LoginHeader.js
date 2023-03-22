import {Link} from 'react-router-dom'

export default function LoginHeader() {
    return (
        <>
            <div className="titleContainer">
                <h1 className="appTitle">Drink Notes</h1>
            </div>


            <div className="navContainer">
                <Link to="/" className="navButton leftButton">Front</Link>
                <Link to="/signup" className="navButton rightButton">Signup</Link>
            </div>
      </>
    )
}