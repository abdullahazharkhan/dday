import "./App.css";
import ExcomCard from "./components/ExcomCard";
import CoreTeamCard from "./components/CoreTeamCard";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-40 m-10">
      <ExcomCard />
      <CoreTeamCard />
    </div>
  );
}

export default App;
