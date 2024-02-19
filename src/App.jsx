import { Route, Routes } from "react-router-dom";
import Contacto from "./views/Contacto/Contacto";
import HomePage from "./views/Home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
