import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PosterPage from "./pages/PosterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/poster/:id" element={<PosterPage />} />
    </Routes>
  );
}

export default App;