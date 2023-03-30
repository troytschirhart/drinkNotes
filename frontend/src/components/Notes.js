import authStore from "../stores/authStore";
import drinkStore from "../stores/drinkStore"
import Note from "./Note"
import FrontHeaderLoggedIn from "../headers/FrontHeaderLoggedIn"

export default function Notes () {
    const store = drinkStore();

    // const checkStore = authStore();
    // console.log("notes component: " + checkStore.loggedIn);

    let notesToShow;

    if (store.showFound) {
      notesToShow = store.foundNotes;
    } else {
      notesToShow = store.drinkNotes;
    }

    console.log("store.showFound: " + store.showFound);
    console.log("notesToShow: " + JSON.stringify(notesToShow));

    return (
      <div>

        <FrontHeaderLoggedIn />

        <div className="containerContainer">
          {notesToShow &&
            notesToShow.map((note) => {
              return (
                  <Note key={note._id} note={note} />
              )
            })}
        </div>

      </div>
    )
}