import ConsumerChoice from "./components/ConsumerChoice";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PurchaseStages from "./components/PurchaseStages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <PurchaseStages />
      <ConsumerChoice />
    </div>
  );
}

export default App;
