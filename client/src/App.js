import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Card from "./pages/Card";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<Shop />} />
        <Route path="/product/:id" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
