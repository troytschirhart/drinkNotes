import drinkStore from "../stores/drinkStore"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function UpdateForm () {

    const store = drinkStore();

    const { state } = useLocation();
    const { note } = state || {};

    console.log("note: " + JSON.stringify(note));

    useEffect(() => {
        store.toggleUpdate(note)
    },[]);

    return (
        <div>
            <form onSubmit={store.updateDrinkNote}>
            name: <input onChange={store.handleUpdateFieldChange} value={store.updateForm.name} name="name" />
            category: <input onChange={store.handleUpdateFieldChange} value={store.updateForm.category} name="category" />
            type: <input onChange={store.handleUpdateFieldChange} value={store.updateForm.type} name="type" />
            maker: <input onChange={store.handleUpdateFieldChange} value={store.updateForm.maker} name="maker" />
            image: <input onChange={store.handleUpdateFieldChange} value={store.updateForm.image} name="image" />
            description: <textarea onChange={store.handleUpdateFieldChange} value={store.updateForm.description} name="description" />
            rating: <input onChange={store.handleUpdateFieldChange} value={store.updateForm.rating} name="rating" />
            notes: <textarea onChange={store.handleUpdateFieldChange} value={store.updateForm.notes} name="notes" />
            <button type="submit">Update Drink Note</button>
          </form>
        </div>
    )
}