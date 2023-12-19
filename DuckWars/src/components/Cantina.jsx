import React from "react";
import '../CSS/Cantina.css'

function Cantina () {
    console.log("Cantina");

    return (
    <div className="Cantina">
        <div className="menus">
        <div className = "wookieSexual">
            <img src="public/wookie.png" alt="wookie"/>
        </div>
        <div className = "Vente">
                <img src="public/canard.png" alt="foieGras" />
        </div>
        <div className = "VenteArmes">
            <img src="public/armes.png" alt="armes" />
        </div>
        <div className = "JetCanard">
            <img src="public/jet duck.png" alt="jetCanard" />
        </div>
        <div className = "Combat">
            <img src="public/combat Duck.png" alt="combat duck" />
        </div>
        <div className = "Radio">
            <img src="public/radio.png" alt="radio" />
        </div>
        </div>
    </div>
     
    )
}

export default Cantina;