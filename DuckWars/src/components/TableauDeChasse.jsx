import duckCedric from "../assets/TableauDeChasse/duckCedric.png";
import duckFlo from "../assets/TableauDeChasse/duckFlo.png";
import duckGreg from "../assets/TableauDeChasse/duckGreg.png";
import duckOce from "../assets/TableauDeChasse/duckOce.png";
import duckRomain from "../assets/TableauDeChasse/duckRomain.png";
import duckRyan from "../assets/TableauDeChasse/duckRyan.png";
import duckYohan from "../assets/TableauDeChasse/duckYohan.png";
import github from "../assets/TableauDeChasse/Github.png";
import linkedin from "../assets/TableauDeChasse/LinkedIn.png";

import "../CSS/TableauDeChasse.css";

function TableauDeChasse() {
  return (
    <div className="aboutUsDiv">
      <section className="aboutSection">
        <h1 className="wantedTitle">* WANTED *</h1>
        <div className="wantedDiv">
          {/* OCE */}
          <div className="cointainer">
            <div className="oceDuck">
              <img
                src={duckOce}
                alt="Canard qui représente Océane"
                id="ocePic"
              />
              <div className="links">
                <a href="" target="_blank">
                  <img src={github} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/oaiw/" target="_blank">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <p>
              Dark océane <br />
              Prime: 1M <br />
              Crime: impliquée dans le coup d'Etat qui a permis à la dictature
              des canards de renverser la République. <br /> Signe de
              reconnaissance: ses plumes sont souvent en bataille
            </p>
          </div>
          {/* FLO */}
          <div className="cointainer">
            <div className="floDuck">
              <img
                src={duckFlo}
                alt="Canard qui représente Florian"
                id="floPic"
              />
              <div className="links">
                <a href="https://github.com/Dolpheus89" target="_blank">
                  <img src={github} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/florian-schaessens-041243a9/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <p>
              Dark Florian <br />
              Prime: 1M <br />
              Crime: Capture et vente de twil'ek et de wookies. <br />
              Signe de reconnaissance: Possède un accent du sud très prononcé
              lorsqu'il se détend.
            </p>
          </div>
          {/* GREG */}
          <div className="cointainer">
            <div className="gregDuck">
              <img
                src={duckGreg}
                alt="Canard qui représente Greg"
                id="gregPic"
              />
              <div className="links">
                <a href="https://github.com/Goodtimenl" target="_blank">
                  <img src={github} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gr%C3%A9gory-d-754664195/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <p>
              Dark Gregory <br />
              Prime: 1M <br />
              Crime: Trafique de cheveux pour financer le coup d'Etat. <br />
              Signe de reconnaissance: Absence de plumes sur le haut du crâne,
              présence d'un léger duvet à la place.
            </p>
          </div>
          {/* RYAN */}
          <div className="cointainer">
            <div className="ryanDuck">
              <img
                src={duckRyan}
                alt="Canard qui représente Ryan"
                id="ryanPic"
              />
              <div className="links">
                <a href="https://github.com/RetrozDev" target="_blank">
                  <img src={github} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ryan-barboza/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <p>
              Dark Ryan <br />
              Prime: 1M <br />
              Crime: Contrebande de Gradients pour financer le nouveau régime.{" "}
              <br />
              Signe de reconnaissance: il porte très souvent (toujours) un
              casque audio sur sa tête.
            </p>
          </div>
          {/* CEDRIC */}
          <div className="cointainer">
            <div className="cedricDuck">
              <img
                src={duckCedric}
                alt="Canard qui représente Cedric"
                id="cedricPic"
              />
              <div className="links">
                <a href="https://github.com/cchemin33" target="_blank">
                  <img src={github} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cedric-c-1451172a1/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <p>
              Dark Yohan <br />
              Prime: 1M <br />
              Crime: <br />
              Signe de reconnaissance:
            </p>
          </div>
          {/* ROMAIN */}
          <div className="cointainer">
            <div className="romainDuck">
              <img
                src={duckRomain}
                alt="Canard qui représente Romain"
                id="romainPic"
              />
              <div className="links">
                <a href="https://github.com/Starksz62" target="_blank">
                  <img src={github} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/romain-bigalion-304502223/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <p>
              Dark Romain <br />
              Prime: 1M <br />
              Crime: <br />
              Signe de reconnaissance:
            </p>
          </div>
          {/* YOHAN */}
          <div className="cointainer">
            <div className="yohanDuck">
              <img
                src={duckYohan}
                alt="Canard qui représente Yohan"
                id="yohanPic"
              />
              <div className="links">
                <a href="https://github.com/YohanSoundara" target="_blank">
                  <img src={github} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yohan-soundara-b54a22236/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <p>
              Dark Yohan <br />
              Prime: 1M <br />
              Crime: <br />
              Signe de reconnaissance:
            </p>
          </div>
        </div>
      </section>
      <div id="duckSocietyFooter">
        <p className="duckSociety">
          {" "}
          ©&nbsp;<span id="duckColor">duck</span>
          <span id="societyColor">Society</span>
        </p>
      </div>
    </div>
  );
}

export default TableauDeChasse;
