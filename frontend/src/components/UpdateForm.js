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

                <table>
                    <tbody>
                        <tr className="inputRow">
                            <td className="tdLabel">Name:&nbsp;&nbsp;</td>
                            <td className="tdInput">
                                <input 
                                    className="createNoteInput"
                                    type="text" 
                                    name="name" 
                                    required
                                    value={store.updateForm.name}
                                    onChange={store.handleUpdateFieldChange}                 
                                />
                            </td>
                        </tr>

                        <tr className="inputRow">
                            <td className="tdLabel">Category:&nbsp;&nbsp;</td>
                            <td className="tdInput">
                                <select defaultValue={store.updateForm.category} onChange={store.handleUpdateFieldChange} name="category" >
                                    <option value="Beer">Beer</option>
                                    <option value="Wine">Wine</option>
                                    <option value="Cocktail">Cocktail</option>
                                    <option value="Coffee Drink">Coffee Drink</option>
                                    <option value="Tea">Tea</option>
                                    <option value="Soda">Soda</option>
                                    <option value="Juice">Juice</option>
                                    <option value="Sports Drink">Sports Drink</option>
                                    <option value="Energy Drink">Energy Drink</option>
                                    <option value="Ice Cream Drink">Ice Cream Drink</option>
                                    <option value="Other">Other</option>

                                </select>
                            </td>
                        </tr>

                        <tr className="inputRow">
                            <td className="tdLabel">Type:&nbsp;&nbsp;</td>
                            <td className="tdInput">
                                <input 
                                    className="createNoteInput"
                                    type="text" 
                                    name="type" 
                                    value={store.updateForm.type}
                                    onChange={store.handleUpdateFieldChange}                 
                                />
                            </td>
                        </tr>

                        <tr className="inputRow">
                            <td className="tdLabel">Maker:&nbsp;&nbsp;</td>
                            <td className="tdInput">
                                <input 
                                    className="createNoteInput"
                                    type="text" 
                                    name="maker" 
                                    value={store.updateForm.maker}
                                    onChange={store.handleUpdateFieldChange}                 
                                />
                            </td>
                        </tr>

                        <tr className="inputRow">
                            <td className="tdLabel">Image Link:&nbsp;&nbsp;</td>
                            <td className="tdInput">
                                <input 
                                    className="createNoteInput"
                                    type="text" 
                                    name="image" 
                                    value={store.updateForm.image}
                                    onChange={store.handleUpdateFieldChange}                 
                                />
                            </td>
                        </tr>

                        <tr className="inputRow">
                            <td className="tdLabel">Description:&nbsp;&nbsp;</td>
                            <td className="tdInput">
                                <textarea 
                                    className="createNoteInput"
                                    type="text" 
                                    name="description" 
                                    value={store.updateForm.description}
                                    onChange={store.handleUpdateFieldChange}                 
                                />
                            </td>
                        </tr>

                        <tr className="inputRow">
                            <td className="tdLabel"><label>Rating </label><label>(1-10):&nbsp;&nbsp;</label></td>
                            <td className="tdInput">
                                <input 
                                    className="createNoteInput"
                                    pattern="^([1-9]|10)$"
                                    type="text" 
                                    name="rating" 
                                    value={store.updateForm.rating}
                                    onChange={store.handleUpdateFieldChange}                 
                                />
                            </td>
                        </tr>

                        <tr className="inputRow">
                            <td className="tdLabel">Notes:&nbsp;&nbsp;</td>
                            <td className="tdInput">
                                <textarea 
                                    className="createNoteInput"
                                    type="text" 
                                    name="notes" 
                                    value={store.updateForm.notes}
                                    onChange={store.handleUpdateFieldChange}                 
                                />
                            </td>
                        </tr>
                    </tbody>

                </table>

                <button className="createNoteButton" type="submit">Save Update</button>

            </form>
        </div>


    )
}