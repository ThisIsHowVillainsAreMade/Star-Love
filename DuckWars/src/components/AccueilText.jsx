// import React from 'react'
import "../CSS/AccueilText.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundMusic from "/duckwars.mp3";
import SkipButtonsGenerique from "./SkipButtonsGenerique";

function AccueilText() {
  const navigate = useNavigate();
  let audio;

  useEffect(() => {
    const audio = new Audio(backgroundMusic);
    audio.volume = 0.5; // Ajustez le volume selon vos préférences
    audio.play();

    const timeoutId = setTimeout(() => {
      // Au bout de 2 minutes, changer la page vers /hyperspace
      navigate("/hyperspace");
      audio.pause();
    }, 30 * 1000); // 2 minutes en millisecondes

    // Assurez-vous de nettoyer le timeout lorsque le composant est démonté
    return () => {
      audio.pause();
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  const handleButtonClick = () => {
    if (audio) {
      audio.play();
    }
  };

    return (
      <>
    <div className="accueilContainer">
    <div className="accueilText">
    <div className="scroll-text">
      <h1>STAR DUCKS: QUÊTE D'ESPOIR</h1><br/>
      <h2>Épisode I: L'Ombre des Palmés</h2><br/>
      <p>Dans une galaxie lointaine, très lointaine, une ombre s'étend.</p> 
      <br/><p>DARK QUACK et ses sept Seigneurs Noirs Canards, maîtres de l'obscurité et de la terreur, dominent les étoiles. La République d'antan est désormais un lointain souvenir, engloutie par l'Empire des Canards.</p>
      <br/><p>Les planètes, écrasées sous la palme impériale, pleurent la perte de leur liberté. Leurs ressources sont sauvagement pillées, leurs populations asservies, tout cela pour alimenter la machine de guerre de l'Empire. Mais dans cette ère de désespoir, une lueur d'espoir persiste, portée par un héros improbable.</p>
      <br/><p>LE HERO, brûlant de rage et d'un désir de justice, se dresse seul contre l'empire de l'ombre. Sa mission est de sauver son âme sœur, arrachée à son monde par les sinistres agents de Dark Quack. Son cœur, autrefois plein d'amour et de joie, est maintenant consumé par le feu de la vengeance.</p>
      <br/><p>Armé de son courage et d'une détermination inébranlable, LE HERO se rend sur Nar Shaddaa, la lune infâme des contrebandiers. Ce lieu où les hors-la-loi et les parias règnent en maîtres, devient le théâtre de sa quête désespérée. C'est ici que LE HERO espère trouver les outils et les alliés nécessaires pour défier l'Empire.</p>
      <br/><p>Sur Nar Shaddaa, LE HERO plonge dans les profondeurs du web galactique. Dans les entrailles du réseau, il découvre le Darkweb galactique, une mine d'informations cachées et de ressources interdites…</p>
      {/* <button onClick={handleButtonClick}>Démarrer la musique</button> */}
    </div>
    </div>
  </div>  
  <SkipButtonsGenerique />
    </>
  );
}
export default AccueilText;
