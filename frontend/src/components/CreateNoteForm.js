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
                <table>
                    <tbody>
                    <tr className="inputRow">
                        <td className="tdLabel">Name:&nbsp;&nbsp;</td>
                        <td className="tdInput">
                            <input 
                                className="createNoteInput"
                                type="text" 
                                name="name" 
                                value={store.createForm.name}
                                onChange={store.updateCreateFormField}                 
                            />
                        </td>
                    </tr>

                    <tr className="inputRow">
                        <td className="tdLabel">Category:&nbsp;&nbsp;</td>
                        <td className="tdInput">
                            <select defaultValue={"Other"} onChange={store.updateCreateFormField} name="category" >
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
                                value={store.createForm.type}
                                onChange={store.updateCreateFormField}                 
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
                                value={store.createForm.maker}
                                onChange={store.updateCreateFormField}                 
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
                                value={store.createForm.image}
                                onChange={store.updateCreateFormField}                 
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
                                value={store.createForm.description}
                                onChange={store.updateCreateFormField}                 
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
                                value={store.createForm.rating}
                                onChange={store.updateCreateFormField}                 
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
                                value={store.createForm.notes}
                                onChange={store.updateCreateFormField}                 
                            />
                        </td>
                    </tr>
                    </tbody>

                </table>

                {/* <div className="formInput">
                    <label className="createNoteLabel" htmlFor="name">Name:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="name" 
                        value={store.createForm.name}
                        onChange={store.updateCreateFormField}                 
                    />
                </div> */}

                {/* <div className="formInput">
                    <label className="createNoteLabel" htmlFor="category">Category:&nbsp;&nbsp;</label>

                    <select onChange={store.updateCreateFormField} name="category" value={store.createForm.category}>
                        <option value="fruit">Fruit</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
                    </select> */}

                    {/* <input 
                        className="createUserInput"
                        type="text" 
                        name="category" 
                        value={store.createForm.category}
                        onChange={store.updateCreateFormField}                 
                    /> */}
                {/* </div> */}

                {/* <div className="formInput">
                    <label className="createNoteLabel" htmlFor="type">Type:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="type" 
                        value={store.createForm.type}
                        onChange={store.updateCreateFormField}                 
                    />
                </div> */}

                {/* <div className="formInput">
                    <label className="createNoteLabel" htmlFor="maker">Maker:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="maker" 
                        value={store.createForm.maker}
                        onChange={store.updateCreateFormField}                 
                    />
                </div> */}

                {/* <div className="formInput">
                    <label className="createNoteLabel" htmlFor="image">Image Link:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="image" 
                        value={store.createForm.image}
                        onChange={store.updateCreateFormField}                 
                    />
                </div> */}

                {/* <div className="formInput">
                    <label className="createNoteLabel" htmlFor="description">Description:&nbsp;&nbsp;</label>
                    <textarea 
                        className="createUserInput"
                        type="text" 
                        name="description" 
                        value={store.createForm.description}
                        onChange={store.updateCreateFormField}                 
                    />
                </div> */}

                {/* <div className="formInput">
                    <label className="createNoteLabel" htmlFor="rating">Rating (1-10):&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        pattern="^([1-9]|10)$"
                        type="text" 
                        name="rating" 
                        value={store.createForm.rating}
                        onChange={store.updateCreateFormField}                 
                    />
                </div> */}

                {/* <div className="formInput">
                    <label className="createNoteLabel" htmlFor="notes">Notes:&nbsp;&nbsp;</label>
                    <textarea 
                        className="createUserInput"
                        type="text" 
                        name="notes" 
                        value={store.createForm.notes}
                        onChange={store.updateCreateFormField}                 
                    />
                </div> */}

                <button className="createNoteButton" type="submit">Create Drink Note</button>


            </form>
      </div>
    )
}