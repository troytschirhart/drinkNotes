import { create } from 'zustand';
import axios from 'axios';

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
        const res = await axios.get(`/drinks`);              // try/catch
    
        // set to state
        set({
            drinkNotes: res.data.allDrinks
        })

        const {drinkNotes} = drinkStore.getState();

        console.log(drinkNotes);
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
        // e.preventDefault();

        try {
            // get the createForm and drinkNotes values from state
            const { createForm, drinkNotes } = drinkStore.getState();
            
            // create the drink note
            const res = await axios.post(`/drinks`, createForm); 
            
            console.log("createDrinkNote res.data.drinkNote: " + JSON.stringify(res.data.drinkNote));
        
            // update the state for drinkNotes and clear the form 
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

            return res.data.drinkNote; 
        } catch (err) {
            console.log(err);
        }
    },

    deleteDrinkNote: async (_id) => {
        // const { drinkNotes } = drinkStore.getState();
        // delete the note
        await axios.delete(`/drinks/${_id}`);              // try/catch block

        const { drinkNotes } = drinkStore.getState();
    
        
        // update state
        const newDrinkNotes = drinkNotes.filter((note) => {
          return note._id !== _id;
        })
    
        console.log("drinkStore.deleteDrinkNote _id: " + _id + " drinkNotes: " + drinkNotes);

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
        // e.preventDefault();
    
        const { 
            updateForm: {_id, name, category, type, maker, image, description, rating, notes},
            drinkNotes 
        } = drinkStore.getState();;
    
        // send the update request
        const res = await axios.put(`/drinks/${_id}`, {                                         // try/catch block
          name, category, type, maker, image, description, rating, notes                        // should these be updateForm.item ???
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

        return res.data.updatedDrink;
    },


}))

export default drinkStore;