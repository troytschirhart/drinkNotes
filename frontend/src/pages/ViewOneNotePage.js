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
                        {note.name && <div className="itemDiv"><h2 className="itemTitle">Name:&nbsp;</h2><h2 className="itemValue">{note.name}</h2></div>}
                        {note.category && <div className="itemDiv"><h2 className="itemTitle">Category:&nbsp;</h2><h2 className="itemValue">{note.category}</h2></div>}
                        {note.type && <div className="itemDiv"><h2 className="itemTitle">Type:&nbsp;</h2><h2 className="itemValue">{note.type}</h2></div>}
                        {note.maker && <div className="itemDiv"><h2 className="itemTitle">Maker:&nbsp;</h2><h2 className="itemValue">{note.maker}</h2></div>}

                        {note.image
                            ? <img src={note.image} alt="drink" className="exampleCardImage" />
                            : <img src="https://cdn.pixabay.com/photo/2018/01/27/16/27/drink-3111583__480.jpg" alt="drink" className="exampleCardImage" />
                        }    

                        {note.description && <div className="itemDiv"><h2 className="itemTitle">Description:&nbsp;</h2><h2 className="itemValue">{note.description}</h2></div>}
                        {note.rating && <div className="itemDiv"><h2 className="itemTitle">Rating:&nbsp;</h2><h2 className="itemValue">{note.rating}</h2></div>}
                        {note.notes && <div className="itemDiv"><h2 className="itemTitle">Notes:&nbsp;</h2><h2 className="itemValue">{note.notes}</h2></div>}

                    </div>


                    <button className="viewNoteButton" onClick={handleDelete}>Delete Drink Note</button>
                    <button className="viewNoteButton" onClick={handleUpdate} >Edit Drink Note</button>
                </div>
            </div>
    
        </div>
    )
}



