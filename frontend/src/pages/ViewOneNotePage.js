import FrontHeaderLoggedIn from "../headers/FrontHeaderLoggedIn";
import drinkStore from "../stores/drinkStore"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ViewOneNotePage () {

    const navigate = useNavigate();
    const store = drinkStore();
    const { state } = useLocation();
    const { note } = state || {};

    const handleDelete = async () => {
        console.log("node._id: " + note._id);
        try {
            await store.deleteDrinkNote(note._id);
            navigate('/homepage');
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = () => {
        navigate('/editnote', {state: {note}});
    }

    return (
        <div>

            <FrontHeaderLoggedIn />

            <div className="containerContainer">
                <div key={note._id} className="oneDrinkCard">
                    <div>
                        {note.name && <h2>Name: {note.name}</h2>}
                        {note.category && <h2>Category: {note.category}</h2>}
                        {note.type && <h2>Type: {note.type}</h2>}
                        {note.maker && <h2>Maker: {note.maker}</h2>}
                        {note.image && <img className="drinkImage" src={note.image} alt=""/>}
                        {note.description && <h2>Description: {note.description}</h2>}
                        {note.rating && <h2>Rating: {note.rating}</h2>}
                        {note.notes && <h2>Notes: {note.notes}</h2>}
                    </div>


                    <button className="viewNoteButton" onClick={handleDelete}>Delete Drink Note</button>
                    <button className="viewNoteButton" onClick={handleUpdate} >Edit Drink Note</button>
                </div>
            </div>
    
        </div>
    )
}



