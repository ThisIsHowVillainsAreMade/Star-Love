import "../CSS/Age.css";
import DarthQuack from "../assets/darthQuack.png";
import BabyJedi from "../assets/BabyJedi.png";
import OldJedi from "../assets/OldJedi.png";
import { Link } from "react-router-dom";
import Warning from "./Warning";

function Age() {
  return (
    // Div principale
    <div className="Age">
      <Warning />
      {/* Choix pour verifier majorité */}
      <div className="YesNo">
        {/* Oui donc redirection sur choix perso */}
        <Link to="/Characters" className="link">
          <article>
            <img src={OldJedi} alt="Old Jedi" />
            <h2>oui</h2>
          </article>
        </Link>

        {/* Sinon redirection sur la bande à picsou */}
        <a href="https://youtu.be/xV00y9FM9Y8?si=srvx_1InxGJYdycV">
          <article>
            <img src={BabyJedi} alt="Old Jedi" />
            <h2>non</h2>
          </article>
        </a>
      </div>

      <img src={DarthQuack} alt="Darthquack" className="Darthquack" />
      <footer className="CheckAge">
        <h1>As-tu plus de 18 ans jeune padawan ?</h1>
      </footer>
      <div className="mediaQ">
        <p>
          Actuellement, le site web ne bénéficie pas encore d'une adaptation
          optimale aux petites tailles d'écran, ce qui peut affecter
          l'expérience utilisateur sur les dispositifs mobiles et les écrans de
          dimensions réduites
        </p>
      </div>
    </div>
  );
}

export default Age;
