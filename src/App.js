import { Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Orbit from "./Pages/Orbit";
import Textanim from "./Pages/Textanim";
import Another3d from "./Pages/Another3d";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="orbit" element={<Orbit />} />
        <Route path="text" element={<Textanim />} />
        <Route path="samurai" element={<Another3d />} />
      </Routes>
    </div>
  );
}

export default App;
