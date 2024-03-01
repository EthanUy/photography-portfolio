import NavBar from "./components/Navbar";
import Work from "./pages/Work";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <NavBar name="Ethan Lyle Uy" />
      <div className="container-fluid p-0">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
