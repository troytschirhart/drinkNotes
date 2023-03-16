import { useEffect } from "react";
import drinkStore from "../stores/drinkStore";
import CreateForm from "./CreateForm";
import Notes from "./Notes"
import UpdateForm from "./UpdateForm";


function App() {
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
  );
}

export default App;
