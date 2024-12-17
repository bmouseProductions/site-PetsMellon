import "./error.css";
import { Link } from "react-router-dom";

export const ErrorESP = () => {
  return (
    <div className="error">
      <h1>¡Página no encontrada!</h1>
      <p>La página que buscas no existe</p>
      <Link className="link" to="/">
        Volver a la página de inicio
      </Link>
    </div>
  );
};
