import {Link} from 'react-router-dom'

export default function HomeHeader() {
    return (
        <>
            <div className="titleContainer">
                <h1 className="appTitle">Drink Notes</h1>
            </div>


            <div className="navContainer">
                <Link to="/frontpageloggedin" className="navButton leftButton">Front</Link>
                <Link to="/logout" className="navButton rightButton">Logout</Link>
            </div>
      </>
    )
}