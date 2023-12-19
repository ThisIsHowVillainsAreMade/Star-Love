function CharactSelection ({character}) {
    function handleClick() {
        console.log('✨ Ceci est un clic ✨')
        console.log(character.id);
    }

    return (
        <div id="charactSelection" onClick={handleClick}>
            <div className='miniature'></div>
            <div className='characters'>{character.name}</div>
        </div>
    )
}

export default CharactSelection