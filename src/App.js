import "./App.css";
import { Footer, Header } from "./components";
import { About, Definitions, Help, Home, You } from "./pages";

function App() {
  return (
    <>
      <div className="row">
        <Header />
        <Home />
        <Definitions />
        <About />
        <Help />
        <You />
        <Footer />
      </div>
    </>
  );
}

export default App;
