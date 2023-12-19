import '../CSS/CharacPage.css'
import CharactSelection from './CharactSelection';
import { useEffect, useState } from 'react';

function CharacPage () {
const [charactTab , setCharactTab] = useState([])


    useEffect (() => {
        fetch("https://raw.githubusercontent.com/Miadil/starwars-api/master/api/all.json")
        .then((res) => res.json())
        .then((data) => setCharactTab(data))
    },[]);
    const tooMuchHeroes = charactTab.slice(0,5)
    console.log(tooMuchHeroes);

    return (
        <div id='CharacPage'>
            <h1 id='choose'>choisis ton personnage</h1>
            <div id="CharacContainer">
                <div id='heroesContainer'>
                {tooMuchHeroes.map((hero , index) => (
                    <CharactSelection key={index} character={hero} />
                ))}  
                </div>
                <div className='charactInfos'>

                </div>
            </div>
        </div>
    )
}


export default CharacPage;