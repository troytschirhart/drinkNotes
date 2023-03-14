import { useState, useEffect } from "react";
import axios from 'axios';

const path = "http://localhost:3000/drinks/"

function App() {
  // state
  const [drinkNotes, setDrinkNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    name: "", 
    category: "", 
    type: "", 
    maker: "", 
    image: "", 
    description: "", 
    rating: "", 
    notes: ""
  })
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    name: "", 
    category: "", 
    type: "", 
    maker: "", 
    image: "", 
    description: "", 
    rating: "", 
    notes: ""
  })

  // use effect
  useEffect(() => {
    fetchDrinks();
  }, [])

  // functions
  const fetchDrinks = async () => {
    // fetch the notes
    const res = await axios.get(path);

    // set to state
    setDrinkNotes(res.data.allDrinks);
  }

  const updateCreateFormField = (e) => {
    const {name, value} = e.target;

    setCreateForm({
      ...createForm,
      [name]: value
    })
  }

  const createDrinkNote = async (e) => {
    e.preventDefault();
    
    // create the drink note
    const res = await axios.post(path, createForm);

    // update the state
    setDrinkNotes([...drinkNotes, res.data.drink])
    
    // clear form state
    setCreateForm({
      name: "", 
      category: "", 
      type: "", 
      maker: "", 
      image: "", 
      description: "", 
      rating: "", 
      notes: ""
    })
  }

  const deleteDrinkNote = async (_id) => {
    // delete the note
    await axios.delete(path + _id);

    // update state
    const newDrinkNotes = [...drinkNotes].filter((note) => {
      return note._id !== _id;
    })

    setDrinkNotes(newDrinkNotes);
  }

  const handleUpdateFieldChange = (e) => {
    const {name, value} = e.target 
    setUpdateForm({
      ...updateForm,
      [name]: value
    })
  }

  const toggleUpdate = (note) => {
    // set state on update form
    setUpdateForm({
      _id: note._id,
      name: note.name,
      category: note.category, 
      type: note.type, 
      maker: note.maker, 
      image: note.image, 
      description: note.description, 
      rating: note.rating, 
      notes: note.notes
    })
  }

  const updateDrinkNote = async(e) => {
    e.preventDefault();

    const { name, category, type, maker, image, description, rating, notes } = updateForm;

    // send the update request
    const res = await axios.put(path + updateForm._id, {
      name, category, type, maker, image, description, rating, notes
    });

    console.log(res);
    // update the state
    const newDrinkNotes = [...drinkNotes];
    const noteIndex = drinkNotes.findIndex(note => {
      return note._id === updateForm._id;
    });
    newDrinkNotes[noteIndex] = res.data.updatedDrink;

    setDrinkNotes(newDrinkNotes);

    setUpdateForm({
      _id: null,
      name: "", 
      category: "", 
      type: "", 
      maker: "", 
      image: "", 
      description: "", 
      rating: "", 
      notes: ""
    })
  }

  return (
    <div>
      <div>
        <h2>Drink Notes</h2>
        {drinkNotes &&
          drinkNotes.map((note) => {
            return (
              <div key={note._id}>
                <h3>{note.name}</h3>
                <button onClick={() => deleteDrinkNote(note._id)}>Delete Drink Note</button>
                <button onClick={() => toggleUpdate(note)} >Update Drink Note</button>
              </div>
            )
          })}
      </div>

      {updateForm._id && (<div>
            <h2>Update Drink Note</h2>
            <form onSubmit={updateDrinkNote}>
            name: <input onChange={handleUpdateFieldChange} value={updateForm.name} name="name" />
            category: <input onChange={handleUpdateFieldChange} value={updateForm.category} name="category" />
            type: <input onChange={handleUpdateFieldChange} value={updateForm.type} name="type" />
            maker: <input onChange={handleUpdateFieldChange} value={updateForm.maker} name="maker" />
            image: <input onChange={handleUpdateFieldChange} value={updateForm.image} name="image" />
            description: <textarea onChange={handleUpdateFieldChange} value={updateForm.description} name="description" />
            rating: <input onChange={handleUpdateFieldChange} value={updateForm.rating} name="rating" />
            notes: <textarea onChange={handleUpdateFieldChange} value={updateForm.notes} name="notes" />
            <button type="submit">Update Drink Note</button>
          </form>
        </div>)}

      {!updateForm._id && (<div>
        <h2>Create Drink Note</h2>
        <form onSubmit={createDrinkNote}>
          name: <input onChange={updateCreateFormField} value={createForm.name} name="name" />
          category: <input onChange={updateCreateFormField} value={createForm.category} name="category" />
          type: <input onChange={updateCreateFormField} value={createForm.type} name="type" />
          maker: <input onChange={updateCreateFormField} value={createForm.maker} name="maker" />
          image: <input onChange={updateCreateFormField} value={createForm.image} name="image" />
          description: <textarea onChange={updateCreateFormField} value={createForm.description} name="description" />
          rating: <input onChange={updateCreateFormField} value={createForm.rating} name="rating" />
          notes: <textarea onChange={updateCreateFormField} value={createForm.notes} name="notes" />
          <button type="submit">Create Drink Note</button>
        </form>
      </div>)}

    </div>
  );
}

export default App;
