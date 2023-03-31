import FrontHeader from '../headers/FrontHeader'

export default function FrontPage() {


    return (
        <div>
            <FrontHeader />

            <div className='appExplanation'>

                <h2>Drink Notes Application</h2>

                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to the Drink Notes Application.&nbsp;&nbsp;This application provides the user 
                    with a way to keep track of drinks they've tasted and their thoughts about each drink.
                </h3>

                <h3>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After creating an account, the user has the option to add a drink to their collection 
                    including the drink name, type of drink, notes about the drink and a rating.&nbsp;&nbsp;Other options
                    include viewing previously entered drink notes, editing or deleting those drink notes, searching drink notes,
                    or viewing example drink notes.
                </h3>
                
            </div>


        </div>
    )
}