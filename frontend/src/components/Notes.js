import drinkStore from "../stores/drinkStore"
import Note from "./Note"
import FrontHeaderLoggedIn from "../headers/FrontHeaderLoggedIn"

export default function Notes () {
    const store = drinkStore();

    let notesToShow;

    if (store.showFound) {
      notesToShow = store.foundNotes;
    } else {
      notesToShow = store.drinkNotes;
    }

    return (
      <div>

        <FrontHeaderLoggedIn />

        {notesToShow.length === 0 
          ? (<h2 className="noneFound">No Drink Notes Were Found</h2>)
          : <div className="containerContainer">
              {notesToShow &&
                notesToShow.map((note) => {
                  return (
                      <Note key={note._id} note={note} />
                  )
                })}
            </div>
        }

      </div>
    )
}