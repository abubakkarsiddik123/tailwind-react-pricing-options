import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import NavBar from "./Components/NavBar/NavBar";
import PricingOptins from "./Components/PricingOptions/PricingOptins";


const PricingPromice=fetch('pricingData.json').then(res=>res.json())

function App() {
  return (
    <>
    <header>
      <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <PricingOptins PricingPromice={PricingPromice}></PricingOptins>
    </Suspense>
    </main>
    </>
  );
}

export default App;
