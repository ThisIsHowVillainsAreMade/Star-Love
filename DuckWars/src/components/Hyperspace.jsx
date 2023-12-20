import '../CSS/Hyperspace.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Hyperspace () {
    const navigate = useNavigate();

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        // Au bout de 2 minutes, changer la page vers /hyperspace
        navigate('/bar');
      }, 5 * 1000); // 2 minutes en millisecondes
  
      // Assurez-vous de nettoyer le timeout lorsque le composant est démonté
      return () => clearTimeout(timeoutId);
    }, [navigate]);    
return (
<div className='bodyHyperspace'>
    <div className="container">
            <div className="wrapper">
                <div className="side side-right"></div>
                <div className="side side-left"></div>
                <div className="side side-top"></div>
                <div className="side side-bottom"></div>
                <div className="side side-back"></div>
            </div>
            <div className="wrapper">
                <div className="side side-right"></div>
                <div className="side side-left"></div>
                <div className="side side-top"></div>
                <div className="side side-bottom"></div>
                <div className="side side-back"></div>
            </div>
    </div>
</div>
)
}
export default Hyperspace