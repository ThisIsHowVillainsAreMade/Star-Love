import React, { useState, useEffect } from 'react';
import myMusic from '../assets/stranger-things-124008.mp3';
import '../Css/BackgroundMusic.css';

const useAudio = (url) => {
	// Crée un objet audio et configure ses propriétés initiales
	const [audio] = useState(() => {
		const newAudio = new Audio(url);
		newAudio.loop = true; // Boucle
		newAudio.volume = 0.10; // Volume de base à 0.5%
		return newAudio;
	});
	const [playing, setPlaying] = useState(false); //lecture auto non car bloquée
	const [volume, setVolume] = useState(audio.volume); // Volume
	const [muted, setMuted] = useState(false); // Muet ou pas au chargement page
	const togglePlayback = () => setPlaying(!playing);// Lecture/pause
	const toggleMute = () => setMuted(!muted); // Muet ON/off

	// Lecture / Pause
	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing, audio]);

	// Met à jour le volume de l'audio (trouvé grace a Chat GPT)
	useEffect(() => {
		audio.volume = muted ? 0 : volume;
	}, [volume, muted, audio]);

	// Retour des commandes Play volume et Muted
	return [playing, togglePlayback, volume, setVolume, muted, toggleMute];
};

const BackgroundMusic = () => {
	// contrôles et états (volume)
	const [playing, togglePlayback, volume, setVolume, muted, toggleMute] = useAudio(myMusic);

	// Visuel (Play mute Volume) on peut peut etre juste mettre Play/pause et enlever le volume
	return (
		<div>
			<button onClick={togglePlayback} className='playButton'>
				{playing ? 'Pause' : 'Play'}
			</button>
			<button onClick={toggleMute} className='muteButton'>
				{muted ? 'mute off' : 'mute on'}
			</button>
			{/* <input
				className='imputVolume'
				type="range"
				min="0"
				max="1"
				step="0.01"
				value={volume}
				onChange={(e) => setVolume(parseFloat(e.target.value))}
			/> */}
		</div>
	);
};

export default BackgroundMusic;