function CharactSelection ({character , onClick}) {

    return (
        <div id="charactSelection" onClick={() => onClick(character)}>
            <div className='miniature'></div>
            <div className='characters'>{character.name}</div>
        </div>
    )
}

export default CharactSelection