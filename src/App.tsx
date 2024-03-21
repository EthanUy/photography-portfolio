import NavBar from "./components/Navbar";
import Work from "./pages/Work";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <NavBar/>
      <div className="container-fluid p-0 main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
