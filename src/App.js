import { useEffect, useState } from "react";
import "./app.css";

const App = () => {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((apiResult) => apiResult.json())
        .then((result) => {
          console.log(result);
          setNutri(result);
        });
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>My App</header>
      {nutri.map(({ id, titulo, capa, subtitulo }) => {
        return (
          <article key={id}>
            <h1>{titulo}</h1>
            <img alt={titulo} src={capa} />
            <p>{subtitulo}</p>
            <button>ACESSAR</button>
          </article>
        );
      })}
    </div>
  );
};

export default App;
