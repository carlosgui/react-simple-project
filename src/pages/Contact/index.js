import { Link } from "react-router-dom";
import "./index.css";

export default function Contact() {
  return (
    <div>
      <div className="backButton">
        <Link to="/"> Voltar </Link>
      </div>
      <h1> Contact Page </h1>
    </div>
  );
}
