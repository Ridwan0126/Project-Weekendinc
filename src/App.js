import "./App.css";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import Definitions from "./pages/Definitions";
import About from "./pages/About";
import Help from "./pages/Help";
import You from "./pages/You/You";

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
