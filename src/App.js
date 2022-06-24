import "./App.css";
import AddTask from "./components/AddTask";
import AllTasks from "./components/AllTasks/AllTasks";
import NavBar from "./components/NavBar";
import { useCustomContext } from "./state";

function App() {
  const { state } = useCustomContext();
  return (
    <div className="App">
      <NavBar />
      {state.completed ? undefined : <AddTask />}
      <AllTasks />
    </div>
  );
}

export default App;
