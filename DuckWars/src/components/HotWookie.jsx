import React, { useState } from 'react';
import '../CSS/HotWookie.css';

const HotWookie = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const articles = [
    {
      title: 'Josiane',
      imgSrc: 'https://imgur.com/p61GI7T.png',
      age: '45 ans',
    },
    {
      title: 'Marcel',
      imgSrc: 'https://i.imgur.com/56AlkDf.png',
      age: '36 ans',
    },
    {
      title: 'Brigitte',
      imgSrc: 'https://i.imgur.com/FmGxVGo.png',
      age: '25 ans',
    },
    {
      title: 'Bernard',
      imgSrc: 'https://i.imgur.com/JH6IpOn.png',
      age: '29 ans',
    },
  ];

  const openModal = () => {
    document.getElementById('carousel-container').style.display = 'flex';
  };

  const closeModal = () => {
    document.getElementById('carousel-container').style.display = 'none';
  };



  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % articles.length;
    if (newIndex !== 0) {
      setCurrentIndex(newIndex);
    }
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + articles.length) % articles.length;
    if (newIndex !== articles.length - 1) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className='hot-wookies'>
      <button onClick={openModal}>ouvrir</button>
      <div id="carousel-container" className="carousel-container">
        
        <button className="carousel-button" onClick={goToPrevSlide}>
          &lsaquo;
        </button>
        <div className="carousel-wrapper">
          <div
            className="carousel-slide-wrapper"
            style={{
              display: 'flex',
              transform: `translateX(${-currentIndex * 20}rem)`,
            }}
          >
            {articles.map((article, index) => (
              <div key={index} className="carousel-slide">
                <article>
                  <h1>{article.title}</h1>
                  <img src={article.imgSrc} alt={article.title} />
                  <div className="description">
                    <p className="age">{article.age}</p>
                  </div>
                </article>
                <p onClick={closeModal} className='closeModal'>Fermer</p>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button" onClick={goToNextSlide}>
          &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default HotWookie;
