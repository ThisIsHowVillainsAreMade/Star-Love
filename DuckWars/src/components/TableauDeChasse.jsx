import duckCedric from "../assets/TableauDeChasse/duckCedric.png";
import duckFlo from "../assets/TableauDeChasse/duckFlo.png";
import duckGreg from "../assets/TableauDeChasse/duckGreg.png";
import duckOce from "../assets/TableauDeChasse/duckOce.png";
import duckRomain from "../assets/TableauDeChasse/duckRomain.png";
import duckRyan from "../assets/TableauDeChasse/duckRyanair.png";
import duckYohan from "../assets/TableauDeChasse/duckYohan.png";
import github from "../assets/TableauDeChasse/Github.png";
import linkedin from "../assets/TableauDeChasse/LinkedIn.png";

import "../CSS/TableauDeChasse.css";

function TableauDeChasse() {
  // Oce
  const generateRandomPrice1 = () => {
    return (
      Math.floor(Math.random() * (2000000000 - 1000000000 + 1)) + 1000000000
    );
  };
  const prime1 = generateRandomPrice1().toLocaleString("fr-FR");
  // Flo
  const generateRandomPrice2 = () => {
    return (
      Math.floor(Math.random() * (2000000000 - 1000000000 + 1)) + 1000000000
    );
  };
  const prime2 = generateRandomPrice2().toLocaleString("fr-FR");
  // Greg
  const generateRandomPrice3 = () => {
    return (
      Math.floor(Math.random() * (2000000000 - 1000000000 + 1)) + 1000000000
    );
  };
  const prime3 = generateRandomPrice3().toLocaleString("fr-FR");
  // Ryan
  const generateRandomPrice4 = () => {
    return (
      Math.floor(Math.random() * (2000000000 - 1000000000 + 1)) + 1000000000
    );
  };
  const prime4 = generateRandomPrice4().toLocaleString("fr-FR");
  // Cedric
  const generateRandomPrice5 = () => {
    return (
      Math.floor(Math.random() * (2000000000 - 1000000000 + 1)) + 1000000000
    );
  };
  const prime5 = generateRandomPrice5().toLocaleString("fr-FR");
  // Romain
  const generateRandomPrice6 = () => {
    return (
      Math.floor(Math.random() * (2000000000 - 1000000000 + 1)) + 1000000000
    );
  };
  const prime6 = generateRandomPrice6().toLocaleString("fr-FR");
  // Yohan
  const generateRandomPrice7 = () => {
    return (
      Math.floor(Math.random() * (2000000000 - 1000000000 + 1)) + 1000000000
    );
  };
  const prime7 = generateRandomPrice7().toLocaleString("fr-FR");

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
                <a
                  href="https://github.com/ThisIsHowVillainsAreMade"
                  target="_blank"
                >
                  <img src={github} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/oaiw/" target="_blank">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <article className="descriptionWanted">
              <p>
                Dark <span className="nameColor">océane</span>
              </p>
              <p>Prime: {prime1}&nbsp;|||||||7</p>
              <p>
                Crime: impliquée dans le coup d'Etat qui a permis à la dictature
                des canards de renverser la République.
              </p>
              <p>Signe de reconnaissance: parle comme un droïde.</p>
            </article>
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
            <article className="descriptionWanted">
              <p>
                Dark <span className="nameColor">Florian</span>{" "}
              </p>
              <p>Prime: {prime2}&nbsp;|||||||7</p>
              <p>Crime: Capture et vente de twil'ek et de wookies. </p>
              <p>
                Signe de reconnaissance: Possède un accent du sud très prononcé
                lorsqu'il se détend.
              </p>
            </article>
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
            <article className="descriptionWanted">
              <p>
                Dark <span className="nameColor">Gregory</span>{" "}
              </p>
              <p>Prime: {prime3}&nbsp;|||||||7</p>
              <p>Crime: Trafique de cheveux pour financer le coup d'Etat. </p>
              <p>
                Signe de reconnaissance: Absence de plumes sur le haut du crâne,
                présence d'un léger duvet à la place.
              </p>
            </article>
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
            <article className="descriptionWanted">
              <p>
                Dark <span className="nameColor">Ryan</span>{" "}
              </p>
              <p>Prime: {prime4}&nbsp;|||||||7</p>
              <p>
                Crime: Contrebande de Gradients pour financer le nouveau régime.
              </p>
              <p>
                Signe de reconnaissance: il porte très souvent (toujours) un
                casque audio sur sa tête.
              </p>
            </article>
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
            <article className="descriptionWanted">
              <p>
                Dark <span className="nameColor">Cédric</span>
              </p>
              <p>Prime: {prime5}&nbsp;|||||||7</p>
              <p>
                Crime: Kidnapping d'un REACTeur en chef et massacre du REACT.
              </p>
              <p>
                Signe de reconnaissance: il porte un tatouage "(props)" dans le
                dos.
              </p>
            </article>
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
            <article className="descriptionWanted">
              <p>
                Dark <span className="nameColor">Romain</span>{" "}
              </p>
              <p>Prime: {prime6}&nbsp;|||||||7</p>
              <p>
                Crime: Plusieurs centaines de meurtres en série avec la force et
                trafique de drogue
              </p>
              <p>
                Signe de reconnaissance: a toujours une fine couche de ce qui
                semble être de la poudre blanche sur le bec.
              </p>
            </article>
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
            <article className="descriptionWanted">
              <p>
                Dark <span className="nameColor">Yohan</span>
              </p>
              <p>Prime: {prime7}&nbsp;|||||||7</p>
              <p>Crime: a volé plusieurs milliers de culottes de wookies.</p>
              <p>
                Signe de reconnaissance: porte toujours sur lui l'une de ses
                "trouvailles".
              </p>
            </article>
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
