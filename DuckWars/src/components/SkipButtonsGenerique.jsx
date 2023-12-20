import { Link } from "react-router-dom";
import "../CSS/SkipButtonsGenerique.css";

function SkipButtonsGenerique() {
  return (
    <Link to="/hyperspace">
      <button className="skip">
        <p>skip</p>
      </button>
    </Link>
  );
}

export default SkipButtonsGenerique;
