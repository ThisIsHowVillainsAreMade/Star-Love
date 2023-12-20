import "../CSS/Cantina.css";
import "../CSS/DuckDrogs.css";
import React, { useState } from "react";
import { useAudio } from "./BackgroundMusic";
import Bulle from "./Bulle";
import PopUp from "./PopUp";
import TestModal from "./TestModal";

const startEffect = () => {
  document.body.classList.add("animatedComplexInvert");
  setTimeout(() => {
    document.body.classList.add("blinking");
  }, 4000);

  setTimeout(() => {
    document.body.classList.remove("animatedComplexInvert");
    document.body.classList.remove("blinking");
  }, 8000);
};

function Cantina() {
  const [playing, togglePlayback] = useAudio("/stranger-things-124008.mp3");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentId, setModalContentId] = useState("");

  const openModal = (contentId) => {
    setModalContentId(contentId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContentId("");
  };

  return (
    <div className="Cantina">
      <img className="Background" src="/back-no-element.png" alt="marché" />
      <img
        className="wookieSexual"
        src="/string.png"
        alt="wookie"
        onClick={() => openModal("wookiesexuel")}
      />
      <img
        className="VenteArmes"
        src="/weapons-bar.png"
        alt="armes"
        onClick={() => openModal("ventearmes")}
      />
      <img
        className="Radio"
        src="/radio.png"
        alt="radio"
        onClick={togglePlayback}
      />
      <img className="drug" src="/drug.png" alt="drug" onClick={startEffect} />
      <img
        className="Wanted"
        src="/wanted-screen.png"
        alt="Wanted"
        onClick={() => openModal("wanted")}
      />
      <img className="neon" src="/DuckSociety-Neon.png" alt="neon" />
      <Bulle />
      <PopUp />
      <TestModal
        displayModal={isModalOpen}
        closeModal={closeModal}
        contentId={modalContentId}
      />
      <div className="mediaQ"><p>Actuellement, le site web ne bénéficie pas encore d'une adaptation optimale aux petites tailles d'écran, ce qui peut affecter l'expérience utilisateur sur les dispositifs mobiles et les écrans de dimensions réduites</p></div>
    </div>
  );
}

export default Cantina;
