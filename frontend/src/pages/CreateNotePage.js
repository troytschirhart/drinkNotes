import FrontHeaderLoggedIn from '../headers/FrontHeaderLoggedIn'
import CreateNoteForm from '../components/CreateNoteForm'

export default function CreateNotePage() {


    return (
        <div>
            <FrontHeaderLoggedIn />

            <div className='mainMenu'>
                <h2>Create a Drink Note</h2>
                <h3>Enter Drink Information, then Click "Create Drink Note" Button</h3>
 
                <CreateNoteForm />
            </div>


        </div>
    )
}