import React, { useState } from 'react';
// import Bar from ''
import '../CSS/Radio.css'

function Modal({ imageUrl, imgModal, musicUrls }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [mainAudio, setMainAudio] = useState(null);
  const [siteAudioPaused, setSiteAudioPaused] = useState(false);

  useEffect(() => {
    const audio = new Audio('chemin/vers/votre/musique-sur-le-site.mp3'); //chemin pour la musique principale
    setMainAudio(audio);

    return () => {
      audio.pause();
    };
  }, []);

  const handleImageClick = () => {
    if (mainAudio) {
      mainAudio.pause();
      setSiteAudioPaused(true); // Met en pause la musique principale
    }
    setDisplayModal(true);
  };

  const closeModal = () => {
    if (mainAudio && siteAudioPaused) {
      mainAudio.play(); // Rejoue la musique principale
      setSiteAudioPaused(false);
    }
    setDisplayModal(false);
  };

  return (
    <div>
      <img src={imageUrl} alt="Radio" onClick={handleImageClick} />

      {displayModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={imgModal} alt="Bouton radio" className="modal-image" />
            <div className="audio-container">
              {musicUrls.map((musicUrl, index) => (
                <audio key={index} controls autoPlay className="audio-player">
                  <source src={musicUrl} type="audio/mpeg" />
                </audio>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;