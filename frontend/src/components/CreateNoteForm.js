import drinkStore from "../stores/drinkStore";
import { useNavigate } from "react-router-dom";

export default function CreateNoteForm() {
    const navigate = useNavigate();

    const store = drinkStore();

    const handleCreateNote = async (e) => {
        e.preventDefault();
        
        try {
            const note = await store.createDrinkNote();
            navigate("/onenote", {state: {note}});

        } catch (err) {
            console.log("createDrinkNote error: " + err);
        }
    }

    return (
        <div>
            <form onSubmit={handleCreateNote} className="createNoteForm" >

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="name">Name:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="name" 
                        value={store.createForm.name}
                        onChange={store.updateCreateFormField}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="category">Category:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="category" 
                        value={store.createForm.category}
                        onChange={store.updateCreateFormField}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="type">Type:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="type" 
                        value={store.createForm.type}
                        onChange={store.updateCreateFormField}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="maker">Maker:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="maker" 
                        value={store.createForm.maker}
                        onChange={store.updateCreateFormField}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="image">Image Link:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="image" 
                        value={store.createForm.image}
                        onChange={store.updateCreateFormField}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="description">Description:&nbsp;&nbsp;</label>
                    <textarea 
                        className="createUserInput"
                        type="text" 
                        name="description" 
                        value={store.createForm.description}
                        onChange={store.updateCreateFormField}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="rating">Rating (1-10):&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        pattern="^([1-9]|10)$"
                        type="text" 
                        name="rating" 
                        value={store.createForm.rating}
                        onChange={store.updateCreateFormField}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="notes">Notes:&nbsp;&nbsp;</label>
                    <textarea 
                        className="createUserInput"
                        type="text" 
                        name="notes" 
                        value={store.createForm.notes}
                        onChange={store.updateCreateFormField}                 
                    />
                </div>

                <button className="createNoteButton" type="submit">Create Drink Note</button>


            </form>
      </div>
    )
}