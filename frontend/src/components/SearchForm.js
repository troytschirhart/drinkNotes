import drinkStore from "../stores/drinkStore"
import { useNavigate } from "react-router-dom";

export default function SearchForm () {
    const store = drinkStore();
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const notes = await store.searchDrinkNotes();
            navigate("/notespage");
        } catch (err) {
            console.log("searchDrinkNotes error: " + err);
        }
    }

    return (
        <form onSubmit={handleSearch}>

            <table>
                <tbody>
                <tr className="inputRow">
                    <td className="tdLabel">Name:&nbsp;&nbsp;</td>
                    <td className="tdInput">
                        <input 
                            className="createNoteInput"
                            type="text" 
                            name="name" 
                            value={store.searchForm.name}
                            onChange={store.updateSearchFormField}                 
                        />
                    </td>
                </tr>

                <tr className="inputRow">
                    <td className="tdLabel">Category:&nbsp;&nbsp;</td>
                    <td className="tdInput">
                        <table className="searchTable">
                            <tbody>
                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="All" onChange={store.updateSearchFormField} defaultChecked/></td>
                                <td className="searchLabel"><label> All Categories</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Beer" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Beer</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Wine" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Wine</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Cocktail" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Cocktail</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Coffee Drink" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Coffee Drink</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Tea" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Tea</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Soda" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Soda</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Juice" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Juice</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Sports Drink" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Sports Drink</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Energy Drink" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Energy Drink</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Ice Cream Drink" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Ice Cream Drink</label></td>
                            </tr>

                            <tr>
                                <td className="searchCheckbox"><input type="radio" name="category" value="Other" onChange={store.updateSearchFormField}/></td>
                                <td className="searchLabel"><label> Other</label></td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                <tr className="inputRow">
                    <td className="tdLabel">Type:&nbsp;&nbsp;</td>
                    <td className="tdInput">
                        <input 
                            className="createNoteInput"
                            type="text" 
                            name="type" 
                            value={store.searchForm.type}
                            onChange={store.updateSearchFormField}                 
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
                            value={store.searchForm.maker}
                            onChange={store.updateSearchFormField}                 
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
                            value={store.searchForm.image}
                            onChange={store.updateSearchFormField}                 
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
                            value={store.searchForm.description}
                            onChange={store.updateSearchFormField}                 
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
                            value={store.searchForm.rating}
                            onChange={store.updateSearchFormField}                 
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
                            value={store.searchForm.notes}
                            onChange={store.updateSearchFormField}                 
                        />
                    </td>
                </tr>
                </tbody>
            </table>

            <br />

            <button className="createNoteButton" type="submit">Search</button>

        </form>
    )
}