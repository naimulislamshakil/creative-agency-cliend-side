import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
