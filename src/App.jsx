import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import NavBar from "./Components/NavBar/NavBar";
import PricingOptins from "./Components/PricingOptions/PricingOptins";
import ResultChart from "./Components/ResultChart/ResultChart";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";

const PricingPromice = fetch("pricingData.json").then((res) => res.json());
const marksPromise = axios("marksData.json");
function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptins PricingPromice={PricingPromice}></PricingOptins>
        </Suspense>
        <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
