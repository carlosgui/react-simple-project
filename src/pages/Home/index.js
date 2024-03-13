import { Link } from "react-router-dom";
import "./index.css";

export default function Home(props) {
  return (
    <div className="container">
      {props.nutri?.map(({ id, titulo, capa, subtitulo }) => {
        return (
          <article key={id}>
            <h1>{titulo}</h1>
            <img alt={titulo} src={capa} />
            <p>{subtitulo}</p>
            <Link to={"/informations/" + id}>
              <button>ACESSAR</button>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
