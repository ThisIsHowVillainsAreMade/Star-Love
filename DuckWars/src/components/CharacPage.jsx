import '../CSS/CharacPage.css'
import CharactSelection from './CharactSelection';
import CharactInfos from './CharactInfos';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function CharacPage () {
    const [charactTab , setCharactTab] = useState([])
    useEffect (() => {
        fetch("https://raw.githubusercontent.com/Miadil/starwars-api/master/api/all.json")
        .then((res) => res.json())
        .then((data) => setCharactTab(data))
    },[]);
    const [selectedHero, setSelectedHero] = useState(null);
    const tooMuchHeroes = charactTab.slice(0,5)
    console.log(tooMuchHeroes);
    const handleClick = (hero) => {
      setSelectedHero(hero);
    };
    return (
      <div id='CharacPage'>
        <h1 id='choose'>choisis ton personnage</h1>
        <div id="CharacContainer">
          <div id='heroesContainer'>
            {tooMuchHeroes.map((hero, index) => (
              <CharactSelection key={index} character={hero} onClick={handleClick} />
            ))}
          </div>
          <div className='charactInfos'>
            {selectedHero && <CharactInfos stat={selectedHero} />}
          </div>
        </div>
        {selectedHero && (
          <Link to="/intro">
            <button id='buttonHeroes'>valider</button>
          </Link>
        )}
      </div>
    );
}


export default CharacPage;