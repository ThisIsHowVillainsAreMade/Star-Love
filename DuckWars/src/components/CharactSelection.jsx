function CharactSelection({ character, onClick, isSelected }) {
  return (
    <div
      className={`charactSelection ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(character)}
    >
      <div className='miniature'></div>
      <div className='characters'>{character.name}</div>
    </div>
  );
}

export default CharactSelection;
