import React from "react";
import "../CSS/Cantina.css";
import "../CSS/DuckDrogs.css";
import { useAudio } from "./BackgroundMusic";
import Bulle from "./Bulle";

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
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const [playing, togglePlayback] = useAudio("/stranger-things-124008.mp3");

  return (
    <div className="Cantina">
      <img className="Background" src="/back-no-element.png" alt="marché" />
      <img className="wookieSexual" src="/string.png" alt="wookie" />
      <img className="VenteArmes" src="/weapons-bar.png" alt="armes" />
      <img
        className="Radio"
        src="/radio.png"
        alt="radio"
        onClick={togglePlayback}
      />
      <img className="drug" src="/drug.png" alt="drug" onClick={startEffect} />
      <img className="Wanted" src="/wanted-screen.png" alt="Wanted" />
      <img className="neon" src="/DuckSociety-Neon.png" alt="neon" />
      <Bulle />
    </div>
  );
}

export default Cantina;
