// import drinkStore from "../stores/drinkStore"
import { useNavigate } from "react-router-dom";

export default function Note({note}) {
    const navigate = useNavigate();
    // const store = drinkStore();

    const handleClick = (note) => {
        navigate("/onenote", {state: {note}});
    }


    return (
        <div key={note._id} className="drinkContainer" onClick={() => handleClick(note)}>
            <h2>{note.name}</h2>
            <h3>{note.type}</h3>
            <h3>{note.maker}</h3>
            {note.image
                ? <img src={note.image} alt="drink" className="drinkCardImage" />
                : <img src="https://cdn.pixabay.com/photo/2022/06/12/21/48/glass-7258948__480.png" alt="drink" className="drinkCardImage" />
            }           
            <p>Click this card for more details on this drink.</p>
      </div>
    )
}