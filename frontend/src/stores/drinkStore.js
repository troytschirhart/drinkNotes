import { create } from 'zustand';
import axios from 'axios';

const path = "http://localhost:3000/drinks/"

const drinkStore = create ((set) => ({
    drinkNotes: null,

    createForm: {
        name: "", 
        category: "", 
        type: "", 
        maker: "", 
        image: "", 
        description: "", 
        rating: "", 
        notes: ""
    },

    updateForm: {
        _id: null,
        name: "", 
        category: "", 
        type: "", 
        maker: "", 
        image: "", 
        description: "", 
        rating: "", 
        notes: ""
    },

    fetchDrinks: async () => {
        // fetch the notes
        const res = await axios.get(path);
    
        // set to state
        set({
            drinkNotes: res.data.allDrinks
        })
    },

    updateCreateFormField: (e) => {
        const {name, value} = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value
                }
            }
        })
    },

    createDrinkNote: async (e) => {
        e.preventDefault();

        const { createForm, drinkNotes } = drinkStore.getState();
        
        // create the drink note
        const res = await axios.post(path, createForm);
    
        // update the state
        set({
            drinkNotes: [...drinkNotes, res.data.drinkNote],
            createForm: {
                name: "", 
                category: "", 
                type: "", 
                maker: "", 
                image: "", 
                description: "", 
                rating: "", 
                notes: ""
            }
        })
    },

    deleteDrinkNote: async (_id) => {
        // delete the note
        await axios.delete(path + _id);

        const { drinkNotes } = drinkStore.getState();
    
        // update state
        const newDrinkNotes = drinkNotes.filter((note) => {
          return note._id !== _id;
        })
    
        set({ drinkNotes: newDrinkNotes });
    },

    handleUpdateFieldChange: (e) => {
        const {name, value} = e.target 

        set((state) => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value
                }
            }
        })
    },

    toggleUpdate: ({ _id, name, category, type, maker, image, description, rating, notes }) => {
        // set state on update form

        set({
            updateForm: {
                _id,
                name,
                category, 
                type, 
                maker, 
                image, 
                description, 
                rating, 
                notes
            }
        })
    },

    updateDrinkNote: async(e) => {
        e.preventDefault();
    
        const { 
            updateForm: {_id, name, category, type, maker, image, description, rating, notes},
            drinkNotes 
        } = drinkStore.getState();;
    
        // send the update request
        const res = await axios.put(path + _id, {
          name, category, type, maker, image, description, rating, notes
        });
    
        // update the state
        const newDrinkNotes = [...drinkNotes];
        const noteIndex = drinkNotes.findIndex(note => {
          return note._id === _id;
        });
        newDrinkNotes[noteIndex] = res.data.updatedDrink;

        set({
            drinkNotes: newDrinkNotes,
            updateForm: {
                _id: null,
                name: "", 
                category: "", 
                type: "", 
                maker: "", 
                image: "", 
                description: "", 
                rating: "", 
                notes: ""
            }
        })
    },


}))

export default drinkStore;