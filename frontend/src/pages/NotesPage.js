import { useEffect } from "react";
import Notes from "../components/Notes";
import drinkStore from "../stores/drinkStore";


export default function NotesPage() {
    const store = drinkStore();

    // use effect
    useEffect(() => {
      store.fetchDrinks();
    },[])

    return (
        <div >
            <Notes />
        </div>
    )
}


