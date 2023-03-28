import drinkStore from "../stores/drinkStore"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateForm () {
    const navigate = useNavigate();

    const store = drinkStore();

    const { state } = useLocation();
    const { note } = state || {};

    useEffect(() => {
        store.toggleUpdate(note)
    },[]);


    const handleUpdateNote = async (e) => {
        e.preventDefault();
        
        try {
            const note = await store.updateDrinkNote();
            navigate("/onenote", {state: {note}});

        } catch (err) {
            console.log("UpdateForm handleUpdateNote error: " + err);
        }
    }


    return (

        <div>
            <form onSubmit={handleUpdateNote} className="createNoteForm" >

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="name">Name:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="name" 
                        value={store.updateForm.name}
                        onChange={store.handleUpdateFieldChange}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="category">Category:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="category" 
                        value={store.updateForm.category}
                        onChange={store.handleUpdateFieldChange}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="type">Type:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="type" 
                        value={store.updateForm.type}
                        onChange={store.handleUpdateFieldChange}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="maker">Maker:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="maker" 
                        value={store.updateForm.maker}
                        onChange={store.handleUpdateFieldChange}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="image">Image Link:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="image" 
                        value={store.updateForm.image}
                        onChange={store.handleUpdateFieldChange}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="description">Description:&nbsp;&nbsp;</label>
                    <textarea 
                        className="createUserInput"
                        type="text" 
                        name="description" 
                        value={store.updateForm.description}
                        onChange={store.handleUpdateFieldChange}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="rating">Rating (1-10):&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="rating" 
                        value={store.updateForm.rating}
                        onChange={store.handleUpdateFieldChange}                 
                    />
                </div>

                <div className="formInput">
                    <label className="createNoteLabel" htmlFor="notes">Notes:&nbsp;&nbsp;</label>
                    <textarea 
                        className="createUserInput"
                        pattern="^([1-9]|10)$"
                        type="text" 
                        name="notes" 
                        value={store.updateForm.notes}
                        onChange={store.handleUpdateFieldChange}                 
                    />
                </div>

                <button className="createNoteButton" type="submit">Save Update</button>

            </form>
        </div>


    )
}