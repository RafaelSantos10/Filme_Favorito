import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./pages/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
