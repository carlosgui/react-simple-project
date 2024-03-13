import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Informations from "./pages/Informations";
import Error from "./pages/Error";

const Routers = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home nutri={props.nutri} />} />
        <Route
          path="/informations/:id"
          element={<Informations nutri={props.nutri} />}
        />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={Error} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
