import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Age from "./components/Age";
import BackgroundMusic from "./components/BackgroundMusic";
import TableauDeChasse from "./components/TableauDeChasse";
import CharacPage from "./components/characPage";
import Modal from "./components/Modal";
import { useState } from "react";

console.log(`
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡆⣰⠀⡀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣽⣧⣞⡤
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣯⠔
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⡛⠁
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣶⣾⠿⠛⠉⢽⣿⣿⣿⣿⡿⠍⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⡤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠴⠶⠟⠋⠉⠀⠀⢀⣀⣼⣿⣿⣿⠟⠋⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⢹⣷⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠔⠀⠀⠀⠀⠀⠀⣀⠀⠀⢀⣶⣿⠿⠋⠉⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠈⣁⣠⣿⣿⣿⣿⣷⠀⠀⠀⠀⢀⣀⣠⣤⡶⠟⠁⠀⠀⠀⠀⠀⠐⢶⣾⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠈⠻⠿⠋⣠⣷⣿⣿⣿⣿⡟⠷⣤⣀⠀⠀⠀⠀⠀⠀⢠⣾⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣶⣿⣿⣿⣿⣿⣿⣿⣿⠀⠈⠙⠻⢶⣦⣤⣤⣶⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠈⢻⣿⣟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⢰⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡷⣄⠙⠻⠿⠛⠃⠀⠀⠀⠀⠀⠀⢀⣠⣿⣿⠀⢙⠂⠀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠙⢷⣄⠐⢿⣿⣿⣿⣷⣶⣦⣄⣸⣿⣿⠛⠀⠘⣦⡀⠀⠘⢿⣥⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠹⣿⣦⣍⠛⠻⢿⣿⣿⣿⡟⠛⠁⠀⠀⠀⢻⣿⡄⠀⠻⣿⡋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣶⣤⣍⡉⠉⠁⠀⠀⠀⠀⠀⠀⠉⢃⡀⢀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣶⣾⣿⠿⠋⠁⠀⠉⠻⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡄⠉⠙⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡄⠀⠀⠀⠀⠀⢀⣰⣶⡿⠋⠉⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣶⣦⣶⣤⣴⣶⣷⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⠟⠀⠀⢀⠀⢠⣽⣾⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⣿⢿⣿⣿⣧⣠⣤⡌⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠁⠀⠀⣀⣸⣿⣿⣿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⠀⠉⠉⠙⠻⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡟⠀⡀⣠⣾⣿⣿⡿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣟⣰⣼⣿⣿⣿⠿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⡿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠤⠤⠤⢶⣿⣿⣿⣿⡿⣿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠠⠞⠋⣥⠞⠽⠋⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ D U C K W A R S`);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Age />
      </div>
    ),
  },
  {
    path: "/Characters",
    element: <CharacPage />,
  },
  {
    path: "/intro",
    element: <div>generique avec infos perso selectionner </div>,
  },
  {
    path: "/Bar",
    // element:    <modal text={<Armory/>}
                // <modal text={<drogue/>}
                // <modal text={<wookie/>}
                // <modal text= {<radio/>}
                // <modal text={<alcool/>}
  },
  {
    path: "/Test",
    element: <Modal text={<TableauDeChasse />} 
    
    />,
  },
]);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <RouterProvider router={router} />
      <div>
        <img src='https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/530px-Salam%C3%A8che-RFVF.png?20141019213025' onClick={openModal} />
        
        <Modal
          displayModal={isModalOpen}
          closeModal={closeModal}
          text={<TableauDeChasse />}
        />
      </div>
      {/* <div>
        <img src='arme'  onClick={openModal} />
        
        <Modal
          displayModal={isModalOpen}
          closeModal={closeModal}
          text={<Armory />}
        />
      </div> */}
        {/* <div>
        <img src='drogue'  onClick={openModal} />
        
        <Modal
          displayModal={isModalOpen}
          closeModal={closeModal}
          text={<DuckDrogs/>}
        />
      </div> */}
              {/* <div>
        <img src='string'  onClick={openModal} />
        
        <Modal
          displayModal={isModalOpen}
          closeModal={closeModal}
          text={<rencontrewookie />}
        />
      </div> */}
      {/* <div>
        <img src='alcool'  onClick={openModal} />
        
        <Modal
          displayModal={isModalOpen}
          closeModal={closeModal}
          text={<bouteille sur le bar />}
        />
      </div> */}
            {/* <div>
        <img src='radio'  onClick={openModal} />
        
        <Modal
          displayModal={isModalOpen}
          closeModal={closeModal}
          text={<Radio />}
        />
      </div> */}

    </>
  )
}

export default App;
