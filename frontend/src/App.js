import CreateTournament from "./components/CreateTournament";
import TestComp from "./components/TestComp";
import CreateTeam from "./components/CreateTeam";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Tournament App</h1>
      <CreateTournament />
      <div>
        <CreateTeam />
      </div>
      {/* <TestComp />  */}
    </div>
  );
}

export default App;
