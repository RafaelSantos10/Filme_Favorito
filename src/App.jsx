import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/index.jsx";
import Footer from "./components/Footer/index.jsx";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <div className="container">
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
      
    </>
  );
}

export default App;
