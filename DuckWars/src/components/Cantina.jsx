import React from "react";
import '../CSS/Cantina.css'

function Cantina () {
    console.log("Cantina");

    return (
    <div className="Cantina" style={{overflow:'hidden', width:'100vw',  height: '100vh'}} >
            <img id="Background" src="public/back-no-element.png" alt="marché"/>
            <img id="wookieSexual" src="public/string.png" alt="wookie"/>
            <img id = "VenteArmes" src="public/weapons-bar.png" alt="armes" />
            <img id="Radio" src="public/radio.png" alt="radio" />
            <img id="drug" src="public/drug.png" alt="drug" />
            <img id="Wanted" src="public/wanted-screen.png" alt="Wanted" />
    </div> 
    )
}

export default Cantina;