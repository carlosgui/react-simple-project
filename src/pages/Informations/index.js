import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./index.css";

export default function Informations({ nutri }) {
  const { id } = useParams();
  const [content, setContent] = useState({});
  const item = [];
  useEffect(() => {
    nutri.map((el) => {
      if (el.id === parseInt(id)) {
        return item.push(el);
      }
      return;
    });

    setContent(item[0]);
  }, []);

  return (
    <div>
      <div className="backButton">
        <Link to="/"> Voltar </Link>
      </div>
      <div className="containerInfo">
        <h1>{content.titulo}</h1>
        <h3>categoria: {content.categoria}</h3>
        <br />
        <span>{content.subtitulo}</span>
        <br />
      </div>
    </div>
  );
}
