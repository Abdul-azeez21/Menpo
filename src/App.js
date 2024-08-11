import { Route, Routes } from "react-router-dom";

//pages
import Another3d from "./components/Another3d";

function App() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-back-image bg-cover bg-center opacity-50"></div>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Another3d />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
