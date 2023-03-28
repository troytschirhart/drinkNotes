import authStore from "../stores/authStore";
import drinkStore from "../stores/drinkStore"
import Note from "./Note"
import FrontHeaderLoggedIn from "../headers/FrontHeaderLoggedIn"

export default function Notes () {
    const store = drinkStore();

    const checkStore = authStore();
    console.log("notes component: " + checkStore.loggedIn);

    return (
      <div>

        <FrontHeaderLoggedIn />

        <div className="containerContainer">
          {store.drinkNotes &&
            store.drinkNotes.map((note) => {
              return (
                  <Note key={note._id} note={note} />
              )
            })}
        </div>

      </div>
    )
}