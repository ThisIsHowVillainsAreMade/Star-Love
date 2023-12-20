import React, { useEffect } from 'react';
import '../CSS/DuckDrogs.css';

const startEffect = () => {
    document.body.classList.add('animatedComplexInvert');
    setTimeout(() => {
        document.body.classList.add('blinking');
    }, 4000);

    setTimeout(() => {
        document.body.classList.remove('animatedComplexInvert');
        document.body.classList.remove('blinking');
    }, 8000);
};

const DuckDrogs = () => {
    useEffect(() => {
        return () => {
            document.body.classList.remove('animatedComplexInvert');
            document.body.classList.remove('blinking');
        };
    }, []);

    return (
        <div>
            <button onClick={startEffect}>Activer l'effet</button>
            <img src="/public/Marche-Nuit2.png" className='imageTemp' alt="" />
        </div>
    );
};

export { DuckDrogs as default, startEffect };
