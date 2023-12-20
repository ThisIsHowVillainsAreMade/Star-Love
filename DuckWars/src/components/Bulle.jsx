import { useEffect, useState } from "react";
import "../CSS/Bulle.css";
import paroles from "../sentences.json";

function Bulle() {
  const [parolesTab, setParolesTab] = useState([]);
  useEffect(() => {
    setParolesTab(paroles.parolesTab);
  }, []);
  const [currentPhrase, setCurrentPhrase] = useState("");

  // Random une phrase du tableau
  const getRandomPhrase = () => {
    if (parolesTab.length > 0) {
      const randomIndex = Math.floor(Math.random() * parolesTab.length);
      return parolesTab[randomIndex].content;
    }
    return "";
  };

  // Gestionnaire de clic pour la bulle
  const handleBubbleClick = () => {
    const newPhrase = getRandomPhrase();
    setCurrentPhrase(newPhrase);
  };

  return (
    <div className="bubble-container" onClick={handleBubbleClick}>
      <div className="bubble-text">
        {currentPhrase}
        <p className="textToHide">...</p>
      </div>
    </div>
  );
}

export default Bulle;
