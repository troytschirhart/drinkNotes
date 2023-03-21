import authStore from "../stores/authStore";
import drinkStore from "../stores/drinkStore"
import Note from "./Note"

export default function Notes () {
    const store = drinkStore();

    const checkStore = authStore();
    console.log("notes component: " + checkStore.loggedIn);

    return (
        <div>
        <h2>Drink Notes</h2>
        {store.drinkNotes &&
          store.drinkNotes.map((note) => {
            return (
                <Note key={note._id} note={note} />
            )
          })}
      </div>
    )
}