import { Route, Routes } from "react-router-dom";

//pages
import Three from "./components/three";
import Front from "./Pages/Front";
import Another3d from "./components/Another3d";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="three" element={<Three />} />
        <Route path="vvv" element={<Another3d />} />
      </Routes>
    </div>
  );
}

export default App;
