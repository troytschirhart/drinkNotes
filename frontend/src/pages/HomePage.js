import HomeHeader from '../headers/HomeHeader'
import { Link } from 'react-router-dom'

export default function FrontPage() {


    return (
        <div>
            <HomeHeader />

            <div className='appExplanation'>
                <h2>Drink Notes Menu</h2>
                <button>Add a Drink Note</button>
                <Link to="/createnote" className="navButton leftButton">Add a Drink Note</Link>
                <Link to="/notespage" className="navButton leftButton">Notes</Link>
                <button>See All Drink Notes</button>
                <button>Search for a Drink Note</button>

            </div>


        </div>
    )
}