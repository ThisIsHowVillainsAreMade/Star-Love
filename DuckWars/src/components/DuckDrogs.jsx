import React, { useEffect } from 'react';
import '../CSS/DuckDrogs.css';


const DuckDrogs = () => {
	const startEffect = () => {
		document.body.classList.add('animatedComplexInvert');
		setTimeout(() => {
			document.body.classList.add('blinking');
		}, 4000); // Commencer le clignotement après 5 secondes

		setTimeout(() => {
			document.body.classList.remove('animatedComplexInvert');
			document.body.classList.remove('blinking');
		}, 8000); // Durée totale de l'animation
	};

	useEffect(() => {
		return () => {
			// Nettoyer en cas de démontage du composant
			document.body.classList.remove('animatedComplexInvert');
			document.body.classList.remove('blinking');
		};
	}, []);

	return (
		// 	Attention mettre ce code pour appliquer l effet depuis un click sur image plutot qu'un bouton que j ai utilisé pour voir si l effet s appliquait
		//
		// 	<div>
		// 	<img 
		// 		src="...Chemin" Mettre ici le chemin de l'image
		//		alt="Activer l'effet" 
		//		className='..'A definir 
		//		onClick={startEffect}
		//		style={{ cursor: url("DuckWars/public/sabrebleu.png") }} 
		// 		Pour indiquer visuellement que l'image est cliquable
		// 	/>
		// </div>
		<div>
			<button onClick={startEffect}>Activer l'effet</button>
			<img src="/public/Marche-Nuit2.png" className='imageTemp' alt="" />
		</div>
	);
};

export default DuckDrogs;