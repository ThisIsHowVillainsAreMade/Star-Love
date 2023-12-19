function CharactInfos () {


    return (
        <div id='infosContainer'>
        <img src={tooMuchHeroes[0].image} alt="Hero" className='charImg'/>
        <div id='cardInfos'>
            <p>name: {tooMuchHeroes[0].name}</p>
            <p>gender: {tooMuchHeroes[0].gender}</p>
            <p>taille: {tooMuchHeroes[0].height}m</p>
            <p>species: {tooMuchHeroes[0].species}</p>
        </div>
    </div>
    )
}

export default CharactInfos