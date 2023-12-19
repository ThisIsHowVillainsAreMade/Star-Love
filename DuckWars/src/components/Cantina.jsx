import React from "react";
import '../CSS/Cantina.css'

function Cantina () {
    console.log("Cantina");

    return (
    <div className="Cantina" >
            <img className="Background" src="/back-no-element.png" alt="marché"/>
            <img className="wookieSexual" src="/string.png" alt="wookie"/>
            <img className = "VenteArmes" src="/weapons-bar.png" alt="armes" />
            <img className="Radio" src="/radio.png" alt="radio" />
            <img className="drug" src="/drug.png" alt="drug" />
            <img className="Wanted" src="/wanted-screen.png" alt="Wanted" />
            <img className="neon" src="/DuckSociety-Neon.png" alt="neon" />
    </div> 
    )
}

export default Cantina;