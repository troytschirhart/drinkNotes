import FrontHeaderLoggedIn from '../headers/FrontHeaderLoggedIn'
import CreateForm from '../components/CreateForm'

export default function CreateNotePage() {


    return (
        <div>
            <FrontHeaderLoggedIn />

            <div className='appExplanation'>
                <h2>Create a Drink Note</h2>
 
                <CreateForm />
            </div>


        </div>
    )
}