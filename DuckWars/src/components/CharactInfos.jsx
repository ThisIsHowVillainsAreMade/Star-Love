function CharactInfos ({stat}) {


    return (
        <div id='infosContainer'>
            <img src={stat.image} alt="Hero" className='charImg'/>
            <div id='cardInfos'>
                <p>name: {stat.name}</p>
                <p>gender: {stat.gender}</p>
                <p>taille: {stat.height}m</p>
                <p>species: {stat.species}</p>
            </div>
        </div>
    )
}

export default CharactInfos