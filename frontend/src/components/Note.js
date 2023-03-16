import drinkStore from "../stores/drinkStore"

export default function Note({note}) {

    const store = drinkStore(store => {
        return { deleteDrinkNote: store.deleteDrinkNote, toggleUpdate: store.toggleUpdate}
    })

    return (
        <div key={note._id}>
        <h3>{note.name}</h3>
        <button onClick={() => store.deleteDrinkNote(note._id)}>Delete Drink Note</button>
        <button onClick={() => store.toggleUpdate(note)} >Update Drink Note</button>
      </div>
    )
}