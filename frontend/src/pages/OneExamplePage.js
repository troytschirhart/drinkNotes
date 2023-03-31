
import FrontHeaderLoggedIn from "../headers/FrontHeaderLoggedIn";
import { useLocation } from "react-router-dom";

export default function OneExamplePage () {

    const { state } = useLocation();
    const { note } = state || {};

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
                            : <img src="https://cdn.pixabay.com/photo/2022/06/12/21/48/glass-7258948__480.png" alt="drink" className="drinkCardImage" />
                        }    

                        {note.description && <div className="itemDiv"><h2 className="itemTitle">Description:&nbsp;</h2><h2 className="itemValue">{note.description}</h2></div>}
                        {note.rating && <div className="itemDiv"><h2 className="itemTitle">Rating:&nbsp;</h2><h2 className="itemValue">{note.rating}</h2></div>}
                        {note.notes && <div className="itemDiv"><h2 className="itemTitle">Notes:&nbsp;</h2><h2 className="itemValue">{note.notes}</h2></div>}
                    </div>

                </div>
            </div>
    
        </div>
    )
}