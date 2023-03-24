import HomeHeader from '../headers/HomeHeader'
import { Link } from 'react-router-dom'
import drinkStore from "../stores/drinkStore"
import { useEffect } from 'react';

export default function FrontPage() {

    const store = drinkStore();

    useEffect(() => {
        store.fetchDrinks()
    },[])

    return (
        <div>
            <HomeHeader />

            <div className='mainMenu'>
                <h1>Drink Notes Menu</h1>
                <Link to="/createnote" className="menuButton">Add a Drink Note</Link>
                <Link to="/notespage" className="menuButton">View All Your Drink Notes</Link>
                <Link to="/notespage" className="menuButton">Search Your Drink Notes</Link>
                <Link to="/notespage" className="menuButton">View Example Drink Notes</Link>

            </div>


        </div>
    )
}