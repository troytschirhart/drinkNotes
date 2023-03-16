import drinkStore from "../stores/drinkStore"

export default function UpdateForm () {

    const store = drinkStore(store => {
        return { handleUpdateFieldChange: store.handleUpdateFieldChange, updateForm: store.updateForm, updateDrinkNote: store.updateDrinkNote }
    })

    if (!store.updateForm._id) return <></>

    return (
        <div>
            <h2>Update Drink Note</h2>
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