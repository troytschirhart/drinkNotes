import FrontHeaderLoggedIn from '../headers/FrontHeaderLoggedIn'
import UpdateForm from '../components/UpdateForm'

export default function EditNotePage() {


    return (
        <div>
            <FrontHeaderLoggedIn />

            <div className='mainMenu'>
                <h2>Edit Drink Note</h2>
                <h3>Edit Drink Note Information, then Click the "Save Update" Button</h3>
 
                <UpdateForm />
            </div>


        </div>
    )
}