import FrontHeaderLoggedIn from "../headers/FrontHeaderLoggedIn"
import SearchForm from "../components/SearchForm"

export default function SearchPage()  {

    return (

        <div>
            <FrontHeaderLoggedIn />

            <div className='mainMenu'>
                <h2>Search Your Drink Notes</h2>
                <h3>Select Drink Categories, Enter Search Terms, then Click the "Search" Button</h3>
 
                <SearchForm />
            </div>

        </div>

    )
}