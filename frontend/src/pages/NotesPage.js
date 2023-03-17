import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import drinkStore from "../stores/drinkStore";


export default function NotesPage() {
    const store = drinkStore();

    // use effect
    useEffect(() => {
      store.fetchDrinks();
    },[])

    return (
        <div>
            <Notes />
            <UpdateForm />
            <CreateForm />
        </div>
    )
}


