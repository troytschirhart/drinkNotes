import drinkStore from "../stores/drinkStore"

export default function CreateForm() {

    const store = drinkStore(store => {
        return { 
                updateCreateFormField: store.updateCreateFormField, 
                createForm: store.createForm, 
                createDrinkNote: store.createDrinkNote,
                updateForm: store.updateForm
            }
    })

    if (store.updateForm._id) return <></>

    return (
        <div>
            <h2>Create Drink Note</h2>
            <form onSubmit={store.createDrinkNote}>
            name: <input onChange={store.updateCreateFormField} value={store.createForm.name} name="name" />
            category: <input onChange={store.updateCreateFormField} value={store.createForm.category} name="category" />
            type: <input onChange={store.updateCreateFormField} value={store.createForm.type} name="type" />
            maker: <input onChange={store.updateCreateFormField} value={store.createForm.maker} name="maker" />
            image: <input onChange={store.updateCreateFormField} value={store.createForm.image} name="image" />
            description: <textarea onChange={store.updateCreateFormField} value={store.createForm.description} name="description" />
            rating: <input onChange={store.updateCreateFormField} value={store.createForm.rating} name="rating" />
            notes: <textarea onChange={store.updateCreateFormField} value={store.createForm.notes} name="notes" />
            <button type="submit">Create Drink Note</button>
            </form>
      </div>
    )
}