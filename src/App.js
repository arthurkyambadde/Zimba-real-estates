import AuditorsChoice from "./components/AuditorsChoice";
import ConsumerChoice from "./components/ConsumerChoice";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PurchaseStages from "./components/PurchaseStages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <PurchaseStages />
      <ConsumerChoice />
      <AuditorsChoice />
      <Footer />
    </div>
  );
}

export default App;
