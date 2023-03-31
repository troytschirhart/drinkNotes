import {exampleDrinks} from "../components/exampleDrinks";
import { useNavigate } from "react-router-dom";
import FrontHeaderLoggedIn from "../headers/FrontHeaderLoggedIn";

export default function ShowExamplesPage() {
    const navigate = useNavigate();

    const examples = exampleDrinks;

    const handleClick = (note) => {
        navigate("/oneexample", {state: {note}});
    }

    return (

        <div>

        <FrontHeaderLoggedIn />

        <div className="containerContainer">
          {examples.map((note) => {
              return (
                <div key={note._id} className="drinkContainer" onClick={() => handleClick(note)}>
                <h2>{note.name}</h2>
                <h3>{note.type}</h3>
                <h3>{note.maker}</h3>
                {note.image
                    ? <img src={note.image} alt="drink" className="drinkCardImage" />
                    : <img src="https://cdn.pixabay.com/photo/2018/01/27/16/27/drink-3111583__480.jpg" alt="drink" className="drinkCardImage" />
                }           
                <p>Click this card for more details on this drink.</p>
          </div>
              )
            })}
        </div>

      </div>

    )
}