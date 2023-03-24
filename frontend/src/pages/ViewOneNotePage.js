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
                        <h2>{note.name}</h2>
                        <h2>{note.category}</h2>
                        <h2>{note.type}</h2>
                        <h2>{note.maker}</h2>
                        <img className="drinkImage" src={note.image} alt=""/>
                        <h3>{note.description}</h3>
                        <h3>{note.rating}</h3> 
                        <h3>{note.notes}</h3>
                    </div>


                    <button className="viewNoteButton" onClick={handleDelete}>Delete Drink Note</button>
                    <button className="viewNoteButton" onClick={handleUpdate} >Edit Drink Note</button>
                </div>
            </div>
    
        </div>
    )
}



