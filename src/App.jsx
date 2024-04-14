import "./App.css";
import ExcomCard from "./components/ExcomCard";
import CoreTeamCard from "./components/CoreTeamCard";
import SponsorsSection from "./components/SponsorsSection"
import SponsorsPage from "./components/SponsorsPage";

function App() {
  return (
    // flex flex-col justify-center items-center gap-40 m-10
    <div className="bg-[#031e2c]">
      {/* <ExcomCard /> */}
      {/* <CoreTeamCard /> */}
      <SponsorsSection />
      {/* <SponsorsPage /> */}
    </div>
  );
}

export default App;
