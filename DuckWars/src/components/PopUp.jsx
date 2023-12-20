import "../CSS/PopUp.css";
import souris from "../assets/popup/sourisPNG.png";

function PopUp() {
  return (
    <a
      href="https://forum.jardiner-malin.fr/sujets/aubergines-comment-les-faire-grossir/"
      target="_blank"
    >
      <div className="popUp">
        <img src={souris} className="souris" alt="sabre laser" />
        <p>
          <span>
            promo aujourd'hui seulement !!! <br />
          </span>
          souhaitez-vous agrandir la taille de votre sabre laser ? <br />{" "}
          <span>ce soir il sera trop tard !!!</span>
        </p>
      </div>
    </a>
  );
}

export default PopUp;
