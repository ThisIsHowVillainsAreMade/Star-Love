import React, { useState } from 'react';
import '../CSS/Armory.css'

const Armory = () => {
	const armes = [
		{
			id: 1,
			nom: "Arme 1",
			src: "../assets/Armory/weapon-cyberpunk-star-wars-353260766.png",
			categorie: "Catégorie A",
			prix: "347 650.783",
			informations: "Description de l'arme 1",
			puissance: "Élevée"
		},
		{
			id: 2,
			nom: "Arme 2",
			src: "../assets/Armory/weapon-cyberpunk-star-wars-61708700.png",
			categorie: "Catégorie A",
			prix: "452 090.360",
			informations: "Description de l'arme 2",
			puissance: "Élevée"
		},
		{
			id: 3,
			nom: "Arme 3",
			src: "../assets/Armory/weapon-cyberpunk-star-wars-759990936.png",
			categorie: "Catégorie A",
			prix: "193 765.009",
			informations: "Description de l'arme 3",
			puissance: "Élevée"
		},
		{
			id: 4,
			nom: "Arme 4",
			src: "../assets/Armory/weapons-cyberpunk-star-wars-407320527.png",
			categorie: "Catégorie B",
			prix: "867 409.90",
			informations: "Description de l'arme 4",
			puissance: "Élevée"
		},
		{
			id: 5,
			nom: "Arme 5",
			src: "../assets/Armory/weapons-cyberpunk-star-wars-459974752.png",
			categorie: "Catégorie C",
			prix: "110263.865",
			informations: "Description de l'arme 5",
			puissance: "Élevée"
		},
	];

	const [armeActive, setArmeActive] = useState(null);

	const handleArmeClick = (arme) => {
		setArmeActive(arme);
	};

	return (
		<div className="containerArmes">
			<div className="galerie-armes">
				{armes.map(arme => (
					<div key={arme.id} className="arme-bloc" onClick={() => handleArmeClick(arme)}>
						<img src={arme.src} alt={arme.nom} className="weaponArmoryPic" />
					</div>
				))}
			</div>

			{armeActive && (
				<div className="arme-details">
					<div className='conTainerDetArm'>
						<img src={armeActive.src} alt={armeActive.nom} className="image-grande" />
						<h3>{armeActive.nom}</h3>
						<p>{armeActive.informations}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Armory;
