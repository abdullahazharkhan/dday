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
      <h1 className="text-white text-center">--------- Sponsors Page Starts ---------</h1>
      <SponsorsPage />
    </div>
  );
}

export default App;
