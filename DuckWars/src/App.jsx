import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AccueilText from './components/AccueilText.jsx'
import Hyperspace from './components/Hyperspace.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <div>Star Wars</div>
  },
  {
    path: '/Characters',
    element: <div>Choose Characters infos via api</div>
  },
  {
    path: '/intro',
    element:  <AccueilText />
  },
  {
    path: '/hyperspace',
    element: <Hyperspace />
  },
  {
    path: '/Bar',
    element: <div>Page d'interraction</div>
  },
])

function App() {

  return <RouterProvider router={router}/>

}


export default App
