import drinkStore from "../stores/drinkStore"

export default function SearchForm () {
    const store = drinkStore();

    return (
        <form>

            {/* <table className="searchTable">
                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="All" defaultChecked/></td>
                    <td className="searchLabel"><label> All Categories</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Beer" /></td>
                    <td className="searchLabel"><label> Beer</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Wine" /></td>
                    <td className="searchLabel"><label> Wine</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Cocktail" /></td>
                    <td className="searchLabel"><label> Cocktail</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Coffee Drink" /></td>
                    <td className="searchLabel"><label> Coffee Drink</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Tea" /></td>
                    <td className="searchLabel"><label> Tea</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Soda" /></td>
                    <td className="searchLabel"><label> Soda</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Juice" /></td>
                    <td className="searchLabel"><label> Juice</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Sports Drink" /></td>
                    <td className="searchLabel"><label> Sports Drink</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Energy Drink" /></td>
                    <td className="searchLabel"><label> Energy Drink</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Ice Cream Drink" /></td>
                    <td className="searchLabel"><label> Ice Cream Drink</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Other" /></td>
                    <td className="searchLabel"><label> Other</label></td>
                </tr>

            </table> */}

            <br />

            <table>
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

                    {/* <tr className="inputRow">
                        <td className="tdLabel">Category:&nbsp;&nbsp;</td>
                        <td className="tdInput">
                            <select onChange={store.updateCreateFormField} name="category" >
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
                                <option selected value="Other">Other</option>
                            </select>
                        </td>
                    </tr> */}

                    <tr className="inputRow">
                        <td className="tdLabel">Category:&nbsp;&nbsp;</td>
                        <td className="tdInput">
                        <table className="searchTable">
                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="All" defaultChecked/></td>
                    <td className="searchLabel"><label> All Categories</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Beer" /></td>
                    <td className="searchLabel"><label> Beer</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Wine" /></td>
                    <td className="searchLabel"><label> Wine</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Cocktail" /></td>
                    <td className="searchLabel"><label> Cocktail</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Coffee Drink" /></td>
                    <td className="searchLabel"><label> Coffee Drink</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Tea" /></td>
                    <td className="searchLabel"><label> Tea</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Soda" /></td>
                    <td className="searchLabel"><label> Soda</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Juice" /></td>
                    <td className="searchLabel"><label> Juice</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Sports Drink" /></td>
                    <td className="searchLabel"><label> Sports Drink</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Energy Drink" /></td>
                    <td className="searchLabel"><label> Energy Drink</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Ice Cream Drink" /></td>
                    <td className="searchLabel"><label> Ice Cream Drink</label></td>
                </tr>

                <tr>
                    <td className="searchCheckbox"><input type="radio" name="category" value="Other" /></td>
                    <td className="searchLabel"><label> Other</label></td>
                </tr>

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

                </table>

                <br />

                <button className="createNoteButton" type="submit">Search</button>


        </form>
    )
}