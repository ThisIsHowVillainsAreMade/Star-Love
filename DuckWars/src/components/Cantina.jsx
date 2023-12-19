import React from "react";
import '../CSS/Cantina.css'

function Cantina () {
    console.log("Cantina");

    return (
    <div className="Cantina" >
            <img className="Background" src="public/back-no-element.png" alt="marché"/>
            <img className="wookieSexual" src="public/string.png" alt="wookie"/>
            <img className = "VenteArmes" src="public/weapons-bar.png" alt="armes" />
            <img className="Radio" src="public/radio.png" alt="radio" />
            <img className="drug" src="public/drug.png" alt="drug" />
            <img className="Wanted" src="public/wanted-screen.png" alt="Wanted" />
    </div> 
    )
}

export default Cantina;