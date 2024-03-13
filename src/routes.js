import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Informations from "./pages/Informations";

const Routers = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home nutri={props.nutri} />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
