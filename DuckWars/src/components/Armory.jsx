import React, { useState } from 'react';
import '../CSS/Armory.css'
import image1 from '../assets/Armory/weapon-cyberpunk-star-wars-353260766.png';
import image2 from '../assets/Armory/weapon-cyberpunk-star-wars-759990936.png';
import image3 from '../assets/Armory/weapons-cyberpunk-star-wars-407320527.png';
import image4 from '../assets/Armory/weapons-cyberpunk-star-wars-407320527.png';
import image5 from '../assets/Armory/weapons-cyberpunk-star-wars-459974752.png';

const Armory = () => {
	const armes = [
		{
			id: 1,
			nom: "Neuro-Blaster 3000 ",
			src: image1,
			categorie: "Catégorie A",
			prix: "347 650.783",
			informations: "une arme futuriste qui utilise des impulsions duckologiques pour désorienter l'ennemi.",
			puissance: "Élevée"
		},
		{
			id: 2,
			nom: "Pulse Disruptor MK II",
			src: image2,
			categorie: "Catégorie A",
			prix: "452 090.360",
			informations: "Une arme énergétique capable de perturber les marres électromagnétiques et les ducks électroniques.",
			puissance: "Élevée"
		},
		{
			id: 3,
			nom: "Shadowstrike Coincoin",
			src: image3,
			categorie: "Catégorie A",
			prix: "193 765.009",
			informations: "une arme silencieuse et furtive, idéale pour les assassinats discrets dans un bassin calme ou fréquenté.",
			puissance: "Élevée"
		},
		{
			id: 4,
			nom: "Plasma Cutter X9",
			src: image4,
			categorie: "Catégorie B",
			prix: "867 409.90",
			informations: "une arme puissante qui émet un faisceau de plumes concentré, capable de découper presque tout.",
			puissance: "Élevée"
		},
		{
			id: 5,
			nom: "Cybernetic Railgun ZX",
			src: image5,
			categorie: "Catégorie C",
			prix: "110263.865",
			informations: "un railgun avancé intégrant la technologie duckbernétique pour une précision et une puissance accrues.",
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
						<p className='weponDesc'>{armeActive.informations}</p>
						<p className='weaponPrice'>Prix : {armeActive.prix}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Armory;
