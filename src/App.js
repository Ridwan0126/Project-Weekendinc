import "./App.css";
import { Header } from "./components";
import Home from "./pages/Home";
import Definitions from "./pages/Definitions";

function App() {
  return (
    <>
      <Header />
      <div class="row">
        <Home />
        <Definitions />
      </div>
    </>
  );
}

export default App;
