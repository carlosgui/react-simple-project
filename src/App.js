import { useEffect, useState } from "react";
import Routers from "./routes";

const App = () => {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((apiResult) => apiResult.json())
        .then((result) => {
          setNutri(result);
        });
    }

    loadApi();
  }, []);

  return <Routers nutri={nutri} />;
};

export default App;
