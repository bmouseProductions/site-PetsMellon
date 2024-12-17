import "./error.css";
import { Link } from "react-router-dom";

export const ErrorEN = () => {
  return (
    <div className="error">
      <h1>Page not found!</h1>
      <p>The page you are looking for does not exist</p>
      <Link className="link" to="/">
        Back to Home page
      </Link>
    </div>
  );
};
